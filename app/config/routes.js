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
// Containers
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');

// Routes
var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path='/playerOne' header='Player One' component={PromptContainer} />
            <Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='/battle' header='Battle' component={ConfirmBattleContainer} />
            <Route path='/results' header='Results' component={ResultsContainer} />
        </Route>
    </Router>
);

module.exports = routes;