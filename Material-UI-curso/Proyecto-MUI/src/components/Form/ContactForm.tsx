import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const roles = ["JavaScript", "Python", "Java", "C++", "C#"];

const skills = [
  "Desarrollo Web",
  "Análisis de Datos",
  "Gestión de Proyectos",
  "Diseño Gráfico",
  "Comunicación Efectiva",
];

export default function ContactForm() {
  return (
    <Paper>
      <form>
        <FormControl>
          <FormGroup row>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Autocomplete
              options={roles}
              renderInput={(params) => {
                return <TextField {...params} />;
              }}
              getOptionLabel={(roleOption) => `${roleOption}`}
              renderOption={(props, option) => {
                return <li {...props}>{`${option}`}</li>;
              }}
            />
          </FormGroup>
          <FormGroup row>
            <Select
              id="skill-select"
              renderValue={(select: string[]) => select.join(",")}
            >
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <ListItemText primary={skillName} />
                  </MenuItem>
                );
              })}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="date"
                inputFormat="MM/DD/YYYY"
                renderInput={(params) => {
                  return <TextField {...params} />
                }}
                value="abc"
                onChange={() => {}}
              />
            </LocalizationProvider>
          </FormGroup>
          <FormGroup row>
            <FormGroup >
                <FormLabel component="legend">
                    work preference
                </FormLabel>
                <RadioGroup id="preference-type-radio" name="preference" value="work from home">
                    <FormControlLabel control={<Radio/>} label="work from home" value="work from home"/>
                    <FormControlLabel control={<Radio/>} label="in office" value="work from home"/>
                    <FormControlLabel control={<Radio/>} label="work from home" value="work from home"/>

                </RadioGroup>
            </FormGroup>
            <Stack>
                <Button>Submit</Button>
                <Button>Clear</Button>
            </Stack>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
  );
}
