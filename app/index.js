

var React = require('react');
var ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return (
      <div> Hello {this.props.name}! </div>
    );
  }
}

ReactDOM.render(<HelloWorld name="Emma" />, document.getElementById('app'));