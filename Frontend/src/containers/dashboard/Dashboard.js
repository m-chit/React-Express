import { useDispatch, useSelector } from 'react-redux';

import './Dashboard.scss';
import Device from '../device/Device'

import { useEffect } from 'react';
import { postNewDevice, getAllDevices, deleteOneDevice, editOneDevice, setFailOnFalse } from '../../services/devicesService';
//import { createSelector } from 'reselect'; 
import { useState } from 'react'
import NewDevicePost from '../newDevicePost/NewDevicePost';
import uuid from 'react-uuid';
import EditModal from '../editModal/EditModal';
import ErrorMessage from '../errorMessage/ErrorMessage';

const Dashboard = () => {
  const dispatch = useDispatch();
  const devices = useSelector(state => state.devices.allDevices);
  const isFail = useSelector(state => state.devices.fail);

  useEffect(() => {
   getAllDevices(dispatch)
  }, [dispatch])

  const closeToggle = () => {
    setFailOnFalse(dispatch)
  }

  const addDevice = (name, description, disabled) => {
    const newDevice = {
      name: name,
      description: description,
      disabled: disabled,
      id: uuid()
    }
    postNewDevice(dispatch, newDevice)
   
  }

  const deleteDevice = (id) => {
    deleteOneDevice(dispatch, id)
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editedDevice, setEditedDevice] = useState({});

  const editDevice = (device) => {
    handleShow();
    setEditedDevice(device)
  }

  const saveChanges = (changedDevice) => {
    editOneDevice(dispatch, changedDevice)
    handleClose()
  }

  const renderDevices = (device) => 
  <Device 
  key={device.id} 
  device={device} 
  deleteDevice={deleteDevice} 
  editDevice={editDevice}/>

const info = "You do not have any devices or something went wrong... Add a new device (or turn on backend)"

      return (
        <div className="Dashboard"> 
         <div className="Dashboard__list"> 
            { devices.length === 0 ? info : devices.map(device => renderDevices(device)) }
            { show ? <EditModal 
              handleClose={handleClose} 
              show={show} 
              editDevice={editDevice} 
              device={editedDevice} 
              save={saveChanges}>
            </EditModal> : null }
        </div>
        <div className="Dashboard__submit">
          <NewDevicePost submit={addDevice}></NewDevicePost>
          {isFail ? <ErrorMessage isShowToggle={isFail} closeToggle={closeToggle}/> : null }
        </div>
        </div>
      );
}

export default Dashboard;
