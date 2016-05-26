var React = require('react');

function Prompt (props) {
        return (
          <div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.submitUser}>
                    <div className="form-group">
                        <input className="form-control" placeholder="Github Username" type="text" value={props.username} onChange={props.updateUser} />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-block btn-success" type="submit">Continue</button>
                    </div>
                </form>
            </div>
          </div>
        );
}

Prompt.propTypes = {
    header: React.PropTypes.string.isRequired,
    updateUser: React.PropTypes.func.isRequired,
    submitUser: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired
};

module.exports = Prompt;