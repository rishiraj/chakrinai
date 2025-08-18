import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  imageSrc: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, imageSrc, index }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-start w-[562.27px] absolute left-[120px] top-[3361px]">
      <div className="shrink-0 w-[562.27px] h-[585.98px] static">
        <div className="bg-secondary border border-black border-[9.1px] w-[392.01px] h-[471.14px] absolute left-[70.22px] top-[62.94px] overflow-hidden">
          <img
            className="w-[353.93px] h-[514.8px] absolute left-0 top-[-21.83px]"
            style={{ objectFit: "cover" }}
            src={imageSrc}
            alt={`${name} testimonial`}
          />
        </div>
        <img
          className="w-[180.15px] h-[180.15px] absolute left-[386.05px] top-[372.31px] overflow-visible"
          src={`/assets/career-detail-document-file-info-job-svgrepo-com${index}.svg`}
          alt="Career icon"
        />
        <div
          className="w-[147.35px] h-[147.35px] absolute left-0 top-[38.14px] overflow-hidden"
          style={{ transformOrigin: "0 0", transform: "rotate(-15deg) scale(1, 1)" }}
        >
          <img
            className="w-[89.73%] h-[100.02%] absolute right-[5.13%] left-[5.13%] bottom-[-0.02%] top-[0%] overflow-visible"
            src={`/assets/group${index}.svg`}
            alt="Decorative group"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[31.47px] items-center justify-start shrink-0 w-[319px]">
        <div className="text-white text-center font-caption-handwriting text-heading leading-[89%] font-normal italic">
          {name}
        </div>
        <div className="text-black text-center font-awesome-serif text-[39px] leading-[22.42px] font-normal self-stretch">
          {role}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 