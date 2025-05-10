
import React from 'react';
import Logo from './Logo';
import { Button } from './ui/button';
import { X, LayoutDashboard, Bot, Wallet, Settings, FileText, Bell, List } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navItems = [
    { icon: <LayoutDashboard className="sidebar-icon" />, label: 'Dashboard', active: true },
    { icon: <Bot className="sidebar-icon" />, label: 'Bots' },
    { icon: <Wallet className="sidebar-icon" />, label: 'Wallets' },
    { icon: <Settings className="sidebar-icon" />, label: 'Settings' },
    { icon: <FileText className="sidebar-icon" />, label: 'Logs' },
    { icon: <Bell className="sidebar-icon" />, label: 'Notifications' },
    { icon: <List className="sidebar-icon" />, label: 'Raydium Listing' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed md:static inset-y-0 left-0 w-64 bg-card border-r border-border z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Logo />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="md:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start text-left mb-1 ${item.active ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
