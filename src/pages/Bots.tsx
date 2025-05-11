
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import MainLayout from '../components/MainLayout';

const Bots = () => {
  // Состояние для хранения значений форм ботов
  const [volumeBotEnabled, setVolumeBotEnabled] = useState(false);
  const [microBuysEnabled, setMicroBuysEnabled] = useState(false);
  const [commentBotEnabled, setCommentBotEnabled] = useState(false);
  const [bumpBotEnabled, setBumpBotEnabled] = useState(false);
  
  // Количество активных кошельков (эмуляция данных)
  const walletCount = 12;
  const totalBalance = 45.8;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Bot Management</h2>
        </div>

        <Tabs defaultValue="volume" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="volume">Volume Bot</TabsTrigger>
            <TabsTrigger value="micro">Micro Buys</TabsTrigger>
            <TabsTrigger value="comment">Comment Bot</TabsTrigger>
            <TabsTrigger value="bump">Bump Bot</TabsTrigger>
          </TabsList>
          
          <TabsContent value="volume" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Volume Bot Settings</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="volume-bot-status">Status</Label>
                    <Switch 
                      id="volume-bot-status" 
                      checked={volumeBotEnabled} 
                      onCheckedChange={setVolumeBotEnabled} 
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="volume-budget">Daily Budget (SOL)</Label>
                  <Input id="volume-budget" type="number" placeholder="0.5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="volume-frequency">Transaction Frequency (mins)</Label>
                  <Input id="volume-frequency" type="number" placeholder="15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="volume-size">Transaction Size Range (SOL)</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input id="volume-size-min" type="number" placeholder="Min: 0.01" />
                    <Input id="volume-size-max" type="number" placeholder="Max: 0.1" />
                  </div>
                </div>
                <Button className="w-full">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="micro" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Micro Buys Bot Settings</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="micro-bot-status">Status</Label>
                    <Switch 
                      id="micro-bot-status" 
                      checked={microBuysEnabled} 
                      onCheckedChange={setMicroBuysEnabled} 
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="micro-budget">Daily Budget (SOL)</Label>
                  <Input id="micro-budget" type="number" placeholder="0.3" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="micro-frequency">Buy Frequency (mins)</Label>
                  <Input id="micro-frequency" type="number" placeholder="5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="micro-size">Buy Size (SOL)</Label>
                  <Input id="micro-size" type="number" placeholder="0.005" />
                </div>
                <Button className="w-full">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="comment" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Comment Bot Settings</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="comment-bot-status">Status</Label>
                    <Switch 
                      id="comment-bot-status" 
                      checked={commentBotEnabled} 
                      onCheckedChange={setCommentBotEnabled} 
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="comment-frequency">Comment Frequency (mins)</Label>
                  <Input id="comment-frequency" type="number" placeholder="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment-templates">Comment Templates</Label>
                  <textarea 
                    id="comment-templates" 
                    className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                    placeholder="Enter comment templates, one per line"
                    defaultValue="This token is mooning! 🚀&#10;Great project, solid team! 💪&#10;Just bought more! 💰&#10;Bullish on this one! 🔥"
                  />
                </div>
                <Button className="w-full">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="bump" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Bump Bot Settings</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="bump-bot-status">Status</Label>
                    <Switch 
                      id="bump-bot-status" 
                      checked={bumpBotEnabled} 
                      onCheckedChange={setBumpBotEnabled} 
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bump-frequency">Bump Frequency (mins)</Label>
                  <Input id="bump-frequency" type="number" placeholder="60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bump-count">Daily Bump Count</Label>
                  <Input id="bump-count" type="number" placeholder="12" />
                </div>
                <Button className="w-full">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Bundler Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">You have <span className="font-medium text-white">{walletCount} wallets</span> configured with a total balance of <span className="font-medium text-white">{totalBalance} SOL</span>.</p>
            <div className="mt-4">
              <Button variant="outline" className="w-full">Manage Wallets</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Bots;
