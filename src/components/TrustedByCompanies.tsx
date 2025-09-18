import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import companiesData from "../../public/content/companies.json";

interface Company {
  id: string;
  name: string;
  logo: string;
  website: string;
}

interface TrustedByCompaniesProps {
  companies?: Company[];
  title?: string;
  subtitle?: string;
  maxGridItems?: number;
  marqueeSpeed?: number;
  showLogos?: boolean;
  enableHover?: boolean;
}

// Animation variants
const containerVariants = {
  hidden: { scale: 0.9, y: 50, opacity: 0 },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "backOut" as const,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { y: 80, scale: 0.7, rotate: -5, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backOut" as const,
    },
  },
};

const companyVariants = {
  hidden: { y: 60, scale: 0.8, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backOut" as const,
    },
  },
};

const TrustedByCompanies: React.FC<TrustedByCompaniesProps> = ({
  companies = companiesData.companies,
  title = companiesData.settings.title,
  subtitle = companiesData.settings.subtitle,
  maxGridItems = companiesData.settings.maxGridItems,
  marqueeSpeed = companiesData.settings.marqueeSpeed,
  showLogos = companiesData.settings.showLogos,
  enableHover = companiesData.settings.enableHover,
}) => {
  const shouldUseMarquee = companies.length > maxGridItems;
  const displayCompanies = shouldUseMarquee
    ? companies
    : companies.slice(0, maxGridItems);

  const CompanyLogo = ({
    company,
    index,
  }: {
    company: Company;
    index: number;
  }) => (
    <motion.div
      className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg border-2 border-neutral-gray-light mx-2 min-w-[200px] h-24"
      variants={companyVariants}
      whileHover={
        enableHover
          ? {
              scale: 1.05,
              y: -5,
              rotate: index % 2 === 0 ? 2 : -2,
              transition: { duration: 0.3, ease: "backOut" },
            }
          : {}
      }
      whileTap={enableHover ? { scale: 0.95 } : {}}
    >
      {showLogos ? (
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={120}
          height={60}
          className="object-contain max-h-18 w-auto"
          onError={(e) => {
            // Fallback to company name if logo fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span class="text-primary font-bold text-lg">${company.name}</span>`;
            }
          }}
        />
      ) : (
        <span className="text-primary font-bold text-lg">{company.name}</span>
      )}
    </motion.div>
  );

  return (
    <motion.div
      id="trusted-companies"
      className="bg-secondary rounded-[80px] w-11/12 max-w-7xl mx-auto py-20 px-6 my-16 relative border-2 border-primary shadow-lg scroll-mt-[120px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10">
        {/* Title Section */}
        <motion.div className="text-center mb-12" variants={titleVariants}>
          <motion.h2
            className="text-primary text-4xl md:text-5xl lg:text-6xl font-fitfully font-bold uppercase mb-4"
            variants={titleVariants}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="text-neutral-black text-lg md:text-xl max-w-2xl mx-auto font-awesome-serif"
              variants={titleVariants}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Companies Display */}
        {shouldUseMarquee ? (
          // Marquee for more than maxGridItems
          <motion.div className="overflow-hidden" variants={companyVariants}>
            <Marquee speed={marqueeSpeed} gradient={false}>
              {displayCompanies.map((company, index) => (
                <CompanyLogo key={company.id} company={company} index={index} />
              ))}
              {/* Duplicate for seamless loop */}
              {displayCompanies.map((company, index) => (
                <CompanyLogo
                  key={`duplicate-${company.id}`}
                  company={company}
                  index={index}
                />
              ))}
            </Marquee>
          </motion.div>
        ) : (
          // Grid for maxGridItems or fewer - handle odd numbers with middle alignment
          <motion.div
            className={`grid gap-6 max-w-4xl mx-auto ${
              displayCompanies.length === 1
                ? "grid-cols-1 justify-items-center"
                : displayCompanies.length === 2
                ? "grid-cols-2"
                : displayCompanies.length === 3
                ? "grid-cols-2"
                : "grid-cols-2"
            }`}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {displayCompanies.map((company, index) => {
              // For 3 items, make the last one span both columns (middle aligned)
              if (displayCompanies.length === 3 && index === 2) {
                return (
                  <motion.div
                    key={company.id}
                    className="col-span-2 flex justify-center"
                    variants={companyVariants}
                  >
                    <CompanyLogo company={company} index={index} />
                  </motion.div>
                );
              }
              return (
                <CompanyLogo key={company.id} company={company} index={index} />
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TrustedByCompanies;
