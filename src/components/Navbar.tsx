
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-navy">VideoAI</span>
              <span className="ml-1 text-teal font-bold">Studio</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-navy hover:text-teal transition-colors font-medium">How It Works</a>
            <a href="#features" className="text-navy hover:text-teal transition-colors font-medium">Features</a>
            <a href="#testimonials" className="text-navy hover:text-teal transition-colors font-medium">Testimonials</a>
            <a href="#about" className="text-navy hover:text-teal transition-colors font-medium">About</a>
            <Button className="bg-teal hover:bg-teal-light">Watch Demo</Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              className="text-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-navy hover:text-teal transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-navy hover:text-teal transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-navy hover:text-teal transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="text-navy hover:text-teal transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Button 
              className="bg-teal hover:bg-teal-light w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
