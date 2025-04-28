import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Initial Form",
      description: "Fill out our detailed questionnaire about your career goals and experience."
    },
    {
      number: 2,
      title: "We do the search and curation for list of jobs",
      description: "Our team identifies the best opportunities matching your skills and aspirations."
    },
    {
      number: 3,
      title: "You approve, we do the tedious part (applying)",
      description: "We handle application submissions while you focus on preparation."
    },
    {
      number: 4,
      title: "You get the interviews",
      description: "Receive interview invitations and prep with our expert coaches."
    }
  ];

  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-12">How we work?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-medium text-blue-800 text-center mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Connection lines - visible on desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-200" style={{ top: '88px' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;