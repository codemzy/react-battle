var React = require('react');
var Link = require('react-router').Link;

function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

function ConfirmBattle (props) {
    if (props.isLoading === true) {
         return( <p> Loading </p> );
    } else {
        return( 
            <div className="jumbotron col-sm-12 text-center">
                <h1>Confirm Players</h1>
                <div className='container-fluid'>
                  <div className='col-sm-6'>
                    {puke(props.playersInfo[0])}
                  </div>
                  <div className='col-sm-6'>
                    {puke(props.playersInfo[1])}
                  </div>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                  <div className='col-sm-12'>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.initiateBattle}>Initiate Battle!</button>
                  </div>
                  <div className='col-sm-12'>
                    <Link to='/playerOne'>
                      <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                    </Link>
                  </div>
                </div>
              </div>
        );
    }
}

ConfirmBattle.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    initiateBattle: React.PropTypes.func.isRequired
};

module.exports = ConfirmBattle;