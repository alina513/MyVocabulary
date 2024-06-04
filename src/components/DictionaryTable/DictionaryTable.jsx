import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';

import { fetchWords } from '../../redux/words/operation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectWords } from '../../redux/words/selectors';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';

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
    cell: info => info.getValue() || '...',
  }),
];

export function DictionaryTable() {
  const words = useSelector(selectWords);
  const token = useSelector(selectToken);
  console.log(token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWords({ token }));
  }, [dispatch, token]);


  const table = useReactTable({
    data: words,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
    </div>
  );
}
