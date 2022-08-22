import {
  Cell,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import { RootPage } from '../../pages/RootPage';
import { AddNewStock } from '../AddStock';
import { data } from './data';

type StockData = {
  id: number;
  name: string;
  symbol: string;
  last: string;
  open: string;
  high: string;
  low: string;
  chg: string;
  chgper: string;
  vol: string;
  time: string;
};

export default function StockTable() {
  const columnHelper = createColumnHelper<StockData>();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const renderChangePercent = (value: string) => {
    const commonStyleClass = 'p-1 w-12 text-white text-center rounded-lg ';
    let markup = <p className={`bg-green-600 ${commonStyleClass}`}>{value}</p>;
    if (value.includes('-'))
      markup = <p className={`bg-red-600 ${commonStyleClass}`}>{value}</p>;
    return markup;
  };
  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('symbol', {
      header: 'Symbol',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('last', {
      header: 'Last',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('open', {
      header: 'Open',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('high', {
      header: 'High',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('low', {
      header: 'Low',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('chg', {
      header: 'Change',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('chgper', {
      header: 'Change %',
      cell: (info) => renderChangePercent(info.getValue()),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('vol', {
      header: 'Vol',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('time', {
      header: 'Time',
      footer: (info) => info.column.id,
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <RootPage>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
      <AddNewStock />
    </RootPage>
  );
}
