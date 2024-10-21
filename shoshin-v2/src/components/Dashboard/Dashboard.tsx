import React from 'react';
import { useTrades } from '@/hooks/useTrades';

const Dashboard: React.FC = () => {
  const { trades } = useTrades();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p>Welcome to your Shoshin Trading Journal</p>
      <p>Total trades: {trades.length}</p>
      {/* Add more dashboard statistics here */}
    </div>
  );
};

export default Dashboard;
