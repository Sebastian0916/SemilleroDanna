import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { VerEmpleado } from "./VerEmpleado";
import MensajeError from "./MensajeError";
import { Empleado } from "../interface/empleado";
import { EditarEmpleado } from "./EditarEmpleado";

interface CartaProps {
  empleado: Empleado;
  onDelete: (empleadoDocumento: string) => void;
  onEdit: (documento: string, datosActualizados: Partial<Empleado>) => void; // Añadir la propiedad onEdit
}

export const Carta = ({ empleado, onDelete }: CartaProps) => {
  const [edicionEmpleado, setEdicionEmpleado] = useState(false);
  const [detalleEmpleado, setDetalleEmpleado] = useState(false);
  const [confirmacionEmpleado, setConfirmacionEmpleado] = useState(false);

  const abrirFormularioEditarEmpleado = (estaAbierto: boolean) => {
    setEdicionEmpleado(estaAbierto);
  };

  const abrirFormularioDetalleEmpleado = (estaAbierto: boolean) => {
    setDetalleEmpleado(estaAbierto);
  };

  const modalConfirmacion = (estaAbierto: boolean) => {
    setConfirmacionEmpleado(estaAbierto);
  };

  const generarColorAleatorio = () => {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Stack width={321}>
      <Card>
        <CardHeader
          sx={{
            padding: "8px 12px 8px 16px !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          avatar={
            <Avatar sx={{ width: 32, height: 32, alignSelf: "center", backgroundColor: generarColorAleatorio() }}>
              <Typography variant="subtitle1">
                {`${empleado.nombres.split(' ')[0][0]}${empleado.apellidos.split(' ')[0][0]}`.toUpperCase()}
              </Typography>
            </Avatar>
          }
          title={
            <Typography variant="subtitle2">
              {empleado.nombres} {empleado.apellidos}
            </Typography>
          }
          action={
            <Stack
              sx={{ height: "40px", justifyContent: "center", display: "flex" }}
            >
              <Button
                size="small"
                onClick={() => abrirFormularioDetalleEmpleado(true)}
              >
                Detalle
              </Button>
            </Stack>
          }
        />
        <Divider />

        <CardContent>
          <Stack display={"grid"} gridTemplateColumns={"auto auto"}>
            <Box>
              <Typography variant="caption" color="text.secondary">
                Tipo de documento
              </Typography>
              <Typography variant="body2">CC</Typography>
            </Box>

            <Box>
              <Typography variant="caption" color="text.secondary">
                Número de documento
              </Typography>
              <Typography variant="body2">{empleado.documento}</Typography>
            </Box>

            <Box>
              <Typography variant="caption" color="text.secondary">
                Cargo / Detalle
              </Typography>
              <Typography variant="body2">Gerente</Typography>
            </Box>
          </Stack>
        </CardContent>

        <Divider />

        <CardActions
          sx={{ justifyContent: "flex-end", padding: "4px 10px !important " }}
        >
          <Box>
            <IconButton
              size="small"
              onClick={() => abrirFormularioEditarEmpleado(true)}
            >
              <EditOutlined fontSize="small" color="action" />
            </IconButton>
            <IconButton size="small" onClick={() => modalConfirmacion(true)}>
              <DeleteOutline fontSize="small" color="action" />
            </IconButton>
          </Box>
        </CardActions>
      </Card>

      {edicionEmpleado && (
  <EditarEmpleado
    open={edicionEmpleado}
    onClose={() => abrirFormularioEditarEmpleado(false)}
   selectedValue={empleado}
  />
)}

      {detalleEmpleado && (
        <VerEmpleado
          open={detalleEmpleado}
          onClose={() => abrirFormularioDetalleEmpleado(false)}
          selectedValue={empleado} 
        />
      )}

      {confirmacionEmpleado && (
        <MensajeError
          open={confirmacionEmpleado}
          onClose={() => modalConfirmacion(false)}
          selectedValue={empleado} 
          funcionAceptar={() => {
            onDelete(empleado.documento);
            modalConfirmacion(false); 
          }} 
        />
      )}
    </Stack>
  );
};
