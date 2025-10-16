// Sample data structure for Roast Masters
// This file demonstrates how to structure roast master data
// Replace with your actual data source (API, CMS, etc.)

export interface RoastMaster {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
}

// Example data - replace with your actual roast masters
export const sampleRoastMasters: RoastMaster[] = [
  {
    id: "1",
    name: "John Doe",
    title: "Startup Founder & Tech Entrepreneur",
    image: "/assets/roast-masters/john-doe.jpg",
    bio: "Founded 3 successful startups, mentor at Y Combinator, and expert in product development.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    title: "Stand-up Comedian & Writer",
    image: "/assets/roast-masters/sarah-johnson.jpg",
    bio: "Netflix comedy special, 10+ years in comedy, expert at constructive roasting with humor.",
  },
  {
    id: "3",
    name: "Mike Chen",
    title: "VP of Engineering",
    image: "/assets/roast-masters/mike-chen.jpg",
    bio: "20+ years in tech, led engineering teams at Google and Meta, passionate about mentoring.",
  },
];

// Function to fetch roast masters (replace with your actual data fetching logic)
export const getRoastMasters = async (): Promise<RoastMaster[]> => {
  try {
    const res = await fetch("/content/roastMasters.json", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};
