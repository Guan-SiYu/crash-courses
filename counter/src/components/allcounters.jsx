import React, { Component } from "react";
import Counter from "./counter";
class AllCounters extends Component {
    constructor(props) {
        super(props); //必须加这句 不然this.props是undefined
        console.log(
            "1-AllCounter - Constructor",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
    }
    componentDidMount() {
        console.log(
            "1-AllCounter - Mounted",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(
            "1-AllCounter - prevProps :",
            prevProps,
            ",prevState :",
            prevState
        );
        if (prevProps.counterArray.value !== this.props.counterArray.value) {
            // Ajax call and get new data from the server
        }
    }
    render() {
        console.log(
            "1-AllCounter - Render",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
        return (
            <main className="container">
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.props.onReset}
                >
                    Reset
                </button>
                {this.props.counterArray.map((item, idx) => (
                    <Counter
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        key={idx}
                        counter={item}
                        selected
                    >
                        <h4>Counter #{idx + 1}</h4>
                    </Counter>
                ))}
            </main>
        );
    }
}

export default AllCounters;
