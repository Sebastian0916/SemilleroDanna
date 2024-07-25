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
        alignItems:"center",
        height: "90vh",
        
      }}
    >
      <Card
        sx={{
          width: "41.75rem",
          height: "25.5rem",
        }}
      >
        <CardHeader
          title={
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Typography variant="h6" color={"text.primary"}>
                Cargar archivos especificaciones técnicas
              </Typography>
              <IconButton aria-label="delete">
                <Close fontSize="small" />
              </IconButton>
            </Stack>
          }
        />
        <CardContent
          sx={{
            p: 0,
            m: 0,
          }}
        >
          <Box
            sx={{
              width: "39.75rem",
              height: "18.75rem",
              backgroundColor: "grey.50",
              display: "flex",
              justifyContent: "center",
              border: "2px dotted `${SincoTheme.palette.grey[50]` "
            }}
          >
            <Box
              sx={{
                width: "38.25rem",
                height: "17.25rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap:1,
                
              
              }}
            >
              <Box sx={{
                width:"24.625rem",
                height:"4.875rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                
              }}>
                <img
                  src="../src/assets/Ilustration.svg"
                  alt=""
                  style={{ width: "2.75rem", height: "2.75rem" }}
                />
                <Typography
                  sx={{
                    marginTop: 1,
                    fontSize: "11px",
                    color: "text.secondary",
                  }}
                >
                  Adjunta tu archivo arrastrándolo aquí o haz click para
                  cargarlo desde tu PC
                </Typography>
              </Box>
              <Button variant="outlined" endIcon={<AttachFile />} size="small">
                Adjuntar archivo{" "}
              </Button>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{
          width:"41.75rem",
          height:"3.125rem"
        }}>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="text" color="primary" size="small">
            Cancelar
          </Button>
          <Button disabled variant="contained" color="primary" size="small">
            Cargar adjuntos
          </Button>
        </CardActions>
        </Box>
      </Card>
    </Box>
  );
};
