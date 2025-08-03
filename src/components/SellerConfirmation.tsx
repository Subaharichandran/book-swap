
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, CalendarClock, Truck, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SellerConfirmation = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-bookstore-lightgray p-4">
      <Card className="w-full max-w-lg animate-fade-in">
        <CardHeader className="text-center border-b pb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-700">Listing Confirmed!</CardTitle>
          <CardDescription>
            Your book has been successfully listed for sale
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h3 className="font-medium text-lg text-center">What happens next?</h3>
            
            <div className="space-y-6 pt-2">
              <div className="flex gap-3 items-start">
                <div className="bg-bookstore-purple/10 p-2 rounded-full">
                  <CalendarClock className="h-5 w-5 text-bookstore-purple" />
                </div>
                <div>
                  <p className="font-medium">Book Verification</p>
                  <p className="text-sm text-gray-600">We'll schedule a pickup for your book within 2-3 business days.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-bookstore-purple/10 p-2 rounded-full">
                  <Truck className="h-5 w-5 text-bookstore-purple" />
                </div>
                <div>
                  <p className="font-medium">Quality Check</p>
                  <p className="text-sm text-gray-600">Our team will verify the condition of your book and approve it for listing.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-bookstore-purple/10 p-2 rounded-full">
                  <CreditCard className="h-5 w-5 text-bookstore-purple" />
                </div>
                <div>
                  <p className="font-medium">Payment Processing</p>
                  <p className="text-sm text-gray-600">Once your book is sold, we'll transfer the money to your preferred payment method.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-bookstore-lightgray/30 p-4 rounded-lg mt-6">
            <p className="text-sm text-center">You'll receive a confirmation email shortly with your listing details and a reference number for tracking.</p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-3">
          <Button 
            className="w-full bg-bookstore-purple hover:bg-bookstore-purple/90 flex items-center justify-center gap-2"
            onClick={() => navigate('/')}
          >
            Back to Home
            <ArrowRight size={16} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SellerConfirmation;
