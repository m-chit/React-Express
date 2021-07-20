import { useState } from "react";

export const useShowModal = (initShow) => {
  const [show, setShow] = useState(initShow);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return { show, handleClose, handleShow };
};
