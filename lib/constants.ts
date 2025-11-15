// lib/constants.ts
export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "Marriage Registration - Indore",
    image: "/images/event1.png",
    slug: "marriage-registration-indore",
    location: "Indore Municipal Corporation, MP, India",
    date: "January 10, 2025",
    time: "10:00 AM IST",
  },
  {
    title: "Marriage Registration - Delhi",
    image: "/images/event2.png",
    slug: "marriage-registration-delhi",
    location: "District Court, Saket, New Delhi",
    date: "February 5, 2025",
    time: "11:30 AM IST",
  },
  {
    title: "Marriage Registration - Mumbai",
    image: "/images/event-full.png",
    slug: "marriage-registration-mumbai",
    location: "Bandra Family Court, Mumbai, Maharashtra",
    date: "March 12, 2025",
    time: "9:00 AM IST",
  },
  {
    title: "Marriage Registration - Bangalore",
    image: "/images/event3.png",
    slug: "marriage-registration-bangalore",
    location: "BBMP Office, Bangalore, Karnataka",
    date: "April 20, 2025",
    time: "10:30 AM IST",
  },
  {
    title: "Marriage Registration - Hyderabad",
    image: "/images/event4.png",
    slug: "marriage-registration-hyderabad",
    location: "Registrar Office, Hyderabad, Telangana",
    date: "May 15, 2025",
    time: "12:00 PM IST",
  },
  {
    title: "Marriage Registration - Kolkata",
    image: "/images/event5.png",
    slug: "marriage-registration-kolkata",
    location: "Registrar Office, Alipore, Kolkata, West Bengal",
    date: "June 25, 2025",
    time: "11:00 AM IST",
  }
];
