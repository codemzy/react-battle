var React = require('react');
var MainContainer = require('./MainContainer');

// add react router
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    );
  }
}

module.exports = Home;