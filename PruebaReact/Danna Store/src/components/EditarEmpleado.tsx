import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";


export interface EditarEmpleadoProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function EditarEmpleado(props: EditarEmpleadoProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
      <Dialog onClose={handleClose} open={open}  PaperProps={{sx:{minWidth:'680px'}}}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src="./public/div/div/Ilustraciones.svg"
              alt="icono"
              style={{ width: 52, height: 44 }}
            />
            <Typography>Edición del empleado</Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <Close color="action"/>
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack gap={1}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                id="outlined-basic"
                label="Nombres"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Apellidos"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                id="outlined-basic"
                label="Documento"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Edad"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box  sx={{ display: "flex", gap: 1 }}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Género</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Género"
                size="small"
              >
                <MenuItem value={1}>Masculino</MenuItem>
                <MenuItem value={2}>Femenino</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Género</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Género"
                size="small"
              >
                <MenuItem value={1}>Masculino</MenuItem>
                <MenuItem value={2}>Femenino</MenuItem>
              </Select>
            </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField fullWidth
                id="outlined-basic"
                label="Salario"
                variant="outlined"
                size="small"
              />
               <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Género</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Género"
                size="small"
                sx={{ width: 320 }}

              >
                <MenuItem value={1}>Masculino</MenuItem>
                <MenuItem value={2}>Femenino</MenuItem>
              </Select>
            </FormControl>
            </Box>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "12px,16px",
              gap: 2,
            }}
          >
            <Button variant="text" size="small" onClick={()=>handleClose()}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" size="small" onClick={()=>handleClose()}>
              Guardar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    
  );
}

