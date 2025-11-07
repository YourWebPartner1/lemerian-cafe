import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Sonner from "@/components/ui/sonner"; // <- default import
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
        {/* Global toasters */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <div className="min-h-screen bg-white">
            {/* Navbar stays visible on all pages */}
            <Navbar />

            <Routes>
              <Route path="/" element={<Index />} />
              {/* add other routes here */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
