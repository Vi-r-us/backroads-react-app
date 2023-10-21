import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "wallet",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "tree",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "socks",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tourImg1,
    tourDate: "august 26th, 2020",
    tourTitle: "Tibet Adventure",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "China",
    tourDays: "6 days",
    tourPrice: "from $2100",
  },
  {
    id: 2,
    image: tourImg2,
    tourDate: "october 1th, 2020",
    tourTitle: "best of java",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "indonesia",
    tourDays: "11 days",
    tourPrice: "from $1400",
  },
  {
    id: 3,
    image: tourImg3,
    tourDate: "september 15th, 2020",
    tourTitle: "explore hong kong",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "hong kong",
    tourDays: "8 days",
    tourPrice: "from $5000",
  },
  {
    id: 4,
    image: tourImg4,
    tourDate: "december 5th, 2019",
    tourTitle: "kenya highlights",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "Kenya",
    tourDays: "20 days",
    tourPrice: "from $3300",
  },
];
