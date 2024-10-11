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
import { EditarEmpleado } from "./EditarEmpleado";
import { useState } from "react";


export interface VerEmpleadoProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function VerEmpleado(props: VerEmpleadoProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  
  const [edicionEmpleado, setEdicionEmpleado]=useState(false)
  const abrirFormularioEditarEmpleado =(estaAbierto:boolean)=>{
    setEdicionEmpleado(estaAbierto)
  }

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
            <Close  color="action"/>
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack gap={1} padding={"12px 16px 8px 16px"}>

            <Box sx={{ display: "flex",gap:1 }}>
              <Typography variant="caption" sx={{ width: 320 }}>
                Nombres:<Typography variant="body2">Daniel</Typography>
              </Typography>

              <Typography variant="caption" sx={{ width: 320 }}>
                Apellidos:
                <Typography variant="body2">Rueda Walteros</Typography>
              </Typography>
            </Box>

            <Box sx={{ display: "flex",gap:1 }}>
              <Typography variant="caption" sx={{ width: 320 }}>
                Documento: <Typography variant="body2">123456789</Typography>
              </Typography>

              <Typography variant="caption" sx={{ width: 320 }}>
                Edad: <Typography variant="body2">19</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex",gap:1 }}>
              <Typography variant="caption" sx={{ width: 320 }}>
                Estado civil: <Typography variant="body2">Casado</Typography>
              </Typography>

              <Typography variant="caption" sx={{ width: 320 }}>
                Genero: <Typography variant="body2">Indefinido</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex" ,gap:1 }}>
              <Typography variant="caption" sx={{ width: 320 }}>
                Salario:<Typography variant="body2">13000000</Typography>
              </Typography>

              <Typography variant="caption" sx={{ width: 320 }}>
                Tipo de contrato:{" "}
                <Typography variant="body2">Indefindo</Typography>
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Box sx={{display:'flex', justifyContent:'flex-end',padding:'12px,16px' ,gap:2}} >
            <Button variant="text" size="small" onClick={()=>handleClose()}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" size="small" onClick={()=>abrirFormularioEditarEmpleado(true) }>
              Editar
            </Button>
          </Box>
          </DialogActions>
          {edicionEmpleado && <EditarEmpleado open={edicionEmpleado} onClose={()=>abrirFormularioEditarEmpleado(false)} selectedValue=""/>}
      </Dialog>
    
  );
}


