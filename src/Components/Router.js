import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default class Paths extends Component {
    render() {
        return (
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/home" exact element={<Home />}></Route>
                    <Route path="/signup" exact element={<Signup />}></Route>
                    <Route path="/signin" exact element={<Signin />}></Route>
                    <Route path="/about" exact element={<About />}></Route>
                    <Route path="/services" exact element={<Services />}></Route>
                    <Route path="/contact" exact element={<Contact />}></Route>
                </Routes>
        )
    }
}