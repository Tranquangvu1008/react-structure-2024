import { SelectChangeEvent } from "@mui/material";
import React from "react";

type IProps = {
  resource: string;
  url: string
}

export const useTable = ({ resource, url }: IProps) => {
  const [dataSource, setDataSource] = React.useState([]);
  const [limit, setLimit] = React.useState(1);
  
  const handleChange = (event: SelectChangeEvent) => {
    setLimit(Number(event.target.value));
  };

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${url}/${resource}?limit=${limit}`)
      const data = await res.json();
      setDataSource(data.products);
    }
    fetchData()
  }, [limit])

  return {
    limit,
    dataSource,
    handleChange
  }
}