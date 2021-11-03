import React from "react";
import Like from "./Like";
import { Link } from "react-router-dom";
class Movies extends React.Component {
    raiseSort = (path) => {
        const sortConfig = { ...this.props.sortConfig };
        if (sortConfig.path === path) {
            sortConfig.order = sortConfig.order === "asc" ? "desc" : "asc";
        } else {
            sortConfig.path = path;
            sortConfig.order = "asc";
        }
        this.props.onSort(sortConfig);
    };
    render() {
        const { tableData, onLike, onDelete } = this.props;

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
                            <th
                                scope="col"
                                onClick={() => this.raiseSort("title")}
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                onClick={() => this.raiseSort("genre.name")}
                            >
                                Genre
                            </th>
                            <th
                                scope="col"
                                onClick={() => this.raiseSort("numberInStock")}
                            >
                                Stock
                            </th>
                            <th
                                scope="col"
                                onClick={() =>
                                    this.raiseSort("dailyRentalRate")
                                }
                            >
                                Rate
                            </th>
                            <th scope="col">Operator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, idx) => (
                            <tr key={idx}>
                                <th scope="row">{idx}</th>
                                <td>
                                    <Link to={`/movie/${item._id}`}>
                                        {item.title}
                                    </Link>
                                </td>
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
