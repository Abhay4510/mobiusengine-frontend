import React from 'react';

const AboutUs = () => {
  const team = [
    {
      name: "Adrian",
      role: "Founder",
      description: "Adrian is the founder of MobiusEngine.ai. He is an accomplished hiring coach with over 15 years of experience in tech and Fortune 500 companies. Having interviewed hundreds of candidates across engineering, product management, and UX roles, Adrian is set to share his insights to give you maximum advantage in securing the role of your dreams.",
      linkedin: "https://linkedin.com/in/adrian"
    },
    {
      name: "Nicole",
      role: "Resume Expert",
      description: "Nicole is a former recruiter at Netflix specializing in creative fields such as design and content strategy. With a 5:1 interview-to-hire placement rate at Netflix due to her eye for talent and ability to spot potential, Nicole brings her expertise to MobiusEngine. She helps candidates position themselves effectively and stand out in competitive job markets. Nicole specializes in helping candidates tell their unique stories.",
      linkedin: "https://linkedin.com/in/nicole"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl font-bold mb-12 text-center">About Us</h2>
        
        <div className="space-y-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 border-2 border-yellow-400">
                {/* Using a UI Avatars fallback */}
                <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
              </div>
              
              <div className="md:flex-1">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-300 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.description}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-300 hover:text-blue-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">Learn more about our team of Advisors →</p>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-blue-300 hover:text-blue-200 mt-2"
          >
            Follow us on LinkedIn <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;