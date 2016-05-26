var React = require('react');

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
        console.log(username);
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
          <div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
            <h1>{this.props.route.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={this._submitUser.bind(this)}>
                    <div className="form-group">
                        <input className="form-control" placeholder="Github Username" type="text" value={this.state.username} onChange={this._updateUser.bind(this)} />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-block btn-success" type="submit">Continue</button>
                    </div>
                </form>
            </div>
          </div>
        );
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = PromptContainer;