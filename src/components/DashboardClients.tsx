import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  UserPlus,
  Search,
  Phone,
  Mail,
  Calendar,
  Building,
  MoreVertical,
  Users,
  Filter
} from 'lucide-react';
import { ClientDialog } from './ClientDialog';
import { toast } from '@/hooks/use-toast';

export const DashboardClients = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      company: 'Smith Enterprises',
      status: 'active',
      joinDate: '2024-01-15',
      avatar: ''
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      phone: '(555) 987-6543',
      company: 'Johnson & Co',
      status: 'pending',
      joinDate: '2024-02-20',
      avatar: ''
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'mbrown@business.com',
      phone: '(555) 456-7890',
      company: 'Brown Industries',
      status: 'active',
      joinDate: '2024-01-10',
      avatar: ''
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showClientDialog, setShowClientDialog] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleAddClient = (client: any) => {
    const newClient = {
      ...client,
      id: Date.now(),
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0],
      avatar: ''
    };
    setClients([...clients, newClient]);
    toast({
      title: "Client Added",
      description: `${client.name} has been added to your client list.`,
    });
  };

  const filterClients = () => {
    return clients.filter(client => {
      const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           client.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = selectedFilter === 'all' || client.status === selectedFilter;
      
      return matchesSearch && matchesFilter;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ClientCard = ({ client }: { client: any }) => (
    <Card className="hover-lift gradient-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={client.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {client.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg text-foreground">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(client.status)}>
              {client.status}
            </Badge>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>{client.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>{client.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Joined: {new Date(client.joinDate).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button size="sm" className="flex-1 bg-primary hover:bg-primary-dark">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const stats = [
    { label: 'Total Clients', value: clients.length, icon: Users, color: 'text-blue-500' },
    { label: 'Active Clients', value: clients.filter(c => c.status === 'active').length, icon: Users, color: 'text-green-500' },
    { label: 'Pending Clients', value: clients.filter(c => c.status === 'pending').length, icon: Users, color: 'text-yellow-500' },
    { label: 'This Month', value: clients.filter(c => new Date(c.joinDate).getMonth() === new Date().getMonth()).length, icon: Calendar, color: 'text-purple-500' }
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Client Management
          </h1>
          <p className="text-muted-foreground mt-1">Manage your clients and their information</p>
        </div>
        <Button 
          onClick={() => setShowClientDialog(true)}
          className="bg-primary hover:bg-primary-dark"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover-lift gradient-card border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('all')}
          >
            All
          </Button>
          <Button
            variant={selectedFilter === 'active' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('active')}
          >
            Active
          </Button>
          <Button
            variant={selectedFilter === 'pending' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('pending')}
          >
            Pending
          </Button>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterClients().map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>

      {filterClients().length === 0 && (
        <div className="text-center py-12">
          <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg font-medium text-foreground mb-2">No clients found</p>
          <p className="text-muted-foreground mb-4">
            {searchTerm ? 'Try adjusting your search terms' : 'Start by adding your first client'}
          </p>
          <Button 
            onClick={() => setShowClientDialog(true)}
            className="bg-primary hover:bg-primary-dark"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
        </div>
      )}

      <ClientDialog 
        open={showClientDialog} 
        onOpenChange={setShowClientDialog} 
        onSubmit={handleAddClient} 
      />
    </div>
  );
};