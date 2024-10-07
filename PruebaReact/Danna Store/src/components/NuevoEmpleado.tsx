import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";

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
    <Stack>
      <Dialog onClose={handleClose} open={open}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <DialogTitle>Nuevo empleado</DialogTitle>
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
        <Stack sx={{ padding: "3px 55px" }}>
          <Box sx={{ marginBottom: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Info Básica
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
              sx={{ width: 240, paddingRight: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
              sx={{ width: 240, paddingRight: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              size="small"
              variant="outlined"
              sx={{ width: 240 }}
            />
          </Box>

          <Box sx={{ display: "flex", marginTop: 2, marginBottom: 2 }}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
              sx={{ width: 240, paddingRight: 1 }}
            />
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              label="Genero"
              sx={{ width: 240 }}
            >
              <MenuItem value={10}>Soltera</MenuItem>
              <MenuItem value={20}>Casado</MenuItem>
              <MenuItem value={30}>Viudo</MenuItem>
            </Select>

            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              label="Estado Civil"
              sx={{ width: 240 }}
            >
              <MenuItem value={10}>Soltera</MenuItem>
              <MenuItem value={20}>Casado</MenuItem>
              <MenuItem value={30}>Viudo</MenuItem>
            </Select>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 2,
            marginBottom: 2,
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
      </Dialog>
    </Stack>
  );
}

export default function SimpleDialogDemo() {
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
