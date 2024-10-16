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
import { AddTask, ArrowForward, Event, Loop, Search } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from "@mui/lab";
import { DrawerComponent } from "@sinco/react";
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
        children={<Stack gap={1} >
          <Box display={"flex"} gap={1}>
            <TextField
              id="Rango de fecha"
              label="Rango de fecha"
              variant="outlined"
              size="small"
              fullWidth
              slotProps={{
                input: {
                  endAdornment: (
                    <Event color="action" fontSize="small" />
                  ),
                },
              }}
               />

            <FormControl size="small" variant="outlined" fullWidth>
              <InputLabel id="select-label">Buscar usuario</InputLabel>
              <Select
                labelId="Buscar usuario"
                id="select-demo"
                value={age}
                label="Buscar usuario"
                onChange={handleChange}
                IconComponent={Search}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider />
          <Timeline sx={{
            padding: 0, [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
              display:'flex',
              gap:1
            },
            display:"flex",gap:1
          }}>

            <TimelineItem >
              <TimelineOppositeContent sx={{ padding: '8px 0px'}}>
                <Typography variant="body2" color="text.secondary">
                  10/04/2024
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator sx={{display:"flex",gap:0.4}}>
                <Loop color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
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
                      variant="outlined" />
                    <ArrowForward />
                    <Chip
                      label="Ejecución"
                      color="success"
                      size="medium"
                      variant="filled" />
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

            <TimelineItem >
              <TimelineOppositeContent sx={{ padding: '8px 0px' }} display={"flex"} gap={1} >
                <Typography variant="body2" color="text.secondary">
                  10/04/2024
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator sx={{display:"flex",gap:0.4}}
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
                      variant="outlined" />
                    <ArrowForward />
                    <Chip
                      label="Ejecución"
                      color="success"
                      size="medium"
                      variant="filled" />
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
              <TimelineOppositeContent sx={{ padding: '8px 0px' }}>
                <Typography variant="body2" color="text.secondary">
                  10/04/2024
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator sx={{display:"flex",gap:0.4}}
              >
                <Loop color="disabled" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ flex: 1 }}>
                <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                  <Typography variant="body2" color="text.secondary" >
                    11:30:41 a.m.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">Se agregaron 12 usuarios</Typography>
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
              <TimelineOppositeContent sx={{ padding: '8px 0px' }}>
                <Typography variant="body2" color="text.secondary">
                  10/04/2024
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator sx={{display:"flex",gap:0.4}}
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
                      variant="outlined" />
                    <ArrowForward />
                    <Chip
                      label="Ejecución"
                      color="success"
                      size="medium"
                      variant="filled" />
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
              <TimelineOppositeContent sx={{ padding: '8px 0px' }}>
                <Typography variant="body2" color="text.secondary">
                  10/04/2024
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator sx={{display:"flex",gap:0.4}}
              >
                <AddTask color="success"/>
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
                      variant="outlined" />
                    <ArrowForward />
                    <Chip
                      label="Ejecución"
                      color="success"
                      size="medium"
                      variant="filled" />
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
        </Stack>} actions={undefined}      />
    </div>
  );
}
