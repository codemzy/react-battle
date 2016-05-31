var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

class ConfirmBattleContainer extends React.Component {
    constructor(props, context) {
        super(props);
        context.router;
        this.state = {
            isLoading: true,
            playerInfo: []
        };
    }
    render() {
        return (
          <ConfirmBattle />
        );
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = ConfirmBattleContainer;