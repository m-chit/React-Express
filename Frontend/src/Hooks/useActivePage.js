import { useDispatch, useSelector } from "react-redux";

import { changeActivePage } from "../services/devicesService";

export const useActivePage = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.devices.activePage);

  const changePage = (newPage) => changeActivePage(dispatch, newPage);
  return { activePage, changePage };
};
