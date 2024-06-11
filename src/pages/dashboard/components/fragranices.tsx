import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTable } from '../../../hooks/use-table';
import BasicTable from '../../../components/table/basic-table';

const tableHead = [
  { title: 'Image', align: 'left' },
  { title: 'Title', align: 'left' },
  { title: 'Brand', align: 'left' },
]

export default function Fragranices() {
  const { dataSource, handleChange, limit } = useTable({
    url: 'https://dummyjson.com/products/category',
    resource: 'fragrances'
  });


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
          </TableRow>
        )}
      />
    </>
  );
}