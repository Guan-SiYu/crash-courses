import React from "react";
import Input from "../common/input";
import Joi from "joi-browser";

class LoginForm extends React.Component {
    username = React.createRef();
    state = {
        account: { username: "", password: "" },
        errors: {},
    };
    schema = {
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .label("名字"),
        password: Joi.string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .label("密码"),
    };
    validate = () => {
        const schema = Joi.object().keys(this.schema);
        const result = Joi.validate(this.state.account, schema, {
            abortEarly: false,
        });
        if (!result.error) return null;
        const errors = {};
        for (let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };
    validateProperty = (ipt_target) => {
        const { name, value } = ipt_target;
        const target_obj = { [name]: value };

        const target_schema = Joi.object().keys({ [name]: this.schema[name] });
        console.log(target_schema);
        const { error } = Joi.validate(target_obj, target_schema);
        return error ? error.details[0].message : null;
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        const ipt_username = this.username.current.value;
        console.log(
            "ref element ->",
            this.username.current,
            "ref value ->",
            ipt_username
        );
    };

    handleChange = (e) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(e.currentTarget);
        if (errorMessage) errors[e.currentTarget.name] = errorMessage;
        else delete errors[e.currentTarget.name];

        const account = { ...this.state.account };
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account, errors });
    };
    componentDidMount() {
        this.username.current.focus();
    }
    render() {
        const { account, errors } = this.state;
        return (
            <div>
                <h1>Login Form </h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Username"
                        iptref={this.username}
                        onChange={this.handleChange}
                        error={this.state.errors.username}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        label="Password"
                        iptref={this.username}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
