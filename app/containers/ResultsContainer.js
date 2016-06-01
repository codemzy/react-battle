var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

class ResultsContainer extends React.Component {
    constructor(props, context) {
        super(props);
        context.router;
        this.state = {
            isLoading: true,
            scores: []
        };
    }
    
    componentDidMount() {
        console.log(this.props.location.state.playersInfo);
        // Fetch scores from githubHelpers then update state
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function(scores) {
                this.setState({
                   isLoading: false,
                   scores: scores
                });
            }.bind(this));
    }
 
    render() {
        return (
          <Results isLoading={this.state.isLoading} scores={this.state.scores} playersInfo={this.props.location.state.playersInfo} />
        );
    }
}

module.exports = ResultsContainer;