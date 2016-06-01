var React = require('react');
var Link = require('react-router').Link;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var styles = require('../styles');
var MainContainer = require('./MainContainer');

// start over button component
function StartOver() {
    return (
        <div className='col-sm-12' style={styles.btnSpace}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    );
}

function Results (props) {
    
    // loading
    if (props.isLoading === true) {
         return ( 
             <MainContainer>
                <p> Loading </p> 
             </MainContainer>
        );
    }
    
    // if its a draw
    if (props.isLoading === false && props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a draw!!</h1>
                <div className='col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3'>
                  <UserDetailsWrapper header='Draw'>
                    <UserDetails score={props.scores[0]} info={props.playersInfo[0]} />
                  </UserDetailsWrapper>
                  <UserDetailsWrapper header='Draw'>
                    <UserDetails score={props.scores[1]} info={props.playersInfo[1]} />
                  </UserDetailsWrapper>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                  <StartOver />
                </div>
            </MainContainer> 
        );
    }
    
    // winner and loser
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
            <MainContainer>
                <h1>Results</h1>
                <div className='col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3'>
                  <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                  </UserDetailsWrapper>
                  <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                  </UserDetailsWrapper>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                  <StartOver />
                </div>
            </MainContainer>
  );
}

Results.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    scores: React.PropTypes.array.isRequired
};

module.exports = Results;