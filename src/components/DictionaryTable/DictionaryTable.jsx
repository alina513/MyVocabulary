
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';

import Pagination from '../Pagination/Pagination';

import { fetchWords } from '../../redux/words/operation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectWords, selectCurrentPage, selectTotalPage, selectFiltersKeyWord, selectFiltersCategory } from '../../redux/words/selectors';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';
import { EditWordModal } from '../../components/Modal/EditWordModal';
import { useState } from 'react';



export function DictionaryTable() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  
  const handleStatusClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsOpenModal(true);
  };


  const words = useSelector(selectWords);
  const token = useSelector(selectToken);
  const totalPages = useSelector(selectTotalPage);
  const currentPage = useSelector(selectCurrentPage);
  const keyword = useSelector(selectFiltersKeyWord);
  const category = useSelector(selectFiltersCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWords({ token, page: currentPage, keyword, category }));
  }, [dispatch, token, currentPage, keyword, category]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('en', {
      cell: info => info.getValue(),
      header: () => <span>Word</span>,
    }),
    columnHelper.accessor('ua', {
      cell: info => info.getValue(),
      header: () => <span>Translation</span>,
    }),
    columnHelper.accessor('category', {
      header: () => 'Category',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('progress', {
      header: () => <span>Progress</span>,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => (
        <button onClick={() => handleStatusClick(info.row.original)}>
          {info.getValue() || '...'}
        </button>
      ),
    }),
  ];

  const table = useReactTable({
    data: words,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  


  const handlePageChange = (newPage) => {
    dispatch(fetchWords({ token, page: newPage }));
  };
  
  

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <EditWordModal
     isOpenModal={isOpenModal}
     setIsOpenModal={setIsOpenModal}
     wordData={selectedRowData} 
   />

   <Pagination totalPages={totalPages}
        page={currentPage}
        onPageChange={handlePageChange}/>
   
    </div>
     
  );
}
