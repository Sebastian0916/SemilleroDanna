import { Stack, Typography } from "@mui/material";
import { EjemploProps } from "../generales/interface";

export const Ejemplo: React.FC<EjemploProps> = ({
  titulo,
  descripcion,
  children,
}) => {
  return (
    <Stack gap={1} >
      <Stack>
        <Typography variant="h6">{titulo}</Typography>
        <Typography variant="h6">{descripcion}</Typography>
      </Stack>

      <Stack>{children}</Stack>
    </Stack>
  );
};
