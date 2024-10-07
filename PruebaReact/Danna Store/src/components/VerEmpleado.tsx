import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Stack,
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
            
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="./public/div/div/Ilustraciones.svg"
              alt="icono"
              style={{ width: 52, height: 44, marginRight: 2,marginLeft:8 ,marginTop:1 }}
            />
            <DialogTitle>Información del empleado</DialogTitle>
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

        <Stack sx={{ padding: "3px 55px" ,marginTop:1.3}}>

          <Box sx={{ display: "flex" }}>
            <Typography variant="caption" sx={{ width: 240 }}>
              Nombres:<Typography variant="body2">Daniel</Typography>
            </Typography>

            <Typography variant="caption" sx={{ width: 240 }}>
              Apellidos:<Typography variant="body2">Rueda Walteros</Typography>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", marginTop: 1, marginBottom: 0.5 }}>
            <Typography variant="caption" sx={{ width: 240 }}>
              Documento: <Typography variant="body2">123456789</Typography>
            </Typography>

            <Typography variant="caption" sx={{ width: 240 }}>
              Edad: <Typography variant="body2">19</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: 1, marginBottom: 0.5 }}>
            <Typography variant="caption" sx={{ width: 240 }}>
              Estado civil: <Typography variant="body2">Casado</Typography>
            </Typography>

            <Typography variant="caption" sx={{ width: 240 }}>
              Genero: <Typography variant="body2">Indefinido</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: 1, marginBottom: 0.5 }}>
            <Typography variant="caption" sx={{ width: 240 }}>
              Salario:<Typography variant="body2">13000000</Typography>
            </Typography>

            <Typography variant="caption" sx={{ width: 240 }}>
              Tipo de contrato:{" "}
              <Typography variant="body2">Indeindo</Typography>
            </Typography>
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
