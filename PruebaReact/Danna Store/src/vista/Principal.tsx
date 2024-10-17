import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import { Carta } from "../components/Carta";
import { useEffect, useState } from "react";
import { NuevoEmpleado } from "../components/NuevoEmpleado";
import { Empleado } from "../interface/empleado";
import { EmptyState, SincoTheme } from "@sinco/react";

export default function Principal() {
  const [formulario, setFormulario] = useState(false);
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtroDocumento, setFiltroDocumento] = useState<string | null>(null);

  const abrirFormularioNuevoEmpleado = (estaAbierto: boolean) => {
    setFormulario(estaAbierto);
  };

  useEffect(() => {
    fetch("http://localhost:3004/empleados")
      .then((response) => response.json())
      .then((data) => {
        setEmpleados(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const agregarEmpleado = async (nuevoEmpleado: Empleado | null) => {
    if (nuevoEmpleado) {
      const response = await fetch("http://localhost:3004/empleados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoEmpleado),
      });

      if (response.ok) {
        const empleadoGuardado = await response.json();
        setEmpleados((prevEmpleados) => [...prevEmpleados, empleadoGuardado]);
      } else {
        console.error("No se pudo agregar el empleado.");
      }
    }
    setFormulario(false);
    
  };

  const eliminarEmpleado = async (empleadoDocumento: string) => {
    console.log(`Eliminando empleado con documento: ${empleadoDocumento}`);
    const response = await fetch(
      `http://localhost:3004/empleados/${empleadoDocumento}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log("Empleado eliminado con éxito.");
      setEmpleados((prevEmpleados) =>
        prevEmpleados.filter(
          (empleado) => empleado.documento !== empleadoDocumento
        )
      );
    } else {
      console.error("No se pudo eliminar el empleado.");
      console.log(response);
    }
  };

  const empleadosFiltrados = filtroDocumento
    ? empleados.filter((empleado) => empleado.documento === filtroDocumento)
    : empleados;

  const mostrarEmpleados =
    empleadosFiltrados.length > 0 ? empleadosFiltrados : empleados;

  return (
    <Stack bgcolor="background.default" height={"100vh"}>
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
            options={empleados.map((empleado) => empleado.documento)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filtrar por cédula de empleado"
                variant="outlined"
                size="small"
                sx={{ width: 300 }}
              />
            )}
            onChange={(event, newValue) => {
              setFiltroDocumento(newValue);
            }}
            value={filtroDocumento}
            size="small"
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
      <Box></Box>
      <Box
        display="flex"
        flexWrap="wrap"
        height={700}
        sx={{ gap: 2, overflowY: "auto" }}
        padding={"20px 150px 140px 178px"}
      >
        {!loading && mostrarEmpleados.length > 0
          ? mostrarEmpleados.map((empleado) => (
              <Box key={empleado.documento} height={"auto"}>
                <Carta
                  empleado={empleado}
                  onDelete={eliminarEmpleado}
                 
                />
              </Box>
            ))
          : !loading &&
            empleados.length === 0 &&
            !filtroDocumento && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
              >
                <EmptyState
                  title="¡Empieza creando un empleado!"
                  subtitle="Aquí encontrarás todos los empleados una vez que los crees."
                  actions={
                    <Button
                      variant="outlined"
                      size="medium"
                      onClick={() => abrirFormularioNuevoEmpleado(true)}
                    >
                      + Agregar empleado
                    </Button>
                  }
                />
              </Box>
            )}
      </Box>

      {loading && <Typography>Cargando empleados...</Typography>}
      {error && <Typography>Error: {error}</Typography>}

      {formulario && (
        <NuevoEmpleado
          open={formulario}
          onClose={agregarEmpleado}
          selectedValue=""
        />
      )}
    </Stack>
  );
}
