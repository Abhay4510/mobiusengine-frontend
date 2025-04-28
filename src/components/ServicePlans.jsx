import React from 'react';

const ServicePlans = () => {
  const plans = [
    {
      name: 'April Promo',
      price: '$35',
      frequency: '/week',
      features: [
        'Curated job lists for design, product or engineering roles',
        'Up to 20 new listings per week',
        'Weekly metrics on application status',
        'Basic automated application submissions',
        '3 applications per week'
      ],
      highlighted: false,
      btnText: 'Get Started'
    },
    {
      name: 'Starter',
      price: '$50',
      frequency: '/week',
      features: [
        'All the perks of the Promo Plan, plus:',
        'Better resume & cover letter creation',
        'Custom email responses',
        'Extra layer of job search',
        'Up to 10 applications',
        'One application per day'
      ],
      highlighted: true,
      popular: true,
      btnText: 'Get Started'
    },
    {
      name: 'Plus',
      price: '$100',
      frequency: '/week',
      features: [
        'Everything in Starter, with more:',
        '75% acceptance rate',  
        'Apply to jobs same day',
        'Custom cover letters per job',
        'Highest priority application team',
        'Up to 15 applications per week'
      ],
      highlighted: false,
      btnText: 'Get Started'
    },
    {
      name: 'Advance',
      price: '$150',
      frequency: '/week',
      features: [
        'Stay one step ahead with our advanced features:',
        'Same day priority',
        'Custom resume tailoring',
        'Cover letter customization',
        'LinkedIn profile optimization',
        'Access to insider industry insights, feedback & HR contacts'
      ],
      highlighted: false,
      btnText: 'Get Started'
    }
  ];

  return (
    <section id="plans" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-12">Job Application Service Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden ${
                plan.highlighted ? 'border-blue-600 shadow-lg' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center text-xs py-1">
                  Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-500">{plan.frequency}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-2 rounded-md font-medium ${
                    plan.highlighted 
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  } transition duration-300`}
                >
                  {plan.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;