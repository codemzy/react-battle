var React = require('react');
var MainContainer = require('./MainContainer');

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.originalText = this.props.text;
        this.state = {
            text: this.originalText
        };
    }
    
    componentDidMount() {
        var stopper = this.originalText + '...';
        this.interval = setInterval(function() {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.originalText
                });
            } else {
                this.setState({
                   text: this.state.text + '.' 
                });
            }
        }.bind(this), 200);

    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
          <MainContainer>
            <p className="lead">{this.state.text}</p>
          </MainContainer>
        );
    }
}

Loading.propTypes = {
    text: React.PropTypes.string
};

Loading.defaultProps = {
    text: 'Loading'
};

module.exports = Loading;