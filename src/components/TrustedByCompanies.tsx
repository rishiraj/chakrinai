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
      className="flex items-center justify-center p-6 bg-white backdrop-blur-sm rounded-2xl shadow-lg border-2 border-white/20 mx-3 min-w-[180px] h-40"
      variants={companyVariants}
      whileHover={
        enableHover
          ? {
            scale: 1.08,
            y: -8,
            rotate: index % 2 === 0 ? 3 : -3,
            backgroundColor: "rgba(255, 255, 255, 1)",
            transition: { duration: 0.3, ease: "backOut" },
          }
          : {}
      }
      whileTap={enableHover ? { scale: 0.92 } : {}}
    >
      {showLogos ? (
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={100}
          height={50}
          className="object-contain max-h-32 w-auto"
          onError={(e) => {
            // Fallback to company name if logo fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span class="text-primary font-bold text-base">${company.name}</span>`;
            }
          }}
        />
      ) : (
        <span className="text-primary font-bold text-base">{company.name}</span>
      )}
    </motion.div>
  );

  return (
    <motion.div
      id="trusted-companies"
      className="relative w-full py-12 px-6 scroll-mt-[120px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto text-center relative flex flex-col items-center justify-center">
        {/* Snarky Title Section - Subtitle Style */}
        <motion.div className="mb-8" variants={titleVariants}>
          <motion.div
            className="text-white font-caption-handwriting text-2xl md:text-4xl lg:text-5xl font-normal mb-4"
            variants={titleVariants}
          >
            ( the recruiters )
          </motion.div>
          <motion.div
            className="text-white font-fitfully text-3xl md:text-5xl lg:text-6xl font-normal uppercase leading-tight"
            variants={titleVariants}
          >
            Trusted by companies at
          </motion.div>
          {/* {subtitle && (
            <motion.p
              className="text-white/80 text-base font-hind-siliguri md:text-lg max-w-2xl mx-auto font-awesome-serif mt-4"
              variants={titleVariants}
            >
              {subtitle}
            </motion.p>
          )} */}
        </motion.div>

        {/* Companies Display */}
        {shouldUseMarquee ? (
          // Marquee for more than maxGridItems
          <motion.div className="overflow-hidden w-full" variants={companyVariants}>
            <Marquee speed={marqueeSpeed} gradient={false} className="py-4">
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
            className={`grid gap-6 max-w-4xl mx-auto ${displayCompanies.length === 1
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
