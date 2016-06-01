var React = require('react');
var Link = require('react-router').Link;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');

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
                <div className='col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3'>
                  <UserDetailsWrapper header='Player 1'>
                    <UserDetails info={props.playersInfo[0]} />
                  </UserDetailsWrapper>
                  <UserDetailsWrapper header='Player 2'>
                    <UserDetails info={props.playersInfo[1]} />
                  </UserDetailsWrapper>
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