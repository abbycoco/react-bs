/**
 * Created by benben on 17/3/4.
 */
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
        this.props.selteddiqu(e.target.value)
    }

    render() {
        var options = [];
        if (this.props.diqu.diqu != undefined && this.props.diqu.diqu.length != 0) {
            this.props.diqu.diqu.forEach(function (data) {
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