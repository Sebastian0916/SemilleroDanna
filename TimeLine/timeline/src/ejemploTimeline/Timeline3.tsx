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
  Stack,
  AccordionDetails,
  Accordion,
  AccordionSummary,
  ListItemText,
  Autocomplete,
  Badge,
} from "@mui/material";
import { ArrowForward, ExpandMore } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { DrawerComponent, SincoTheme } from "@sinco/react";
import { useState } from "react";

export default function Timeline3() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const options = ["Opción 1", "Opción 2", "Opción 3"];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <DrawerComponent
        width="502px"
        open={isDrawerOpen}
        anchorActions="flex-start"
        onClose={() => false}
        title="Historial de cambios"
        children={
          <Stack >
            <Box pb='12px'>
              <Box display={"flex"} gap={2}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  size="small"
                  sx={{ width: 220 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Option" />
                  )}
                />

                <FormControl size="small" variant="outlined" fullWidth>
                  <InputLabel id="select-label">Label</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select-demo"
                    size="small"
                    label="Label"
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
                  sx={{ paddingRight: 2 }}
                >
                  Año 2025
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
                <Timeline sx={{ padding: 0 }}>
                  <TimelineItem sx={{display:'flex', gap:1.5 }}>
                    <TimelineOppositeContent
                      sx={{ textAlign: "left", flex: 0 ,padding:'8px 0px'}}
                    >
                      <Typography variant="body2" color="text.secondary">
                        08/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <TimelineDot color="secondary" variant="outlined" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 2 ,padding:'8px 0px' }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Modificación"
                          style={{
                            backgroundColor: SincoTheme.palette.warning[100],
                          }}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Abril
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <Typography variant="caption" color="text.disabled">
                            Abierto
                          </Typography>
                          <ArrowForward fontSize="small" color="disabled" />
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="error" />
                            <Typography variant="caption" color="text.primary">
                              Cerrado
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Mayo
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <Typography variant="caption" color="text.disabled">
                            Abierto
                          </Typography>
                          <ArrowForward fontSize="small" color="disabled" />
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="error" />
                            <Typography variant="caption" color="text.primary">
                              Cerrado
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Junio
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <Typography variant="caption" color="text.disabled">
                            Abierto
                          </Typography>
                          <ArrowForward fontSize="small" color="disabled" />
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="error" />
                            <Typography variant="caption" color="text.primary">
                              Cerrado
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.primary">
                          Katherine Lopez Rojas
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{display:'flex', gap:1.5 }}>
                    <TimelineOppositeContent
                      sx={{ textAlign: "left", flex: 0 ,padding:'8px 0px'  }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        08/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{ display: "flex", alignItems: "center"}}
                    >
                      <TimelineDot color="grey" variant="outlined" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 2 ,padding:'8px 0px'}}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Modificación"
                          style={{
                            backgroundColor: SincoTheme.palette.warning[100],
                          }}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Abril
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="error" />
                            <Typography variant="caption" color="text.disabled">
                              Cerrado
                            </Typography>
                          </Stack>
                          <ArrowForward fontSize="small" color="disabled" />
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="success" />
                            <Typography variant="caption" color="text.primary">
                              Abierto
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Mayo
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="error" />
                            <Typography variant="caption" color="text.disabled">
                              Cerrado
                            </Typography>
                          </Stack>
                          <ArrowForward fontSize="small" color="disabled" />
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="success" />
                            <Typography variant="caption" color="text.primary">
                              Abierto
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Junio
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="error" />
                            <Typography variant="caption" color="text.disabled">
                              Cerrado
                            </Typography>
                          </Stack>
                          <ArrowForward fontSize="small" color="disabled" />
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Badge variant="dot" color="success" />
                            <Typography variant="caption" color="text.primary">
                              Abierto
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.primary">
                          Katherine Lopez Rojas
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{display:'flex', gap:1.5}}>
                    <TimelineOppositeContent
                      sx={{ textAlign: "left", flex: 0 ,padding:'8px 0px ' }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        08/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <TimelineDot color="grey" variant="outlined" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 2,padding:'8px 0px'}}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Creación"
                          style={{
                            backgroundColor: SincoTheme.palette.info[100],
                          }}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Abril
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Abril
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ListItemText>
                          <Typography variant="body2" color="text.primary">
                            Abril
                          </Typography>
                          <Typography color="text.secondary">
                            01/04/2024 - 30/04/2024
                          </Typography>
                        </ListItemText>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.primary">
                          Katherine Lopez Rojas
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
                  Año 2024
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign={"center"}
                >
                  Última modificación: 10/05/2024
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "grey.100" }}
              ></AccordionDetails>
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
              <AccordionDetails
                sx={{ backgroundColor: "grey.100" }}
              ></AccordionDetails>
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
                  Año 2022
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign={"center"}
                >
                  Última modificación: 10/05/2024
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "grey.100" }}
              ></AccordionDetails>
            </Accordion>
          </Stack>
          
        }
      />
    </div>
  );
}
