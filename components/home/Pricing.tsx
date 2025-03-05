const pricingPlans = [
    {
      name: "Essential",
      price: "$1477",
      description:
        "Perfect for startups and small businesses looking to establish a strong online presence, the Essential Plan provides access to expert design resources and strategic guidance.",
      features: [
        "Access to a dedicated design team",
        "Monthly strategy calls to align on goals",
        "Regular updates via your preferred channel",
        "Solutions that grow with your business",
        "Pause or cancel anytime",
      ],
    },
    {
      name: "Professional",
      price: "$4477",
      description:
        "Designed for growing businesses requiring comprehensive digital solutions. Covers all aspects of design, development, and marketing to enhance your digital strategy.",
      features: [
        "Comprehensive service covering design, development, and marketing",
        "Bi-weekly deep-dive consultations",
        "Priority scheduling and faster turnaround",
        "Custom integrations and advanced features",
      ],
      mostPopular: true, // Highlights this plan
    },
    {
      name: "Enterprise",
      price: "$9977",
      description:
        "Our most extensive offering, the Enterprise Plan is tailored for large organizations needing full-scale digital transformation with the highest level of support and customization.",
      features: [
        "Full access to all agency resources and personnel",
        "Weekly meetings with our senior strategists",
        "Best-in-class support with dedicated account management",
        "High-priority service for all requests",
      ],
    },
  ];
  
  const Pricing = () => {
    return (
      <section className="bg-black text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            Pricing
          </h3>
          <h2 className="text-4xl font-bold mb-4">Our pricing plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our plans and find the right fit to turn your vision into reality.
          </p>
        </div>
  
        {/* Pricing Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 
                          ${plan.mostPopular ? "border-teal-500 scale-105" : "hover:border-teal-500"} transition duration-300`}
            >
              {/* Badge for Most Popular Plan */}
              {plan.mostPopular && (
                <span className="absolute -top-3 right-4 bg-teal-500 text-xs text-white px-2 py-1 rounded-full">
                  Most Popular
                </span>
              )}
  
              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-teal-400">{plan.name}</h3>
              <p className="text-4xl font-bold mt-2">{plan.price}</p>
              <p className="text-gray-400 mt-2">{plan.description}</p>
  
              {/* Call to Action Button */}
              <button className="mt-6 w-full py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition">
                Get in touch
              </button>
  
              {/* Features List */}
              <ul className="mt-6 space-y-2 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Pricing;
  