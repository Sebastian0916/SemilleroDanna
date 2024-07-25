import{ Card, CardContent, CardHeader }from '@mui/material';
import { ModeloCarta } from '../Generales/InterFaces';

export const VistaCarta: React.FC <ModeloCarta>= ({titulo,children}) =>{
  return(
    <Card>
      <CardHeader title={titulo} />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}