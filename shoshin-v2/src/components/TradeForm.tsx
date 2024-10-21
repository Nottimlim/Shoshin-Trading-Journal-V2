import React from 'react';
import { Trade } from '../types/Trade';

interface TradeFormProps {
  newTrade: Omit<Trade, 'id'>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TradeForm: React.FC<TradeFormProps> = ({ newTrade, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mb-8">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="symbol"
          value={newTrade.symbol}
          onChange={onInputChange}
          placeholder="Symbol"
          className="border p-2"
          required
        />
        <input
          type="number"
          name="entry"
          value={newTrade.entry}
          onChange={onInputChange}
          placeholder="Entry Price"
          className="border p-2"
          required
        />
        <input
          type="number"
          name="exit"
          value={newTrade.exit}
          onChange={onInputChange}
          placeholder="Exit Price"
          className="border p-2"
          required
        />
        <input
          type="number"
          name="quantity"
          value={newTrade.quantity}
          onChange={onInputChange}
          placeholder="Quantity"
          className="border p-2"
          required
        />
        <input
          type="date"
          name="date"
          value={newTrade.date}
          onChange={onInputChange}
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Trade</button>
      </div>
    </form>
  );
};

export default TradeForm;
