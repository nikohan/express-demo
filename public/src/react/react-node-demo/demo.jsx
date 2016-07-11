"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import "../../../../public/stylesheets/style.css";

class HelloWorld extends React.Component {
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


module.exports = HelloWorld;