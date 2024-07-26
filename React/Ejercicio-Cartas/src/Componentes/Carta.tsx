import {
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
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { ModeloCartas } from "../Generales/constantes";

export const VistaCarta = () => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
      {ModeloCartas.map((ModeloCarta, index) => (
        <Card
          key={index}
          sx={{
            width: "24.125rem",
            height: "9.938rem",
          }}
        >
          <CardHeader
            title={
              <Typography variant="subtitle1">{ModeloCarta.titulo}</Typography>
            }
            action={
              <Box display={"flex"} gap={1}>
                <IconButton size="small">
                  <ContentCopyOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <EditOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <DeleteOutlineOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
            }
          />
          <Divider />
          <CardContent>
            <Stack gap={"5px"}>
              <Typography variant="caption" color="text.primary">
                Descripcion
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize="14px"
              >
                {ModeloCarta.descripcion}
              </Typography>
            </Stack>
          </CardContent>
          <Divider />
          <CardActions sx={{ display: "flex", flexDirection: "row-reverse" }}>
              <Button startIcon={index < 3 ? <WarningAmberOutlinedIcon sx={{ color: 'orange' }}/> : null}>
                {ModeloCarta.cantidaPasos} Pasos creados
              </Button>
            </CardActions>
        </Card>
      ))}
    </Stack>
  );
};


