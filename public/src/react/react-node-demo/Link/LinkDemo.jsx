"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router';
import "../../../../stylesheets/style.css";

export default class LinkDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/target">target</Link></li>
                </ul>
            </div>
        );
    }
}
