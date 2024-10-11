import {
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Carta } from "../components/Carta";
import { useEffect, useState } from "react";
import { NuevoEmpleado } from "../components/NuevoEmpleado";
import { Empleado } from "../interface/empleado";
import {  EmptyState, SincoTheme } from "@sinco/react";

export default function Principal() {
  const [formulario, setFormulario] = useState(false);
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtroCedula, setFiltroCedula] = useState<string | null>(null); // Estado para guardar el filtro seleccionado

  const abrirFormularioNuevoEmpleado = (estaAbierto: boolean) => {
    setFormulario(estaAbierto);
  };

  useEffect(() => {
    fetch("http://localhost:3004/empleados")
      .then((response) => {
       
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setEmpleados(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filtrar empleados por cédula seleccionada en el Autocomplete
  const empleadosFiltrados = filtroCedula
    ? empleados.filter((empleado) => empleado.cedula === filtroCedula)
    : empleados; // Si no hay filtro, mostrar todos los empleados

  return (
    <Stack bgcolor="background.default" height="100vh">
      <Stack
        sx={{
          width: "100%",
          minHeight: "72px",
          borderBottom: `1px ${SincoTheme.palette.divider} solid`,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography color="text.secondary" variant="h4">
          Danna's Store
        </Typography>
      </Stack>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={1}
      >
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <img src="./public/div/div/Ilustrations.svg" alt="icono" />
          <Stack>
            <Typography color="primary" variant="h6">
              Empleados
            </Typography>
            <Typography color="text.secondary" variant="subtitle2">
              Gestión de empleados
            </Typography>
          </Stack>
        </Box>

        <Box display={"flex"} gap={1} alignItems={"center"}>
          <Autocomplete
            disablePortal
            options={empleados.map((e) => e.cedula)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Filtrar por cédula de empleado" />
            )}
            onChange={(_, value) => setFiltroCedula(value)} // Actualizar el filtro cuando se selecciona un valor
          />

          <Button
            variant="contained"
            color="primary"
            onClick={() => abrirFormularioNuevoEmpleado(true)}
          >
            Contratar empleado
          </Button>
        </Box>
      </Stack>

      <Box
        display={"flex"}
        p={2}
        gap={2}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {!loading &&
          empleadosFiltrados.length > 0 &&
          empleadosFiltrados.map((empleado) => (
            <Carta key={empleado.cedula} empleado={empleado} />
          ))}

        {loading && <Typography>Cargando empleados...</Typography>}
        {error && <Typography>Error: {error}</Typography>}
        {!loading && empleadosFiltrados.length === 0 && (

          <EmptyState title="¡Empieza creando un empleado!" subtitle="Aquí encontrarás todos los empleados una vez que los crees." actions={<Button
                  variant="outlined"
                  size="medium"
                  onClick={() => abrirFormularioNuevoEmpleado(true)}
                >
                  + Agregar empleado
                </Button>} containerHeight="74vh" />

        )}
      </Box>

      {formulario && (
        <NuevoEmpleado
          open={formulario}
          onClose={() => abrirFormularioNuevoEmpleado(false)}
          selectedValue=""
        />
      )}
    </Stack>
  );
}
