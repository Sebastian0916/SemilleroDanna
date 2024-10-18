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

  return (
    <Stack width={321}>
      <Card>
        <CardHeader
          sx={{
            padding: "8px 12px 8px 16px !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          avatar={
            <Avatar
              sx={{ width: 32, height: 32, alignSelf: "center" }}
            ></Avatar>
          }
          title={
            <Box width={"100px"}>
              <Typography
                variant="subtitle2"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
              >
                {empleado.nombres}
                {empleado.apellidos}
              </Typography>
            </Box>
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
