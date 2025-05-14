
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thanks for joining our early access list!", {
        description: "We'll notify you when you're granted access.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Video Production?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join our early access program and be among the first to experience the future of AI-powered video creation.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/20">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 flex-grow"
              />
              <Button 
                type="submit" 
                className="bg-teal hover:bg-teal-light text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join Early Access"}
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-blue-100">
              See instant results with our AI video platform. No credit card required.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 border border-white/20"
            >
              Schedule a Demo
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 border border-white/20"
            >
              View Pricing
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 border border-white/20"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
