import { useSelector } from "react-redux";

import "./Dashboard.scss";
import Device from "../device/Device";
import NewDevicePost from "../newDevicePost/NewDevicePost";
import EditModal from "../editModal/EditModal";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Paginations from "../Paginations/Paginations";
import { usePagination } from "../../Hooks/usePagination";
import { useDevices } from "../../Hooks/useDevices";
import { useShowModal } from "../../Hooks/useShowModal";

const Dashboard = () => {
  const {
    devices,
    deleteDevice,
    editDevice,
    saveChanges,
    closeToggle,
    editedDevice,
    addDevice,
  } = useDevices();
  const { totalPage, actualDevicesOnPage } = usePagination();

  const { show, handleClose, handleShow } = useShowModal(false);

  const isFail = useSelector((state) => state.devices.fail);

  const save = (changedDevice) => {
    saveChanges(changedDevice);
    handleClose();
  };

  const edit = (changedDevice) => {
    handleShow();
    editDevice(changedDevice);
  };

  const renderDevices = (device) => (
    <Device
      key={device.id}
      device={device}
      deleteDevice={deleteDevice}
      editDevice={edit}
    />
  );

  const info =
    "You do not have any devices or something went wrong... Add a new device (or turn on backend)";

  return (
    <div className="Dashboard">
      <div className="Dashboard__devices">
        <div className="Dashboard__devices__list">
          {devices.length === 0
            ? info
            : actualDevicesOnPage.map((device) => renderDevices(device))}
          {show ? (
            <EditModal
              handleClose={handleClose}
              show={show}
              editDevice={edit}
              device={editedDevice}
              save={save}
            ></EditModal>
          ) : null}
        </div>
        <div className="Dashboard__devices__pagination">
          {totalPage > 1 ? <Paginations totalPage={totalPage} /> : null}
        </div>
      </div>

      <div className="Dashboard__submit">
        <NewDevicePost submit={addDevice}></NewDevicePost>

        {isFail ? (
          <ErrorMessage isShowToggle={isFail} closeToggle={closeToggle} />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
