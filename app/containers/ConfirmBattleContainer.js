var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

class ConfirmBattleContainer extends React.Component {
    constructor(props, context) {
        super(props);
        context.router;
        this.state = {
            isLoading: true,
            playersInfo: []
        };
    }
    
    componentDidMount() {
        let query = this.props.location.query;
        // Fetch info from github then update state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function(players) {
                this.setState({
                   isLoading: false,
                   playersInfo: [players[0], players[1]]
                });
            }.bind(this));
    }
    
    render() {
        return (
          <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />
        );
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = ConfirmBattleContainer;