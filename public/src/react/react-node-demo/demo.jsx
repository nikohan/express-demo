"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import "../../../stylesheets/style.css";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                hello world!
            </div>
        );
    }
}


module.exports = App;