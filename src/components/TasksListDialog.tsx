import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  dueDate?: Date;
  assignedTo: string;
  status: string;
  createdAt: Date;
}

interface TasksListDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tasks: Task[];
  title: string;
  filter?: string;
  onTaskUpdate: (tasks: Task[]) => void;
}

export const TasksListDialog = ({ open, onOpenChange, tasks, title, filter, onTaskUpdate }: TasksListDialogProps) => {
  const getFilteredTasks = () => {
    if (!filter) return tasks;
    return tasks.filter(task => task.status === filter);
  };

  const handleCompleteTask = (taskId: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, status: 'completed' }
        : task
    );
    onTaskUpdate(updatedTasks);
    toast({
      title: "Task Completed",
      description: "Task has been marked as completed.",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'overdue': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'due-this-week': return <Clock className="w-4 h-4 text-orange-500" />;
      case 'due-next-week': return <Calendar className="w-4 h-4 text-blue-500" />;
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">{title}</DialogTitle>
          <DialogDescription>
            {filteredTasks.length} task(s) found
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div key={task.id} className="p-4 border border-border rounded-lg bg-card hover-lift">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(task.status)}
                      <h3 className="font-semibold text-foreground">{task.title}</h3>
                      <Badge variant="outline" className={`text-xs ${
                        task.priority === 'urgent' ? 'border-red-500 text-red-600' :
                        task.priority === 'high' ? 'border-orange-500 text-orange-600' :
                        task.priority === 'medium' ? 'border-blue-500 text-blue-600' : 
                        'border-green-500 text-green-600'
                      }`}>
                        {task.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Assigned to: {task.assignedTo || 'Unassigned'}</span>
                      {task.dueDate && (
                        <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                  {task.status !== 'completed' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCompleteTask(task.id)}
                      className="ml-4 border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Complete
                    </Button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground">No tasks found</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};