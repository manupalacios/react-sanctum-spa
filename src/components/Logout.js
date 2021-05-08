import React from "react";
import apiClient from "../services/api";

const Logout = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
                apiClient.post("/logout", {

                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.log(error));
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
};

export default Logout;
