
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Physics from "./pages/Physics";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LearnProjectile from "./pages/LearnProjectile";
import LearnCollision from "./pages/LearnCollision";
import LearnLogicGate from "./pages/LearnLogicGate";
import LearnCircularMotion from "./pages/LearnCircularMotion";
import LearnMagnetism from "./pages/LearnMagnetism";
import LearnInclinedPlane from "./pages/LearnInclinedPlane";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Learn More Pages */}
          <Route path="/learn/projectile" element={<LearnProjectile />} />
          <Route path="/learn/collision" element={<LearnCollision />} />
          <Route path="/learn/logic-gate" element={<LearnLogicGate />} />
          <Route path="/learn/circular-motion" element={<LearnCircularMotion />} />
          <Route path="/learn/magnetism" element={<LearnMagnetism />} />
          <Route path="/learn/motion-on-an-inclined-plane" element={<LearnInclinedPlane />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
