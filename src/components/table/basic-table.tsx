import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// types
import { ITableHead } from '../../types/table';
import React from 'react';

type IProps = {
  dataSource: any;
  limit: number;
  tableHead: ITableHead[],
  handleChange: (event: SelectChangeEvent) => void
  renderRow: (row: any) => React.ReactNode
}

function BasicTable({ dataSource, limit, tableHead, renderRow, handleChange }: IProps) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHead.map((head, index) => (
                <TableCell key={index} align={head.align as any}>{head.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource.map(renderRow)}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{
        textAlign: 'right',
      }}>
       <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
          <InputLabel id="demo-select-small-label">Limit</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={limit.toString()}
            label="Limit"
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  )
}

export default BasicTable