import { sagaActions } from "../actions/devicesActions";

export const getAllDevices = dispatch => {
    dispatch({type: sagaActions.FETCH_DEVICES});
}

export const postNewDevice = (dispatch, newDevice) => {
    dispatch({type: sagaActions.ADD_NEW_DEVICE, body: newDevice})

}

export const deleteOneDevice = (dispatch, id) => {
    dispatch({type: sagaActions.DELETE_DEVICE, body: {id: id}});
}

export const editOneDevice = (dispatch, device) => {
    dispatch({type: sagaActions.EDIT_DEVICE, body: device});
}

export const setFailOnFalse = (dispatch) => {
    dispatch({type: sagaActions.CLEAR_FAIL});
}

