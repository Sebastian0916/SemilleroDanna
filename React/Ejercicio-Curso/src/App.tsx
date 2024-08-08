import { Card, CardContent, Typography } from "@mui/material";
import { usuarios } from "./generales/constantes";

export const EjemploUsuarios = () => {
  return (
    <div>
      {usuarios.map((usuario) => (
        <Card key={usuario.id} >
          <CardContent>
            <Typography variant="h5" >
              {usuario.nombre}
            </Typography>
            <Typography color="text.secondary">Edad: {usuario.edad}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
