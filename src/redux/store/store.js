/**
 * Created by benben on 17/2/21.
 */
/* @flow */
import configureStore from '../reducers/configureStore'
import reducer from '../reducers'

const { store, history } = configureStore('', reducer, undefined)

export default store

export { history }