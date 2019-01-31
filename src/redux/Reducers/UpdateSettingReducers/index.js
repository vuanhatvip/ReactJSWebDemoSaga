import {FETCH_FAILED, FETCH_UPDATE_SETTING, FETCH_UPDATE_SETTING_SUCCESS} from '../../Actions/actionTypes';
const updateSettingReducer = (api = [], action) => {
    switch(action.type){
        case FETCH_FAILED:
            return {error: action.error};
        case FETCH_UPDATE_SETTING_SUCCESS:
            return action.receivedApi;
        default:
            return api;
    }
}
export default updateSettingReducer;