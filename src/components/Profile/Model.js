/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import Icon from "@mui/material/Icon";

const Input = styled("input")({
  display: "none",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Icon>edit</Icon>
        edit Profile
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Fill the form
            </Typography>

            <ValidationTextFields />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export function ValidationTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined" label="Full Name" defaultValue="" />
      <TextField
        id="outlined-helper-text"
        label="Mobile Number"
        defaultValue=""
        helperText="+94 7xx-xxx-xxx"
      />
      <TextField
        id="outlined-helper-text"
        label="Email"
        defaultValue=""
        helperText="sample@xyz.com"
      />
      <TextField
        id="outlined-error-helper-text"
        label="Location"
        defaultValue=""
        helperText="Eg: Colombo"
      />

      <UploadButtons />
    </Box>
  );
}

export function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
          <PhotoCamera />
        </Button>
      </label>
      <Button variant="contained" startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button color="secondary" variant="contained" startIcon={<RestartAltIcon />}>
        Reset
      </Button>
    </Stack>
  );
}
