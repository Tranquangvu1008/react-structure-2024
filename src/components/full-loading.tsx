import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material'


function FullLoading() {
  const isLoading = useSelector((state: any) => state.app.isLoading);

  if(!isLoading) return null;

  return (
    <Box sx={{ display: 'flex', position: 'fixed', top: '50%', left: '50%', zIndex: 99999, width: '100%' }}>
      <CircularProgress />
    </Box>
  )
}

export default FullLoading