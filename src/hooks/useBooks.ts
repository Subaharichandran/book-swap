
import { useState, useMemo } from 'react';
import { 
  getBooksByUserType, 
  searchBooks, 
  BaseBook, 
  SchoolBook, 
  CollegeBook,
  filterSchoolBooks,
  filterCollegeBooks
} from '../services/bookData';

interface UseBooksProps {
  userType: string;
}

export function useBooks({ userType }: UseBooksProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [gradeFilter, setGradeFilter] = useState<string | undefined>(undefined);
  const [subjectFilter, setSubjectFilter] = useState<string | undefined>(undefined);
  const [branchFilter, setbranchFilter] = useState<string | undefined>(undefined);

  const filteredBooks = useMemo(() => {
    let books = getBooksByUserType(userType, activeCategory);
    
    // Apply search filter first
    books = searchBooks(searchQuery, books);
    
    // Apply additional filters based on user type
    if (userType === "school") {
      return filterSchoolBooks(books as SchoolBook[], gradeFilter, subjectFilter);
    } else if (userType === "college" && activeCategory === "Engineering") {
      return filterCollegeBooks(books as CollegeBook[], branchFilter);
    }
    
    return books;
  }, [userType, activeCategory, searchQuery, gradeFilter, subjectFilter, branchFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    // Reset other filters when changing category
    setGradeFilter(undefined);
    setSubjectFilter(undefined);
    setbranchFilter(undefined);
  };

  const handleGradeChange = (grade: string | undefined) => {
    setGradeFilter(grade);
  };

  const handleSubjectChange = (subject: string | undefined) => {
    setSubjectFilter(subject);
  };

  const handleBranchChange = (branch: string | undefined) => {
    setbranchFilter(branch);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setGradeFilter(undefined);
    setSubjectFilter(undefined);
    setbranchFilter(undefined);
  };

  return {
    books: filteredBooks,
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
  };
}
