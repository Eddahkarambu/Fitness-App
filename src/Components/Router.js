import React, { Component } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import History from './History';

export default class Paths extends Component {
    render() {
        return (
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/home" exact element={<Home />}></Route>
                    <Route path="/signup" exact element={<Signup />}></Route>
                    <Route path="/signin" exact element={<Signin />}></Route>
                </Routes>
        )
    }
}