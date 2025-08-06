import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FolderPlus,
  Upload,
  Search,
  FileText,
  Folder,
  MoreVertical,
  Eye,
  Download,
  Trash2
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const DashboardFiles = () => {
  const [myFiles, setMyFiles] = useState([
    { id: 1, name: 'folder 2', type: 'folder', dateAdded: '8/10/2024', addedBy: 'abhay gehlot (me)' },
    { id: 2, name: 'Folder1', type: 'folder', dateAdded: '8/10/2024', addedBy: 'abhay gehlot (me)' },
    { id: 3, name: 'bill 3.pdf', type: 'file', dateAdded: '4/10/2024', addedBy: 'abhay gehlot (me)' },
  ]);
  
  const [clientFiles, setClientFiles] = useState([
    { id: 1, name: 'Client Tax Documents 2024', type: 'folder', dateAdded: '8/10/2024', addedBy: 'John Smith' },
    { id: 2, name: 'W2_Forms.pdf', type: 'file', dateAdded: '7/10/2024', addedBy: 'Jane Doe' },
  ]);
  
  const [recentFiles, setRecentFiles] = useState([
    { id: 1, name: 'bill 3.pdf', type: 'file', dateAdded: '4/10/2024', addedBy: 'abhay gehlot (me)' },
    { id: 2, name: 'Client Tax Documents 2024', type: 'folder', dateAdded: '8/10/2024', addedBy: 'John Smith' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleUploadFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e: any) => {
      const files = Array.from(e.target.files);
      files.forEach((file: any) => {
        const newFile = {
          id: Date.now() + Math.random(),
          name: file.name,
          type: 'file',
          dateAdded: new Date().toLocaleDateString(),
          addedBy: 'abhay gehlot (me)'
        };
        setMyFiles(prev => [...prev, newFile]);
      });
      toast({
        title: "Files Uploaded",
        description: `${files.length} file(s) uploaded successfully.`,
      });
    };
    input.click();
  };

  const handleCreateFolder = () => {
    const folderName = prompt('Enter folder name:');
    if (folderName) {
      const newFolder = {
        id: Date.now(),
        name: folderName,
        type: 'folder',
        dateAdded: new Date().toLocaleDateString(),
        addedBy: 'abhay gehlot (me)'
      };
      setMyFiles(prev => [...prev, newFolder]);
      toast({
        title: "Folder Created",
        description: `Folder "${folderName}" created successfully.`,
      });
    }
  };

  const FileItem = ({ file, onDelete }: any) => (
    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg border border-border/30">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4">
          <input type="checkbox" className="rounded" />
        </div>
        {file.type === 'folder' ? (
          <Folder className="w-5 h-5 text-blue-500" />
        ) : (
          <FileText className="w-5 h-5 text-red-500" />
        )}
        <div>
          <p className="font-medium text-sm">{file.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>{file.dateAdded}</span>
        <span>{file.addedBy}</span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Eye className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Download className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
            onClick={() => onDelete(file.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  const filterFiles = (files: any[]) => {
    return files.filter(file => 
      file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            File Management
          </h1>
          <p className="text-muted-foreground mt-1">Organize and manage your documents</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={handleUploadFile}
            className="bg-primary hover:bg-primary-dark"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload File
          </Button>
          <Button 
            onClick={handleCreateFolder}
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <FolderPlus className="w-4 h-4 mr-2" />
            New Folder
          </Button>
        </div>
      </div>

      <Tabs defaultValue="my-files" className="w-full">
        <TabsList className="grid w-fit grid-cols-3">
          <TabsTrigger value="my-files">My Files</TabsTrigger>
          <TabsTrigger value="client-files">Client Files</TabsTrigger>
          <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search your files"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <TabsContent value="my-files" className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-primary">My Files</CardTitle>
                  <Badge variant="secondary">{filterFiles(myFiles).length} items</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filterFiles(myFiles).map((file) => (
                    <FileItem 
                      key={file.id} 
                      file={file} 
                      onDelete={(id: number) => setMyFiles(prev => prev.filter(f => f.id !== id))}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="client-files" className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-primary">Client Files</CardTitle>
                  <Badge variant="secondary">{filterFiles(clientFiles).length} items</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filterFiles(clientFiles).map((file) => (
                    <FileItem 
                      key={file.id} 
                      file={file} 
                      onDelete={(id: number) => setClientFiles(prev => prev.filter(f => f.id !== id))}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-primary">Recently Viewed</CardTitle>
                  <Badge variant="secondary">{filterFiles(recentFiles).length} items</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filterFiles(recentFiles).map((file) => (
                    <FileItem 
                      key={file.id} 
                      file={file} 
                      onDelete={(id: number) => setRecentFiles(prev => prev.filter(f => f.id !== id))}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};