
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthForm from "./components/AuthForm";
import StudentHome from "./components/StudentHome";
import SellerHome from "./components/SellerHome";
import PaymentPage from "./components/PaymentPage";
import RoleSelection from "./components/RoleSelection";
import SellerForm from "./components/SellerForm";
import SellerConfirmation from "./components/SellerConfirmation";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RoleSelection />} />
            <Route path="/welcome" element={<Index />} />
            <Route path="/auth/:userType" element={<AuthForm />} />
            <Route path="/home/:userType" element={<StudentHome />} />
            <Route path="/payment/:userType/:paymentType/:bookId" element={<PaymentPage />} />
            <Route path="/seller/form" element={<SellerForm />} />
            <Route path="/seller/confirmation" element={<SellerConfirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
