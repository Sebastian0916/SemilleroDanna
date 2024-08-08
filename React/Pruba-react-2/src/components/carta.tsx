import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

import { ModeloCartas } from "../Generales/constantes";
import {
  BadgeOutlined,
  CheckCircleOutlineOutlined,
  DeleteOutlineOutlined,
  EmailOutlined,
  InventoryOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined,
  ModeEditOutlineOutlined,
  SupervisedUserCircleOutlined,
} from "@mui/icons-material";
import { SincoTheme } from "@sinco/react";

export const Carta = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} sx={{backgroundColor:"background.default"}}>
      {ModeloCartas.map((ModeloCarta, index) => (
        <Card
          key={index}
          sx={{
            width: "20.458rem",
            height: "12.25rem",
            marginBottom: "1rem",
          }}
        >
          <CardHeader
            title={
              <Box display="flex" alignItems="center">
                <Box>
                  <img src={ModeloCarta.imagen} alt="img" />
                </Box>
                <Box marginLeft={1}>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    fontSize="0.813rem"
                    align="left"
                  >
                    {ModeloCarta.titulo}
                  </Typography>
                  <Typography
                    variant="caption"
                    fontSize="0.688rem"
                    align="left"
                  >
                    {ModeloCarta.subtitulo}
                  </Typography>
                </Box>
                <Box marginLeft="auto">
                  <Switch defaultChecked />
                </Box>
              </Box>
            }
          />
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton size="small">
                <BadgeOutlined fontSize="small" />
              </IconButton>
              <Typography>NIT:{ModeloCarta.nit}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton size="small">
                <EmailOutlined fontSize="small" />
              </IconButton>
              <Typography>{ModeloCarta.correo}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton size="small">
                <LocationOnOutlined fontSize="small" />
              </IconButton>
              <Typography>{ModeloCarta.direccion}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton size="small">
                <LocalPhoneOutlined fontSize="small" />
              </IconButton>
              <Typography>{ModeloCarta.telefono}</Typography>
            </Stack>
          </CardContent>

          <Divider />
          <CardActions
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              backgroundColor: "grey.50",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Chip
                sx={{
                  backgroundColor: `${SincoTheme.palette.grey[100]}!important`,
                }}
                size="small"
                variant="filled"
                icon={
                  <SupervisedUserCircleOutlined
                    fontSize="small"
                    color="action"
                  />
                }
                label="Trabajadores"
              />
              <Chip
                size="small"
                variant="filled"
                icon={<CheckCircleOutlineOutlined fontSize="small" />}
                label="Al día"
              />
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton size="small">
                <InventoryOutlined fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <ModeEditOutlineOutlined fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <DeleteOutlineOutlined fontSize="small" />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
