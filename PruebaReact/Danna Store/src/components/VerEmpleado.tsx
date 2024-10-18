import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { Empleado } from "../interface/empleado";
import { EditarEmpleado } from "./EditarEmpleado";

export interface VerEmpleadoProps {
  open: boolean;
  selectedValue: Empleado; 
  onClose: (value: Empleado) => void;
}

export function VerEmpleado({ onClose, selectedValue, open }: VerEmpleadoProps) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const [edicionEmpleado, setEdicionEmpleado] = useState(false);
  const abrirFormularioEditarEmpleado = (estaAbierto: boolean) => {
    setEdicionEmpleado(estaAbierto);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
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
            <Typography variant="caption" color="text.secondary" sx={{ width: 320 }}>
              Nombres: <Typography variant="body2" color="text.primary">{selectedValue.nombres}</Typography>
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ width: 320 }}>
              Apellidos: <Typography variant="body2" color="text.primary">{selectedValue.apellidos}</Typography>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="caption" color="text.secondary" sx={{ width: 320 }}>
              Documento: <Typography variant="body2" color="text.primary">{selectedValue.documento}</Typography>
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ width: 320 }}>
              Edad: <Typography variant="body2" color="text.primary">{selectedValue.edad}</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="caption" color="text.secondary" sx={{ width: 320 }}>
              Estado civil: <Typography variant="body2" color="text.primary">{selectedValue.estadoCivil ===1?"Soltero":selectedValue.estadoCivil === 2 ? "Casado":"Viudo"}</Typography>
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ width: 320 }}>
              Género: <Typography variant="body2" color="text.primary">{selectedValue.genero === 1 ? "Masculino" :"Femenino"}</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="caption" color="text.secondary" sx={{ width: 320 }}>
              Salario: <Typography variant="body2" color="text.primary">{selectedValue.salario}</Typography>
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ width: 320 }}>
              Tipo de contrato: <Typography variant="body2" color="text.primary">{selectedValue.tipoContrato === 1 ? "Definido":"Indefinido "}</Typography>
            </Typography>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '12px,16px', gap: 2 }}>
          <Button variant="text" size="small" onClick={() => handleClose()}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" size="small" onClick={() => abrirFormularioEditarEmpleado(true)}>
            Editar
          </Button>
        </Box>
      </DialogActions>
      {edicionEmpleado && <EditarEmpleado open={edicionEmpleado} onClose={() => abrirFormularioEditarEmpleado(false)} selectedValue={selectedValue} />}
    </Dialog>
  );
}
