import { useSelector } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Rating } from '@mui/material';

import { useTable } from '../../../hooks/use-table';
import BasicTable from '../../../components/table/basic-table';

const tableHead = [
  { title: 'Image', align: 'left' },
  { title: 'Title', align: 'left' },
  { title: 'Brand', align: 'left' },
  { title: 'Rating', align: 'left' },
  { title: 'Price', align: 'left' },
]

export default function Smartphone() {
  const { dataSource, handleChange, limit } = useTable({
    url: 'https://dummyjson.com/products/category',
    resource: 'smartphones'
  });
  const isLoading = useSelector((state: any) => state.app.isLoading);

  console.log('Smartphone: ', isLoading)

  return (
    <>
      <BasicTable 
        tableHead={tableHead}
        dataSource={dataSource}
        limit={limit}
        handleChange={handleChange}
        renderRow={(row: any) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
             <img src={row.thumbnail} alt="Product" width={50} />
            </TableCell>
            <TableCell align="left">{row.title}</TableCell>
            <TableCell align="left">{row.category}</TableCell>
            <TableCell align="left">{row.price}</TableCell>
            <TableCell align="left">
              <Rating name="read-only" defaultValue={Math.ceil(row.rating)} readOnly />
            </TableCell>
          </TableRow>
        )}
      />
    </>
  );
}