import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Code, 
  Database, 
  Users, 
  FileText, 
  Upload,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ApiPlayground = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState("students");
  const [requestMethod, setRequestMethod] = useState("GET");
  const [requestBody, setRequestBody] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const apiEndpoints = {
    students: {
      title: "Student Management API",
      description: "CRUD operations for student records with role-based access control",
      baseUrl: "https://api.studentms.demo",
      endpoints: [
        { method: "GET", path: "/api/v1/students", description: "List all students" },
        { method: "POST", path: "/api/v1/students", description: "Create new student" },
        { method: "GET", path: "/api/v1/students/{id}", description: "Get student by ID" },
        { method: "PUT", path: "/api/v1/students/{id}", description: "Update student" },
        { method: "DELETE", path: "/api/v1/students/{id}", description: "Delete student" }
      ],
      sampleData: {
        GET: {
          data: [
            {
              id: "std_001",
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@university.edu",
              major: "Computer Science",
              year: 3,
              gpa: 3.8,
              enrollmentDate: "2021-09-01"
            },
            {
              id: "std_002",
              firstName: "Jane",
              lastName: "Smith",
              email: "jane.smith@university.edu",
              major: "Software Engineering",
              year: 2,
              gpa: 3.9,
              enrollmentDate: "2022-09-01"
            }
          ],
          meta: {
            total: 2,
            page: 1,
            limit: 10
          }
        },
        POST: `{
  "firstName": "Alice",
  "lastName": "Johnson",
  "email": "alice.johnson@university.edu",
  "major": "DevSecOps",
  "year": 1
}`
      }
    },
    decentra: {
      title: "Decentra-Store API",
      description: "Decentralized file storage with IPFS and blockchain verification",
      baseUrl: "https://api.decentra-store.demo",
      endpoints: [
        { method: "POST", path: "/api/v1/files/upload", description: "Upload file to IPFS" },
        { method: "GET", path: "/api/v1/files/{hash}", description: "Retrieve file metadata" },
        { method: "GET", path: "/api/v1/files/{hash}/download", description: "Download file" },
        { method: "POST", path: "/api/v1/contracts/verify", description: "Verify file on blockchain" }
      ],
      sampleData: {
        GET: {
          hash: "QmX8fP9aW2KjD3vR7hN5cM8qT6eL4jK2pZ9wS1uI7oY3nR",
          filename: "security-report.pdf",
          size: "2.4MB",
          uploadDate: "2024-01-15T10:30:00Z",
          verified: true,
          blockchainTx: "0x742d35Cc6cC5a6C2bA1eE8Ac9b4f3D5e8F7a9B2c",
          accessCount: 12
        },
        POST: `{
  "file": "base64_encoded_content",
  "filename": "document.pdf",
  "metadata": {
    "category": "security",
    "tags": ["compliance", "audit"]
  }
}`
      }
    },
    infrastructure: {
      title: "Infrastructure API",
      description: "Terraform state and resource management with security validation",
      baseUrl: "https://api.terraform-modules.demo",
      endpoints: [
        { method: "GET", path: "/api/v1/modules", description: "List available modules" },
        { method: "POST", path: "/api/v1/deploy", description: "Deploy infrastructure" },
        { method: "GET", path: "/api/v1/state/{id}", description: "Get deployment state" },
        { method: "POST", path: "/api/v1/validate", description: "Validate configuration" }
      ],
      sampleData: {
        GET: [
          {
            name: "vpc-secure",
            version: "v2.1.0",
            description: "VPC with security best practices",
            compliance: ["CIS", "SOC2"],
            resources: 15
          },
          {
            name: "eks-hardened",
            version: "v1.8.0", 
            description: "Kubernetes cluster with security hardening",
            compliance: ["CIS", "NIST"],
            resources: 28
          }
        ],
        POST: `{
  "module": "vpc-secure",
  "region": "us-west-2",
  "environment": "production",
  "config": {
    "cidr": "10.0.0.0/16",
    "enableFlowLogs": true,
    "enableNatGateway": true
  }
}`
      }
    }
  };

  const currentApi = apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints];

  const handleSendRequest = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockResponse = {
        status: 200,
        statusText: "OK",
        headers: {
          "Content-Type": "application/json",
          "X-Response-Time": "142ms",
          "X-Rate-Limit": "100/hour"
        },
        data: requestMethod === "GET" ? currentApi.sampleData.GET : {
          success: true,
          message: "Operation completed successfully",
          id: `${selectedEndpoint}_${Date.now()}`
        }
      };
      
      setResponse(mockResponse);
      setIsLoading(false);
      
      toast({
        title: "Request completed",
        description: `${requestMethod} request to ${selectedEndpoint} API successful`,
      });
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Code snippet copied successfully",
    });
  };

  return (
    <section id="api-playground" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            API Playground
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interactive <span className="text-gradient-primary">Backend Demo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Test and explore live APIs from my backend projects. Experience real-time interactions 
            with secure endpoints, data validation, and comprehensive error handling.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* API Selection */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Available APIs</h3>
            {Object.entries(apiEndpoints).map(([key, api]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedEndpoint === key ? 'ring-2 ring-primary/30 border-primary/50' : 'border-border/50 hover:shadow-medium'
                }`}
                onClick={() => setSelectedEndpoint(key)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {key === 'students' && <Users className="h-5 w-5 text-primary" />}
                    {key === 'decentra' && <Database className="h-5 w-5 text-primary" />}
                    {key === 'infrastructure' && <Code className="h-5 w-5 text-primary" />}
                    {api.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {api.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="text-xs">
                    {api.endpoints.length} endpoints
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* API Testing Interface */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  {currentApi.title}
                </CardTitle>
                <CardDescription>
                  {currentApi.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Request Configuration */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="method">HTTP Method</Label>
                    <Select value={requestMethod} onValueChange={setRequestMethod}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GET">GET</SelectItem>
                        <SelectItem value="POST">POST</SelectItem>
                        <SelectItem value="PUT">PUT</SelectItem>
                        <SelectItem value="DELETE">DELETE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endpoint">Endpoint</Label>
                    <Select defaultValue={currentApi.endpoints[0].path}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currentApi.endpoints.map((endpoint, index) => (
                          <SelectItem key={index} value={endpoint.path}>
                            {endpoint.method} {endpoint.path}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="url">Request URL</Label>
                  <Input 
                    id="url"
                    value={`${currentApi.baseUrl}${currentApi.endpoints[0].path}`}
                    readOnly
                    className="font-mono text-sm"
                  />
                </div>

                {(requestMethod === "POST" || requestMethod === "PUT") && (
                  <div className="space-y-2">
                    <Label htmlFor="body">Request Body</Label>
                    <Textarea
                      id="body"
                      placeholder={currentApi.sampleData.POST || "Enter JSON payload..."}
                      value={requestBody}
                      onChange={(e) => setRequestBody(e.target.value)}
                      rows={6}
                      className="font-mono text-sm"
                    />
                  </div>
                )}

                <div className="flex gap-4">
                  <Button 
                    onClick={handleSendRequest}
                    disabled={isLoading}
                    className="flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        Send Request
                      </>
                    )}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setRequestBody(currentApi.sampleData.POST || "")}
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Use Sample
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Display */}
            {response && (
              <Card className="shadow-medium border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {response.status === 200 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                      Response
                    </div>
                    <Badge 
                      variant={response.status === 200 ? "default" : "destructive"}
                      className="text-xs"
                    >
                      {response.status} {response.statusText}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="response" className="w-full">
                    <TabsList>
                      <TabsTrigger value="response">Response</TabsTrigger>
                      <TabsTrigger value="headers">Headers</TabsTrigger>
                      <TabsTrigger value="curl">cURL</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="response" className="space-y-4">
                      <div className="relative">
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2 z-10"
                          onClick={() => copyToClipboard(JSON.stringify(response.data, null, 2))}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{JSON.stringify(response.data, null, 2)}</code>
                        </pre>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="headers" className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        {Object.entries(response.headers).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-1 text-sm">
                            <span className="font-medium">{key}:</span>
                            <span className="text-muted-foreground">{value as string}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="curl" className="space-y-4">
                      <div className="relative">
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2 z-10"
                          onClick={() => copyToClipboard(`curl -X ${requestMethod} "${currentApi.baseUrl}${currentApi.endpoints[0].path}"`)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>
                            {`curl -X ${requestMethod} \\
  "${currentApi.baseUrl}${currentApi.endpoints[0].path}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-token"`}
                            {requestBody && `\\
  -d '${requestBody}'`}
                          </code>
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {/* API Documentation */}
            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Available Endpoints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentApi.endpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm">{endpoint.path}</code>
                      </div>
                      <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full API Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiPlayground;