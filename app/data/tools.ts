export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  gradient: string;
  accentColor: string;
  badgeColor: string;
  category: string;
  features: string[];
}

export const tools: Tool[] = [
  // ── AI Tools (top) ─────────────────────────────────────────────────
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    tagline: "Access GPT-4o Unlimited",
    description:
      "Get unrestricted access to ChatGPT Plus powered by GPT-4o. Generate content, debug code, write essays, create images with DALL·E 3, and use advanced plugins.",
    iconName: "BrainCircuit",
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "bg-emerald-500 hover:bg-emerald-400",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    category: "AI",
    features: [
      "GPT-4o — fastest & most capable model",
      "DALL·E 3 image generation",
      "Advanced Data Analysis",
      "Browsing & real-time information",
      "Custom GPTs marketplace",
      "Voice conversation mode",
      "128K context window",
      "Priority access during peak hours",
    ],
  },
  {
    id: "kling-ai",
    name: "Kling AI",
    tagline: "Next-Gen AI Video Generation",
    description:
      "Kling AI is a powerful AI video generator by Kuaishou that creates cinematic, high-quality videos from text prompts or images with realistic motion and 1080p output.",
    iconName: "Clapperboard",
    gradient: "from-violet-600 to-purple-700",
    accentColor: "bg-violet-600 hover:bg-violet-500",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    category: "AI",
    features: [
      "Text-to-video generation up to 2 mins",
      "Image-to-video with realistic motion",
      "1080p cinematic quality output",
      "Camera movement control",
      "5+ second clips in seconds",
      "High-fidelity character expressions",
      "Commercial-ready outputs",
      "Professional film-like aesthetics",
    ],
  },
  {
    id: "runway-ml",
    name: "Runway ML",
    tagline: "AI-Powered Video Creation",
    description:
      "Runway ML is the leading creative AI platform used by professional filmmakers. Generate, edit, and transform videos with Gen-3 Alpha and 30+ AI-powered tools.",
    iconName: "Film",
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "bg-blue-500 hover:bg-blue-400",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    category: "AI",
    features: [
      "Gen-3 Alpha — state-of-the-art video AI",
      "Text-to-video & image-to-video",
      "Background removal & replacement",
      "Motion brush for precise animation",
      "Inpainting & outpainting",
      "AI green screen",
      "Frame interpolation",
      "Multi-motion camera control",
    ],
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Hyper-Realistic AI Voice Generation",
    description:
      "ElevenLabs is the world's most advanced AI voice platform. Clone any voice, generate speech in 29 languages, and produce podcast-quality audio in seconds.",
    iconName: "Mic",
    gradient: "from-orange-500 to-amber-500",
    accentColor: "bg-orange-500 hover:bg-orange-400",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    category: "AI",
    features: [
      "AI voice cloning from 1 min of audio",
      "29 languages & 100+ accents",
      "Text-to-speech with emotion control",
      "Voice design from scratch",
      "Real-time voice changer",
      "Dubbing — auto-translate videos",
      "Sound effects generation",
      "API access for developers",
    ],
  },
  {
    id: "claude-pro",
    name: "Claude Pro",
    tagline: "Anthropic's Most Powerful AI",
    description:
      "Claude Pro by Anthropic gives you 5x more usage of Claude 3.5 Sonnet & Opus. Perfect for long-form writing, complex analysis, coding, and research with a 200K context window.",
    iconName: "Bot",
    gradient: "from-amber-500 to-orange-600",
    accentColor: "bg-amber-500 hover:bg-amber-400",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    category: "AI",
    features: [
      "Claude 3.5 Sonnet & Opus access",
      "200K token context window",
      "5x more usage than free tier",
      "Early access to new features",
      "Advanced coding assistance",
      "Complex document analysis",
      "Priority bandwidth",
      "Projects for organized conversations",
    ],
  },
  {
    id: "jasper-ai",
    name: "Jasper AI",
    tagline: "AI Copywriting for Marketers",
    description:
      "Jasper is the #1 AI marketing platform. Create blog posts, ad copy, emails, social captions, and brand content 10x faster with an AI trained on marketing best practices.",
    iconName: "Feather",
    gradient: "from-rose-500 to-pink-600",
    accentColor: "bg-rose-500 hover:bg-rose-400",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    category: "AI",
    features: [
      "50+ copywriting templates",
      "Brand voice training",
      "SEO-optimized blog posts",
      "AI image generation included",
      "Team collaboration features",
      "1-click translations (30 languages)",
      "Plagiarism checker built-in",
      "Chrome extension for any website",
    ],
  },
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: "World's Best AI Image Generator",
    description:
      "Midjourney creates stunning, photorealistic & artistic images from text prompts. The go-to tool for designers, artists, and creators worldwide with unmatched art quality.",
    iconName: "Paintbrush",
    gradient: "from-pink-500 to-rose-600",
    accentColor: "bg-pink-500 hover:bg-pink-400",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    category: "AI",
    features: [
      "Photorealistic image generation",
      "v6 model — sharpest output quality",
      "Style reference & consistency",
      "Vary Region (inpainting)",
      "Zoom out & pan tool",
      "Multiple aspect ratios",
      "Commercial usage rights",
      "Private generation mode",
    ],
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI",
    tagline: "AI Art & Game Asset Creator",
    description:
      "Leonardo AI is a creative AI platform for generating game assets, concept art, and illustrations. With fine-tuned models and Canvas editor, it's the ultimate visual AI tool.",
    iconName: "Wand2",
    gradient: "from-yellow-500 to-orange-500",
    accentColor: "bg-yellow-500 hover:bg-yellow-400",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    category: "AI",
    features: [
      "Phoenix — flagship generation model",
      "Motion — AI animation from images",
      "Canvas — AI image editing studio",
      "Fine-tuned models for game assets",
      "Real-time generation canvas",
      "3D texture generation",
      "Consistent character creation",
      "Commercial license included",
    ],
  },
  {
    id: "aiva",
    name: "Aiva",
    tagline: "AI Music Composition Tool",
    description:
      "Aiva is the AI music composer trusted by filmmakers, game developers, and content creators. Generate royalty-free, professional-quality soundtracks in any genre in minutes.",
    iconName: "Music",
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "bg-cyan-500 hover:bg-cyan-400",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    category: "AI",
    features: [
      "Generate original music in any genre",
      "300+ style presets",
      "Download as MP3, WAV & MIDI",
      "Monetize — full copyright ownership",
      "Influence composition with chord sets",
      "Multiple instruments & orchestras",
      "Film & game scoring support",
      "Edit and fine-tune AI outputs",
    ],
  },
  // ── Design & Creative ───────────────────────────────────────────────
  {
    id: "canva-pro",
    name: "Canva Pro",
    tagline: "Design Anything, Publish Anywhere",
    description:
      "Unlock the full power of Canva Pro — access 100M+ premium stock assets, remove backgrounds instantly, resize designs effortlessly, and collaborate with your team in real time.",
    iconName: "Palette",
    gradient: "from-purple-600 to-pink-600",
    accentColor: "bg-purple-500 hover:bg-purple-400",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    category: "Design",
    features: [
      "100M+ premium stock photos & videos",
      "One-click background remover",
      "Magic Resize for any platform",
      "Brand Kit with custom fonts",
      "Unlimited cloud storage",
      "Team collaboration & commenting",
      "Premium animations & transitions",
      "Schedule & publish to social media",
    ],
  },
  {
    id: "adobe-premiere-pro",
    name: "Adobe Premiere Pro",
    tagline: "Industry-Standard Video Editing",
    description:
      "Adobe Premiere Pro is the world's leading video editing software used by Hollywood filmmakers and YouTube creators. Edit, color grade, and export professional videos easily.",
    iconName: "Video",
    gradient: "from-indigo-600 to-violet-700",
    accentColor: "bg-indigo-600 hover:bg-indigo-500",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    category: "Design",
    features: [
      "Multi-track timeline editing",
      "AI-powered color grading (Lumetri)",
      "Auto Reframe for social media",
      "Speech-to-text auto captions",
      "After Effects & Audition integration",
      "4K, 8K & VR support",
      "Motion graphics templates",
      "Collaborative team projects",
    ],
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    tagline: "Pro Video Editing for Creators",
    description:
      "CapCut Pro is the go-to video editing app for content creators. Remove backgrounds, auto-caption, add effects, and create viral-ready content for TikTok, Reels & YouTube Shorts.",
    iconName: "Scissors",
    gradient: "from-slate-600 to-zinc-700",
    accentColor: "bg-slate-600 hover:bg-slate-500",
    badgeColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    category: "Design",
    features: [
      "Auto-captions with 99% accuracy",
      "AI background removal",
      "1000+ trending effects & stickers",
      "Smart cut — auto removes silence",
      "Keyframe animation",
      "Green screen chroma key",
      "Commercial stock music library",
      "4K export with no watermark",
    ],
  },
  {
    id: "filmora",
    name: "Filmora",
    tagline: "Easy & Powerful Video Editor",
    description:
      "Filmora is a beginner-friendly yet powerful video editor packed with AI tools. Auto Beat Sync, AI Portrait, noise removal, and 1000+ effects make every video look pro.",
    iconName: "Layers",
    gradient: "from-blue-600 to-cyan-600",
    accentColor: "bg-blue-600 hover:bg-blue-500",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    category: "Design",
    features: [
      "AI Smart Cutout — one-click removal",
      "Auto Beat Sync for music videos",
      "AI Portrait & background FX",
      "Motion tracking",
      "1000+ drag-and-drop effects",
      "Speed ramping & audio ducking",
      "4K export & screen recording",
      "Stock media library built-in",
    ],
  },
  // ── Writing & Productivity ──────────────────────────────────────────
  {
    id: "grammarly-premium",
    name: "Grammarly Premium",
    tagline: "Write Flawlessly Everywhere",
    description:
      "Grammarly Premium gives you advanced grammar, clarity, tone detection, plagiarism checker, and GrammarlyGO — the AI writing assistant that rewrites full paragraphs for you.",
    iconName: "PenLine",
    gradient: "from-sky-500 to-blue-600",
    accentColor: "bg-sky-500 hover:bg-sky-400",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    category: "Writing",
    features: [
      "Advanced grammar & spelling corrections",
      "Clarity & conciseness suggestions",
      "Tone detection & adjustment",
      "Plagiarism checker (10B+ pages)",
      "GrammarlyGO AI writing assistant",
      "Full-sentence rewrites",
      "Style guide enforcement",
      "Works in 500,000+ apps",
    ],
  },
  {
    id: "zapier",
    name: "Zapier",
    tagline: "Automate Your Entire Workflow",
    description:
      "Zapier connects 6,000+ apps and automates repetitive tasks without any code. Build powerful multi-step automations (Zaps) between Gmail, Slack, Notion, Salesforce, and more.",
    iconName: "Zap",
    gradient: "from-orange-500 to-yellow-500",
    accentColor: "bg-orange-500 hover:bg-orange-400",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    category: "Productivity",
    features: [
      "Connect 6,000+ apps",
      "Multi-step Zaps (complex workflows)",
      "AI-powered automation builder",
      "Filters, delays & conditional logic",
      "Tables — built-in database",
      "Interfaces — no-code apps",
      "Webhooks & custom code steps",
      "Team workspaces & permissions",
    ],
  },
  // ── SEO & Marketing ────────────────────────────────────────────────
  {
    id: "semrush",
    name: "SEMrush",
    tagline: "All-in-One SEO & Marketing Suite",
    description:
      "SEMrush is the #1 SEO tool trusted by 10M+ marketers. Do keyword research, competitor analysis, site audits, backlink tracking, and rank tracking — all in one dashboard.",
    iconName: "BarChart2",
    gradient: "from-orange-600 to-red-600",
    accentColor: "bg-orange-600 hover:bg-orange-500",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    category: "SEO",
    features: [
      "Keyword research — 25B+ keywords",
      "Competitor domain analysis",
      "Site audit — 130+ SEO checks",
      "Backlink analysis & gap tool",
      "Rank tracking (daily updates)",
      "On-page SEO checker",
      "Content marketing toolkit",
      "PPC & ad research",
    ],
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    tagline: "The SEO Tool Professionals Use",
    description:
      "Ahrefs is the most trusted SEO toolset for backlink analysis, keyword research, site audits, and competitor research. Used by top agencies and Fortune 500 companies worldwide.",
    iconName: "TrendingUp",
    gradient: "from-teal-500 to-cyan-600",
    accentColor: "bg-teal-500 hover:bg-teal-400",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    category: "SEO",
    features: [
      "Site Explorer — full backlink data",
      "Keywords Explorer — 10B+ keywords",
      "Site Audit for technical SEO",
      "Content Explorer for ideation",
      "Rank Tracker with SERP history",
      "Link Intersect & gap analysis",
      "Web analytics dashboard",
      "AI content grader",
    ],
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    tagline: "Email Marketing That Converts",
    description:
      "Mailchimp is the world's #1 email marketing platform. Build beautiful campaigns, automate customer journeys, and grow your audience with AI-powered content recommendations.",
    iconName: "Mail",
    gradient: "from-yellow-500 to-amber-600",
    accentColor: "bg-yellow-500 hover:bg-yellow-400",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    category: "Marketing",
    features: [
      "Drag-and-drop email builder",
      "AI-powered content optimizer",
      "Advanced audience segmentation",
      "Automated customer journeys",
      "A/B testing & send-time optimization",
      "Landing pages & sign-up forms",
      "Detailed analytics & reports",
      "500+ integrations",
    ],
  },
  {
    id: "hunter-io",
    name: "Hunter.io",
    tagline: "Find Anyone's Email in Seconds",
    description:
      "Hunter.io is the #1 email finder tool for sales and outreach. Find verified email addresses for any domain, verify your list, and launch cold email campaigns directly from the platform.",
    iconName: "Search",
    gradient: "from-green-500 to-emerald-600",
    accentColor: "bg-green-500 hover:bg-green-400",
    badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    category: "Marketing",
    features: [
      "Domain Search — find all emails at a company",
      "Email Finder — find anyone's email",
      "Email Verifier — 98% accuracy",
      "Confidence score on every email",
      "Campaigns — cold email outreach",
      "Chrome extension for LinkedIn",
      "CRM integrations (HubSpot, Salesforce)",
      "Bulk email task automation",
    ],
  },
  // ── Streaming ──────────────────────────────────────────────────────
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    tagline: "Stream in 4K Ultra HD",
    description:
      "Enjoy Netflix Premium with 4K Ultra HD streaming, Dolby Atmos audio, and the ability to watch on 4 screens simultaneously. Download for offline viewing anytime.",
    iconName: "Tv",
    gradient: "from-red-600 to-red-800",
    accentColor: "bg-red-600 hover:bg-red-500",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    category: "Streaming",
    features: [
      "4K Ultra HD + HDR streaming",
      "Dolby Atmos surround sound",
      "Stream on 4 devices simultaneously",
      "Unlimited downloads on 6 devices",
      "All Netflix Originals",
      "Netflix Games included",
      "Spatial audio support",
      "Ad-free experience",
    ],
  },
  {
    id: "disney-plus",
    name: "Disney+",
    tagline: "Marvel, Star Wars & Pixar",
    description:
      "Stream Disney+, including Disney classics, Pixar, Marvel Cinematic Universe, Star Wars, National Geographic, and exclusive Disney+ Originals in stunning 4K.",
    iconName: "Star",
    gradient: "from-indigo-600 to-blue-800",
    accentColor: "bg-indigo-600 hover:bg-indigo-500",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    category: "Streaming",
    features: [
      "Disney, Pixar, Marvel, Star Wars, NatGeo",
      "4K Ultra HD + HDR10 streaming",
      "Dolby Vision & Dolby Atmos",
      "Download on up to 10 devices",
      "Stream on 4 screens",
      "IMAX Enhanced content",
      "No ads — pure streaming",
      "New Originals every week",
    ],
  },
  {
    id: "amazon-prime",
    name: "Amazon Prime",
    tagline: "Shop, Stream & Save More",
    description:
      "Amazon Prime unlocks free two-day shipping, Prime Video with 25,000+ titles, Prime Music, Prime Gaming with free monthly games, and unlimited photo storage.",
    iconName: "Package",
    gradient: "from-yellow-500 to-orange-500",
    accentColor: "bg-yellow-500 hover:bg-yellow-400",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    category: "Streaming",
    features: [
      "Free 2-day shipping on millions of items",
      "Prime Video — 25,000+ movies & shows",
      "Prime Music — 100M+ songs ad-free",
      "Prime Gaming — free games monthly",
      "Amazon Fresh & Whole Foods discounts",
      "Unlimited photo storage",
      "Early access to Lightning Deals",
      "Prime Reading — 1,000+ eBooks",
    ],
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    tagline: "Listen Without Limits",
    description:
      "Experience Spotify Premium with ad-free music, offline downloads, unlimited skips, and the highest quality 320 kbps audio. Access 100M+ tracks and all podcasts.",
    iconName: "Headphones",
    gradient: "from-green-500 to-green-700",
    accentColor: "bg-green-500 hover:bg-green-400",
    badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    category: "Music",
    features: [
      "Ad-free music & podcasts",
      "Download 10,000 songs offline",
      "Unlimited skips on any song",
      "320 kbps Very High audio quality",
      "Group Session — listen with friends",
      "Spotify DJ — AI personal DJ",
      "Real-time lyrics",
      "Exclusive early release access",
    ],
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    tagline: "YouTube Without Interruptions",
    description:
      "YouTube Premium removes all ads, enables background play, lets you download videos offline, and grants full access to YouTube Music Premium and YouTube Originals.",
    iconName: "Youtube",
    gradient: "from-red-500 to-pink-600",
    accentColor: "bg-red-500 hover:bg-red-400",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    category: "Streaming",
    features: [
      "Ad-free videos across all of YouTube",
      "Background play — screen off listening",
      "Download videos for offline viewing",
      "YouTube Music Premium included",
      "YouTube Originals access",
      "Picture-in-picture on mobile",
      "Early access to new features",
      "Family sharing for up to 6 members",
    ],
  },
];

export function getToolById(id: string): Tool | undefined {
  return tools.find((t) => t.id === id);
}

// Generates a list of fake credentials for demonstration
export function generateFakeCredentials(toolId: string) {
  const names = [
    "alex", "jordan", "sam", "taylor", "morgan", "casey", "riley", "quinn",
    "avery", "blake", "drew", "emery", "frankie", "gray", "harper", "indie",
    "jess", "kendall", "lee", "max", "nat", "oakley", "paige", "reed",
    "sage", "tatum", "umeko", "vale", "wren", "xen",
  ];

  // Shuffle names so a different set of 5 appears each call
  const shuffled = [...names].sort(() => Math.random() - 0.5);

  const domains = ["gmail.com", "gmail.com", "gmail.com", "googlemail.com"];

  const passwordParts = [
    ["Secure", "Alpha", "Prime", "Ultra", "Super", "Turbo", "Hyper", "Mega"],
    ["Pass", "Key", "Code", "Lock", "Gate", "Vault", "Core", "Base"],
    ["2024", "2025", "123", "456", "789", "321", "007", "420", "777", "999"],
  ];

  const specialChars = ["!", "@", "#", "$", "&", "*"];

  const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  return shuffled.map((name) => {
    const num = Math.floor(Math.random() * 9000 + 1000);
    const email = `${name}.${toolId.replace(/-/g, "").slice(0, 5)}${num}@${rand(domains)}`;
    const password = `${rand(passwordParts[0])}${rand(passwordParts[1])}${rand(passwordParts[2])}${rand(specialChars)}`;
    return { email, password };
  });
}
