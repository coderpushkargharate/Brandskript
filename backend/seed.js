import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';

dotenv.config();

const sampleBlogs = [
  {
    title: "ChatGPT for Remodelers: How AI Saves Time, Reduces Admin, and Boosts Profit",
    excerpt: "Discover how ChatGPT can revolutionize your remodeling business by automating tasks, improving client communication, and boosting overall profit with AI.",
    content: "In the fast-paced world of remodeling, time is money. Every minute spent on administrative tasks, client communication, and project management is time taken away from what truly matters: delivering exceptional work to your clients. ChatGPT, an AI-powered tool, is transforming how remodelers operate by automating mundane tasks and streamlining workflows. Learn how you can leverage AI to save time, reduce administrative overhead, and ultimately boost your bottom line.",
    category: "GUIDES",
    author: "Max Gama",
    date: new Date('2025-11-02'),
    featured: true,
    image: "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Stop Wasting Bids: 7 Ways to Win More Remodeling Projects Without Lowering Your Prices",
    excerpt: "Win more remodeling projects without slashing your prices. Learn 7 proven strategies contractors use to respond faster, present better, and stand out.",
    content: "Are you tired of submitting bids only to lose projects to competitors? Many remodelers think the only way to win more work is by lowering their prices, but that's not true. By improving your bidding process, presentation, and client communication, you can dramatically increase your win rate without sacrificing profit margins. This guide reveals seven proven strategies that successful contractors use to stand out from the competition and close more deals.",
    category: "GUIDES",
    author: "Max Gama",
    date: new Date('2025-11-08'),
    featured: true,
    image: "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "The Ultimate Guide to Closing The Sale Without Being Salesy",
    excerpt: "Discover how contractors close more projects using a simple consultative sales system. Build trust, boost conversion rates, and win more work.",
    content: "Selling doesn't have to feel pushy or uncomfortable. In fact, the best contractors close more deals by building trust and providing value rather than using aggressive sales tactics. This comprehensive guide walks you through a consultative sales approach that feels natural, builds lasting client relationships, and significantly improves your conversion rates. Learn the framework that top contractors use to turn more estimates into signed contracts.",
    category: "GUIDES",
    author: "Max Gama",
    date: new Date('2025-11-15'),
    featured: true,
    image: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "The 6 Best Ways General Contractors Can Get More Leads in 2025",
    excerpt: "Looking for new clients? Discover the 6 most effective lead generation strategies for general contractors in 2025 using Google Business, social media, referrals, SEO, partnerships, and online directories.",
    content: "In today's digital age, generating quality leads is more important than ever for general contractors. Whether you're just starting out or looking to scale your business, having a steady stream of potential clients is essential. This guide explores six proven strategies that successful contractors use to attract and convert leads in 2025, from optimizing your Google Business profile to building strategic partnerships with suppliers and real estate agents.",
    category: "GUIDES",
    author: "Max Gama",
    date: new Date('2025-11-22'),
    featured: false,
    image: "https://images.pexels.com/photos/6474534/pexels-photo-6474534.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Milestone Invoicing: Get Paid Faster with Proof of Work Attachments",
    excerpt: "Get paid faster and with more confidence in the long term. Milestone Invoicing lets you request funds upon project completion, backed by proof of project status.",
    content: "Cash flow is the lifeblood of any contracting business, but waiting 30-60 days for payment after completing work can strain your operations. Milestone invoicing changes the game by allowing you to request payment at key project stages, backed by photo documentation and progress reports. This approach not only improves your cash flow but also increases client confidence and reduces payment disputes. Learn how to implement milestone invoicing in your business today.",
    category: "UPDATES",
    author: "Reesman Salerno",
    date: new Date('2025-11-15'),
    featured: false,
    image: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "5 Contractor Tasks You Can Automate This Week With Handoff",
    excerpt: "Handoff helps contractors save hours by automating estimates, invoices, follow-ups, contractors, and more. Here's what you can start doing less time on and more money doing.",
    content: "Running a contracting business means juggling countless tasks every day. From creating estimates and sending invoices to following up with clients and managing subcontractors, it's easy to get overwhelmed. But what if you could automate many of these repetitive tasks and free up hours each week? This guide shows you five specific tasks you can automate immediately using Handoff, giving you more time to focus on growing your business and delivering exceptional work.",
    category: "GUIDES",
    author: "Max Gama",
    date: new Date('2025-09-12'),
    featured: false,
    image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Total Control for Pro Builders with New Estimate 2.0",
    excerpt: "Estimate 2.0 is released today. It includes a fresh new design with advanced customization and new tools for builders, contractors, and project managers.",
    content: "We're excited to announce the launch of Estimate 2.0, our most powerful estimating tool yet. This major update brings a completely redesigned interface with advanced customization options that give professional builders and contractors unprecedented control over their estimates. From customizable line items and markup controls to professional templates and instant client presentations, Estimate 2.0 has everything you need to create winning bids faster than ever before.",
    category: "UPDATES",
    author: "Reesman Salerno",
    date: new Date('2025-10-10'),
    featured: false,
    image: "https://images.pexels.com/photos/6419121/pexels-photo-6419121.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "How Smart Contractors Are Using AI to Get More Jobs Done",
    excerpt: "Discover how smart contractors are leveraging AI technology to streamline their operations, win more bids, and complete projects faster—all while improving client satisfaction and getting their invoices paid on time and in full.",
    content: "Artificial Intelligence isn't just for tech companies anymore. Forward-thinking contractors are already using AI tools to transform their businesses, from automated estimating and project scheduling to predictive maintenance and client communication. This article explores real-world examples of how contractors are leveraging AI to work smarter, not harder, and gain a competitive edge in an increasingly crowded market. Learn how you can start using AI today to improve efficiency and profitability.",
    category: "GUIDES",
    author: "Max Gama",
    date: new Date('2025-09-09'),
    featured: false,
    image: "https://images.pexels.com/photos/8293747/pexels-photo-8293747.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "A New Way For You To Make More Money: Estimating 2.0 Now Inside Handoff",
    excerpt: "Estimate 2.0 is released today for all Handoff users. It is a complete revamp of our old system that uses AI to give you better, faster estimates with less manual work than ever before in doing so.",
    content: "Making money as a contractor starts with winning bids, and winning bids starts with creating accurate, professional estimates quickly. That's why we've completely rebuilt our estimating system from the ground up. Estimating 2.0 uses advanced AI to analyze your past projects, current market rates, and project specifics to generate detailed estimates in minutes instead of hours. The result? You can bid on more projects, respond faster to potential clients, and win more work—all while maintaining healthy profit margins.",
    category: "UPDATES",
    author: "Reesman Salerno",
    date: new Date('2025-09-21'),
    featured: false,
    image: "https://images.pexels.com/photos/6474502/pexels-photo-6474502.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "From Voice to Scopes, Logs, & Checklists",
    excerpt: "Turn voice notes into estimates, daily logs, punch lists, and checklists. No typing needed. Handoff Now transcribes your Voice notes into Project Docs.",
    content: "Paperwork is one of the biggest time drains for contractors, but what if you could create detailed project documentation just by talking? With Handoff's new voice-to-text feature, you can dictate estimates, daily logs, punch lists, and checklists on the go—no typing required. Simply speak naturally into your phone, and our AI transcription technology converts your words into professionally formatted documents. It's like having a personal assistant who follows you around the job site all day.",
    category: "UPDATES",
    author: "Reesman Salerno",
    date: new Date('2025-10-07'),
    featured: false,
    image: "https://images.pexels.com/photos/6474528/pexels-photo-6474528.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "How General Contractors Can Get Recommended by AI Tools",
    excerpt: "Learn how contractors can leverage AI tools like ChatGPT to make a list, get more local leads, stand out online, and finally stop hustling for every single new client the old fashioned way.",
    content: "As AI assistants like ChatGPT become more popular, people are increasingly asking them for contractor recommendations instead of searching Google or asking friends. This represents a massive opportunity for savvy contractors who position themselves correctly online. This guide reveals the specific steps you need to take to ensure AI tools recommend your business when potential clients are looking for contractors in your area. From optimizing your online presence to building credibility signals that AI can recognize, you'll learn how to tap into this emerging lead source.",
    category: "GUIDES",
    author: "Max Gama",
    date: new Date('2025-10-26'),
    featured: false,
    image: "https://images.pexels.com/photos/8293766/pexels-photo-8293766.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "10 Construction Apps That'll Actually Make Your Life Easier",
    excerpt: "Discover the must-have construction apps that actually work—tools for estimating, managing documents, tracking time, and communicating with the team. Ready to ditch the clipboard for good.",
    content: "The app store is full of tools claiming to revolutionize construction management, but which ones actually deliver? After testing dozens of apps with real contractors, we've identified the 10 that genuinely make your job easier. From digital estimating and project management to time tracking and team communication, these apps have been proven in the field by contractors who rely on them every day. Whether you're ready to go fully digital or just looking to upgrade one aspect of your workflow, this guide has you covered.",
    category: "RESOURCES",
    author: "Max Gama",
    date: new Date('2025-09-17'),
    featured: false,
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to MongoDB');

    await Blog.deleteMany({});
    console.log('Cleared existing blogs');

    await Blog.insertMany(sampleBlogs);
    console.log('Sample blogs inserted successfully');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
