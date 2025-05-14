
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Features = () => {
  const [activeTab, setActiveTab] = useState("script");
  
  const features = [
    {
      id: "script",
      title: "Script Generation",
      description: "Our AI analyzes your inputs and generates engaging scripts optimized for your target audience.",
      videoPlaceholder: "Script generation preview",
      bulletPoints: [
        "Convert bullet points into professional scripts",
        "Multiple style options (conversational, formal, etc.)",
        "One-click revisions and adjustments",
        "Export to multiple formats"
      ]
    },
    {
      id: "storyboard",
      title: "Storyboard Creation",
      description: "Transform scripts into visual storyboards with AI-suggested scenes, transitions, and visual elements.",
      videoPlaceholder: "Storyboard creation preview",
      bulletPoints: [
        "AI-powered scene visualization",
        "Smart transition suggestions",
        "Custom style templates",
        "Drag-and-drop scene editor"
      ]
    },
    {
      id: "video",
      title: "Video Assembly",
      description: "Our engine automatically renders professional videos with synchronized visuals, text, and audio.",
      videoPlaceholder: "Video assembly preview",
      bulletPoints: [
        "AI-generated voice narration",
        "Dynamic text animations",
        "Smart B-roll selection",
        "Multiple aspect ratio exports"
      ]
    }
  ];

  const currentFeature = features.find(feature => feature.id === activeTab) || features[0];
  
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our AI transforms concepts into professional videos in minutes
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs 
            defaultValue="script" 
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3">
              {features.map(feature => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="text-sm md:text-base"
                >
                  {feature.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {features.map(feature => (
              <TabsContent 
                key={feature.id} 
                value={feature.id}
                className="mt-6 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Video Preview Side */}
                  <div className="bg-navy-light aspect-video flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-teal/90 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <p className="text-white font-medium">{feature.videoPlaceholder}</p>
                    </div>
                  </div>
                  
                  {/* Feature Description Side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    
                    <h4 className="font-semibold text-navy mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {feature.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="text-teal mr-2 mt-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="bg-teal hover:bg-teal-light mt-auto self-start">
                      Watch Full Demo
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Features;
