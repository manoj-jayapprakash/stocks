type StockData = {
  id: number;
  name: string;
  symbol: string;
  last: number;
  open: number;
  high: number;
  low: number;
  chg: number;
  chgper: string;
  vol: string;
  time: string;
};
export const data: StockData[] = [
  {
    id: 1,
    name: 'Tesla',
    symbol: 'TLS',
    last: Math.floor(Math.random() * 10000 + 1000),
    open: Math.floor(Math.random() * 10000 + 1000),
    high: Math.floor(Math.random() * 10000 + 1000),
    low: Math.floor(Math.random() * 10000 + 1000),
    chg: Math.floor(Math.random() * 10 + 1),
    chgper: '+2%',
    vol: '2M',
    time: '09/09',
  },
  {
    id: 2,
    name: 'Apple',
    symbol: 'AAPL',
    last: Math.floor(Math.random() * 10000 + 1000),
    open: Math.floor(Math.random() * 10000 + 1000),
    high: Math.floor(Math.random() * 10000 + 1000),
    low: Math.floor(Math.random() * 10000 + 1000),
    chg: Math.floor(Math.random() * 10 + 1),
    chgper: '+4%',
    vol: '2M',
    time: '09/09',
  },
  {
    id: 3,
    name: 'Google',
    symbol: 'GGL',
    last: Math.floor(Math.random() * 10000 + 1000),
    open: Math.floor(Math.random() * 10000 + 1000),
    high: Math.floor(Math.random() * 10000 + 1000),
    low: Math.floor(Math.random() * 10000 + 1000),
    chg: Math.floor(Math.random() * 10 + 1),
    chgper: '+7%',
    vol: '2M',
    time: '09/09',
  },
  {
    id: 4,
    name: 'Microsoft',
    symbol: 'MSFT',
    last: Math.floor(Math.random() * 10000 + 1000),
    open: Math.floor(Math.random() * 10000 + 1000),
    high: Math.floor(Math.random() * 10000 + 1000),
    low: Math.floor(Math.random() * 10000 + 1000),
    chg: Math.floor(Math.random() * 10 + 1),
    chgper: '-3%',
    vol: '2M',
    time: '09/09',
  },
  {
    id: 5,
    name: 'Netflix',
    symbol: 'NTF',
    last: Math.floor(Math.random() * 10000 + 1000),
    open: Math.floor(Math.random() * 10000 + 1000),
    high: Math.floor(Math.random() * 10000 + 1000),
    low: Math.floor(Math.random() * 10000 + 1000),
    chg: Math.floor(Math.random() * 10 + 1),
    chgper: '-6%',
    vol: '2M',
    time: '09/09',
  },
  {
    id: 6,
    name: 'Amazon',
    symbol: 'AMZ',
    last: Math.floor(Math.random() * 10000 + 1000),
    open: Math.floor(Math.random() * 10000 + 1000),
    high: Math.floor(Math.random() * 10000 + 1000),
    low: Math.floor(Math.random() * 10000 + 1000),
    chg: Math.floor(Math.random() * 10 + 1),
    chgper: '+6%',
    vol: '2M',
    time: '09/09',
  },
];
