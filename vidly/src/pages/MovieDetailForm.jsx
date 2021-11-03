const MovieDetailForm = (props) => {
    return (
        <div>
            <h1>Movie Form {props.match.params.id}</h1>
            <button
                className="btn btn-primary"
                onClick={() => props.history.push("/movie")}
            >
                Save
            </button>
        </div>
    );
};

export default MovieDetailForm;
