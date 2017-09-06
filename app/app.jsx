var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
    jQuery(document).ready(function($) {
        $(document).foundation();
});

// Load app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="timer" component={Timer}/>
            <Route path="countdown" component={Countdown}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
