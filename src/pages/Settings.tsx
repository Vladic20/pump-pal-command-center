
import React from 'react';
import MainLayout from '../components/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Token Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="token-select">Current Token</Label>
                <Select defaultValue="pepe">
                  <SelectTrigger id="token-select">
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pepe">PEPE</SelectItem>
                    <SelectItem value="doge">DOGE</SelectItem>
                    <SelectItem value="shiba">SHIBA</SelectItem>
                    <SelectItem value="custom">Custom Token</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="custom-token-address">Custom Token Address</Label>
                <Input id="custom-token-address" placeholder="Enter token contract address" />
              </div>
              
              <Button>Update Token</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              
              <Button>Change Password</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Telegram Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="telegram-token">Bot Token</Label>
                <Input id="telegram-token" placeholder="Enter Telegram Bot Token" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telegram-chat-id">Chat ID</Label>
                <Input id="telegram-chat-id" placeholder="Enter Telegram Chat ID" />
              </div>
              
              <Button>Save Telegram Settings</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>System Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language-select">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language-select">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ru">Russian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gas-price">Default Gas Price (Gwei)</Label>
                <Input id="gas-price" type="number" defaultValue="5" />
              </div>
              
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
