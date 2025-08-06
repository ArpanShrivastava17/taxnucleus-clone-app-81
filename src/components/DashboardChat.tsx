import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Paperclip, MoreVertical } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

interface Client {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export const DashboardChat = () => {
  const [selectedClient, setSelectedClient] = useState<string>('1');
  const [newMessage, setNewMessage] = useState('');

  const clients: Client[] = [
    {
      id: '1',
      name: 'Abhay Gehlot',
      lastMessage: 'Thank you for the tax consultation',
      timestamp: '02:27 pm',
      unread: 0
    },
    {
      id: '2', 
      name: 'John Smith',
      lastMessage: 'When can we schedule the next meeting?',
      timestamp: '01:15 pm',
      unread: 2
    },
    {
      id: '3',
      name: 'Sarah Johnson', 
      lastMessage: 'I have uploaded the documents',
      timestamp: '11:30 am',
      unread: 1
    }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'Abhay Gehlot',
      content: 'hiii',
      timestamp: '02:27 pm',
      isCurrentUser: false
    }
  ]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true
    };

    setMessages([...messages, message]);
    setNewMessage('');

    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    });
  };

  const selectedClientData = clients.find(c => c.id === selectedClient);

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-6">Chat</h1>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 h-[600px]">
        {/* Client List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Clients</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              <div className="space-y-1">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    onClick={() => setSelectedClient(client.id)}
                    className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors border-b ${
                      selectedClient === client.id ? 'bg-muted' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={client.avatar} />
                        <AvatarFallback>
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <p className="font-medium text-sm truncate">{client.name}</p>
                          <span className="text-xs text-muted-foreground">{client.timestamp}</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{client.lastMessage}</p>
                      </div>
                      {client.unread > 0 && (
                        <div className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                          {client.unread}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-3 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {selectedClientData?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{selectedClientData?.name}</h3>
                  <p className="text-sm text-muted-foreground">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-[400px] p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.isCurrentUser
                          ? 'bg-cyan-500 text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isCurrentUser ? 'text-cyan-100' : 'text-muted-foreground'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-cyan-500 hover:bg-cyan-600"
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};