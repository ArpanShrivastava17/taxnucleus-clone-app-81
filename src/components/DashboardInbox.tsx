import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const DashboardInbox = () => {
  const [activeTab, setActiveTab] = useState('email');
  const [emailForm, setEmailForm] = useState({
    email: '',
    password: '',
    smtpServer: '',
    port: ''
  });

  const handleAddEmailAccount = () => {
    toast({
      title: "Email account added",
      description: "Your email account has been successfully configured.",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Inbox</h1>
        <p className="text-muted-foreground">Manage your communications</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-fit grid-cols-2">
          <TabsTrigger value="email" className="bg-cyan-500 text-white data-[state=active]:bg-cyan-600">
            Email
          </TabsTrigger>
          <TabsTrigger value="confluents">Confluents</TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="mt-6">
          <Card className="max-w-4xl">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <Mail className="w-16 h-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Add email account</h3>
                  <p className="text-muted-foreground">
                    Add your email account to better communicate with your clients.
                  </p>
                </div>
                
                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@domain.com"
                      value={emailForm.email}
                      onChange={(e) => setEmailForm({...emailForm, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={emailForm.password}
                      onChange={(e) => setEmailForm({...emailForm, password: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="smtp">SMTP Server</Label>
                    <Input
                      id="smtp"
                      placeholder="smtp.gmail.com"
                      value={emailForm.smtpServer}
                      onChange={(e) => setEmailForm({...emailForm, smtpServer: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="port">Port</Label>
                    <Input
                      id="port"
                      placeholder="587"
                      value={emailForm.port}
                      onChange={(e) => setEmailForm({...emailForm, port: e.target.value})}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleAddEmailAccount}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  Add email account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="confluents" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Confluents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Confluence integration coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};