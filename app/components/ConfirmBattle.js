var React = require('react');
var Link = require('react-router').Link;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var styles = require('../styles');
var MainContainer = require('./MainContainer');

function ConfirmBattle (props) {
    if (props.isLoading === true) {
         return ( 
             <MainContainer>
                <p> Loading </p> 
             </MainContainer>
        );
    } else {
        return( 
            <MainContainer>
                <h1>Confirm Players</h1>
                <div className='col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3'>
                  <UserDetailsWrapper header='Player One'>
                    <UserDetails info={props.playersInfo[0]} />
                  </UserDetailsWrapper>
                  <UserDetailsWrapper header='Player Two'>
                    <UserDetails info={props.playersInfo[1]} />
                  </UserDetailsWrapper>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                  <div className='col-sm-12' style={styles.btnSpace}>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.initiateBattle}>Initiate Battle!</button>
                  </div>
                  <div className='col-sm-12' style={styles.btnSpace}>
                    <Link to='/playerOne'>
                      <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                    </Link>
                  </div>
                </div>
              </MainContainer>
        );
    }
}

ConfirmBattle.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    initiateBattle: React.PropTypes.func.isRequired
};

module.exports = ConfirmBattle;