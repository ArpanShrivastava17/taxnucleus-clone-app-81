import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar,
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  UserPlus
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { TaskDialog } from './TaskDialog';
import { ClientDialog } from './ClientDialog';
import { TasksListDialog } from './TasksListDialog';
import { EventDialog } from './EventDialog';
import { toast } from '@/hooks/use-toast';

const salesData = [
  { month: 'January', sales: 65 },
  { month: 'February', sales: 59 },
  { month: 'March', sales: 80 },
  { month: 'April', sales: 81 },
  { month: 'May', sales: 56 },
  { month: 'June', sales: 55 },
  { month: 'July', sales: 40 }
];

export const DashboardOverview = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [tasks, setTasks] = useState([]);
  const [clients, setClients] = useState([]);
  const [events, setEvents] = useState([]);
  const [showTaskDialog, setShowTaskDialog] = useState(false);
  const [showClientDialog, setShowClientDialog] = useState(false);
  const [showTasksDialog, setShowTasksDialog] = useState(false);
  const [showEventDialog, setShowEventDialog] = useState(false);
  const [tasksDialogTitle, setTasksDialogTitle] = useState('');
  const [tasksDialogFilter, setTasksDialogFilter] = useState('');

  const taskStats = [
    { label: 'Tasks overdue', value: tasks.filter(t => t.status === 'overdue').length, icon: AlertCircle, color: 'text-red-500' },
    { label: 'Due this week', value: tasks.filter(t => t.status === 'due-this-week').length, icon: Clock, color: 'text-orange-500' },
    { label: 'Due next week', value: tasks.filter(t => t.status === 'due-next-week').length, icon: Calendar, color: 'text-blue-500' },
    { label: 'Completed', value: tasks.filter(t => t.status === 'completed').length, icon: CheckCircle, color: 'text-green-500' }
  ];

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    toast({
      title: "Task Created",
      description: `"${task.title}" has been added successfully.`,
    });
  };

  const handleAddClient = (client) => {
    setClients([...clients, client]);
    toast({
      title: "Client Added",
      description: `${client.name} has been added to your client list.`,
    });
  };

  const handleAddEvent = (event) => {
    setEvents([...events, event]);
    toast({
      title: "Event Created",
      description: `"${event.title}" has been scheduled successfully.`,
    });
  };

  const handleViewTasks = (filter = '', title = 'All Tasks') => {
    setTasksDialogFilter(filter);
    setTasksDialogTitle(title);
    setShowTasksDialog(true);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, status: 'completed' }
        : task
    );
    setTasks(updatedTasks);
    toast({
      title: "Task Completed",
      description: "Task has been marked as completed.",
    });
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome, Abhay Singh
          </h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your practice today.</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={() => setShowTaskDialog(true)}
            className="bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
          <Button 
            onClick={() => setShowClientDialog(true)}
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-fit grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taskStats.map((stat, index) => (
              <Card 
                key={index} 
                className="hover-lift gradient-card border-l-4 border-l-primary cursor-pointer transition-all duration-300"
                onClick={() => handleViewTasks(
                  stat.label === 'Tasks overdue' ? 'overdue' :
                  stat.label === 'Due this week' ? 'due-this-week' :
                  stat.label === 'Due next week' ? 'due-next-week' :
                  stat.label === 'Completed' ? 'completed' : '',
                  stat.label
                )}
              >
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

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Calendar Card */}
            <Card className="glass-card hover-lift">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                    <Calendar className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">TODAY</p>
                    <p className="text-2xl font-bold text-primary">
                      {new Date().toLocaleDateString('en-US', { day: 'numeric' })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date().toLocaleDateString('en-US', { month: 'long', weekday: 'long' })}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Your Schedule is open</p>
                    <Button 
                      className="bg-primary hover:bg-primary-dark transition-all duration-300"
                      onClick={() => setShowEventDialog(true)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Event
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Task Overview */}
            <Card className="lg:col-span-2 glass-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div>
                  <CardTitle className="text-xl font-semibold text-primary">Task Analytics</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Track your productivity trends</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => handleViewTasks('', 'All Tasks')}
                >
                  View all tasks
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Line 
                        type="monotone" 
                        dataKey="sales" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border/50">
                  {taskStats.slice(0, 4).map((stat, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-muted/30">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Growth and Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="gradient-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <BarChart3 className="w-5 h-5" />
                  Client Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Track your growth rate</h3>
                      <p className="text-sm text-muted-foreground">
                        Monthly growth tracking for your practice.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                      <p className="text-2xl font-bold text-green-600">{clients.length}</p>
                      <p className="text-sm text-green-700">Total Clients</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                      <p className="text-2xl font-bold text-blue-600">12.3%</p>
                      <p className="text-sm text-blue-700">Growth Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <FileText className="w-5 h-5" />
                  Recent Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                {tasks.length > 0 ? (
                  <div className="space-y-3">
                    {tasks.slice(-3).map((task) => (
                      <div key={task.id} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/30">
                        <div className={`w-3 h-3 rounded-full ${
                          task.priority === 'urgent' ? 'bg-red-500' :
                          task.priority === 'high' ? 'bg-orange-500' :
                          task.priority === 'medium' ? 'bg-blue-500' : 'bg-green-500'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{task.title}</p>
                          <p className="text-xs text-muted-foreground">{task.assignedTo || 'Unassigned'}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {task.priority}
                          </Badge>
                          {task.status !== 'completed' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCompleteTask(task.id)}
                              className="h-6 px-2 text-xs border-green-500 text-green-600 hover:bg-green-50"
                            >
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Complete
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">No tasks yet</p>
                    <Button 
                      onClick={() => setShowTaskDialog(true)}
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create First Task
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Client Sources */}
          <Card className="glass-card hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <TrendingUp className="w-5 h-5" />
                Client Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Track referral sources</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimize your marketing efforts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">Referrals</span>
                    <span className="text-sm font-bold text-primary">45%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">Online</span>
                    <span className="text-sm font-bold text-primary">35%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">Direct</span>
                    <span className="text-sm font-bold text-primary">20%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admin" className="space-y-6 mt-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Admin Panel</CardTitle>
              <CardDescription>Manage your practice settings and configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="h-24 flex flex-col items-center gap-2 hover-lift border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Users className="w-8 h-8 text-primary" />
                  <span className="font-medium">Manage Users</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex flex-col items-center gap-2 hover-lift border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <FileText className="w-8 h-8 text-primary" />
                  <span className="font-medium">System Reports</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex flex-col items-center gap-2 hover-lift border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Plus className="w-8 h-8 text-primary" />
                  <span className="font-medium">Add Integration</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialogs */}
      <TaskDialog 
        open={showTaskDialog} 
        onOpenChange={setShowTaskDialog} 
        onSubmit={handleAddTask} 
      />
      <ClientDialog 
        open={showClientDialog} 
        onOpenChange={setShowClientDialog} 
        onSubmit={handleAddClient} 
      />
      <TasksListDialog
        open={showTasksDialog}
        onOpenChange={setShowTasksDialog}
        tasks={tasks}
        title={tasksDialogTitle}
        filter={tasksDialogFilter}
        onTaskUpdate={setTasks}
      />
      <EventDialog
        open={showEventDialog}
        onOpenChange={setShowEventDialog}
        onSubmit={handleAddEvent}
      />
    </div>
  );
};