import { useState } from "react";
import { DrawerComponent, SincoTheme } from "@sinco/react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { ExpandMore, History } from "@mui/icons-material";

export default function Timeline1() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <DrawerComponent
        onClose={toggleDrawer(false)}
        anchorActions="flex-end"
        title="Historial de cambios"
        open={isDrawerOpen}
        width="502px"
        children={
          <Box>
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
                <Timeline sx={{ padding: 0 }}>
                  <TimelineItem sx={{ display: "flex", gap: 1.5 }}>
                    <TimelineOppositeContent
                      sx={{ textAlign: "left", flex: 0, padding: "8px 0px" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <TimelineDot color="info" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 2, padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Eliminado"
                          style={{
                            backgroundColor: SincoTheme.palette.error[100],
                          }}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
  <Typography variant="body2" color="text.primary">
    NM - Nombre tipo de documento 24
  </Typography>
  <IconButton color="default" size="small">
    <History />
  </IconButton>
</Box>
                      <Box>
                        <Typography variant="body2" color="text.primary">
                          Usuario cliente 2
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{ display: "flex", gap: 1.5 }}>
                    <TimelineOppositeContent
                      sx={{ textAlign: "left", flex: 0, padding: "8px 0px" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 2, padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Editado"
                          style={{
                            backgroundColor: SincoTheme.palette.warning[100],
                          }}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
  <Typography variant="body2" color="text.primary">
    NM - Nombre tipo de documento 24
  </Typography>
  <IconButton color="default" size="small">
    <History />
  </IconButton>
</Box>
                      <Box>
                        <Typography variant="body2" color="text.primary">
                          Usuario cliente 2
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{ display: "flex", gap: 1.5 }}>
                    <TimelineOppositeContent
                      sx={{ textAlign: "left", flex: 0, padding: "8px 0px" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 2, padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Creado"
                          style={{
                            backgroundColor: SincoTheme.palette.info[100],
                          }}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
  <Typography variant="body2" color="text.primary">
    NM - Nombre tipo de documento 24
  </Typography>
  <IconButton color="default" size="small">
    <History />
  </IconButton>
</Box>
                      <Box>
                        <Typography variant="body2" color="text.primary">
                          Usuario cliente 2
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem sx={{ display: "flex", gap: 1.5 }}>
                    <TimelineOppositeContent
                      sx={{ textAlign: "left", flex: 0, padding: "8px 0px" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 2, padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Asignado"
                          style={{
                            backgroundColor: SincoTheme.palette.secondary[50],
                          }}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
  <Typography variant="body2" color="text.primary">
    NM - Nombre tipo de documento 24
  </Typography>
  <IconButton color="default" size="small">
    <History />
  </IconButton>
</Box>
                      <Box>
                        <Typography variant="body2" color="text.primary">
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
                <Timeline sx={{ padding: 0 }}>
                  <TimelineItem sx={{ display: "flex", gap: 1.5 }}>
                    <TimelineOppositeContent
                      sx={{ textAlign: "left", flex: 0, padding: "8px 0px" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        12/08/2024
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <TimelineDot color="info" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 2, padding: "8px 0px" }}>
                      <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                        <Typography variant="body2" color="text.secondary">
                          11:30:41 a.m.
                        </Typography>
                        <Chip
                          label="Editado"
                          style={{
                            backgroundColor: SincoTheme.palette.warning[100],
                          }}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
  <Typography variant="body2" color="text.primary">
    NM - Nombre tipo de documento 24
  </Typography>
  <IconButton color="default" size="small">
    <History />
  </IconButton>
</Box>
                      <Box>
                        <Typography variant="body2" color="text.primary">
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
