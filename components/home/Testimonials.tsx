import Image from "next/image";

const testimonials = [
  {
    name: "Tom Whiskers",
    role: "Chief Product Officer",
    company: "TabbyTech Enterprises",
    image: "/tom-whiskers.jpg", // Replace with actual image path
    feedback: `The creativity and technical expertise of the Fluid team were instrumental in completely overhauling our corporate website.
               The end result exceeded our expectations and has significantly enhanced our position in the market. 
               Their thorough approach and unwavering support have established them as a crucial partner in our ongoing digital strategy.`,
  },
  {
    name: "Emily Stevens",
    role: "Marketing Director",
    company: "GreenEarth Solutions",
    image: "/emily-stevens.jpg", // Replace with actual image path
    feedback: `Fluid revamped our outdated website, making it modern, responsive, and user-friendly. 
               They took the time to understand our brand, creating a site that reflects our company’s values. 
               The project was completed on time and within budget, resulting in increased traffic and engagement.
               Working with Fluid was a fantastic experience.`,
  },
  {
    name: "Sophia Lee",
    role: "eCommerce Manager",
    company: "RetailPlus",
    image: "/sophia-lee.jpg", // Replace with actual image path
    feedback: `Fluid’s innovative approach transformed our website into a dynamic and engaging platform that truly represents our brand. 
               Their team was incredibly responsive and communicative, ensuring every aspect of our vision was perfectly executed.
               They not only met our expectations but also provided valuable insights that improved the overall project.`,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          Testimonials
        </h3>
        <h2 className="text-4xl font-bold mb-4">
          See what our clients say about us
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover the impact of our work through the voices of our clients.
          Their experiences reflect our commitment to excellence in design and
          development.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:border-teal-500 transition duration-300"
          >
            <p className="text-gray-300 italic mb-6">&quot;{testimonial.feedback}&quot;</p>

            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full border border-gray-600"
              />
              <div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
