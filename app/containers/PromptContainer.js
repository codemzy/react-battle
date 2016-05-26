var React = require('react');
var Prompt = require('../components/Prompt');

class PromptContainer extends React.Component {
    constructor(props, context) {
        super(props);
        context.router;
        this.state = {
            username: ''
        };
    }
    
    _updateUser(e) {
        this.setState({
           username: e.target.value 
        });
        
    }
    
    _submitUser(e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
           username: ''
        });
        // decide where to go next
        if (this.props.routeParams.playerOne) {
            // if we have a player one route param go to battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: username
                }
            });
        } else {
            // if not then go to player two
            this.context.router.push('/playerTwo/' + username);
        }
    }
    
    render() {
        return (
          <Prompt submitUser={this._submitUser.bind(this)} updateUser={this._updateUser.bind(this)} header={this.props.route.header} username={this.state.username} />
        );
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = PromptContainer;