/**
 * Created by benben on 17/3/3.
 */
import React from 'react'
import AddrOption from './AddrOption'
class AddrSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    Selected = (e) => {
        this.props.select(e.target.value)
    }
    shouldComponentUpdate(nextprops) {
        if (nextprops.province != this.props.province) {
            this.props.select(nextprops.province.province[0].name)
        }
        return true;
    }
    render() {
        var options = [];
        if (this.props.province != undefined && this.props.province.length != 0) {
            this.props.province.province.forEach(function (data) {
                options.push(<AddrOption name={data.name} id={data.id}/>)
            }.bind(this));
        }
        return (
            <div>
                <select
                    name="province"
                    ref="province"
                    onChange={this.Selected}
                >
                    {options}
                </select>
            </div>
        )
    }
}

export default AddrSelect