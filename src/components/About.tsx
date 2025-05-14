
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're democratizing video creation by empowering marketers to produce professional content without specialized skills or expensive resources.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our team of AI engineers and video production experts have built a platform that delivers agency-quality results in a fraction of the time and cost.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                  <span className="text-navy font-medium">AI Technologies</span>
                </div>
                <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                  <span className="text-navy font-medium">Video Production</span>
                </div>
                <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                  <span className="text-navy font-medium">Content Creation</span>
                </div>
                <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100">
                  <span className="text-navy font-medium">Marketing Solutions</span>
                </div>
              </div>
              
              <Button className="bg-teal hover:bg-teal-light">Learn More About Us</Button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="bg-gray-100 rounded-lg h-40 mb-4"></div>
                    <div className="bg-gray-100 rounded-lg h-32"></div>
                  </div>
                  <div>
                    <div className="bg-gray-100 rounded-lg h-28 mb-4"></div>
                    <div className="bg-gray-100 rounded-lg h-44"></div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                  <p className="text-gray-600">
                    A diverse group of AI specialists, video professionals, and marketing experts
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 -right-6 w-48 h-48 bg-teal/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
