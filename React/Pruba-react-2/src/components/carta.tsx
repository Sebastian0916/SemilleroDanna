import { Box, Card, CardActions, CardContent, CardHeader, Chip, Divider, IconButton, Stack, Switch, Typography } from "@mui/material";

import { ModeloCartas } from "../Generales/constantes";
import { BadgeOutlined, DeleteOutlineOutlined, EmailOutlined, InventoryOutlined, LocalPhoneOutlined, LocationOnOutlined, ModeEditOutlineOutlined } from "@mui/icons-material";

export const Carta = () => {
    return(
        <Stack>
            {ModeloCartas.map((ModeloCarta,index)=>(
                <Card key={index} 
                sx={{
                    width:"20.458rem",
                    height:"12.25rem"
                }}>
                    <CardHeader title={
                        <Box>
                        <Typography variant="subtitle2" color="text.primary">{ModeloCarta.titulo}</Typography>
                        <Typography variant="caption">{ModeloCarta.subtitulo}</Typography>
                        
                        </Box>
                    }>
                    </CardHeader>
                    <CardContent>
                        <IconButton>< BadgeOutlined/></IconButton>
                        <Typography>NIT: {ModeloCarta.nit}</Typography>

                        <IconButton><EmailOutlined/></IconButton>
                        <Typography>{ModeloCarta.correo}</Typography>

                        <IconButton><LocationOnOutlined/></IconButton>
                        <Typography>{ModeloCarta.direccion}</Typography>
                        
                        <IconButton><LocalPhoneOutlined/></IconButton>
                        <Typography>{ModeloCarta.telefono}</Typography>

                    </CardContent>
                    <Divider/>
                    <CardActions >


                        <Box>
                        <IconButton><InventoryOutlined/></IconButton>
                        <IconButton><ModeEditOutlineOutlined/></IconButton>
                        <IconButton><DeleteOutlineOutlined/></IconButton>
                        </Box>
                    </CardActions>

                </Card>
            ))}
        </Stack>
    )
}