import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Close, Info } from "@mui/icons-material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Stack sx={{width:400,height:48}}>
      <Dialog onClose={handleClose} open={open}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <Info />
            </IconButton>
            <DialogTitle>¿Estás seguro/a?</DialogTitle>
          </Box>
          <IconButton
            onClick={handleClose}
            sx={{
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <Stack sx={{width:400,height:48, }}>
            <Box>
            <Typography variant="body2">
            Por favor, confirma que deseas eliminar el empleado. Esta acción no
            se puede deshacer.
          </Typography>
            </Box>
        </Stack>
        <DialogActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                marginRight: 1,
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginRight: 2,
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              Editar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

export default function MensajeError() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          "&:focus": {
            outline: "none",
          },
        }}
      >
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
