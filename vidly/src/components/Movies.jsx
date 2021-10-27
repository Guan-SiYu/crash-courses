import React from "react";
import { getMovies } from "../services/fakeMovieService";
const initMovieList = getMovies();
class Movies extends React.Component {
    state = {
        movieList: initMovieList,
    };
    handleDelete = (movie) => {
        const filtered_movieList = this.state.movieList.filter(
            (item) => item._id !== movie._id
        );
        this.setState({ movieList: filtered_movieList });
    };
    render() {
        const movieCount = this.state.movieList.length;
        return (
            <React.Fragment>
                <p>
                    {movieCount
                        ? `Showing ${movieCount} movies in the database`
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
                        {this.state.movieList.map((item, idx) => (
                            <tr key={idx}>
                                <th scope="row">{idx}</th>
                                <td>{item.title}</td>
                                <td>{item.genre.name}</td>
                                <td>{item.numberInStock}</td>
                                <td>{item.dailyRentalRate}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => this.handleDelete(item)}
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
