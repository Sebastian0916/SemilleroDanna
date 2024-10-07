import axios from "axios"

export const fetchEmpleados = async () => {
    const { data } = await axios.get('http://localhost:3004/empleados');
    return data;
  };