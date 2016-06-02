var React = require('react');

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.originalText = 'Loading';
        this.state = {
            text: 'Loading'
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
        }.bind(this), 300);

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

module.exports = Loading;