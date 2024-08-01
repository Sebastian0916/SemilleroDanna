import {
  Box,
  Card,
  CardContent,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { ListadoArchivo } from "./generales/constantes";
import { CancelOutlined, UploadFileOutlined } from "@mui/icons-material";

export const Listado = () => {
  return (
    <Stack gap={3}>
      {ListadoArchivo.map((ListadoArchivos, index) => (
        <Card
          key={index}
          sx={{
            width: "26.125rem",
            height: "auto",
          }}
        >
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center ">
              <IconButton>
                <UploadFileOutlined fontSize="small" color="primary"/>
              </IconButton>
              <Box flexGrow={1} >
                <Typography>{ListadoArchivos.name}</Typography>
                <Typography variant="caption">
                  {ListadoArchivos.size} - {ListadoArchivos.state}
                </Typography>
                <Box sx={{mt:"5px"}}>
                <LinearProgress
                variant="determinate"
                value={30}  
              />
              </Box>
              </Box>
              <IconButton>
                <CancelOutlined fontSize="small"/>
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};
