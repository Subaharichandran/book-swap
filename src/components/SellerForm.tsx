
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { BookPlus, ArrowLeft, Upload, Store } from "lucide-react";

const SellerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookTitle: "",
    bookDescription: "",
    price: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    category: "",
    condition: "",
    image: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Book Listed Successfully",
      description: "Your book details have been submitted for review.",
    });
    
    navigate('/seller/confirmation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-bookstore-lightgray p-4">
      <div className="container mx-auto max-w-3xl">
        <Button 
          variant="outline" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={16} />
          Back to Role Selection
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-3">
            <Store size={28} className="text-bookstore-orange" />
            <div>
              <CardTitle className="text-2xl">Sell Your Book</CardTitle>
              <CardDescription>Submit your book details and we'll get in touch to arrange collection</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Seller Information</h3>
                <p className="text-sm text-gray-500">Please provide your contact details</p>
              </div>
                
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="border-t pt-6 mt-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Book Details</h3>
                  <p className="text-sm text-gray-500">Tell us about your book</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bookTitle">Book Title</Label>
                <Input 
                  id="bookTitle" 
                  placeholder="Enter the complete title of the book"
                  value={formData.bookTitle}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school">School Textbook</SelectItem>
                      <SelectItem value="college">College Textbook</SelectItem>
                      <SelectItem value="entrance">Entrance Exam</SelectItem>
                      <SelectItem value="reference">Reference Book</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select 
                    value={formData.condition} 
                    onValueChange={(value) => handleSelectChange("condition", value)}
                  >
                    <SelectTrigger id="condition">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="acceptable">Acceptable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bookDescription">Description</Label>
                <Textarea 
                  id="bookDescription" 
                  placeholder="Provide details about the book's condition, markings, etc." 
                  className="min-h-[100px]"
                  value={formData.bookDescription}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Asking Price (₹)</Label>
                  <Input 
                    id="price" 
                    type="number"
                    min="1"
                    placeholder="Enter amount in ₹"
                    value={formData.price}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="border-t pt-6 mt-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Pickup Address</h3>
                  <p className="text-sm text-gray-500">Where should we collect the book from?</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input 
                  id="address" 
                  placeholder="Your street address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city" 
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input 
                    id="state" 
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">PIN Code</Label>
                  <Input 
                    id="pincode" 
                    placeholder="PIN code"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Book Image</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer">
                  <Upload className="mx-auto h-10 w-10 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="mr-2"
                  onClick={() => navigate('/')}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-bookstore-purple hover:bg-bookstore-purple/90"
                >
                  Submit Listing
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerForm;
