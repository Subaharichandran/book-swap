
// Book interfaces
export interface BaseBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  buyPrice: number;
  rentPrice: number;
  condition: string;
}

export interface SchoolBook extends BaseBook {
  medium: "CBSE" | "ICSE" | "Matric";
  grade: string;  // Class/Standard: "6", "7", "8", etc.
  subject: string;
}

export interface CollegeBook extends BaseBook {
  department: "Engineering" | "Science" | "Commerce" | "Arts & Humanities";
  semester: string;
  university?: string;
  branch?: "CSE" | "ECE" | "EEE" | "Mechanical" | "Civil" | "Other";  // Engineering branch
}

// School books dataset
export const schoolBooks: SchoolBook[] = [
  {
    id: "s1",
    title: "Mathematics Textbook - Class 10",
    author: "NCERT",
    cover: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGV4dGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 280,
    rentPrice: 50,
    condition: "Good",
    medium: "CBSE",
    grade: "10",
    subject: "Mathematics",
  },
  {
    id: "s2",
    title: "Science for Class 9",
    author: "NCERT",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGV4dGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 320,
    rentPrice: 65,
    condition: "Like New",
    medium: "CBSE",
    grade: "9",
    subject: "Science",
  },
  {
    id: "s3",
    title: "English Literature Reader",
    author: "ICSE Board",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    buyPrice: 250,
    rentPrice: 45,
    condition: "Fair",
    medium: "ICSE",
    grade: "8",
    subject: "English",
  },
  {
    id: "s4",
    title: "Social Studies: Our Past",
    author: "R.D. Sharma",
    cover: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    buyPrice: 300,
    rentPrice: 60,
    condition: "Good",
    medium: "Matric",
    grade: "9",
    subject: "Social Studies",
  },
  {
    id: "s5",
    title: "Physics for Class 11",
    author: "H.C. Verma",
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRleHRib29rfGVufDB8fDB8fHww",
    buyPrice: 450,
    rentPrice: 90,
    condition: "Like New",
    medium: "CBSE",
    grade: "11",
    subject: "Physics",
  },
  {
    id: "s6",
    title: "Biology Foundations",
    author: "S.K. Dhawan",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 380,
    rentPrice: 75,
    condition: "Good",
    medium: "ICSE",
    grade: "12",
    subject: "Biology",
  },
  {
    id: "s7",
    title: "Chemistry Made Easy",
    author: "P.K. Agarwal",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 350,
    rentPrice: 70,
    condition: "Fair",
    medium: "Matric",
    grade: "10",
    subject: "Chemistry",
  },
  {
    id: "s8",
    title: "Mathematics for Class 8",
    author: "R.S. Aggarwal",
    cover: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    buyPrice: 220,
    rentPrice: 40,
    condition: "Good",
    medium: "CBSE",
    grade: "8",
    subject: "Mathematics",
  },
];

// College books dataset
export const collegeBooks: CollegeBook[] = [
  {
    id: "c1",
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 650,
    rentPrice: 120,
    condition: "Good",
    department: "Commerce",
    semester: "3rd",
    branch: "Other",
  },
  {
    id: "c2",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    buyPrice: 850,
    rentPrice: 160,
    condition: "Like New",
    department: "Engineering",
    semester: "4th",
    branch: "CSE",
  },
  {
    id: "c3",
    title: "Organic Chemistry",
    author: "John McMurry",
    cover: "https://images.unsplash.com/photo-1509266272358-7701da638078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    buyPrice: 720,
    rentPrice: 140,
    condition: "Fair",
    department: "Science",
    semester: "2nd",
    branch: "Other",
  },
  {
    id: "c4",
    title: "History of Western Philosophy",
    author: "Bertrand Russell",
    cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 580,
    rentPrice: 100,
    condition: "Good",
    department: "Arts & Humanities",
    semester: "5th",
    branch: "Other",
  },
  {
    id: "c5",
    title: "Fundamentals of Database Systems",
    author: "Ramez Elmasri",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGV4dGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 790,
    rentPrice: 150,
    condition: "Like New",
    department: "Engineering",
    semester: "3rd",
    university: "MIT",
    branch: "CSE",
  },
  {
    id: "c6",
    title: "Financial Accounting",
    author: "David Alexander",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    buyPrice: 620,
    rentPrice: 110,
    condition: "Good",
    department: "Commerce",
    semester: "2nd",
    university: "Harvard",
    branch: "Other",
  },
  {
    id: "c7",
    title: "Microprocessors and Interfacing",
    author: "Douglas V. Hall",
    cover: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    buyPrice: 680,
    rentPrice: 135,
    condition: "Good",
    department: "Engineering",
    semester: "5th",
    branch: "ECE",
  },
  {
    id: "c8",
    title: "Mechanics of Materials",
    author: "R.C. Hibbeler",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3MlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D",
    buyPrice: 720,
    rentPrice: 145,
    condition: "Like New",
    department: "Engineering",
    semester: "4th",
    branch: "Mechanical",
  },
  {
    id: "c9",
    title: "Structural Analysis",
    author: "R. Agor",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 690,
    rentPrice: 140,
    condition: "Good",
    department: "Engineering",
    semester: "5th",
    branch: "Civil",
  },
  {
    id: "c10",
    title: "Power Systems Engineering",
    author: "D.P. Kothari",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    buyPrice: 750,
    rentPrice: 150,
    condition: "Like New",
    department: "Engineering",
    semester: "6th",
    branch: "EEE",
  },
];

// Get books based on user type and filter criteria
export const getBooksByUserType = (
  userType: string,
  filterCategory: string = "all"
): (SchoolBook | CollegeBook)[] => {
  if (userType === "school") {
    if (filterCategory === "all") {
      return schoolBooks;
    }
    return schoolBooks.filter((book) => book.medium === filterCategory);
  } else if (userType === "college") {
    if (filterCategory === "all") {
      return collegeBooks;
    }
    
    // If it's an engineering department, filter by branch
    if (filterCategory === "Engineering") {
      return collegeBooks.filter((book) => book.department === filterCategory);
    }
    
    // For college departments or engineering branches
    return collegeBooks.filter((book) => {
      // Check if it's a department filter
      if (book.department === filterCategory) {
        return true;
      }
      
      // Check if it's a branch filter (for Engineering)
      if (book.department === "Engineering" && 
          "branch" in book && 
          book.branch === filterCategory) {
        return true;
      }
      
      return false;
    });
  }
  return [];
};

// Search books by title or author
export const searchBooks = (
  query: string,
  books: (SchoolBook | CollegeBook)[]
): (SchoolBook | CollegeBook)[] => {
  if (!query) return books;
  
  const lowerQuery = query.toLowerCase();
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery)
  );
};

// Get available categories based on user type
export const getAvailableCategories = (userType: string): string[] => {
  if (userType === "school") {
    return ["all", "CBSE", "ICSE", "Matric"];
  } else if (userType === "college") {
    // Base categories
    const baseCategories = ["all", "Engineering", "Science", "Commerce", "Arts & Humanities"];
    
    // For college, we also want to show engineering branches
    if (collegeBooks.some(book => book.department === "Engineering")) {
      return [...baseCategories, "CSE", "ECE", "EEE", "Mechanical", "Civil"];
    }
    
    return baseCategories;
  }
  return ["all"];
};

// Get available grades/standards for school books
export const getAvailableGrades = (): string[] => {
  const grades = new Set<string>();
  schoolBooks.forEach(book => grades.add(book.grade));
  return Array.from(grades).sort();
};

// Get available subjects for school books
export const getAvailableSubjects = (): string[] => {
  const subjects = new Set<string>();
  schoolBooks.forEach(book => subjects.add(book.subject));
  return Array.from(subjects).sort();
};

// Filter school books by grade and subject
export const filterSchoolBooks = (
  books: SchoolBook[],
  grade?: string,
  subject?: string
): SchoolBook[] => {
  return books.filter(book => 
    (!grade || book.grade === grade) &&
    (!subject || book.subject === subject)
  );
};

// Filter college books by branch
export const filterCollegeBooks = (
  books: CollegeBook[],
  branch?: string
): CollegeBook[] => {
  return books.filter(book => 
    !branch || book.branch === branch
  );
};
