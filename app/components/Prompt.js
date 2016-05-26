var React = require('react');

class Prompt extends React.Component {
    render() {
        return (
          <div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
            <h1>{this.props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={this.props.submitUser.bind(this)}>
                    <div className="form-group">
                        <input className="form-control" placeholder="Github Username" type="text" value={this.props.username} onChange={this.props.updateUser.bind(this)} />
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

module.exports = Prompt;