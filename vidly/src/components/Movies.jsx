import React from "react";
import Like from "./Like";
class Movies extends React.Component {
    render() {
        const { tableData, onLike, onDelete, pagination } = this.props;

        // filtering:
        // paginating:
        const { pageIdx, perPageSize } = pagination;
        const pagedMovieList = tableData.slice(
            pageIdx * perPageSize,
            pageIdx * perPageSize + perPageSize
        );

        return (
            <React.Fragment>
                <p>
                    {tableData.length
                        ? `Showing ${tableData.length} movies in the database`
                        : `There are no movies in the database`}
                </p>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Operator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagedMovieList.map((item, idx) => (
                            <tr key={idx}>
                                <th scope="row">{idx}</th>
                                <td>{item.title}</td>
                                <td>{item.genre.name}</td>
                                <td>{item.numberInStock}</td>
                                <td>{item.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        isLiked={item.isLiked}
                                        onLike={onLike(item)}
                                    />
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => onDelete(item)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;
