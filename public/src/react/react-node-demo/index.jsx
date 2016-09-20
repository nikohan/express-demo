"use strict";
import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

import App from "./Demo.jsx";
import LinkDemo from "./Link/LinkDemo.jsx";
import Target from "./Link/Target.jsx";

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/link-demo" component={LinkDemo}/>
        <Route path="/target" component={Target}/>
    </Router>
), document.getElementById("app"));