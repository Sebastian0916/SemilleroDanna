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
  SelectChangeEvent,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Empleado } from '../interface/empleado';
import React from "react";

export interface EditarEmpleadoProps {
  open: boolean;
  selectedValue: Empleado;
  onClose: (value: Empleado) => void;
}

export function EditarEmpleado({ open, onClose, selectedValue }: EditarEmpleadoProps) {
  const [salario, setSalario] = React.useState(selectedValue.salario);
  const [tipoContrato, setTipoContrato] = React.useState(selectedValue.tipoContrato);

  const handleClose = () => {
    onClose({ ...selectedValue, salario, tipoContrato });
  };

  const handleSalarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSalario = parseFloat(e.target.value);
    setSalario(newSalario);
  };

  const handleTipoContratoChange = (e: SelectChangeEvent<number>) => {
    const newTipoContrato = e.target.value as number;
    setTipoContrato(newTipoContrato);
  };

  return (
    <Dialog onClose={handleClose} open={open} PaperProps={{ sx: { minWidth: '680px' } }}>
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
          <Close color="action" />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack gap={1}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              label="Nombres"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={selectedValue.nombres}
             
            />
            <TextField
              label="Apellidos"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={selectedValue.apellidos}
              
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              label="Documento"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={selectedValue.documento}
              
            />
            <TextField
              label="Edad"
              variant="outlined"
              size="small"
              disabled
              fullWidth
              value={selectedValue.edad.toString()}
             
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="genero-select-label">Género</InputLabel>
              <Select
                labelId="genero-select-label"
                value={selectedValue.genero}
                readOnly
                size="small"
              >
                <MenuItem value={1}>Masculino</MenuItem>
                <MenuItem value={2}>Femenino</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="estadoCivil-select-label">Estado Civil</InputLabel>
              <Select
                labelId="estadoCivil-select-label"
                value={selectedValue.estadoCivil}
        
                size="small"
              >
                <MenuItem value={1}>Soltero</MenuItem>
                <MenuItem value={2}>Casado</MenuItem>
                <MenuItem value={3}>Viudo</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              label="Salario"
              variant="outlined"
              size="small"
              fullWidth
              value={salario.toString()}
              onChange={handleSalarioChange}
            />
            <FormControl fullWidth>
              <InputLabel id="tipoContrato-select-label">Tipo de Contrato</InputLabel>
              <Select
                labelId="tipoContrato-select-label"
                value={tipoContrato}
                onChange={handleTipoContratoChange}
                size="small"
              >
                <MenuItem value={1}>Definido</MenuItem>
                <MenuItem value={2}>Indefinido</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="contained">Guardar</Button>
      </DialogActions>
    </Dialog>
  );
}
