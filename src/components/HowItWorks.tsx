
import { FileText, LayoutList, Film } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-teal mb-4" />,
      title: "Script Generation",
      description: "Input your ideas and our AI creates a professional script optimized for engagement."
    },
    {
      icon: <LayoutList className="h-12 w-12 text-teal mb-4" />,
      title: "Storyboard Creation",
      description: "AI transforms your script into a visual storyboard with scene recommendations."
    },
    {
      icon: <Film className="h-12 w-12 text-teal mb-4" />,
      title: "Video Assembly",
      description: "Our engine renders a polished video with visuals, animations, and voice narration."
    }
  ];
  
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform simplifies video creation into three easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 card-hover"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                    <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="currentColor"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            The entire process is automated, saving you countless hours of manual work and thousands in production costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
