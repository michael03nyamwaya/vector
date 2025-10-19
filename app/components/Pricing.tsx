import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    price: '$99',
    period: '/month',
    features: [
      '500 Business Cards',
      '100 Brochures',
      'Basic Design Support',
      '3-Day Turnaround',
      'Email Support'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Professional',
    price: '$199',
    period: '/month',
    features: [
      '1000 Business Cards',
      '500 Brochures',
      'Premium Design Support',
      '2-Day Turnaround',
      'Priority Support',
      '5% Discount on Additional'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$399',
    period: '/month',
    features: [
      'Unlimited Printing',
      'All Services Included',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Custom Solutions',
      '15% Volume Discount'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Affordable <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your printing needs. All plans include free delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-blue-500 bg-blue-50 transform scale-105'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                  {/*   <BellDot className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> */}
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}