var React = require('react');

function ConfirmBattle (props) {
    if (props.isLoading === true) {
         return( <p> Loading </p> );
    } else {
        return( <p> CONFIRM BATTLE! </p> );
    }
}

module.exports = ConfirmBattle;