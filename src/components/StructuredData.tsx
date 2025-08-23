import Script from 'next/script';
import { generateStructuredData } from '@/lib/metadata';

interface StructuredDataProps {
  type: 'Organization' | 'Event' | 'WebSite';
  data: {
    name: string;
    description?: string;
    url?: string;
    logo?: string;
    sameAs?: string[];
    startDate?: string;
    endDate?: string;
    location?: {
      name: string;
      address: string;
    };
  };
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = generateStructuredData({ type, ...data });

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

// Pre-configured components for common use cases
export function OrganizationStructuredData() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: "Chakri Nai",
        description: "India's first roast-comedy job pitch show where job seekers get made, not broken.",
        url: "/",
        logo: "/assets/logo.png",
        sameAs: [
          "https://instagram.com/chakrinaishow",
          "https://twitter.com/chakrinaishow",
        ],
      }}
    />
  );
}

export function WebSiteStructuredData() {
  return (
    <StructuredData
      type="WebSite"
      data={{
        name: "Chakri Nai",
        description: "India's first roast-comedy job pitch show where job seekers get made, not broken.",
        url: "/",
      }}
    />
  );
}

interface EventStructuredDataProps {
  eventName: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
  };
  description?: string;
}

export function EventStructuredData({
  eventName,
  startDate,
  endDate,
  location,
  description,
}: EventStructuredDataProps) {
  return (
    <StructuredData
      type="Event"
      data={{
        name: eventName,
        description: description || `Join ${eventName} - India's most entertaining career development platform.`,
        startDate,
        endDate,
        location,
      }}
    />
  );
}
