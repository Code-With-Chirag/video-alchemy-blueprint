
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "This AI video platform cut our production time by 80%. We went from spending weeks on a single marketing video to producing multiple high-quality videos in a single afternoon.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechGrowth Inc."
    },
    {
      id: 2,
      quote: "The script generator understands our brand voice perfectly. It's like having a dedicated scriptwriter who knows exactly what we need and delivers instantly.",
      author: "Michael Chen",
      role: "Content Strategist",
      company: "InnovateCorp"
    },
    {
      id: 3,
      quote: "We've been able to scale our video content production without adding headcount. The ROI has been incredible - both in time savings and increased engagement.",
      author: "Aisha Patel",
      role: "Social Media Manager",
      company: "GlobalReach Media"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from marketing professionals who've transformed their video production
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <div className="mb-6 text-teal">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.528 25.928C15.528 22.936 14.256 20.736 11.712 19.328C13.68 17.536 14.664 15.376 14.664 12.848C14.664 9.408 12.4 7.248 9.224 7.248C6.368 7.248 4.024 9.056 4.024 12.336C4.024 15.296 5.944 16.928 8.76 16.928C9.064 16.928 9.544 16.888 9.784 16.848C10.064 17.496 10.064 18.304 9.384 19.408C7.464 19.888 4.104 21.184 4.104 25.568C4.104 28.288 6.048 30.048 8.56 30.048C12.4 30.048 15.528 27.928 15.528 25.928ZM35.544 25.928C35.544 22.936 34.272 20.736 31.728 19.328C33.696 17.536 34.68 15.376 34.68 12.848C34.68 9.408 32.416 7.248 29.24 7.248C26.384 7.248 24.04 9.056 24.04 12.336C24.04 15.296 25.96 16.928 28.776 16.928C29.08 16.928 29.56 16.888 29.8 16.848C30.08 17.496 30.08 18.304 29.4 19.408C27.48 19.888 24.12 21.184 24.12 25.568C24.12 28.288 26.064 30.048 28.576 30.048C32.416 30.048 35.544 27.928 35.544 25.928Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="min-h-[180px]">
              <p className="text-lg md:text-xl mb-6 text-gray-700 italic">
                {testimonials[currentIndex].quote}
              </p>
              
              <div>
                <p className="font-semibold text-navy">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-teal w-5" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 md:-translate-x-6">
            <button
              onClick={goToPrevious}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="text-navy" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 md:translate-x-6">
            <button
              onClick={goToNext}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} className="text-navy" />
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <p className="text-3xl font-bold text-teal">80%</p>
              <p className="text-gray-600">Less Production Time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <p className="text-3xl font-bold text-teal">3.5x</p>
              <p className="text-gray-600">More Videos Created</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <p className="text-3xl font-bold text-teal">65%</p>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <p className="text-3xl font-bold text-teal">40%</p>
              <p className="text-gray-600">Higher Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
