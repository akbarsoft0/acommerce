import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Login from "../../../pages/users/Login";
import { FaUser } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button onClick={handleOpen} className="login-btn">
        <FaUser />
        <span className="d-none d-md-flex">Login</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
