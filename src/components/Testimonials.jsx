import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "This is a perfect example of why I trust MobiusEngine.ai with my job search. Their team transformed my resume and I got 5 interviews in just one week!",
      avatar: "/avatar1.jpg",
    },
    {
      id: 2,
      content: "Using MobiusEngine.ai was the best decision I made for my career. I was stuck in my job search for months before finding them. Now I have multiple offers!",
      avatar: "/avatar2.jpg",
    },
    {
      id: 3,
      content: "I was skeptical at first, but MobiusEngine.ai's service was worth every penny. Their coaching prepared me perfectly for my interviews and I landed my dream job.",
      avatar: "/avatar3.jpg",
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-12">What our clients have to say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-blue-600 text-white p-6 rounded-lg relative"
            >
              <div className="absolute top-4 left-4">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              
              <p className="mt-8 mb-6 text-sm">{testimonial.content}</p>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt="Client" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=Client&background=0D8ABC&color=fff`;
                    }}
                  />
                </div>
                <span className="text-xs text-blue-100">Verified Client</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <a href="#more-testimonials" className="text-blue-600 border border-blue-600 rounded-full px-6 py-2 mr-4 hover:bg-blue-50 transition duration-300">
            More customer testimonials →
          </a>
          <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition duration-300">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
