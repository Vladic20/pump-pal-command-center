
import React from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import BotCard from '../components/dashboard/BotCard';
import ActivityChart from '../components/dashboard/ActivityChart';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  const bots = [
    {
      name: 'Volume Bot',
      description: 'Simulates trading volume with varying transaction sizes.',
      isActive: true,
    },
    {
      name: 'Micro Buys Bot',
      description: 'Creates many small purchases to improve token visibility.',
      isActive: false,
    },
    {
      name: 'Comment Bot',
      description: 'Posts positive comments about the token on different channels.',
      isActive: false,
    },
    {
      name: 'Bump Bot',
      description: 'Regularly bumps your token position on pump.fun listings.',
      isActive: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <Button className="bg-success hover:bg-success/90">
          Get Started
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Token Rank"
          value="#45"
          subtitle="Improved 5 positions today"
          trend={{ value: 12, positive: true }}
        />
        <StatsCard
          title="24h Trading Volume"
          value="245.8 SOL"
          subtitle="$18,435 USD"
          trend={{ value: 8, positive: true }}
        />
        <StatsCard
          title="Active Bots"
          value="2 / 4"
          subtitle="50% of bots are running"
        />
      </div>

      <ActivityChart />

      <div>
        <h3 className="text-lg font-semibold mb-4">Your Bots</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bots.map((bot, index) => (
            <BotCard
              key={index}
              name={bot.name}
              description={bot.description}
              isActive={bot.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
