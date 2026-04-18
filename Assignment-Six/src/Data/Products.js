
import aiIcon from '../components/assets/products/writing_2327400 1.png';
import designIcon from '../components/assets/products/design-tool.png';
import stockIcon from '../components/assets/products/camera.jpg';
import autoIcon from '../components/assets/products/operation.png';
import resumeIcon from '../components/assets/products/portfolio.png';
import socialIcon from '../components/assets/products/social-media.png';

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Generate high-quality content, blogs, and marketing copy in seconds.",
    price: 29,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
    icon: aiIcon 
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "Access thousands of premium design assets for social media.",
    price: 49,
    period: "one-time",
    tag: "Popular",
    tagType: "popular",
    features: ["5000+ templates", "Monthly updates", "Custom license"],
    icon: designIcon
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description: "Browse millions of royalty-free photos, videos, and graphics.",
    price: 19,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: ["HD images", "Commercial use", "Quick search"],
    icon: stockIcon
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description: "Automate repetitive tasks and streamline your workflow easily.",
    price: 79,
    period: "yearly",
    tag: "Popular",
    tagType: "popular",
    features: ["10+ app connections", "24/7 support", "Custom workflows"],
    icon: autoIcon
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description: "Create professional resumes and CVs with our easy builder.",
    price: 15,
    period: "one-time",
    tag: "New",
    tagType: "new",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
    icon: resumeIcon
  },
  {
    id: 6,
    name: "Social Media Kit",
    description: "Complete toolkit for engaging social media content creation.",
    price: 39,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["Scheduler included", "AI hashtags", "Analytics"],
    icon: socialIcon
  }
];

export default products;

