import React from "react";
import MovieTable from "./pages/MovieTable";
import { Route, Redirect, Switch } from "react-router-dom";
import Custormers from "./pages/Customers";
import Rentals from "./pages/Rentals";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import MovieDetailForm from "./pages/MovieDetailForm";
import LoginForm from "./pages/LoginForm";
const App = () => {
    return (
        <>
            <NavBar />
            <main className="container">
                <Switch>
                    <Route path="/login" component={LoginForm}></Route>
                    <Route
                        path="/movie/:id"
                        component={MovieDetailForm}
                    ></Route>
                    <Route path="/movie" component={MovieTable}></Route>
                    <Route path="/customers" component={Custormers}></Route>
                    <Route path="/rentals" component={Rentals}></Route>
                    <Route path="/not-found" component={NotFound}></Route>
                    <Redirect from="/" exact to="/movie"></Redirect>
                    <Redirect to="/not-found" />
                </Switch>
            </main>
        </>
    );
};

export default App;
