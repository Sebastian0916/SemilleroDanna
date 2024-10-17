import { useState } from 'react';
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
import { Empleado } from '../interface/empleado';
import { SelectChangeEvent } from '@mui/material/Select';
import { ToastNotification } from '@sinco/react';

export interface NuevoEmpleadoProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: Empleado | null) => void;
}

export function NuevoEmpleado({ onClose, open }: NuevoEmpleadoProps) {
  const [empleados, setEmpleados] = useState({
    nombres: '',
    apellidos: '',
    documento: '',
    edad: 0,
    salario: 0,
    genero: 0,
    estadoCivil: 0,
    tipoContrato: 0,
  });

  const [errors, setErrors] = useState({
    nombres: false,
    apellidos: false,
    documento: false,
    edad: false,
    salario: false,
    genero: false,
    estadoCivil: false,
    tipoContrato: false,
  });

  const [toastVisible, setToastVisible] = useState(false); 

  const handleClose = () => {
    onClose(null);
  };

  const handleGuardar = () => {
    const nuevosErrores = {
      nombres: !empleados.nombres.trim(),
      apellidos: !empleados.apellidos.trim(),
      documento: !empleados.documento.trim() || !/^\d{10}$/.test(empleados.documento),
      edad: empleados.edad < 18, 
      salario: empleados.salario < 900000,
      genero: empleados.genero <= 0,
      estadoCivil: empleados.estadoCivil <= 0,
      tipoContrato: empleados.tipoContrato <= 0,
    };

    setErrors(nuevosErrores);

    const hayErrores = Object.values(nuevosErrores).some(error => error);

    if (!hayErrores) {
      onClose({ ...empleados });
      setToastVisible(true); 
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (field === 'documento') {
      if (!/^\d{0,10}$/.test(value)) {
        return;
      }
    }

    setEmpleados({ ...empleados, [field]: value });

    setErrors((prev) => ({
      ...prev,
      [field]:
        field === 'salario'
          ? (parseFloat(value) < 900000)
          : (field === 'edad'
            ? (parseInt(value) < 18)  
            : (!value.trim() && field !== 'documento' ? true : (field === 'documento' && !/^\d{10}$/.test(value)))),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSelectChange = (field: string) => (e: SelectChangeEvent<number>) => {
    setEmpleados({ ...empleados, [field]: Number(e.target.value) }); // Convertir a number

 
    setErrors((prev) => ({
      ...prev,
      [field]: !e.target.value,
    }));
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={open}
        PaperProps={{ sx: { minWidth: "680px" } }}
      >
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
            <Typography>Información del empleado</Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <Close color="action" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack gap={1} padding={"12px 16px 8px 16px"}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                label="Nombres"
                variant="outlined"
                size="small"
                fullWidth
                value={empleados.nombres}
                onChange={handleChange('nombres')}
                error={errors.nombres}
                helperText={errors.nombres && !empleados.nombres.trim() ? "Este campo es requerido" : ""}
              />
              <TextField
                label="Apellidos"
                variant="outlined"
                size="small"
                fullWidth
                value={empleados.apellidos}
                onChange={handleChange('apellidos')}
                error={errors.apellidos}
                helperText={errors.apellidos && !empleados.apellidos.trim() ? "Este campo es requerido" : ""}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                label="Documento"
                variant="outlined"
                size="small"
                fullWidth
                value={empleados.documento}
                onChange={handleChange('documento')}
                onKeyPress={handleKeyPress}
                error={errors.documento}
                helperText={errors.documento ? "Debe contener exactamente 10 dígitos" : ""}
              />
              <TextField
                label="Edad"
                variant="outlined"
                size="small"
                fullWidth
                value={empleados.edad}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (!isNaN(value)) {
                    setEmpleados({ ...empleados, edad: value });
                    setErrors((prev) => ({
                      ...prev,
                      edad: value < 18,
                    }));
                  }
                }}
                error={errors.edad}
                helperText={errors.edad ? "La edad debe ser mínima 18 años" : ""}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <FormControl fullWidth error={errors.genero}>
                <InputLabel id="genero-select-label">Género</InputLabel>
                <Select  
                  labelId="genero-select-label"
                  value={empleados.genero}
                  onChange={handleSelectChange('genero')}
                  size="small"
                >
                  <MenuItem value="">
                    <em>Seleccione una opción</em>
                  </MenuItem>
                  <MenuItem value={1}>Masculino</MenuItem>
                  <MenuItem value={2}>Femenino</MenuItem>
                </Select>
                {errors.genero && <Typography color="error">Este campo es requerido</Typography>}
              </FormControl>

              <FormControl fullWidth error={errors.estadoCivil}>
                <InputLabel id="estadoCivil-select-label">Estado Civil</InputLabel>
                <Select
                  labelId="estadoCivil-select-label"
                  value={empleados.estadoCivil}
                  onChange={handleSelectChange('estadoCivil')}
                  
                  size="small"
                >
                  <MenuItem value="">
                    <em>Seleccione una opción</em>
                  </MenuItem>
                  <MenuItem value={1}>Soltero</MenuItem>
                  <MenuItem value={2}>Casado</MenuItem>
                  <MenuItem value={3}>Viudo</MenuItem>
                </Select>
                {errors.estadoCivil && <Typography color="error">Este campo es requerido</Typography>}
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                label="Salario"
                variant="outlined"
                size="small"
                fullWidth
                value={empleados.salario}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) {
                    setEmpleados({ ...empleados, salario: value });
                    setErrors((prev) => ({
                      ...prev,
                      salario: value < 900000,
                    }));
                  }
                }}
                error={errors.salario}
                helperText={errors.salario ? "El salario debe ser mínimo 900,000 pesos" : ""}
              />
              <FormControl fullWidth error={errors.tipoContrato}>
                <InputLabel id="tipoContrato-select-label">Tipo de Contrato</InputLabel>
                <Select
                  labelId="tipoContrato-select-label"
                  value={empleados.tipoContrato}
                  onChange={handleSelectChange('tipoContrato')}
                  size="small"
                >
                  <MenuItem value="">
                    <em>Seleccione una opción</em>
                  </MenuItem>
                  <MenuItem value={1}>Definido</MenuItem>
                  <MenuItem value={2}>Indefinido</MenuItem>
                </Select>
                {errors.tipoContrato && <Typography color="error">Este campo es requerido</Typography>}
              </FormControl>
            </Box>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button variant="text" size="small" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" size="small" onClick={handleGuardar}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      {toastVisible && ( 
        <ToastNotification
        type='success'
          title='Empleado agregado con éxito'
          time={12000000}
          
        />
      )}
    </>
  );
}
