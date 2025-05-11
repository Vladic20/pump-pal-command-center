
import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Образец данных о кошельках
const walletData = [
  { id: 1, address: '8xte3...5Ghj', balance: 3.54, status: 'active' },
  { id: 2, address: '9kLp2...7Fds', balance: 1.27, status: 'active' },
  { id: 3, address: '3mNr5...2Plk', balance: 0.08, status: 'low' },
  { id: 4, address: '7jHt6...1Aqs', balance: 5.12, status: 'active' },
  { id: 5, address: '2fRd9...8Zxc', balance: 0.03, status: 'low' },
];

const Wallets = () => {
  const [searchValue, setSearchValue] = useState('');
  
  // Общий баланс всех кошельков
  const totalBalance = walletData.reduce((sum, wallet) => sum + wallet.balance, 0);
  
  // Фильтрация кошельков по поисковому запросу
  const filteredWallets = searchValue 
    ? walletData.filter(wallet => wallet.address.toLowerCase().includes(searchValue.toLowerCase()))
    : walletData;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Wallet Management</h2>
          <Button className="bg-success hover:bg-success/90">
            Add Wallet
          </Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-sm">
            <Input 
              placeholder="Search wallet address..." 
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
          <div className="ml-4">
            <span className="text-muted-foreground">Total Balance: </span>
            <span className="font-medium">{totalBalance.toFixed(2)} SOL</span>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">#</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Balance (SOL)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWallets.map(wallet => (
                <TableRow key={wallet.id}>
                  <TableCell>{wallet.id}</TableCell>
                  <TableCell className="font-mono">{wallet.address}</TableCell>
                  <TableCell>{wallet.balance.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={wallet.status === 'active' ? 'default' : 'destructive'}
                      className={wallet.status === 'active' ? 'bg-success' : ''}
                    >
                      {wallet.status === 'active' ? 'Active' : 'Low Balance'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm">Fund</Button>
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex justify-end">
          <Button variant="secondary">
            Fund All Wallets
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Wallets;
