import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Laptop from './components/laptop';
import Smartphone from './components/smartphone';
import Fragranices from './components/fragranices';
import Button from '@mui/material/Button';

// components
import BasicDialog from './components/basic-dialog';
import ProductList from './components/product-list';

function Dashboard() {
  const dialogRef = React.useRef<any>(null);
  const [value, setValue] = React.useState('laptop');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    if(dialogRef && dialogRef.current) {
      dialogRef.current.openModal();
    }
  };

  console.log("Dashboard  render");

  return (
    <>
      <Box sx={{
        textAlign: 'right',
        marginBottom: 2
      }}>
        <Button variant="contained" onClick={handleClickOpen}>Add Product</Button>
      </Box>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab value="laptop" label="Laptop" />
          <Tab value="smartphone" label="Smartphone" />
          <Tab value="fragrancies" label="Fragrancies" />
        </Tabs>

        <br />

        {value === 'laptop' && <Laptop productId={1} category="laptop" />}

        {value === 'smartphone' && <Smartphone />}

        {value === 'fragrancies' && <Fragranices />}
      </Box>

      <BasicDialog ref={dialogRef} />

      <ProductList />
    </>
  );
}
export default Dashboard
