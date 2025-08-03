
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { BookOpen, GraduationCap, Store, ArrowLeft } from "lucide-react";

const SchoolSignupFields = () => {
  const [grade, setGrade] = useState<string>("");
  const grades = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="school-name">School Name</Label>
        <Input id="school-name" placeholder="Enter your school name" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="medium">Medium</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matric">Matric</SelectItem>
              <SelectItem value="cbse">CBSE</SelectItem>
              <SelectItem value="icse">ICSE</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="grade">Class/Grade</Label>
          <Select value={grade} onValueChange={setGrade}>
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              {grades.map((g) => (
                <SelectItem key={g} value={g}>{`Class ${g}`}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 1234567890" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" />
        </div>
      </div>
    </div>
  );
};

const CollegeSignupFields = () => {
  const departments = [
    "Computer Science (CSE)",
    "Electronics (ECE)",
    "Electrical (EEE)",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biotechnology",
    "Information Technology",
    "Aerospace Engineering",
    "Architecture"
  ];
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="college-name">College Name</Label>
        <Input id="college-name" placeholder="Enter your college name" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept.toLowerCase().replace(/\s/g, '-')}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="semester">Semester</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <SelectItem key={sem} value={sem.toString()}>
                  Semester {sem}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 1234567890" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" />
        </div>
      </div>
    </div>
  );
};

const SellerSignupFields = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="+91 1234567890" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Enter your address" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" />
      </div>
    </div>
  </div>
);

const LoginForm = ({ onForgotPassword }: { onForgotPassword: () => void }) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="login-email">Email</Label>
      <Input id="login-email" type="email" placeholder="your@email.com" />
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="login-password">Password</Label>
        <Button 
          variant="link" 
          className="p-0 h-auto text-sm text-bookstore-purple" 
          onClick={onForgotPassword}
        >
          Forgot Password?
        </Button>
      </div>
      <Input id="login-password" type="password" />
    </div>
  </div>
);

const AuthForm = () => {
  const { userType } = useParams<{ userType: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const roleIcon = () => {
    switch (userType) {
      case 'school': return <BookOpen className="text-bookstore-purple" />;
      case 'college': return <GraduationCap className="text-bookstore-darkblue" />;
      case 'seller': return <Store className="text-bookstore-orange" />;
      default: return null;
    }
  };

  const roleTitle = () => {
    switch (userType) {
      case 'school': return "School Student";
      case 'college': return "College Student";
      case 'seller': return "Book Seller";
      default: return "User";
    }
  };

  const handleLogin = () => {
    toast({
      title: "Logging in",
      description: "Processing your login information...",
    });
    // Simulate authentication
    setTimeout(() => {
      navigate(`/home/${userType}`);
    }, 1500);
  };

  const handleSignup = () => {
    toast({
      title: "Account Created",
      description: "Your account has been successfully created!",
    });
    // Simulate authentication
    setTimeout(() => {
      navigate(`/home/${userType}`);
    }, 1500);
  };

  const handleForgotPassword = () => {
    toast({
      title: "Password Reset",
      description: "Check your email for a password reset link",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-bookstore-lightgray p-4">
      <Button 
        variant="outline" 
        className="absolute top-4 left-4 flex items-center gap-2"
        onClick={() => navigate('/')}
      >
        <ArrowLeft size={16} />
        Back
      </Button>
      
      <Card className="w-full max-w-lg shadow-lg animate-fade-in">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          {roleIcon()}
          <div>
            <CardTitle className="text-2xl">{roleTitle()} Account</CardTitle>
            <CardDescription>Access your personalized BookSwap experience</CardDescription>
          </div>
        </CardHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 m-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          
          <CardContent>
            <TabsContent value="login">
              <LoginForm onForgotPassword={handleForgotPassword} />
            </TabsContent>
            
            <TabsContent value="signup">
              {userType === 'school' && <SchoolSignupFields />}
              {userType === 'college' && <CollegeSignupFields />}
              {userType === 'seller' && <SellerSignupFields />}
            </TabsContent>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <Button 
              className="w-full bg-bookstore-purple hover:bg-bookstore-purple/90"
              onClick={activeTab === 'login' ? handleLogin : handleSignup}
            >
              {activeTab === 'login' ? 'Login' : 'Create Account'}
            </Button>
          </CardFooter>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthForm;
