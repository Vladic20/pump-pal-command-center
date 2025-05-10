
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Play, Square } from 'lucide-react';
import { Badge } from '../ui/badge';

interface BotCardProps {
  name: string;
  description: string;
  isActive: boolean;
}

const BotCard = ({ name, description, isActive: initialState }: BotCardProps) => {
  const [isActive, setIsActive] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const toggleBot = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsActive(!isActive);
      setIsLoading(false);
    }, 800);
  };

  return (
    <Card className="card-gradient">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{name}</CardTitle>
          <Badge variant={isActive ? "default" : "secondary"} className={isActive ? "bg-success" : ""}>
            {isActive ? 'Active' : 'Paused'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant={isActive ? "destructive" : "default"} 
          size="sm" 
          className="w-full"
          onClick={toggleBot}
          disabled={isLoading}
        >
          {isLoading ? (
            "Processing..."
          ) : isActive ? (
            <>
              <Square className="h-4 w-4 mr-2" />
              Stop
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Start
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BotCard;
