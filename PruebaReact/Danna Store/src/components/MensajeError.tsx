import { CloseOutlined, Info } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Empleado } from "../interface/empleado";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export interface MensajeErrorProps {
  open: boolean;
  selectedValue: Empleado; 
  onClose: () => void; // Cambiado para no recibir el parámetro
  funcionAceptar: () => void; // Esta línea se mantiene
}

export default function MensajeError({ onClose, open, funcionAceptar }: MensajeErrorProps) {
  const handleClose = () => {
    onClose(); // Solo llama a onClose sin parámetros
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={"8px 24px"}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Info color="error" />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                ¿Estás seguro/a?
              </Typography>
            </Box>
            <IconButton onClick={handleClose}>
              <CloseOutlined color="action" />
            </IconButton>
          </Box>
          <Divider />

          <Box padding={"8px 24px"}>
            <Typography variant="body2">
              Por favor, confirma que deseas eliminar el empleado. Esta acción
              no se puede deshacer.
            </Typography>
          </Box>
          <Divider />

          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
            padding={"8px 8px"}
          >
            <Button variant="text" size="small" color='inherit' onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="error" size="small" onClick={funcionAceptar}>
              Aceptar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
