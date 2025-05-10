
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '00:00', buys: 4, comments: 2 },
  { name: '06:00', buys: 3, comments: 3 },
  { name: '12:00', buys: 6, comments: 5 },
  { name: '18:00', buys: 8, comments: 7 },
  { name: '24:00', buys: 5, comments: 4 },
];

const timeRanges = ['24H', '7D', '30D', 'All'];

const ActivityChart = () => {
  const [activeRange, setActiveRange] = React.useState('24H');

  return (
    <Card className="card-gradient">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Token Activity</CardTitle>
          <div className="flex items-center space-x-1">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={activeRange === range ? "secondary" : "ghost"}
                size="sm"
                className={`text-xs px-2 h-7 ${
                  activeRange === range
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground'
                }`}
                onClick={() => setActiveRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F252A',
                  borderColor: '#444',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Line
                type="monotone"
                dataKey="buys"
                stroke="#22C55E"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="comments"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
