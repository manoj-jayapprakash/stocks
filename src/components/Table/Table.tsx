import {
  Cell,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

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

export const StockTable = () => {
  const data: StockData[] = [
    {
      id: 1,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '+6%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 2,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '+6%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 3,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '+6%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 4,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '-3%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 5,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '-6%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 6,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '+6%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 7,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '-6%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 8,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '-6%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 9,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '+6%',
      vol: '2M',
      time: '09/09',
    },
    {
      id: 10,
      name: 'Apple',
      symbol: 'AAPL',
      last: '234',
      open: '240',
      high: '260',
      low: '180',
      chg: '6',
      chgper: '-6%',
      vol: '2M',
      time: '09/09',
    },
  ];
  const columnHelper = createColumnHelper<StockData>();
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
  });

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
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
  );
};
