import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Developer",
      imageSrc: "/assets/logo.png",
      index: 0
    },
    {
      name: "John Doe",
      role: "Developer",
      imageSrc: "/assets/logo.png",
      index: 1
    },
    {
      name: "John Doe",
      role: "Developer",
      imageSrc: "/assets/logo.png",
      index: 2
    },
    {
      name: "John Doe",
      role: "Developer",
      imageSrc: "/assets/logo.png",
      index: 3
    }
  ];

  return (
    <div className="w-full py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="bg-secondary border-4 border-black w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={testimonial.imageSrc}
                    alt={`${testimonial.name} testimonial`}
                  />
                </div>
                {/* Megaphone icon */}
                <img
                  className="absolute -right-8 -top-8 w-32 h-32 md:w-40 md:h-40 opacity-80"
                  src="/assets/mic.svg"
                  alt="Megaphone icon"
                />
                {/* Resume icon */}
                <div
                  className="absolute -left-8 -bottom-8 w-32 h-32 md:w-40 md:h-40 opacity-80"
                  style={{ transform: "rotate(-15deg)" }}
                >
                  <img
                    className="w-full h-full"
                    src="/assets/resume.svg"
                    alt="Resume icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-caption-handwriting text-4xl md:text-6xl font-normal italic mb-4">
                  {testimonial.name}
                </div>
                <div className="text-black font-awesome-serif text-2xl md:text-3xl font-normal">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 