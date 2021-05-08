import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Books from './components/Books';
import Login from './components/Login';
import Logout from "./components/Logout";

const App = () => {
    return (
        <Router>
            <div>
                <NavLink to="/login">Login</NavLink>
                <br />
                <NavLink to="/logout">Logout</NavLink>
                <br />
                <NavLink to="/books">Books</NavLink>
                <br />
            </div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/books" component={Books} />
            </Switch>
        </Router>
    );
}

export default App;
