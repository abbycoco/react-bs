/**
 * Created by benben on 17/2/25.
 */
import React from 'react'
import {connect} from 'react-redux'
import AddrSelect from './addrSelect'
import Selcity from './selcity'
import Seldiqu from './seldiqu'
import Addrdress from './addressjson'
import {selPro, selcity, seldiqu} from '../redux/actions/Address'
import {getProvincelist, getcitylist, getdiqulist} from '../redux/actions/Address'
class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            province: '',
            city: '',
            diqu: ''
        }
    }
    componentDidMount() {

    }
    select = (e) => {
        this.props.selpro(e);
        let cities = [];
        this.setState({
            province: e
        })
        let a = Addrdress.filter(province => {
            return province.name == e
        })
        a[0].child.map(city => {
            cities.push({name: city.name, id: city.id})
        })
        this.props.addrcity(cities)
    }
    selteddiqu = (e) => {
        this.setState({
            diqu: e
        })
        this.props.selteddiqu(e);
    }
    seltedcity = (e) => {
        this.setState({
            city: e
        })
        this.props.seltedcity(e);
        let diqu = [];
        let a = Addrdress.filter(province => {
            return province.name === this.props.selprovince.selpro
        });
        let b = a[0].child.filter(city => {
            return city.name === e
        })
        b[0].child.map(city => {
            diqu.push({name: city.name, id: city.id})
        })
        this.props.addrdiqu(diqu)
    }
    address = () => {
        let provinces = [];
        Addrdress.map(province => {
            provinces.push({name: province.name, id: province.id})
        })
        this.props.addrpro(provinces);
    }
    componentDidMount() {
        this.address();
    }

    render() {
        return (
            <div>
                <AddrSelect
                    province={this.props.province}
                    select={this.select}
                />
                <Selcity
                    city={this.props.selcity}
                    seltedcity={this.seltedcity}
                />
                <Seldiqu
                    diqu={this.props.seldiqu}
                    selteddiqu={this.selteddiqu}
                />
            </div>
        )
    }
}
const provincelist = state => {
    return state.address;
}
const province = state => {
    return state.sel;
}
const city = state => {
    return state.addresscity;
}
const diqu = state => {
    return state.addressdiqu;
}
const mapStateToProps = state => ({
    province: provincelist(state),
    selprovince: province(state),
    selcity: city(state),
    seldiqu: diqu(state)
})
const mapDispatchToProps = dispatch => {
    return {
        addrpro: (province) => {
            dispatch(getProvincelist(province))
        },
        selpro: (province) => {
            dispatch(selPro(province))
        },
        addrcity: (cities) => {
            dispatch(getcitylist(cities))
        },
        seltedcity: (city) => {
            dispatch(selcity(city))
        },
        selteddiqu: (city) => {
            dispatch(seldiqu(city))
        },
        addrdiqu: (diqu) =>{
            dispatch(getdiqulist(diqu))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Address)
