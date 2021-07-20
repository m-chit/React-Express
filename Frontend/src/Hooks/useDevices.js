import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  postNewDevice,
  getAllDevices,
  deleteOneDevice,
  editOneDevice,
  setFailOnFalse,
} from "../services/devicesService";

import uuid from "react-uuid";

export const useDevices = () => {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices.allDevices);
  const [editedDevice, setEditedDevice] = useState({});

  const addDevice = (name, description, disabled) => {
    const newDevice = {
      name: name,
      description: description,
      disabled: disabled,
      id: uuid(),
    };
    postNewDevice(dispatch, newDevice);
  };

  const deleteDevice = (id) => {
    deleteOneDevice(dispatch, id);
  };

  const editDevice = (device) => {
    setEditedDevice(device);
  };

  const saveChanges = (changedDevice) => {
    editOneDevice(dispatch, changedDevice);
  };

  const closeToggle = () => {
    setFailOnFalse(dispatch);
  };

  useEffect(() => {
    getAllDevices(dispatch);
  }, [dispatch]);

  return {
    devices,
    deleteDevice,
    editDevice,
    saveChanges,
    closeToggle,
    editedDevice,
    addDevice,
  };
};
