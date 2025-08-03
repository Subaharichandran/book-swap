
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { BookPlus, LogOut, Bell, Upload, Book } from "lucide-react";

const SellerHome = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<'dashboard' | 'add'>('dashboard');
  
  // Mock listed books data
  const [listedBooks, setListedBooks] = useState([
    {
      id: "s1",
      title: "Data Structures and Algorithms",
      condition: "Like New",
      listedDate: "2023-10-15",
      price: 450,
      status: "Active"
    },
    {
      id: "s2",
      title: "Chemistry Fundamentals Vol. 2",
      condition: "Good",
      listedDate: "2023-09-28",
      price: 320,
      status: "Sold"
    }
  ]);

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const handleSubmitBook = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Book Listed Successfully",
      description: "Your book has been added to our marketplace.",
    });
    
    // Add mock book to listed books
    setListedBooks(prev => [
      {
        id: `s${prev.length + 1}`,
        title: "New Book Title",
        condition: "Good",
        listedDate: new Date().toISOString().split('T')[0],
        price: 350,
        status: "Active"
      },
      ...prev
    ]);
    
    setActiveView('dashboard');
  };

  return (
    <div className="min-h-screen bg-bookstore-lightgray/20">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-bookstore-darkblue">
            <span className="text-bookstore-purple">Book</span>Swap
            <span className="ml-2 text-sm bg-bookstore-orange text-white px-2 py-1 rounded-md">Seller</span>
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleLogout}
            >
              <LogOut size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {activeView === 'dashboard' ? (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl font-bold">Seller Dashboard</h2>
              <Button 
                onClick={() => setActiveView('add')} 
                className="bg-bookstore-purple hover:bg-bookstore-purple/90 flex items-center gap-2"
              >
                <BookPlus size={18} />
                List New Book
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Books Listed</CardTitle>
                  <CardDescription>Total books you have listed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{listedBooks.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Listings</CardTitle>
                  <CardDescription>Books available for purchase</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{listedBooks.filter(b => b.status === "Active").length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Books Sold</CardTitle>
                  <CardDescription>Successfully sold books</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{listedBooks.filter(b => b.status === "Sold").length}</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Your Listed Books</h3>
            
            {listedBooks.length > 0 ? (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listed Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {listedBooks.map((book) => (
                        <tr key={book.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.condition}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.listedDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              book.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {book.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <Book size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No Books Listed Yet</h3>
                <p className="text-gray-500 mb-4">Start selling your used books by listing them on BookSwap</p>
                <Button 
                  onClick={() => setActiveView('add')} 
                  className="bg-bookstore-purple hover:bg-bookstore-purple/90"
                >
                  List Your First Book
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookPlus size={20} className="text-bookstore-purple" />
                List a New Book
              </CardTitle>
              <CardDescription>
                Enter details of the book you want to sell
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitBook} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="book-title">Book Title</Label>
                  <Input id="book-title" placeholder="Enter the complete title of the book" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" placeholder="Name of the author(s)" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edition">Edition/Year</Label>
                    <Input id="edition" placeholder="E.g., 3rd Edition, 2021" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select>
                      <SelectTrigger>
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
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Provide details about the book's condition, markings, etc." 
                    className="min-h-[100px]" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Selling Price (₹)</Label>
                    <Input id="price" type="number" min="1" placeholder="Enter amount in ₹" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
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
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-10 w-10 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setActiveView('dashboard')}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-bookstore-purple hover:bg-bookstore-purple/90"
                  >
                    List Book
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SellerHome;
