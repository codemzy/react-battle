var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

class Main extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.props.children}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

module.exports = Main;