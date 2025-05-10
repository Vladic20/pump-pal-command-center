
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Logo from './Logo';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      if (email && password) {
        onLogin();
      } else {
        setError('Please enter both email and password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark p-4">
      <Card className="w-full max-w-md animate-fade-in card-gradient">
        <CardHeader className="flex items-center">
          <Logo className="mb-4" />
          <h1 className="text-xl">Sign in to your account</h1>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm mb-1">Password</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full"
                />
              </div>
              
              {error && (
                <div className="text-error text-sm">{error}</div>
              )}
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Forgot your password?
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
