import { createSlice } from "@reduxjs/toolkit";

const devicesSlice = createSlice({
  name: "devices",
  initialState: {
    allDevices: [],
    fail: false,
    activePage: 1,
  },
  reducers: {
    getDevices: (state = [], action) => {
      state.allDevices = action.payload.devices;
    },
    postDevice: (state, action) => {
      const database = state.allDevices;
      state.allDevices = [...database, action.payload.device];
    },
    deleteDevice: (state, action) => {
      state.allDevices = state.allDevices.filter(
        (device) => device.id !== action.payload.deviceId
      );
    },
    editDevice: (state, action) => {
      const database = state.allDevices.filter(
        (device) => device.id !== action.payload.device.id
      );
      state.allDevices = [...database, action.payload.device];
    },
    failedDeviceAction: (state) => {
      state.fail = true;
    },
    setFailOnFalse: (state) => {
      state.fail = false;
    },
    changeActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const {
  getDevices,
  postDevice,
  deleteDevice,
  editDevice,
  failedDeviceAction,
  setFailOnFalse,
  changeActivePage,
} = devicesSlice.actions;

export default devicesSlice;
