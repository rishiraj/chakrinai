import { formLinks } from "@/data/forms";
import { Sprout } from "lucide-react";
import React from "react";
import MicImage from "../../public/assets/mic.svg";
import ResumeImage from "../../public/assets/resume.svg";
import Image from "next/image";
interface RoastMaster {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
}

interface RoastMastersProps {
  roastMasters?: RoastMaster[];
}

const RoastMasters: React.FC<RoastMastersProps> = ({ roastMasters = [] }) => {
  const hasRoastMasters = roastMasters && roastMasters.length > 0;

  return (
    <div
      id="roast-masters"
      className="w-full py-24 text-center  relative scroll-mt-[120px]"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-white font-caption-handwriting text-4xl md:text-6xl lg:text-7xl font-normal italic mb-8">
          ( the roast masters )
        </div>
        <div className="text-secondary font-fitfully text-4xl md:text-6xl lg:text-8xl font-normal uppercase mb-16">
          {hasRoastMasters ? "Meet " : "Join "}
          the Roast Masters
        </div>

        {hasRoastMasters ? (
          // Display roast masters when data is available
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roastMasters.map((master) => (
              <div
                key={master.id}
                className="bg-secondary rounded-[40px] p-8 relative transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white"
                  />
                  {/* Megaphone icon */}
                  <div className="absolute -top-2 -right-2 bg-white rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-neutral-black font-caption-handwriting text-2xl md:text-3xl font-normal italic mb-2">
                  {master.name}
                </h3>
                <p className="text-neutral-black font-merriweather-sans text-base font-medium">
                  {master.title}
                </p>
                {master.bio && (
                  <p className="text-neutral-black font-merriweather-sans text-base md:text-lg mt-4 opacity-80">
                    {master.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Recruitment section when no data is available
          <div className="w-11/12 mx-auto">
            <div className="bg-secondary rounded-[60px] p-12 md:p-16 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
                <Image src={MicImage} alt="mic" className="size-40" />
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
                <Image src={ResumeImage} alt="resume" className="size-40" />
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H13V16H11V12H7V10H11V6H13V10H17V12Z" />
                    </svg>
                  </div>
                  <h3 className="text-neutral-black font-fitfully text-3xl md:text-5xl font-normal uppercase mb-4">
                    Become a Roast Master
                  </h3>
                  <p className="text-neutral-black font-merriweather-sans text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Are you a startup founder, comedian, or industry expert with
                    a knack for constructive roasting? Join our panel of Roast
                    Masters and help shape the next generation of talent.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 mb-10">
                  <div className="text-center w-full ">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h4 className="text-neutral-black font-caption-handwriting text-2xl lg:text-4xl font-normal italic mb-2">
                      Share Your Expertise
                    </h4>
                    <p className="text-neutral-black font-merriweather-sans text-base md:text-lg">
                      Guide job seekers with your industry knowledge
                    </p>
                  </div>
                  <div className="text-center w-full ">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </div>
                    <h4 className="text-neutral-black font-caption-handwriting text-2xl lg:text-4xl font-normal italic mb-2">
                      Build Your Brand
                    </h4>
                    <p className="text-neutral-black font-merriweather-sans text-base md:text-lg">
                      Gain visibility and establish thought leadership
                    </p>
                  </div>
                  <div className="text-center w-full ">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Sprout className="text-white size-8" />
                    </div>
                    <h4 className="text-neutral-black font-caption-handwriting text-2xl lg:text-4xl font-normal italic mb-2">
                      Make an Impact
                    </h4>
                    <p className="text-neutral-black font-merriweather-sans text-base md:text-lg">
                      Help talented individuals land their dream jobs
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center font-caption-handwriting italic text-2xl md:text-4xl">
                  <a
                    href={formLinks.recruiters}
                    target="_blank"
                    className="bg-white rounded-full border-2 border-black px-12 py-4 shadow-button 
                                      transform hover:translate-y-1 hover:shadow-md transition-all duration-150 ease-in-out"
                  >
                    Become a roast master
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoastMasters;
