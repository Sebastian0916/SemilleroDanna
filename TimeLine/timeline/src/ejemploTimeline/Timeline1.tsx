import { useState } from "react";
import { Drawer } from "@sinco/react";
import {
  DateRange,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Event, ExpandMore, History, Search } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

export default function Timeline1() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => () => {
    setDrawerOpen(prev => !prev);
  };

  const [value, setValue] = useState<DateRange<Dayjs>>([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  return (
    <div>
      <Button onClick={toggleDrawer()}>Open drawer</Button>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer()}
        anchorActions="flex-end"
        title="Historial de cambios"
        width="502px"
        actions={false}
        children={
          <Box>
            <Box pb="6px">
              <Box display={"flex"} gap={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateRangePicker", "DateRangePicker"]}
                    sx={{
                      overflow: "visible",
                      paddingTop: 0,
                      ".MuiMultiInputDateRangeField-separator": {
                        display: "none",
                      },
                      ".MuiMultiInputDateRangeField-root>:not(style)~:not(style)":
                        {
                          marginLeft: 1,
                        },
                    }}
                  >
                    <DemoItem component="DateRangePicker">
                      <DateRangePicker
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        slotProps={{
                          textField: (params) => ({
                            size: "small",
                            label:
                              params.position === "start"
                                ? "Fecha de inicio"
                                : "Fecha de fin",
                            fullWidth: true,
                            InputProps: {
                              endAdornment: (
                                <Event
                                  color="action"
                                  fontSize="small"
                                  sx={{
                                    padding: "8px 0px 8px 12px !importand",
                                  }}
                                />
                              ),
                            },
                          }),
                        }}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
                <FormControl size="small" variant="outlined" fullWidth>
                  <InputLabel id="select-label">Todos</InputLabel>
                  <Select
                    labelId="Buscar usuario"
                    id="select-demo"
                    label="Buscar usuario"
                    IconComponent={Search}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "grey.100" }}
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  variant="subtitle2"
                  color="texy.primary"
                  sx={{ pr: 2 }}
                >
                  Año 2023
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign={"center"}
                >
                  Última modificación: 10/05/2024
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "grey.100" }}>
                <Timeline
                  sx={{
                    padding: 0,
                    [`& .${timelineOppositeContentClasses.root}`]: {
                      flex: 0.2,
                    },
                  }}
                >
                  <TimelineItem sx={{ gap: 1 }}>
                    <TimelineOppositeContent sx={{ padding: "8px 0px" }}>
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="info" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Eliminado"
                          color="error"
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant="body2" color="text.primary">
                          NM - Nombre tipo de documento 24
                        </Typography>
                        <IconButton color="default" size="small">
                          <History />
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography variant="body3" color="text.primary">
                          Usuario cliente 2
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{ gap: 1 }}>
                    <TimelineOppositeContent sx={{ padding: "8px 0px" }}>
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Prueba del chip"
                          color="warning"
                          size="small"
                          variant="filled"
                        />
                      </Box>
                        
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant="body2" color="text.primary">
                          NM - Nombre tipo de documento 24
                        </Typography>
                        <IconButton color="default" size="small">
                          <History />
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography variant="body3" color="text.primary">
                          Usuario cliente 2
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{ gap: 1 }}>
                    <TimelineOppositeContent sx={{ padding: "8px 0px" }}>
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Creado"
                          color="info"
                          size="small"
                          variant="filled"
                        />
                      </Box>
                        
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant="body2" color="text.primary">
                          NM - Nombre tipo de documento 24
                        </Typography>
                        <IconButton color="default" size="small">
                          <History />
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography variant="body3" color="text.primary">
                          Usuario cliente 2
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{ gap: 1 }}>
                    <TimelineOppositeContent sx={{ padding: "8px 0px" }}>
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Asignado"
                          color="secondary"
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant="body2" color="text.primary">
                          NM - Nombre tipo de documento 24
                        </Typography>
                        <IconButton color="default" size="small">
                          <History />
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography variant="body3" color="text.primary">
                          Usuario cliente 2
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "grey.100" }}
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  variant="subtitle2"
                  color="texy.primary"
                  sx={{ paddingRight: 2 }}
                >
                  Año 2023
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign={"center"}
                >
                  Última modificación: 10/05/2024
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "grey.100" }}>
                <Timeline  sx={{
                    padding: 0,
                    [`& .${timelineOppositeContentClasses.root}`]: {
                      flex: 0.2,
                    },
                  }}>
                 <TimelineItem sx={{ gap: 1 }}>
                    <TimelineOppositeContent sx={{ padding: "8px 0px" }}>
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="info" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Eliminado"
                          color="error"
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant="body2" color="text.primary">
                          NM - Nombre tipo de documento 24
                        </Typography>
                        <IconButton color="default" size="small">
                          <History />
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography variant="body3" color="text.primary">
                          Usuario cliente 2
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                  </Timeline>
              </AccordionDetails>
            </Accordion>
          </Box>
        }
      />
    </div>
  );
}
