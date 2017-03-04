/**
 * Created by benben on 17/3/4.
 */
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
        this.props.seltedcity(e.target.value)
    }
    shouldComponentUpdate(nextprops) {
        if (nextprops.city != this.props.city) {
            this.props.seltedcity(nextprops.city.city[0].name)
        }
        return true;
    }
    render() {
        var options = [];
        if (this.props.city.city != undefined && this.props.city.city.length != 0) {
            this.props.city.city.forEach(function (data) {
                options.push(<AddrOption name={data.name} id={data.id}/>)
            }.bind(this));
        }
        return (
            <div>
                <select
                    name="province"
                    id="province"
                    onChange={this.Selected}
                >
                    {options}
                </select>
            </div>
        )
    }
}

export default AddrSelect