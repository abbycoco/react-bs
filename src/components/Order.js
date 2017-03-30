/**
 * Created by benben on 17/3/4.
 */
import React from 'react'
import {DatePicker} from 'material-ui';
import Address from './Address'
class Order extends React.Component {
    constructor(props) {
        super(props);
        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);

        this.state = {
            minDate: minDate,
            maxDate: maxDate,
            autoOk: false,
            disableYearSelection: false,
        };
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleChangeMinDate = (event, date) => {
        this.setState({
            minDate: date,
        });
    };

    handleChangeMaxDate = (event, date) => {
        this.setState({
            maxDate: date,
        });
    };

    render() {
        return (
            <div>
                {/* 司机，时间，出发地，目的地，车型，可乘人数，车型，电话，费用*/}
                <form onSubmit={this.submitHandler} ref="newform">
                    <DatePicker
                        onChange={this.handleChangeMinDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="Min Date"
                        defaultDate={this.state.minDate}
                        disableYearSelection={this.state.disableYearSelection}
                    />
                    <div style={{height: '20px'}}></div>
                    <lable name="start">出发地</lable>
                    <Address/>
                    <lable name="finish">目的地</lable>
                    <Address/>
                    <lable name="number">可乘人数</lable>
                    <input type="text" name="number" />
                    <lable name="tel">联系电话</lable>
                    <input type="text" name="tel" />
                    <lable name="money">费用</lable>
                    <input type="text" name="money" />
                    <input type="submit" value="提交"/>
                </form>
            </div>)
    }
}
export default Order