import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function MySnack() {
  const { alert } = useSelector((e) => e.features);
  console.log(alert);
  return (
    <>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
      >
        <Alert severity="danger" variant="filled">
          {alert}
        </Alert>
      </Snackbar>
    </>
  );
}

export default MySnack;
