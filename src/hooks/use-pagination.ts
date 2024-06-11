import { useState } from 'react';

type IProps = {
  page?: number;
  limit?: number
}

const usePagination = ({ page = 1, limit = 10 }: IProps) => {
  const [_page, setPage] = useState<number>(page);
  const [perPage, setPerPage] = useState<number>(limit);

  const _changePage = (newPage: number) => setPage(newPage);

  const _changePerPage = (newPerPage: number) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  return {
    _page,
    perPage,
    _changePage,
    _changePerPage,
  };
};

export default usePagination;