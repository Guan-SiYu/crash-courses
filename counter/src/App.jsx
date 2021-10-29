import React, { Component } from "react";
import AllCounters from "./components/allcounters";
import NavBar from "./components/navbar";
class App extends Component {
    constructor(props) {
        super(props);
        console.log(
            "App - Constructor",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
    }
    state = {
        counterArray: [
            { id: 1, number: 0 },
            { id: 2, number: 3 },
            { id: 3, number: 0 },
            { id: 4, number: 6 },
        ],
    };
    componentDidMount() {
        console.log(
            "App - Mounted",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
    }
    handleReset = () => {
        const counterArray = this.state.counterArray.map((item) => ({
            ...item,
            number: 0,
        }));
        this.setState({ counterArray });
    };
    handleIncrement = (targetCounter) => {
        const counterArray = [...this.state.counterArray];
        const idx = counterArray.indexOf(targetCounter);
        counterArray[idx] = { ...targetCounter };
        counterArray[idx].number += 1;
        this.setState({ counterArray });
    };
    handleDecrement = (targetCounter) => {
        const counterArray = [...this.state.counterArray];
        const idx = counterArray.indexOf(targetCounter);
        counterArray[idx] = { ...targetCounter };
        counterArray[idx].number -= 1;
        this.setState({ counterArray });
    };
    handleDelete = (targetCounter) => {
        const counterArray = this.state.counterArray.filter(
            (item) => item.id !== targetCounter.id
        );
        this.setState({ counterArray });
    };
    render() {
        console.log(
            "App - Rendered",
            ",this.props->",
            this.props,
            ",this.state->",
            this.state
        );
        return (
            <React.Fragment>
                <NavBar
                    counterTotal={
                        this.state.counterArray.filter(
                            (item) => item.number !== 0
                        ).length
                    }
                />
                <AllCounters
                    counterArray={this.state.counterArray}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            </React.Fragment>
        );
    }
}

export default App;
