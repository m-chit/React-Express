import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const devicesOnPage = 8;

export const usePagination = () => {
  const devices = useSelector((state) => state.devices.allDevices);
  const [actualDevicesOnPage, setActualDevicesOnPage] = useState(
    devices.slice(0, devicesOnPage)
  );

  const activePage = useSelector((state) => state.devices.activePage);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    setTotalPage(Math.ceil(devices.length / devicesOnPage));
    const start = (activePage - 1) * devicesOnPage;
    const end = activePage * devicesOnPage;
    const newDevicesOnPage = devices.slice(start, end);

    setActualDevicesOnPage(newDevicesOnPage);
  }, [activePage, devices]);
  return { totalPage, actualDevicesOnPage, setActualDevicesOnPage };
};
