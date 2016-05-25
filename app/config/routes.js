// Router set up
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
// use hashHistory which is default anyway
var hashHistory = ReactRouter.hashHistory;

// Components
var Main = require('../components/Main');
var Home = require('../components/Home');

// Routes
var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path='/playerOne' component={Home} />
        </Route>
    </Router>
);

module.exports = routes;