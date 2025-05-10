
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
}

const StatsCard = ({ title, value, subtitle, icon, trend }: StatsCardProps) => {
  return (
    <Card className="card-gradient">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
        {trend && (
          <div className={`flex items-center text-xs mt-2 ${trend.positive ? 'text-success' : 'text-error'}`}>
            {trend.positive ? '↑' : '↓'}
            <span className="ml-1">{trend.value}%</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
