<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import PaymentStatus from "./pages/PaymentStatus";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/payment-status" element={<PaymentStatus />} />


      </Routes>
    </BrowserRouter>
  );
}
=======
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Sonner from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <div className="min-h-screen bg-white text-gray-900">
            {/* Navbar visible globally */}
            <Navbar />

            <style>{`
              html { scroll-behavior: smooth; }
            `}</style>

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
>>>>>>> 67fe7313bdaee1a1ebb4fdc684c358f504de906a

export default App;
