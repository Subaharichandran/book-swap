
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, GraduationCap, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const UserRoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    toast({
      title: "Role Selected",
      description: `You've selected the ${role} role`,
    });
    setTimeout(() => {
      navigate(`/auth/${role.toLowerCase()}`);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-bookstore-lightgray p-4">
      <div className="w-full max-w-4xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-bookstore-darkblue">
          <span className="text-bookstore-purple">Book</span>Swap
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Your student marketplace for affordable textbooks. Buy, rent, or sell used books and save money while helping the environment.
        </p>

        <h2 className="text-2xl text-center font-medium mb-8">I am a...</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            className={`user-role-btn cursor-pointer ${selectedRole === 'School' ? 'border-2 border-bookstore-purple' : ''}`}
            onClick={() => handleRoleSelect('School')}
          >
            <BookOpen size={48} className="text-bookstore-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">School Student</h3>
            <p className="text-center text-gray-500 text-sm">Find textbooks for your classes at the best prices</p>
          </Card>

          <Card 
            className={`user-role-btn cursor-pointer ${selectedRole === 'College' ? 'border-2 border-bookstore-purple' : ''}`}
            onClick={() => handleRoleSelect('College')}
          >
            <GraduationCap size={48} className="text-bookstore-darkblue mb-4" />
            <h3 className="text-xl font-bold mb-2">College Student</h3>
            <p className="text-center text-gray-500 text-sm">Access affordable textbooks and course materials</p>
          </Card>

          <Card 
            className={`user-role-btn cursor-pointer ${selectedRole === 'Seller' ? 'border-2 border-bookstore-purple' : ''}`}
            onClick={() => handleRoleSelect('Seller')}
          >
            <Store size={48} className="text-bookstore-orange mb-4" />
            <h3 className="text-xl font-bold mb-2">Book Seller</h3>
            <p className="text-center text-gray-500 text-sm">Sell your used books and earn extra money</p>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button 
            className="bg-bookstore-purple hover:bg-bookstore-purple/90 text-white px-8 py-6 text-lg"
            disabled={!selectedRole}
            onClick={() => selectedRole && navigate(`/auth/${selectedRole.toLowerCase()}`)}
          >
            Continue
          </Button>
        </div>
      </div>
      <p className="mt-16 text-center text-sm text-gray-500">
        By continuing, you agree to BookSwap's Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default UserRoleSelection;
