/**
 * Created by benben on 17/3/3.
 */
var React = require('react');

var AddrOption = React.createClass({
    render: function() {
        return (
            <option
                value = {this.props.name}
            >
                {this.props.name}
            </option>
        );
    }
});


module.exports = AddrOption;