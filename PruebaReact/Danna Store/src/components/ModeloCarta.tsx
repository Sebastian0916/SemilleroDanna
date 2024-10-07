import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Divider,
  Box,
  IconButton,
  CardActions
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function UserInfoCard() {
  return (
    <Card sx={{ width: 321, margin: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 0 }}>
        <Avatar sx={{ width: 32, height: 32, marginRight: 1, backgroundColor: '#e0e0e0', color: '#757575' }}>JU</Avatar>
        <Typography variant="body1" sx={{ flexGrow: 1, fontWeight: 500, padding: 0 }}>
          Jhonnatan Ureña Diaz
        </Typography>
        <Button color="primary" sx={{ textTransform: 'none', minWidth: 'auto', padding: '2px 8px', fontSize: '0.875rem' }}>
          Detalle
        </Button>
      </Box>
      <Divider />
      <CardContent sx={{ py: 0.5, px: 0, padding: 0 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '4px 16px', alignItems: 'baseline', padding: 0 }}>
          <Typography variant="body2" color="text.secondary" sx={{ margin: 0, padding: 0 }}>Tipo de documento</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ margin: 0, padding: 0 }}>Número de documento</Typography>
          <Typography variant="body2" sx={{ margin: 0, padding: 0 }}>CC</Typography>
          <Typography variant="body2" sx={{ margin: 0, padding: 0 }}>23532498</Typography>
        </Box>
        <Box sx={{ marginTop: 1, padding: 0 }}>
          <Typography variant="body2" color="text.secondary" sx={{ margin: 0, padding: 0 }}>Cargo</Typography>
          <Typography variant="body2" sx={{ margin: 0, padding: 0 }}>Representante legal administrativo</Typography>
        </Box>
      </CardContent>
      <Divider />

      <CardActions sx={{ padding: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: 0 }}>
          <IconButton size="small" sx={{ padding: 0 }}>
            <EditIcon fontSize="small" sx={{ color: '#757575' }} />
          </IconButton>
          <IconButton size="small" sx={{ padding: 0 }}>
            <DeleteIcon fontSize="small" sx={{ color: '#757575' }} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
