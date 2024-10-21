import React, { useState } from 'react';
import Head from 'next/head';

interface Trade {
  id: number;
  symbol: string;
  entry: number;
  exit: number;
  quantity: number;
  date: string;
}

export default function Trades() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [newTrade, setNewTrade] = useState<Omit<Trade, 'id'>>({
    symbol: '',
    entry: 0,
    exit: 0,
    quantity: 0,
    date: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTrade(prev => ({ ...prev, [name]: name === 'symbol' ? value : Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrades(prev => [...prev, { ...newTrade, id: Date.now() }]);
    setNewTrade({ symbol: '', entry: 0, exit: 0, quantity: 0, date: '' });
  };

  const deleteTrade = (id: number) => {
    setTrades(prev => prev.filter(trade => trade.id !== id));
  };

  return (
    <>
      <Head>
        <title>Trades - Shoshin Trading Journal</title>
        <meta name="description" content="Manage your trades" />
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Trades</h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="symbol"
              value={newTrade.symbol}
              onChange={handleInputChange}
              placeholder="Symbol"
              className="border p-2"
              required
            />
            <input
              type="number"
              name="entry"
              value={newTrade.entry}
              onChange={handleInputChange}
              placeholder="Entry Price"
              className="border p-2"
              required
            />
            <input
              type="number"
              name="exit"
              value={newTrade.exit}
              onChange={handleInputChange}
              placeholder="Exit Price"
              className="border p-2"
              required
            />
            <input
              type="number"
              name="quantity"
              value={newTrade.quantity}
              onChange={handleInputChange}
              placeholder="Quantity"
              className="border p-2"
              required
            />
            <input
              type="date"
              name="date"
              value={newTrade.date}
              onChange={handleInputChange}
              className="border p-2"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-2">Add Trade</button>
          </div>
        </form>

        <table className="w-full">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Entry</th>
              <th>Exit</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trades.map(trade => (
              <tr key={trade.id}>
                <td>{trade.symbol}</td>
                <td>{trade.entry}</td>
                <td>{trade.exit}</td>
                <td>{trade.quantity}</td>
                <td>{trade.date}</td>
                <td>
                  <button onClick={() => deleteTrade(trade.id)} className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
