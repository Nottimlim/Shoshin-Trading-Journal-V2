import React from 'react';
import { Trade } from '../types/Trade';

interface TradeListProps {
  trades: Trade[];
  onDelete: (id: number) => void;
}

const TradeList: React.FC<TradeListProps> = ({ trades, onDelete }) => {
  return (
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
              <button onClick={() => onDelete(trade.id)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TradeList;
