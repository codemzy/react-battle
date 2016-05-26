var React = require('react');

// add react router
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class Home extends React.Component {
  render() {
    return (
      <div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
        <h1>Github Battle</h1>
        <p className="lead">Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    );
  }
}

module.exports = Home;