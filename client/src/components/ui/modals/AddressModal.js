import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Address from "../../../pages/address/Address";
import { useSelector } from "react-redux";
import MySnack from "../MySnack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

export default function AddressModal() {
  const { location } = useSelector((state) => state.features);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button onClick={handleOpen}>
        {location ? "change" : "enter delivery pincode"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Address handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
