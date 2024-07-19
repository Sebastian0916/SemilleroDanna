import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import { AttachFile, Close } from "@mui/icons-material";

export const PrimerVista: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Card
        sx={{
          width: 668,
          height: 408,
          
        }}
      >
        <CardHeader
          title={
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Typography variant="h6">
                Cargar archivos especificaciones técnicas
              </Typography>
              <IconButton aria-label="delete">
                <Close fontSize="small" />
              </IconButton>
            </Stack>
          }
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              width: 600,
              height: 230,
              backgroundColor: "#eceff1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img src="../src/assets/Ilustration.svg" alt="" />
            <Typography color="#757575" fontSize={"11px"} sx={{ marginTop: 1 }}>
              Adjunta tu archivo arrastrándolo aquí o haz click para cargarlo
              desde tu PC
            </Typography>

            <Button
              variant="outlined"
              endIcon={<AttachFile />}
              sx={{
                marginTop: 1,
              }}
            >
              Adjuntar archivo{" "}
            </Button>
          </CardContent>
        </Box>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop:2,
            marginRight: 1,
          }}
        >
          <Button variant="text" color="primary" size="small">
            Cancelar
          </Button>
          <Button disabled variant="contained" color="primary" size="small">
            Cargar adjuntos
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
