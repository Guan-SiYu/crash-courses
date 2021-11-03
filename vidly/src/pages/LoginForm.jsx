import React from "react";

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!");
    };
    render() {
        return (
            <div>
                <h1>Login Form </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            UserName
                        </label>
                        <input className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
