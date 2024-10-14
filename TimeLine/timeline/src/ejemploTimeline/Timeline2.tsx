import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Divider,
  Stack,
} from "@mui/material";
import { AddTask, ArrowForward, Loop } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { DrawerComponent, SincoTheme } from "@sinco/react";
import { useState } from "react";

export default function Timeline2() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [age, setAge] = useState("");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <DrawerComponent
        width="392px"
        open={isDrawerOpen}
        anchorActions="flex-start"
        onClose={() => false}
        title="1. Balcones del Norte - Etapa I"
        children={
          <Stack gap={1} sx={{ height: '100%', overflow: 'hidden' }}>
            <Box display={"flex"} gap={1}>
              <TextField
                id="Rango de fecha"
                label="Rango de fecha"
                variant="outlined"
                size="small"
                fullWidth
              />

              <FormControl size="small" variant="outlined" fullWidth>
                <InputLabel id="select-label">Buscar usuario</InputLabel>
                <Select
                  labelId="Buscar usuario"
                  id="select-demo"
                  value={age}
                  label="Buscar usuario"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Divider/>
            <Timeline sx={{ padding: 0 }}>
              
              <TimelineItem>
                <TimelineOppositeContent sx={{ textAlign: "left", flex: 0 }}>
                  <Typography variant="body2" color="text.secondary">
                    10/04/2024
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Loop color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ flex: 1 }}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="body2" color="text.secondary">
                      11:30:41 a.m.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">Cambió de etapa</Typography>
                    <Box display={"flex"} gap={0.5}>
                      <Chip
                        label="Aplazado"
                        color="default"
                        size="medium"
                        variant="outlined"
                      />
                      <ArrowForward />
                      <Chip
                        label="Ejecución"
                         style={{backgroundColor:SincoTheme.palette.success[100]}}
                        size="medium"
                        variant="filled"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.primary">
                      Nombre del usuario
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body3" color="primary" sx={{ textDecoration: 'underline' }}>
                      Ver comentario
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent sx={{ textAlign: "left", flex: 0 }}>
                  <Typography variant="body2" color="text.secondary">
                    10/04/2024
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Loop color="disabled" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ flex: 1 }}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="body2" color="text.secondary">
                      11:30:41 a.m.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">Cambió de etapa</Typography>
                    <Box display={"flex"} gap={0.5}>
                      <Chip
                        label="Aplazado"
                        color="default"
                        size="medium"
                        variant="outlined"
                      />
                      <ArrowForward />
                      <Chip
                        label="Ejecución"
                        style={{backgroundColor:SincoTheme.palette.success[100]}}
                        size="medium"
                        variant="filled"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.primary">
                      Nombre del usuario
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body3" color="primary" sx={{ textDecoration: 'underline' }}>
                      Ver comentario
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>

              {/* numero 3 */}

              <TimelineItem>
                <TimelineOppositeContent sx={{ textAlign: "left", flex: 0 }}>
                  <Typography variant="body2" color="text.secondary">
                    10/04/2024
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator
                  sx={{ display: "flex", alignItems: "center", flex: 0  }}
                >
                  <Loop color="disabled" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ flex: 1 }}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="body2" color="text.secondary">
                      11:30:41 a.m.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.primary">Se agregaron 12 usuarios</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.primary">
                      Nombre del usuario
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body3" color="primary" sx={{ textDecoration: 'underline' }}>
                      Ver comentario
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ textAlign: "left", flex: 0 }}>
                  <Typography variant="body2" color="text.secondary">
                    10/04/2024
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Loop color="disabled"  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ flex: 1 }}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="body2" color="text.secondary">
                      11:30:41 a.m.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">Cambió de etapa</Typography>
                    <Box display={"flex"} gap={0.5}>
                      <Chip
                        label="Aplazado"
                        color="default"
                        size="medium"
                        variant="outlined"
                      />
                      <ArrowForward />
                      <Chip
                        label="Ejecución"
                         style={{backgroundColor:SincoTheme.palette.success[100]}}
                        size="medium"
                        variant="filled"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.primary">
                      Nombre del usuario
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body3" color="primary" sx={{ textDecoration: 'underline' }}>
                      Ver comentario
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent sx={{ textAlign: "left", flex: 0 }}>
                  <Typography variant="body2" color="text.secondary">
                    10/04/2024
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <AddTask color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ flex: 1 }}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="body2" color="text.secondary">
                      11:30:41 a.m.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">Cambió de etapa</Typography>
                    <Box display={"flex"} gap={0.5}>
                      <Chip
                        label="Aplazado"
                        color="default"
                        size="medium"
                        variant="outlined"
                      />
                      <ArrowForward />
                      <Chip
                        label="Ejecución"
                         style={{backgroundColor:SincoTheme.palette.success[100]}}
                        size="medium"
                        variant="filled"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.primary">
                      Nombre del usuario
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body3" color="primary" sx={{ textDecoration: 'underline' }}>
                      Ver comentario
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>



            </Timeline>
          </Stack>
        }
      />
    </div>
  );
}
