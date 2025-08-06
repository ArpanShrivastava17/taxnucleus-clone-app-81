import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Mail, 
  FileText, 
  User, 
  MessageCircle, 
  LogOut,
  Menu,
  Users,
  FolderOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DashboardSidebarProps {
  onLogout: () => void;
}

export const DashboardSidebar = ({ onLogout }: DashboardSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Inbox', href: '/dashboard/inbox', icon: Mail },
    { name: 'Invoices', href: '/dashboard/invoices', icon: FileText },
    { name: 'Chat', href: '/dashboard/chat', icon: MessageCircle },
    { name: 'Clients', href: '/dashboard/clients', icon: Users },
    { name: 'Files', href: '/dashboard/files', icon: FolderOpen },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
  ];

  return (
    <div className={cn(
      "bg-gradient-to-b from-hero-bg to-primary-dark text-white transition-all duration-300 flex flex-col shadow-2xl",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-md flex items-center justify-center shadow-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Taxify
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:bg-white/10 transition-all duration-300"
        >
          <Menu className="w-4 h-4" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 relative group",
                    isActive 
                      ? "bg-gradient-to-r from-accent to-primary text-white shadow-lg shadow-primary/30" 
                      : "text-white/70 hover:bg-white/10 hover:text-white hover:shadow-md",
                    collapsed && "justify-center"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <Button
          variant="ghost"
          size="sm"
          onClick={onLogout}
          className={cn(
            "w-full text-white/70 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300",
            collapsed ? "px-2" : "justify-start"
          )}
        >
          <LogOut className="w-4 h-4" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </div>
  );
};