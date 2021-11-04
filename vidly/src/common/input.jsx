import React from "react";
const Input = ({ name, label, value, onChange, iptref, error }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                ref={iptref}
                value={value}
                onChange={onChange}
                name={name}
                className="form-control"
                id={name}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
