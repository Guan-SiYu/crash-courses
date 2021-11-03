import React from "react";
import { getGenres } from "../services/fakeGenreService";
class Genre extends React.Component {
    state = {
        genreList: [],
    };
    componentDidMount() {
        const genreList = getGenres();
        genreList.unshift({ _id: undefined, name: "All" });
        this.setState({ genreList });
    }
    render() {
        const { selected_item } = this.props;
        return (
            <ul className="list-group">
                {this.state.genreList.map((item, idx) => (
                    <li
                        className={
                            selected_item === item
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        style={{ cursor: "pointer" }}
                        key={idx}
                        onClick={() => this.props.onGenre(item)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Genre;
