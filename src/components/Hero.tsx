
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("features");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 overflow-hidden" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute top-1/3 -left-10 w-72 h-72 bg-teal/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            From Idea to Video in <span className="gradient-text">Hours</span>, Not Weeks
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            No storyboarding. No hiring. All AI. Create professional videos at scale.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal-light text-lg px-8"
              onClick={scrollToDemo}
            >
              Watch Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-navy border-navy hover:bg-navy hover:text-white text-lg px-8"
            >
              Learn More
            </Button>
          </div>
          
          {/* Video Preview Mockup */}
          <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-8 border-white">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-teal/90 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">Preview your AI-generated video</p>
                  </div>
                </div>
              </div>
              <div className="bg-navy p-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="h-4 w-32 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal to-blue-400 rounded-lg opacity-70 blur-xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-tl from-purple-400 to-pink-300 rounded-lg opacity-70 blur-xl -z-10"></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#how-it-works" className="text-navy opacity-70 hover:opacity-100">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
