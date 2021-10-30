import React, { Component } from "react";
import Movies from "./components/Movies";
import Navigation from "./components/Pagination";
import { getMovies } from "./services/fakeMovieService";
class App extends Component {
    constructor(props) {
        super(props);
        const rawData = getMovies();
        rawData.forEach((item) => (item.isLiked = false));
        this.state.movieList = rawData;
    }
    state = {
        movieList: [],
        pages: [1, 2, 3],
        pagination: {
            pageIdx: 0,
            perPageSize: 3,
        },
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
    render() {
        return (
            <main className="container">
                <Movies
                    tableData={this.state.movieList}
                    pagination={this.state.pagination}
                    onDelete={this.handleDelete}
                    onLike={this.handleLike}
                />
                <Navigation
                    pages={this.state.pages}
                    onPaginate={this.handlePaginate}
                    pagination={this.state.pagination}
                    allDataCount={this.state.movieList.length}
                />
            </main>
        );
    }
}

export default App;
