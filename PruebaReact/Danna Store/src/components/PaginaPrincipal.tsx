/* eslint-disable @typescript-eslint/no-unused-vars */
import { Business, Handshake, Help, InsertDriveFile, Search, SupervisedUserCircleOutlined, Widgets } from "@mui/icons-material";
import { AppBar, Box, Button, CssBaseline, Drawer, InputAdornment, Tab, Tabs, TextField, Toolbar, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { fetchEmpleados } from "../service/api";
import { Empleado } from "../interface/empleado";

const drawerWidth = 72;
const appBarHeight = 40;

function PaginaPrincipal() {
  const { data, error, isLoading } = useQuery<Empleado[]>('empleados', fetchEmpleados);

  console.log(data);

  if (isLoading) {
      return <Typography>Loading...</Typography>;
  }



  return (
      <>
          <Box sx={{ display: "flex" }}>
              <CssBaseline />
              {/* Menú Lateral */}
              <Drawer
                  sx={{
                      width: drawerWidth,
                      flexShrink: 0,
                      "& .MuiDrawer-paper": {
                          width: drawerWidth,
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                      },
                  }}
                  variant="permanent"
                  anchor="left"
              >
                  <Box
                      sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          py: 2,
                      }}
                  >
                      <img
                          src="./public/Logo.svg"
                          alt="Logo"
                          style={{ width: 40, height: 34 }}
                      />
                  </Box>

                  <Typography
                      variant="overline"
                      align="center"
                      sx={{ marginTop: "45px" }}
                  >
                      MENÚ
                  </Typography>
                  <Box
                      sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1,
                      }}
                  >
                      <Widgets sx={{ marginTop: "25px" }} />
                      <Business sx={{ marginTop: "25px" }} />
                      <Handshake sx={{ marginTop: "25px" }} />
                      <InsertDriveFile sx={{ marginTop: "25px" }} />
                  </Box>

                  <Typography
                      variant="overline"
                      align="center"
                      sx={{ marginTop: "45px" }}
                  >
                      GESTIÓN
                  </Typography>
                  <Box
                      sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1,
                      }}
                  >
                      <Help />
                  </Box>
              </Drawer>

              {/* AppBar 1 */}
              <AppBar
                  position="fixed"
                  elevation={1}
                  sx={{
                      width: `calc(100% - ${drawerWidth}px)`,
                      marginLeft: `${drawerWidth}px`,
                      backgroundColor: "#f5f5f5",
                  }}
              >
                  <Toolbar sx={{ minHeight: "72px !important" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <SupervisedUserCircleOutlined sx={{ color: "text.secondary" }} />
                          <Typography
                              variant="h5"
                              noWrap
                              component="div"
                              color="text.secondary"
                          >
                              Gestión de Empleados
                          </Typography>
                      </Box>
                  </Toolbar>
              </AppBar>

              {/*  AppBar 2 */}
              <AppBar
                  position="fixed"
                  elevation={1}
                  sx={{
                      top: 72,
                      width: `calc(100% - ${drawerWidth}px)`,
                      marginLeft: `${drawerWidth}px`,
                      backgroundColor: "#FFFFFF",
                      minHeight: appBarHeight,
                  }}
              >
                  <Toolbar>
                      <Tabs sx={{ minWidth: "304px !important" }}>
                          <Tab label="Personas" value="1" />
                      </Tabs>
                  </Toolbar>
              </AppBar>

              <Box
                  sx={{
                      flexGrow: 1,
                      marginTop: -20,
                      marginLeft: 2,
                  }}
              >
                  <Box
                      sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: 22,
                          gap: 2,
                      }}
                  >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <img
                              src="./public/div/div/Ilustrations.svg"
                              alt="Logo"
                              style={{ width: 40, height: 40 }}
                          />
                          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                              <Typography variant="h6">Empleados</Typography>
                              <Typography variant="body2" color="text.secondary">
                                  Crea y gestiona los empleados de tu empresa
                              </Typography>
                          </Box>
                      </Box>

                      <Box
                          sx={{
                              display: "flex",
                              gap: 2,
                              marginLeft: 60,
                          }}
                      >
                          <TextField
                              id="outlined-basic"
                              variant="outlined"
                              placeholder="Número de documento"
                              InputProps={{
                                  endAdornment: (
                                      <InputAdornment position="end">
                                          <Search sx={{ fontSize: 16 }} />
                                      </InputAdornment>
                                  ),
                              }}
                              sx={{ width: 321, height: 30, paddingBlock: "4.36px" }}
                          />
                          <Button variant="contained">Agregar empleado</Button>
                      </Box>
                  </Box>
                  <Box>
                      {data && data.length > 0 ? (
                          data.map((empleado: Empleado) => (
                              <CartaEmpleado key={empleado.cedula} empleado={empleado} />
                          ))
                      ) : (
                        <Box
                        sx={{
                            marginTop: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <img
                            src="./public/Illustration.svg"
                            alt="Logo"
                            style={{ width: 208, height: 187 }}
                        />
                        <Typography>¡Empieza creando un empleado!</Typography>
                        <Typography>
                            Aquí encontrarás todos los empleados una vez que los crees.
                        </Typography>
                        <Button variant="outlined" sx={{ marginTop: 2 }}>
                            + Agregar empleado
                        </Button>
                    </Box>
  
                          
                      )}
                  </Box>

              </Box>
          </Box>
      </>
  );
}

export default PaginaPrincipal;
