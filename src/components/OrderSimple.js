import React from 'react';
import forms from 'newforms';
import BootstrapForm from 'newforms-bootstrap';
import {addOrder} from '../redux/actions/Order'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
var AMUIReact = require('amazeui-react');
var DateTimeInput = AMUIReact.DateTimeInput;
var {Container, Row, Field} = BootstrapForm;
var ProductForm = forms.Form.extend({
    productName: forms.CharField(),
    tags: forms.CharField(),
    rideType: forms.ChoiceField({
        choices: ['', '车找人', '人找车'],
        label: '类型'
    }),
    startPlace: forms.CharField({label: '出发地'}),
    endPlace: forms.CharField({label: '目的地'}),
    detailDate: forms.CharField({label: '具体时间'}),
    dateinput: forms.CharField({label: '日期'}),
    initialStockLevel: forms.IntegerField({minValue: 0}),
    Price: forms.DecimalField({
        minValue: 0,
        decimalPlaces: 2,
        label: '价格'
    }),
    productDescription: forms.CharField({
        widget: forms.Textarea,
        label: '备注'
    }),
    cleanSku(cb) {
        setTimeout(() => {
            if (this.cleanedData.sku == '12345') {
                return cb(null, 'This SKU is already taken.')
            }
            cb(null)
        }, 1000 + Math.random() * 1000)
    },

    clean: ['productName', 'rideType', function (cb) {
        var {productDescription} = this.cleanedData
        if (productDescription && productDescription.toLowerCase().indexOf('clowns') != -1) {
            throw forms.ValidationError('No clowns!')
        }

        var {productName, rideType} = this.cleanedData
        if (!productName || !rideType) {
            return false
        }
        setTimeout(() => {
            if (productName == 'Widget' && rideType == 'Vendor 1') {
                return cb(null, 'Product Name already exists for Vendor.')
            }
            cb(null)
        }, 1000 + Math.random() * 1000)
    }]
});


class OrderSimple extends React.Component {

    constructor(props) {
        super(props);
    }
    _onSubmit = (refName, e) => {
        if (this.props.usertel === undefined) {
            browserHistory.push('/login')
        }
        console.log(this.refs[refName].getForm().data)
        e.preventDefault()
        this.refs[refName].getForm().validate(() => {})
        this.props.dispatch(addOrder({
                usertel: this.props.usertel,
                price: this.refs[refName].getForm().data.Price,
                endplace: this.refs[refName].getForm().data.endPlace,
                startplace: this.refs[refName].getForm().data.startPlace,
                description: this.refs[refName].getForm().data.productDescription,
                ridetype: this.refs[refName].getForm().data.rideType,
                Date: this.refs['detailDate'].state.value,
                detailDate: this.refs['dateinput'].state.value
        }))
    }

    render() {
        return (

            <div className="container">
                <form
                    onSubmit={this._onSubmit.bind(this, 'productForm')}>
                    <forms.RenderForm form={ProductForm}
                                      ref="productForm">
                        <Container>
                            <Row>
                                <Field name="rideType"
                                       md="12"/>
                            </Row>
                            <Row>
                                <Field name="startPlace"
                                       md="12"/>
                            </Row>
                            <Row>
                                <Field name="endPlace"
                                       md="12"/>
                            </Row>
                            <Row name="detailDate">
                                <DateTimeInput
                                    showTimePicker={false}
                                    format="YYYY-MM-DD"
                                    ref="detailDate"

                                />
                            </Row>
                            <Row name="dateinput">
                                <DateTimeInput
                                    showDatePicker={false}
                                    format="HH:mm"
                                    ref="dateinput"
                                    md="12"
                                />
                            </Row>
                            <Row>
                                <Field name="Price"
                                       md="12"/>
                            </Row>
                            <Row>
                                <Field
                                    name="productDescription"
                                    md="12"/>
                            </Row>

                        </Container>
                    </forms.RenderForm>


                    <div className="container">
                        <div className="row">
                            <div
                                className="col-xs-12 form-group">
                                <button
                                    className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}
const user = (state = [], action) => {
    return state.user.session.phone
}
const mapStateToProps = (state, action) => ({
    usertel: user(state, action)
})
export default connect(mapStateToProps)(OrderSimple)