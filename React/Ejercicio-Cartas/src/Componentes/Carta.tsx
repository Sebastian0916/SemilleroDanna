import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { WarningAmberOutlined, ContentCopyOutlined,EditOutlined,DeleteOutlineOutlined, CancelOutlined} from '@mui/icons-material';


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
                  <ContentCopyOutlined fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <EditOutlined fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <DeleteOutlineOutlined fontSize="small" />
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
              <Button startIcon={index < 3 ? <WarningAmberOutlined sx={{ color: 'warning.main' }}/> : null}>
                {ModeloCarta.cantidaPasos} Pasos creados
              </Button>
              <Chip sx={{background:"grey.100"}} icon={< CancelOutlined/>} label="With Icon" />
            </CardActions>
        </Card>
      ))}
    </Stack>
  );
};


