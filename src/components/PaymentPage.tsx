
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CreditCard, Banknote, CalendarDays } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { getBooksByUserType, SchoolBook, CollegeBook } from "../services/bookData";

const PaymentPage = () => {
  const { userType = "school", paymentType, bookId } = useParams<{ 
    userType: string;
    paymentType: string;
    bookId: string;
  }>();

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [rentalDuration, setRentalDuration] = useState("1");
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Get all books for this user type
  const allBooks = getBooksByUserType(userType);
  
  // Find the specific book
  const book = allBooks.find(b => b.id === bookId);
  if (!book) return <div className="p-8 text-center">Book not found</div>;

  const isBuying = paymentType === "buy";
  const isRenting = paymentType === "rent";
  
  const price = isBuying ? book.buyPrice : book.rentPrice * Number(rentalDuration);
  const deliveryFee = 40;
  const total = price + deliveryFee;

  // For school books, show additional info
  const isSchoolBook = "medium" in book && "grade" in book;
  const isCollegeBook = "department" in book && "semester" in book;

  const handlePayment = () => {
    toast({
      title: "Processing Payment",
      description: "Please wait while we process your payment...",
    });
    
    // Simulate payment processing delay
    setTimeout(() => {
      setShowConfirmation(true);
    }, 1500);
  };

  const handleReturnHome = () => {
    navigate(`/home/${userType}`);
  };

  // Calculate the estimated delivery date (5 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // For rentals, calculate return date
  const returnDate = new Date();
  returnDate.setMonth(returnDate.getMonth() + Number(rentalDuration));
  const formattedReturnDate = returnDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  if (showConfirmation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-bookstore-lightgray p-4">
        <Card className="w-full max-w-lg animate-fade-in">
          <CardHeader className="text-center border-b pb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <CardTitle className="text-2xl text-green-700">Order Confirmed!</CardTitle>
            <CardDescription>
              Your {isBuying ? "purchase" : "rental"} has been successfully processed
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-6">
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-20 h-28 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>
                
                {isSchoolBook && (
                  <p className="text-xs text-gray-500 mt-1">
                    Class {(book as SchoolBook).grade} • {(book as SchoolBook).medium} • {(book as SchoolBook).subject}
                  </p>
                )}
                
                {isCollegeBook && (
                  <p className="text-xs text-gray-500 mt-1">
                    {(book as CollegeBook).department} • Sem {(book as CollegeBook).semester}
                    {(book as CollegeBook).branch && ` • ${(book as CollegeBook).branch}`}
                  </p>
                )}
                
                <p className="mt-2 font-medium">₹{price} {isRenting && `for ${rentalDuration} month${Number(rentalDuration) > 1 ? 's' : ''}`}</p>
              </div>
            </div>
            
            <div className="space-y-3 border-t border-b py-4 my-4">
              <div className="flex gap-2 items-center">
                <CalendarDays size={20} className="text-green-600" />
                <div>
                  <p className="font-medium">Estimated Delivery</p>
                  <p className="text-sm text-gray-600">{formattedDeliveryDate}</p>
                </div>
              </div>
              
              {isRenting && (
                <div className="flex gap-2 items-center">
                  <CalendarDays size={20} className="text-red-600" />
                  <div>
                    <p className="font-medium">Return Date</p>
                    <p className="text-sm text-gray-600">{formattedReturnDate}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600">
                {isBuying ? 
                  "Thank you for your purchase! A confirmation email has been sent to your registered email address." : 
                  "Your rental period has started! Remember to return the book by the due date to avoid late fees."}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-bookstore-purple hover:bg-bookstore-purple/90"
              onClick={handleReturnHome}
            >
              Back to Homepage
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-bookstore-lightgray p-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="outline" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate(`/home/${userType}`)}
        >
          <ArrowLeft size={16} />
          Back to Books
        </Button>

        <h1 className="text-2xl font-bold mb-8">
          {isBuying ? "Buy" : "Rent"} Book
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Book details */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Book Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-24 h-32 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{book.title}</h3>
                    <p className="text-gray-500">{book.author}</p>
                    
                    {/* Show additional details based on book type */}
                    {isSchoolBook && (
                      <div className="mt-1 text-sm">
                        <p>Class: {(book as SchoolBook).grade}</p>
                        <p>Medium: {(book as SchoolBook).medium}</p>
                        <p>Subject: {(book as SchoolBook).subject}</p>
                      </div>
                    )}
                    
                    {isCollegeBook && (
                      <div className="mt-1 text-sm">
                        <p>Department: {(book as CollegeBook).department}</p>
                        {(book as CollegeBook).branch && <p>Branch: {(book as CollegeBook).branch}</p>}
                        <p>Semester: {(book as CollegeBook).semester}</p>
                      </div>
                    )}
                    
                    <p className="text-sm mt-1">Condition: {book.condition}</p>
                    <p className="mt-4 font-medium text-bookstore-purple">
                      {isBuying ? `₹${book.buyPrice} (Buy)` : `₹${book.rentPrice}/month (Rent)`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {isRenting && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Rental Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={rentalDuration} onValueChange={setRentalDuration}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select rental duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Month</SelectItem>
                      <SelectItem value="3">3 Months</SelectItem>
                      <SelectItem value="6">6 Months</SelectItem>
                      <SelectItem value="12">12 Months</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <CalendarDays size={18} className="text-gray-500" />
                    <p className="text-sm text-gray-600">
                      Return by: {formattedReturnDate}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Phone number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Street address" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="State" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input id="pincode" placeholder="PIN code" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column - Payment summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-xl">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price:</span>
                    <span>₹{price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Fee:</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span className="text-bookstore-purple">₹{total}</span>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-3">Payment Method</p>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard size={16} />
                        Online Payment
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                        <Banknote size={16} />
                        Cash on Delivery
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {paymentMethod === "online" && (
                  <div className="space-y-3 border-t pt-3">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name-on-card">Name on Card</Label>
                      <Input id="name-on-card" placeholder="John Doe" />
                    </div>
                  </div>
                )}
                
                <Button 
                  className="w-full bg-bookstore-purple hover:bg-bookstore-purple/90"
                  onClick={handlePayment}
                >
                  Pay ₹{total}
                </Button>
                
                <p className="text-xs text-center text-gray-500">
                  By completing this {isBuying ? "purchase" : "rental"}, you agree to our Terms of Service and Return Policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
