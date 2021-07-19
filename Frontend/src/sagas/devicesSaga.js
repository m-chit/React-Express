import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { getDevices, postDevice, deleteDevice, editDevice, failedDeviceAction, setFailOnFalse } from "../store/devicesSlice";
import { sagaActions } from "../actions/devicesActions";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export function* fetchDevices() {
  try {
    let result = yield call(() =>
      callAPI({ url: "/api/get", method: "GET" })
    );
    yield put(getDevices(result.data));
  } catch (e) {
    yield put({ type: "FAILED" });
  }
}


export function* addNewDevice(device) {
    try {
      let result = yield call(() =>
        callAPI({ url: "/api/post", method: "POST", data: device.body })
      );
      yield put(postDevice(result.data));
    } catch (e) {
      yield put({ type: "FAILED" });
    }
  }

  export function* removeDevice(id) {
    try {
      let result = yield call(() =>
        callAPI({ url: "/api/delete", method: "DELETE", data: id.body })
      );
      yield put(deleteDevice(result.data));
    } catch (e) {
      yield put({ type: "FAILED" });
    }
  }

  export function* putDevice(device) {
    try {
      let result = yield call(() =>
        callAPI({ url: "/api/put", method: "PUT", data: device.body })
      );
      yield put(editDevice(result.data));
    } catch (e) {
      yield put({ type: "FAILED" });
    }
  }

  export function* failed() {
    yield put(failedDeviceAction());
  }

  export function* clearFail() {
    yield put(setFailOnFalse());
  }


export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DEVICES, fetchDevices);
  yield takeEvery(sagaActions.ADD_NEW_DEVICE, addNewDevice);
  yield takeEvery(sagaActions.DELETE_DEVICE, removeDevice);
  yield takeEvery(sagaActions.EDIT_DEVICE, putDevice);
  yield takeEvery(sagaActions.FAILED, failed);
  yield takeEvery(sagaActions.CLEAR_FAIL, clearFail);
  
}
