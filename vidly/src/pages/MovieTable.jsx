import React, { Component } from "react";
import Movies from "../components/Movies";
import Navigation from "../components/Pagination";
import Genre from "../components/Genre";
import { getMovies } from "../services/fakeMovieService";
import _ from "lodash";

class MovieTable extends Component {
    constructor(props) {
        super(props);
        const rawData = getMovies();
        rawData.forEach((item) => (item.isLiked = false));
        this.state.movieList = rawData;
    }
    state = {
        movieList: [],
        pagination: {
            pageIdx: 0,
            perPageSize: 3,
        },
        sortConfig: {
            path: "",
            order: "asc",
        },
        selected_genre: {},
    };

    handleDelete = (movie) => {
        const filtered_movieList = this.state.movieList.filter(
            (item) => item._id !== movie._id
        );
        this.setState({ movieList: filtered_movieList });
    };
    handleLike = (tgtMovie) => (tgtFlag) => {
        const movieList = [...this.state.movieList];
        const tgtIdx = this.state.movieList.indexOf(tgtMovie);
        movieList[tgtIdx] = { ...tgtMovie };
        movieList[tgtIdx].isLiked = tgtFlag;
        this.setState({ movieList });
    };
    handlePaginate = (pageIdx) => {
        const pagination = { ...this.state.pagination, pageIdx };
        this.setState({ pagination });
    };
    handleGenreSelect = (selected_item) => {
        const pagination = { ...this.state.pagination };
        pagination.pageIdx = 0;
        this.setState({ selected_genre: selected_item, pagination });
    };
    handleSort = (sortConfig) => {
        this.setState({ sortConfig });
    };

    render() {
        const { selected_genre, pagination, movieList, sortConfig } =
            this.state;
        const { pageIdx, perPageSize } = pagination;
        // filtering:
        const filtered_movieList = selected_genre._id
            ? movieList.filter((item) => item.genre._id === selected_genre._id)
            : movieList;
        // sorting:
        const sorted_movieList = _.orderBy(
            filtered_movieList,
            [sortConfig.path],
            [sortConfig.order]
        );
        // paginating:
        const paginated_movieList = sorted_movieList.slice(
            pageIdx * perPageSize,
            pageIdx * perPageSize + perPageSize
        );

        return (
            <>
                <div className="row">
                    <div className="col-2">
                        <Genre
                            selected_item={this.state.selected_genre}
                            onGenre={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        {/* 当用户被导航离开了页面然后再回来，我们希望页面渲染的排序和离开前对一样，所以将sortColumn传入moviesTable非常有意义 */}
                        <Movies
                            tableData={paginated_movieList}
                            pagination={this.state.pagination}
                            genre={this.state.selected_genre}
                            onDelete={this.handleDelete}
                            onLike={this.handleLike}
                            onSort={this.handleSort}
                            sortConfig={sortConfig}
                        />
                    </div>
                </div>

                <Navigation
                    onPaginate={this.handlePaginate}
                    pagination={this.state.pagination}
                    allDataCount={filtered_movieList.length}
                />
            </>
        );
    }
}

export default MovieTable;
