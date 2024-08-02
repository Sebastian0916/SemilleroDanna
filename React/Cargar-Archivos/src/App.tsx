import { AttachFileOutlined, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export const AdjuntarArchivos: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Card
        sx={{
          width: "25.125rem",
          height: "25.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader
          title={
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Typography variant="h6" color={"text.primary"}>
                Cargar archivos
              </Typography>
              <IconButton aria-label="delete">
                <Close fontSize="small" />
              </IconButton>
            </Stack>
          }
        />
        <Box sx={{display: "flex",
              alignItems: "center",
              justifyContent: "center",}}>
          <Box
            sx={{
              width: "20.125rem",
              height: "17.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius:"5px",
              
              
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <img
                src="../src/assets/div.svg"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  marginBottom: "1rem",
                }}
              />
              <Typography>Arrastrar o adjuntar archivos</Typography>
              <Typography  variant="caption" color="text.secondary" >DOCX, XML, PNG, JPG • Máx. 00MB</Typography>
              <Stack direction="row" alignItems="center" >
                <IconButton size="small" color="primary">
                  <AttachFileOutlined />
                </IconButton>
                <Button variant="text" sx={{ textTransform: "none" }}>
                  Adjuntar
                </Button>
              </Stack>
            </CardContent>
          </Box>
        </Box>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "1rem",
          }}
        >
          <Button variant="text" color="primary" size="small">
            Cancelar
          </Button>
          <Button disabled variant="contained" color="primary" size="small">
            Guardar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
