import React from 'react';

const ResumeServices = () => {
  const services = [
    {
      title: "Resume Rebuild",
      description: "Complete overhaul of your resume by industry professionals",
      price: "$1000",
      frequency: "one time",
      features: [
        "1:1 video meeting",
        "Focused on storytelling, not just presentation",
        "Recruiter & AI optimization scan for ATS",
        "Optimized for your target industry, company or role",
        "Collaborate with our in-house LinkedIn SEO specialists",
        "Unlimited revisions and support for 30 days",
        "Resume folded portfolio-available upon request"
      ],
      btnText: "Get Started"
    },
    {
      title: "Interview Prep",
      description: "Mock interviews and coaching with industry experts",
      price: "$500",
      frequency: "one time",
      features: [
        "2x 1:1 video calls coaching with our coaches",
        "Real-time role-specific feedback",
        "Slide decks, research & behavioral exercises",
        "1:1 emails and follow-up notes—unlimited",
        "Strategic approach to weaknesses and blind spots"
      ],
      btnText: "Get Started"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Resume Building & Coaching</h2>
        <p className="text-center text-gray-600 mb-12">
          Elevate your job search with our premium services for serious professionals looking to elevate their careers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-blue-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                <span className="text-gray-500"> {service.frequency}</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300">
                {service.btnText} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeServices;