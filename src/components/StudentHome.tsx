
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, LogOut, Bell, Filter, X } from "lucide-react";
import BookCard from "./BookCard";
import { toast } from "@/components/ui/use-toast";
import { useBooks } from "../hooks/useBooks";
import { 
  getAvailableCategories, 
  getAvailableGrades, 
  getAvailableSubjects 
} from "../services/bookData";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const StudentHome = () => {
  const { userType = "school" } = useParams<{ userType: string }>();
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  // Validate user type
  const validUserType = userType === "school" || userType === "college" ? userType : "school";
  
  // Get available categories for this user type
  const availableCategories = getAvailableCategories(validUserType);
  
  // For school students, get available grades and subjects
  const availableGrades = getAvailableGrades();
  const availableSubjects = getAvailableSubjects();
  
  // Use our custom hook to manage books
  const { 
    books, 
    searchQuery, 
    activeCategory,
    gradeFilter,
    subjectFilter,
    branchFilter,
    handleSearch,
    handleCategoryChange,
    handleGradeChange,
    handleSubjectChange,
    handleBranchChange,
    clearFilters 
  } = useBooks({ userType: validUserType });
  
  const isSchool = validUserType === "school";
  const isCollege = validUserType === "college";

  const handleBuy = (bookId: string) => {
    const book = books.find(b => b.id === bookId);
    if (book) {
      toast({
        title: "Book Selected for Purchase",
        description: `You've selected to buy ${book.title}`,
      });
      navigate(`/payment/${validUserType}/buy/${bookId}`);
    }
  };

  const handleRent = (bookId: string) => {
    const book = books.find(b => b.id === bookId);
    if (book) {
      toast({
        title: "Book Selected for Rental",
        description: `You've selected to rent ${book.title}`,
      });
      navigate(`/payment/${validUserType}/rent/${bookId}`);
    }
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const getWelcomeMessage = () => {
    if (isSchool) {
      return "Find Your Perfect School Book";
    } else if (isCollege) {
      return "Find Your Perfect College Textbook";
    }
    return "Find Your Perfect Book";
  };

  return (
    <div className="min-h-screen bg-bookstore-lightgray/20">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-bookstore-darkblue">
            <span className="text-bookstore-purple">Book</span>Swap
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

      {/* Hero search area */}
      <div className="bg-gradient-to-r from-bookstore-purple/10 to-bookstore-darkblue/10 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {getWelcomeMessage()}
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search by title or author..."
              className="pl-10 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Book listing */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" value={activeCategory} onValueChange={handleCategoryChange}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">Recommended for You</h3>
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter size={16} />
                    <span>Filter</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Books</SheetTitle>
                    <SheetDescription>
                      Narrow down your search with these filters
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    {isSchool && (
                      <>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Class/Grade</h4>
                          <Select value={gradeFilter} onValueChange={handleGradeChange}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Class/Grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={undefined}>All Classes</SelectItem>
                              {availableGrades.map(grade => (
                                <SelectItem key={grade} value={grade}>
                                  Class {grade}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Subject</h4>
                          <Select value={subjectFilter} onValueChange={handleSubjectChange}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={undefined}>All Subjects</SelectItem>
                              {availableSubjects.map(subject => (
                                <SelectItem key={subject} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}
                    
                    {isCollege && activeCategory === "Engineering" && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Branch</h4>
                        <Select value={branchFilter} onValueChange={handleBranchChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={undefined}>All Branches</SelectItem>
                            <SelectItem value="CSE">Computer Science</SelectItem>
                            <SelectItem value="ECE">Electronics</SelectItem>
                            <SelectItem value="EEE">Electrical</SelectItem>
                            <SelectItem value="Mechanical">Mechanical</SelectItem>
                            <SelectItem value="Civil">Civil</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={clearFilters}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <TabsList>
                {availableCategories.map(category => (
                  <TabsTrigger key={category} value={category}>
                    {category === "all" ? "All" : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Show active filters */}
          {(gradeFilter || subjectFilter || branchFilter) && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {gradeFilter && (
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  Class {gradeFilter}
                  <button onClick={() => handleGradeChange(undefined)}>
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {subjectFilter && (
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {subjectFilter}
                  <button onClick={() => handleSubjectChange(undefined)}>
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {branchFilter && (
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {branchFilter}
                  <button onClick={() => handleBranchChange(undefined)}>
                    <X size={14} />
                  </button>
                </div>
              )}
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sm h-6"
                onClick={clearFilters}
              >
                Clear All
              </Button>
            </div>
          )}

          {books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  cover={book.cover}
                  buyPrice={book.buyPrice}
                  rentPrice={book.rentPrice}
                  condition={book.condition}
                  onBuy={handleBuy}
                  onRent={handleRent}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No books found matching your search.</p>
              <Button 
                variant="link" 
                className="mt-4 text-bookstore-purple"
                onClick={clearFilters}
              >
                Clear search and filters
              </Button>
            </div>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default StudentHome;
