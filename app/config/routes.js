// Router set up
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// Components
var Main = require('../components/Main');
var Home = require('../components/Home');

// Routes
var routes = (
    <Router> 
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path='/playerOne' component={Home} />
        </Route>
    </Router>
);

module.exports = routes;