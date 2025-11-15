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

export default App;
