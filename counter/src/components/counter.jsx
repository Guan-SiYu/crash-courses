import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log(
            "2-Counter - Constructor",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
    }
    componentDidMount() {
        console.log(
            "2-Counter - Mounted",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
    }
    componentWillUnmount() {
        console.log("2-Counter - Unmount");
    }
    render() {
        console.log(
            "2-Counter - Render",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
        return (
            <div className="row">
                {this.props.children}
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col">
                    <button
                        onClick={() =>
                            this.props.onIncrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm"
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDecrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm m-2"
                        disabled={
                            this.props.counter.number === 0 ? "disabled" : ""
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter)}
                        className="btn btn-danger btn-sm m-2"
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
    getBadgeClasses() {
        let str = "badge m-2 bg-";
        str +=
            this.props.counter.number === 0 ? "warning text-dark" : "primary";
        return str;
    }

    formatCount() {
        const { number } = this.props.counter;
        return number === 0 ? "Zero" : number;
    }
}

export default Counter;
