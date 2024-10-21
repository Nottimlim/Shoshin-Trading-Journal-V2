import { useState } from 'react';
import { Trade } from '../types/Trade';

export const useTrades = () => {
  const [trades, setTrades] = useState<Trade[]>([]);

  const addTrade = (newTrade: Omit<Trade, 'id'>) => {
    setTrades(prev => [...prev, { ...newTrade, id: Date.now() }]);
  };

  const deleteTrade = (id: number) => {
    setTrades(prev => prev.filter(trade => trade.id !== id));
  };

  return { trades, addTrade, deleteTrade };
};
