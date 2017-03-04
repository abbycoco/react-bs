/**
 * Created by benben on 17/3/3.
 */
const getProvincelist = (province): Action => (dispatch) => {
    dispatch({
        type: 'ADDRESS',
        province: province
    })
}
const getcitylist = (city) => ({
        type: 'ADDRESSCITY',
        city: city
})
const getdiqulist = (diqu) => ({
        type: 'ADDRESSDIQU',
        diqu: diqu
})
const selPro = (province): Action => (dispatch) => {
    dispatch({
        type: 'PROVINCE',
        selpro: province
    })
}
const selcity = (city): Action => (dispatch) => {
    dispatch({
        type: 'CITY',
        selcity: city
    })
}
const seldiqu = (city): Action => (dispatch) => {
    dispatch({
        type: 'DIQU',
        seldiqu: city
    })
}
export {
    getProvincelist,
    selPro,
    getcitylist,
    selcity,
    getdiqulist,
    seldiqu
}