import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-12 text-white relative">
      <div className="max-w-4xl mx-auto text-center bg-gray-900 p-12 rounded-xl border border-gray-800 shadow-lg">
        {/* Small Tag */}
        <button className="px-4 py-1.5 text-sm font-medium bg-gray-800 rounded-full shadow-md mb-4">
          Let&apos;s Chat
        </button>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Enhance Your Digital Presence?
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          Connect with our team today to explore how our tailored digital
          solutions can propel your business forward.
        </p>

        {/* CTA Button */}
        <button className="px-6 py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-500 transition duration-300 rounded-lg shadow-md border border-indigo-500">
          Book a call
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
