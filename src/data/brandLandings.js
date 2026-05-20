// Rich Apple.com/iphone-17-style landing config.
// One schema, four brands. Keep keys consistent so BrandLanding.jsx
// can render the same long-form page for every brand.
import {
  Shield, Camera, Cpu, BatteryCharging, Sparkles, Smartphone,
  Wifi, Satellite, Phone, Search, Languages, Eraser, Smile,
  PenLine, Lock, Bell, MessageSquare, Palette, Image as ImageIcon,
  Aperture, Moon, Video, Crop, Layers, Hand, ShoppingBag, Truck,
  CreditCard, Headphones, Leaf, Recycle, Factory, Box,
  ChevronRight as Chev,
} from 'lucide-react'
import { products } from './products.js'
import { unsplash, IMG } from './imageMap.js'

const byCat = (cat) => products.filter((p) => p.category === cat)

/** Shared "why buy from us" content for the Pakistani store context. */
const WHY_BUY = [
  { icon: Shield,          title: 'PTA Approved',     text: 'Every device is fully PTA approved and ready to use on all networks.' },
  { icon: Sparkles,        title: '100% Genuine',     text: 'Sourced from authorized channels with proof of authenticity.' },
  { icon: CreditCard,      title: 'Easy Installments', text: '0% markup installment plans available on selected models.' },
  { icon: Truck,           title: 'Free Delivery',    text: 'Same-day dispatch nationwide on in-stock devices.' },
  { icon: Headphones,      title: 'Expert Setup',     text: 'Free in-store setup, data transfer, and walk-throughs.' },
  { icon: ShoppingBag,     title: 'Trade-In Credit',  text: 'Trade in your old device and get instant credit toward a new one.' },
]

/** Shared environment cards. */
const ENVIRONMENT = [
  { icon: Recycle, title: 'Made with recycled material',    text: 'Significant portion of recycled aluminum, cobalt, tin, and rare earth elements.' },
  { icon: Factory, title: 'Renewable manufacturing',        text: 'Final assembly powered by an increasing share of renewable electricity.' },
  { icon: Box,     title: 'Compact, plastic-free packaging',text: 'Smaller boxes mean more units per trip and less waste.' },
]

export const brandLandings = {
  // ─────────────────────────────────────────────────────────
  //  iPhone — Apple
  // ─────────────────────────────────────────────────────────
  iphone: {
    brand: 'Apple',
    title: 'iPhone 17',
    tagline: 'Magichromatic.',
    heroEyebrow: 'New',
    heroImage: unsplash(IMG.iphoneHero, 2000),
    heroAccent: '#C3A35E',
    startingPrice: 349999,

    colors: [
      { name: 'Lavender',  hex: '#D8C5E6' },
      { name: 'Sage',      hex: '#B9C9B2' },
      { name: 'Mist Blue', hex: '#B6CADD' },
      { name: 'White',     hex: '#F5F5F0' },
      { name: 'Black',     hex: '#1d1d1f' },
    ],

    /* ── Get the highlights — bento grid ────────────── */
    highlightsBento: [
      { icon: Shield,    title: 'Ceramic Shield 2',           text: '3× better scratch resistance on a brighter, smoother display.', span: 'lg' },
      { icon: Camera,    title: 'Center Stage Front Camera',  text: '18MP square sensor that auto-frames your group selfies.' },
      { icon: Aperture,  title: 'Dual Fusion Camera System',  text: '48MP Main + 48MP Ultra Wide. Pro-grade detail, every shot.' },
      { icon: Cpu,       title: 'A19 chip',                   text: '5-core GPU with Neural Accelerators. Built for on-device AI.' },
      { icon: Sparkles,  title: 'iOS 26',                     text: 'Liquid Glass design, vibrant Lock Screen, and live Polls in Messages.' },
      { icon: Smile,     title: 'Apple Intelligence',         text: 'Writing Tools, Genmoji, Clean Up — your iPhone, but smarter.' },
    ],

    /* ── Design block ───────────────────────────────── */
    design: {
      eyebrow: 'Design',
      title: 'Even more delightful. Even more durable.',
      body: 'Contoured edges, thinner borders, and Ceramic Shield 2 on the front. A 6.3-inch Super Retina XDR display with ProMotion adapts up to 120Hz for smoother scrolling and gaming.',
      image: unsplash(IMG.iphone17ProMax, 1600),
    },

    /* ── Camera section ─────────────────────────────── */
    cameras: {
      eyebrow: 'Cameras',
      title: 'All 48MP rear cameras. An evolution in resolution.',
      body: '48MP Fusion Main with 2× optical-quality telephoto and a 48MP Fusion Ultra Wide. Stunning shots — close up or far away, bright or low light.',
      tiles: [
        { icon: Crop,      title: '2× Telephoto',                  text: 'Close in or zoom out on your subjects with exceptional detail.' },
        { icon: Eraser,    title: 'Clean Up',                      text: 'Remove unwanted objects and distractions from your photos with a tap.' },
        { icon: Moon,      title: 'Low-light & Night mode',        text: 'Sharper, brighter images with natural colors — even in the dark.' },
        { icon: Palette,   title: 'Photographic Styles',           text: 'Preset styles like Bright let you customize tone, color, and look.' },
        { icon: ImageIcon, title: 'Macro',                         text: 'Compelling close-ups and sharp details with incredible clarity.' },
        { icon: Video,     title: 'Pro-level video',               text: '4K 60 fps, Cinematic mode, and Audio Mix for theater-quality results.' },
      ],
      front: {
        title: '18MP Center Stage front camera.',
        body: 'A new square sensor enables zoom and rotate options. Tap to expand the field of view and rotate from portrait to landscape without moving your iPhone.',
        chips: ['Center Stage for photos', 'Dual Capture video', 'Ultra-stabilized video', 'Center Stage for video calls'],
      },
    },

    /* ── Chip + battery ────────────────────────────── */
    chip: {
      eyebrow: 'A19 chip. All-day battery life.',
      title: 'Power player. Energy expert.',
      body: 'A19 powers everything you do, including Apple Intelligence and ProMotion gaming. 10 minutes of charge gives up to 8 hours of video playback with a high-wattage adapter.',
      stats: [
        { value: '50%',   label: 'CPU performance uplift' },
        { value: '2.1×',  label: 'faster 5-core GPU' },
        { value: '+11h',  label: 'more video playback' },
        { value: '20min', label: 'to 50% charge with 40W+' },
      ],
    },

    /* ── Software tiles (iOS 26) ───────────────────── */
    software: {
      eyebrow: 'iOS 26',
      title: 'New look. Even more magic.',
      tiles: [
        { icon: Layers,        title: 'Liquid Glass',          text: 'A new design that reflects and refracts what’s beneath it in real time.' },
        { icon: Lock,          title: 'Vibrant Lock Screen',   text: 'Time adapts to your wallpaper; photos come alive with a 3D effect.' },
        { icon: Phone,         title: 'Call Screening',        text: 'Unknown callers share their name and reason before your phone rings.' },
        { icon: Bell,          title: 'Hold Assist',           text: 'Keeps your spot in line and notifies you when a live agent is ready.' },
        { icon: MessageSquare, title: 'Polls in Messages',     text: 'Create a poll right in a conversation and watch the votes roll in.' },
      ],
    },

    /* ── Apple Intelligence tiles ──────────────────── */
    ai: {
      eyebrow: 'Apple Intelligence',
      title: 'Effortlessly helpful every day.',
      tiles: [
        { icon: Search,    title: 'Visual intelligence', text: 'Search, ask questions, and take action with content on your screen.' },
        { icon: Languages, title: 'Live Translation',    text: 'Translated texts in Messages, FaceTime captions, and spoken Phone translations.' },
        { icon: Eraser,    title: 'Clean Up',            text: 'Remove distractions while staying true to the original intent of the photo.' },
        { icon: Smile,     title: 'Genmoji',             text: 'Create a custom emoji right from the keyboard — just describe it.' },
        { icon: PenLine,   title: 'Writing Tools',       text: 'Proofread, rewrite, and summarize text — friendly, professional, or concise.' },
      ],
    },

    /* ── Safety / connectivity tiles ───────────────── */
    safety: {
      eyebrow: 'Stay connected',
      title: 'On and off the grid.',
      tiles: [
        { icon: Wifi,      title: 'eSIM',                          text: 'Seamless connectivity and flexibility without a physical SIM.' },
        { icon: Satellite, title: 'Messages via satellite',        text: 'Send and receive messages even when you’re off the grid.' },
        { icon: Hand,      title: 'Roadside Assistance via satellite', text: 'Connect with a roadside provider for a flat tire or dead battery.' },
        { icon: Phone,     title: 'Emergency SOS via satellite',   text: 'Text emergency services over satellite when you have no service.' },
        { icon: Shield,    title: 'Crash Detection',               text: 'Sensors and motion algorithms can detect a severe crash and call for help.' },
        { icon: Smartphone,title: 'Find My',                       text: 'Securely share your location with friends and family.' },
      ],
    },

    /* ── Compare bento (vs older model) ────────────── */
    compareBento: {
      eyebrow: 'Worth the upgrade?',
      title: 'See for yourself.',
      tiles: [
        { kicker: '48MP',  title: 'Dual Fusion camera system' },
        { kicker: '18MP',  title: 'Center Stage front camera' },
        { kicker: '6.3″',  title: 'display with ProMotion up to 120Hz' },
        { kicker: '3×',    title: 'better scratch resistance with Ceramic Shield 2' },
        { kicker: '+11h',  title: 'more battery for video playback' },
        { kicker: '2.1×',  title: 'faster GPU performance' },
      ],
    },

    /* ── Accessories ───────────────────────────────── */
    accessories: {
      eyebrow: 'Accessories',
      title: 'Snap it on. Show it off.',
      tiles: [
        { icon: Hand,    title: 'Get carried away', text: 'Pair the new Crossbody Strap with Silicone Cases for hands-free wear.' },
        { icon: Shield,  title: 'Deck it out',      text: 'Protect your iPhone with a colorful Silicone Case with MagSafe.' },
        { icon: Layers,  title: 'Show your colors', text: 'A Clear Case with MagSafe lets the gorgeous color of your iPhone shine through.' },
      ],
    },

    /* ── FAQ ───────────────────────────────────────── */
    faq: [
      { q: 'Are the iPhones you sell PTA approved?', a: 'Yes — every iPhone we sell is fully PTA approved and ready to use on all Pakistani networks.' },
      { q: 'Do you offer installment plans?',        a: 'Yes, 0% markup installment plans are available on selected models through partnered banks.' },
      { q: 'Can I trade in my current iPhone?',      a: 'Absolutely. Bring your device in or send photos via WhatsApp and we’ll quote you instantly.' },
      { q: 'Is delivery free?',                      a: 'Free delivery is available nationwide on in-stock devices. Same-day dispatch where supported.' },
      { q: 'Do you support fast MagSafe charging?',  a: 'Yes — every iPhone 17 model supports the latest MagSafe and fast wired charging standards.' },
    ],

    reasons: WHY_BUY,
    environment: ENVIRONMENT,
    products: byCat('iphone'),
    compareNote: 'Compare every iPhone model side-by-side.',
  },

  // ─────────────────────────────────────────────────────────
  //  Samsung Galaxy
  // ─────────────────────────────────────────────────────────
  samsung: {
    brand: 'Samsung',
    title: 'Galaxy S25',
    tagline: 'AI is now. Galaxy is ready.',
    heroEyebrow: 'New',
    heroImage: unsplash(IMG.galaxyS25Ultra, 2000),
    heroAccent: '#6B1F2B',
    startingPrice: 359999,

    colors: [
      { name: 'Titanium Black',   hex: '#1d1d1f' },
      { name: 'Titanium Silver',  hex: '#C6CBD3' },
      { name: 'Titanium Whitesilver', hex: '#E9E7E2' },
      { name: 'Titanium Bluestone',   hex: '#5B6E89' },
    ],

    highlightsBento: [
      { icon: Shield,   title: 'Titanium Frame',           text: 'Premium, rigid and lightweight — built to last for years.', span: 'lg' },
      { icon: Camera,   title: '200MP ProVisual Camera',   text: 'Galaxy AI nightography and 100× Space Zoom.' },
      { icon: Cpu,      title: 'Snapdragon 8 Elite',       text: 'For Galaxy — tuned for on-device generative AI.' },
      { icon: Sparkles, title: 'Galaxy AI',                text: 'Circle to Search, Live Translate, and Note Assist.' },
      { icon: Layers,   title: 'One UI 7',                 text: 'Cleaner layouts, richer animations, and smart suggestions everywhere.' },
      { icon: BatteryCharging, title: '5,000 mAh',         text: '45W fast charging gets you to 65% in 30 minutes.' },
    ],

    design: {
      eyebrow: 'Design',
      title: 'Titanium strength. Pocketable elegance.',
      body: 'A flat 6.8" QHD+ Dynamic AMOLED 2X display with Gorilla Armor 2 — anti-reflective, scratch-resistant, and beautifully bright at 2,600 nits.',
      image: unsplash(IMG.galaxyZFold, 1600),
    },

    cameras: {
      eyebrow: 'Cameras',
      title: '200MP ProVisual Engine.',
      body: 'A pro-grade quad-camera with Galaxy AI ProVisual. Cleaner low light, better zoom, and instant AI Generative Edits.',
      tiles: [
        { icon: Crop,      title: '100× Space Zoom',     text: 'AI-powered telephoto for impossibly distant subjects.' },
        { icon: Eraser,    title: 'Generative Edit',     text: 'Move, remove, or erase objects — AI fills in the background.' },
        { icon: Moon,      title: 'Nightography',        text: 'Multi-frame fusion for bright, low-noise night shots.' },
        { icon: Palette,   title: 'Pro Color',           text: 'Manual control over tone, ISO, shutter, and color profile.' },
        { icon: ImageIcon, title: 'Instant Slow-mo',     text: 'AI interpolates frames so any video can become slow motion.' },
        { icon: Video,     title: '8K video',            text: 'Cinematic, ultra-high-resolution recording with HDR10+.' },
      ],
      front: {
        title: '12MP Quad-pixel front camera.',
        body: 'Auto-focus selfies and 4K 60 fps front-facing video — pin-sharp for vlogs and FaceTime calls alike.',
        chips: ['Auto HDR', 'AI Selfie Tone', '4K 60 fps', 'Live Translate calls'],
      },
    },

    chip: {
      eyebrow: 'Snapdragon 8 Elite for Galaxy',
      title: 'Built for on-device AI.',
      body: 'A 3nm chip with a dedicated Neural Engine that runs Galaxy AI features privately, right on your phone.',
      stats: [
        { value: '40%', label: 'faster CPU vs S24' },
        { value: '50%', label: 'faster GPU' },
        { value: '+8h', label: 'extra video playback' },
        { value: '45W', label: 'super-fast wired charging' },
      ],
    },

    software: {
      eyebrow: 'One UI 7',
      title: 'Cleaner, smarter, faster.',
      tiles: [
        { icon: Layers,        title: 'Now Bar',           text: 'Live activities surfaced right on the Lock Screen.' },
        { icon: Lock,          title: 'Privacy Dashboard', text: 'See exactly what apps are using your data and when.' },
        { icon: Phone,         title: 'Smart Call',        text: 'AI-screened spam calls and on-device transcripts.' },
        { icon: Bell,          title: 'Smart Notifications', text: 'AI groups, summarizes, and prioritizes alerts for you.' },
        { icon: MessageSquare, title: 'Chat Assist',       text: 'Tone-adjusting suggestions across Messages and 3rd-party apps.' },
      ],
    },

    ai: {
      eyebrow: 'Galaxy AI',
      title: 'Made for everyone.',
      tiles: [
        { icon: Search,    title: 'Circle to Search',   text: 'Circle anything on screen to search it instantly.' },
        { icon: Languages, title: 'Live Translate',     text: 'Real-time translation for voice calls in 20+ languages.' },
        { icon: Eraser,    title: 'Object Eraser',      text: 'Tap to remove unwanted subjects or shadows from photos.' },
        { icon: Smile,     title: 'AI Portrait Studio', text: 'Generate creative portraits from a single shot.' },
        { icon: PenLine,   title: 'Note Assist',        text: 'Summaries, translations, and auto-formatted notes.' },
      ],
    },

    safety: {
      eyebrow: 'Stay connected',
      title: 'Secure on every network.',
      tiles: [
        { icon: Wifi,      title: 'Wi-Fi 7',             text: 'Up to 5× faster wireless speeds with reduced latency.' },
        { icon: Satellite, title: 'Satellite SOS',       text: 'Emergency messaging via satellite where supported.' },
        { icon: Hand,      title: 'Samsung Wallet',      text: 'Cards, IDs, and boarding passes — all in one secure place.' },
        { icon: Phone,     title: 'Smart Switch',        text: 'Easy migration from iPhone or any Android in minutes.' },
        { icon: Shield,    title: 'Knox Vault',          text: 'Hardware-isolated storage for biometrics and keys.' },
        { icon: Smartphone,title: 'SmartThings Find',    text: 'Locate your phone, buds, or watch — even when offline.' },
      ],
    },

    compareBento: {
      eyebrow: 'Worth the upgrade?',
      title: 'See for yourself.',
      tiles: [
        { kicker: '200MP', title: 'ProVisual camera system' },
        { kicker: '100×',  title: 'Space Zoom telephoto' },
        { kicker: '6.8″',  title: 'QHD+ AMOLED with 2,600 nits' },
        { kicker: 'Ti',    title: 'titanium frame, lighter and stronger' },
        { kicker: '5,000', title: 'mAh battery with 45W charging' },
        { kicker: '7 yrs', title: 'of OS and security updates' },
      ],
    },

    accessories: {
      eyebrow: 'Accessories',
      title: 'Style and protect.',
      tiles: [
        { icon: Hand,    title: 'Standing Grip Case',     text: 'Built-in finger ring and kickstand in one slim design.' },
        { icon: Shield,  title: 'Smart View Wallet',      text: 'Lightweight folio with card storage and S View window.' },
        { icon: Layers,  title: 'Galaxy Buds 4 Pro',      text: 'Active noise cancellation tuned by AKG.' },
      ],
    },

    faq: [
      { q: 'Are these Samsung phones PTA approved?', a: 'Yes — fully PTA approved and ready to use on all Pakistani networks.' },
      { q: 'Do they support eSIM?',                  a: 'Yes, Galaxy S25 supports both physical SIM and eSIM in most regions.' },
      { q: 'How long will Samsung support the S25?', a: '7 years of OS and security updates — one of the longest in the industry.' },
      { q: 'Is the in-box charger included?',        a: 'A USB-C cable is included. Adapters are available separately at the store.' },
      { q: 'Can I trade in my old phone?',           a: 'Yes — any working device qualifies for a trade-in quote.' },
    ],

    reasons: WHY_BUY,
    environment: ENVIRONMENT,
    products: byCat('samsung'),
    compareNote: 'Compare every Galaxy device side-by-side.',
  },

  // ─────────────────────────────────────────────────────────
  //  Xiaomi
  // ─────────────────────────────────────────────────────────
  xiaomi: {
    brand: 'Xiaomi',
    title: 'Xiaomi 15 Ultra',
    tagline: 'Leica-tuned imaging. Hyper-fast everything.',
    heroEyebrow: 'New',
    heroImage: unsplash(IMG.xiaomiUltra, 2000),
    heroAccent: '#A88846',
    startingPrice: 219999,

    colors: [
      { name: 'Phantom Black', hex: '#1d1d1f' },
      { name: 'White',         hex: '#F1F1EE' },
      { name: 'Chrome Blue',   hex: '#3B6FB3' },
      { name: 'Classic Silver',hex: '#C5C7C9' },
    ],

    highlightsBento: [
      { icon: Camera,   title: 'Leica Summilux Quad',      text: '1-inch sensor with variable aperture for true photographic control.', span: 'lg' },
      { icon: Cpu,      title: 'Snapdragon 8 Elite',       text: 'Flagship 3nm performance with Xiaomi HyperOS 2.' },
      { icon: BatteryCharging, title: '90W HyperCharge',   text: '0 to 100% in around 30 minutes. 80W wireless supported.' },
      { icon: Aperture, title: 'Variable Aperture',        text: 'f/1.6 – f/4.0 main lens. Hardware control for depth-of-field.' },
      { icon: Sparkles, title: 'HyperOS 2 AI',             text: 'AI Portrait, AI Eraser, and AI Subtitles across the system.' },
      { icon: Shield,   title: 'Aluminum + Ceramic',       text: 'A premium build that feels as great as it performs.' },
    ],

    design: {
      eyebrow: 'Design',
      title: 'Iconic body. Photographic intent.',
      body: 'A flat 6.73" WQHD+ AMOLED at 3,000 nits peak brightness. Aluminum mid-frame paired with ceramic or vegan leather backs.',
      image: unsplash(IMG.xiaomiPro, 1600),
    },

    cameras: {
      eyebrow: 'Cameras',
      title: 'Leica Summilux Optical System.',
      body: 'Co-engineered with Leica. A 1-inch main sensor with variable aperture, plus 75mm and 120mm telephotos for true portrait separation.',
      tiles: [
        { icon: Aperture,  title: 'Variable f/1.6 – f/4.0', text: 'Real hardware aperture for cinematic depth-of-field control.' },
        { icon: Crop,      title: '120mm Floating Telephoto', text: '5× optical and 120× HyperZoom for distant subjects.' },
        { icon: Moon,      title: 'Leica Night Mode',      text: 'Authentic Leica color science even in extreme low light.' },
        { icon: Palette,   title: 'Leica Authentic Look',  text: 'Two Leica film looks: Vibrant and Authentic.' },
        { icon: ImageIcon, title: 'Pro Mode',              text: 'Full manual control: ISO, shutter, focus, white balance.' },
        { icon: Video,     title: '8K Ultra HD video',     text: 'Cinematic video with 10-bit LOG support.' },
      ],
      front: {
        title: '32MP front camera with AI HDR.',
        body: 'Sharp, accurate selfies and rich 4K front-facing video for content creators on the go.',
        chips: ['AI HDR', '4K front video', 'Skin tone tuning', 'Beauty controls'],
      },
    },

    chip: {
      eyebrow: 'Snapdragon 8 Elite',
      title: 'Hyper-fast. Hyper-efficient.',
      body: 'A 3nm Snapdragon 8 Elite delivers desktop-class GPU performance and on-device AI for HyperOS 2 features.',
      stats: [
        { value: '45%',  label: 'faster CPU' },
        { value: '40%',  label: 'faster GPU' },
        { value: '90W',  label: 'HyperCharge wired' },
        { value: '80W',  label: 'wireless HyperCharge' },
      ],
    },

    software: {
      eyebrow: 'HyperOS 2',
      title: 'Unified across devices.',
      tiles: [
        { icon: Layers,        title: 'Cross-device flow',  text: 'Move calls, files, and clipboard between phone, tablet, and watch.' },
        { icon: Lock,          title: 'Smart Lockscreen',   text: 'Live widgets and personalized always-on art.' },
        { icon: Phone,         title: 'AI Call summary',    text: 'Get a written summary of every call when you’re ready.' },
        { icon: Bell,          title: 'Focus mode',         text: 'Distraction-free time blocks with smart notification rules.' },
        { icon: MessageSquare, title: 'Smart Reply',        text: 'Context-aware quick replies across Messages and chat apps.' },
      ],
    },

    ai: {
      eyebrow: 'HyperOS 2 AI',
      title: 'AI you can actually use.',
      tiles: [
        { icon: Search,    title: 'AI Search',          text: 'Search anything on screen with a long press.' },
        { icon: Languages, title: 'AI Subtitles',       text: 'Real-time translated subtitles in any video.' },
        { icon: Eraser,    title: 'AI Eraser Pro',      text: 'Remove people, objects, and reflections cleanly.' },
        { icon: Smile,     title: 'AI Portrait',        text: 'Studio-grade portraits from any selfie.' },
        { icon: PenLine,   title: 'AI Notes',           text: 'Summaries, formatting, and instant translation.' },
      ],
    },

    safety: {
      eyebrow: 'Stay connected',
      title: 'Built for the world.',
      tiles: [
        { icon: Wifi,      title: 'Wi-Fi 7',         text: 'Multi-link operation for smoother streams and gaming.' },
        { icon: Satellite, title: 'Satellite messaging', text: 'Two-way satellite messaging in supported markets.' },
        { icon: Hand,      title: 'Xiaomi HyperConnect', text: 'Phone, tablet, watch and PC working as one.' },
        { icon: Phone,     title: 'eSIM',            text: 'Travel-friendly eSIM support alongside physical SIMs.' },
        { icon: Shield,    title: 'IP68',            text: 'Dust and water resistance for everyday adventures.' },
        { icon: Smartphone,title: 'Find Device',     text: 'Locate, ring, or wipe your phone from anywhere.' },
      ],
    },

    compareBento: {
      eyebrow: 'Worth the upgrade?',
      title: 'See the difference.',
      tiles: [
        { kicker: '1″',    title: 'Leica main sensor with variable aperture' },
        { kicker: '120×',  title: 'HyperZoom telephoto reach' },
        { kicker: '3,000', title: 'nits peak brightness' },
        { kicker: '90W',   title: 'wired HyperCharge' },
        { kicker: '80W',   title: 'wireless HyperCharge' },
        { kicker: '8K',    title: 'cinematic video recording' },
      ],
    },

    accessories: {
      eyebrow: 'Accessories',
      title: 'Built for the camera.',
      tiles: [
        { icon: Camera,  title: 'Photography Kit',  text: 'Adds a real shutter button, zoom dial, and 67mm filter mount.' },
        { icon: Shield,  title: 'Leather Case',     text: 'Premium vegan leather with grip and color accents.' },
        { icon: Layers,  title: 'Xiaomi Buds 5 Pro',text: 'Hi-Res LDAC audio with active noise cancellation.' },
      ],
    },

    faq: [
      { q: 'Is Xiaomi 15 Ultra PTA approved?',     a: 'Yes — every unit we sell is fully PTA approved.' },
      { q: 'Does it really have a 1-inch sensor?', a: 'Yes — the main camera uses a true 1-inch Sony LYT-900 with variable aperture.' },
      { q: 'How fast does it charge?',             a: '90W wired and 80W wireless — full charge in roughly 30 minutes.' },
      { q: 'Software updates?',                    a: 'Xiaomi commits to 4 years of OS upgrades and 6 years of security patches on flagships.' },
      { q: 'Do you stock accessories?',            a: 'Yes — Photography Kit, cases, and Xiaomi Buds are all available in store.' },
    ],

    reasons: WHY_BUY,
    environment: ENVIRONMENT,
    products: byCat('xiaomi'),
    compareNote: 'Compare every Xiaomi model side-by-side.',
  },

  // ─────────────────────────────────────────────────────────
  //  Motorola
  // ─────────────────────────────────────────────────────────
  motorola: {
    brand: 'Motorola',
    title: 'Motorola Edge & Razr',
    tagline: 'Iconic design. Modern flagship.',
    heroEyebrow: 'New',
    heroImage: unsplash(IMG.motoEdgeUltra, 2000),
    heroAccent: '#8A3340',
    startingPrice: 189999,

    colors: [
      { name: 'Mocha Mousse',  hex: '#A78A6B' },
      { name: 'Pantone Forest',hex: '#2E4F3C' },
      { name: 'Pantone Coral', hex: '#E26F61' },
      { name: 'Eclipse Black', hex: '#1d1d1f' },
    ],

    highlightsBento: [
      { icon: Shield,   title: 'Curved pOLED display',  text: '6.7" 144Hz panel with Pantone-validated color.', span: 'lg' },
      { icon: Camera,   title: '50MP Pantone Camera',   text: 'Color-accurate imaging tuned with Pantone.' },
      { icon: Cpu,      title: 'Snapdragon 8s Gen 3',   text: 'Smooth gaming and on-device AI features.' },
      { icon: BatteryCharging, title: '125W TurboPower',text: 'A full day of charge in just minutes.' },
      { icon: Sparkles, title: 'Moto AI',               text: 'Smart Actions, Magic Canvas, and gesture shortcuts.' },
      { icon: Layers,   title: 'Near-stock Android',    text: 'A clean, fast Android 15 experience with timely updates.' },
    ],

    design: {
      eyebrow: 'Design',
      title: 'Iconic curves. Modern materials.',
      body: 'A waterfall pOLED display wrapped in a vegan-leather back. Light in the hand, durable in the wild, and Pantone-validated for color you can trust.',
      image: unsplash(IMG.motoEdgePro, 1600),
    },

    cameras: {
      eyebrow: 'Cameras',
      title: 'Pantone-tuned imaging.',
      body: 'A 50MP Pantone-validated main camera, 50MP ultrawide, and 64MP telephoto deliver true-to-life color in any light.',
      tiles: [
        { icon: Crop,      title: '3× Telephoto',     text: 'A dedicated 64MP telephoto for portraits and distant detail.' },
        { icon: Eraser,    title: 'Magic Eraser',     text: 'Remove distractions, photobombers, and shadows with a tap.' },
        { icon: Moon,      title: 'Adaptive Low-light', text: 'Multi-frame fusion for sharper, brighter night shots.' },
        { icon: Palette,   title: 'Pantone Validated',text: 'True color reproduction and certified skin-tone accuracy.' },
        { icon: ImageIcon, title: 'Style Sync',       text: 'AI applies your chosen Style across every shot consistently.' },
        { icon: Video,     title: '4K HDR10+ video',  text: 'Cinematic video with stabilized motion and rich color.' },
      ],
      front: {
        title: '50MP front camera.',
        body: 'A high-resolution selfie sensor with Quad Pixel binning for low-light clarity and 4K video calls.',
        chips: ['Auto HDR', '4K front video', 'Group Selfie auto-zoom', 'Beauty controls'],
      },
    },

    chip: {
      eyebrow: 'Snapdragon 8s Gen 3',
      title: 'Built for AI gaming.',
      body: 'A 4nm Snapdragon 8s Gen 3 delivers smooth gameplay and Moto AI features without throttling.',
      stats: [
        { value: '30%',  label: 'faster CPU vs Edge 50' },
        { value: '40%',  label: 'faster GPU' },
        { value: '125W', label: 'TurboPower wired' },
        { value: '50W',  label: 'wireless charging' },
      ],
    },

    software: {
      eyebrow: 'Hello Moto',
      title: 'Near-stock Android, perfected.',
      tiles: [
        { icon: Layers,        title: 'Moto gestures',     text: 'Chop for torch, twist for camera, and more shortcuts.' },
        { icon: Lock,          title: 'Family Space',      text: 'Dedicated, curated profile for shared family use.' },
        { icon: Phone,         title: 'Smart Connect',     text: 'Mirror your phone to a TV or PC, no cable required.' },
        { icon: Bell,          title: 'Peek Display',      text: 'Glance at notifications without unlocking your phone.' },
        { icon: MessageSquare, title: 'Ready For',         text: 'Turn your phone into a desktop on any HDMI screen.' },
      ],
    },

    ai: {
      eyebrow: 'Moto AI',
      title: 'Helpful, contextual, on-device.',
      tiles: [
        { icon: Search,    title: 'Catch Me Up',        text: 'Summarizes notifications you missed since you were last active.' },
        { icon: Languages, title: 'Pay Attention',      text: 'Records and transcribes meetings privately on-device.' },
        { icon: Eraser,    title: 'Magic Canvas',       text: 'Turn text prompts into custom wallpapers instantly.' },
        { icon: Smile,     title: 'Style Sync',         text: 'AI-curated themes and styles that match your outfit.' },
        { icon: PenLine,   title: 'Remember This',      text: 'Just tell Moto AI to remember something — and it does.' },
      ],
    },

    safety: {
      eyebrow: 'Stay connected',
      title: 'Smart and secure.',
      tiles: [
        { icon: Wifi,      title: 'Wi-Fi 7',         text: 'Faster, lower-latency wireless for streaming and gaming.' },
        { icon: Satellite, title: 'Smart Connect',   text: 'Mirror to TV, PC, or tablet over the same network.' },
        { icon: Hand,      title: 'ThinkShield',     text: 'Enterprise-grade security built right into the OS.' },
        { icon: Phone,     title: 'eSIM',            text: 'Dual SIM with one nano-SIM plus eSIM for travelers.' },
        { icon: Shield,    title: 'IP68',            text: 'Dust- and water-resistant for life’s little accidents.' },
        { icon: Smartphone,title: 'Moto Secure',     text: 'PIN scramble, network security, and secure folder.' },
      ],
    },

    compareBento: {
      eyebrow: 'Worth the upgrade?',
      title: 'Why upgrade now.',
      tiles: [
        { kicker: '6.7″',  title: 'curved pOLED at 144Hz' },
        { kicker: '50MP',  title: 'Pantone-validated main camera' },
        { kicker: '125W',  title: 'TurboPower wired charging' },
        { kicker: '50W',   title: 'wireless charging' },
        { kicker: 'IP68',  title: 'rated dust and water resistance' },
        { kicker: '3 yrs', title: 'of Android OS upgrades' },
      ],
    },

    accessories: {
      eyebrow: 'Accessories',
      title: 'Built for the lifestyle.',
      tiles: [
        { icon: Hand,    title: 'Edge Case',           text: 'Slim Pantone-matched case with raised camera lip.' },
        { icon: Shield,  title: 'TurboPower charger',  text: '125W TurboPower brick for the fastest top-ups.' },
        { icon: Layers,  title: 'Moto Buds Plus',      text: 'Tuned by Bose. ANC with spatial audio.' },
      ],
    },

    faq: [
      { q: 'Are Motorola phones PTA approved?',  a: 'Yes — every device we ship is fully PTA approved.' },
      { q: 'How long is the software support?',  a: 'Motorola provides 3 years of major Android upgrades and 4 years of security patches on the Edge series.' },
      { q: 'Is the in-box 125W charger included?', a: 'Yes — the 125W TurboPower brick is in the box on the Edge 60 Ultra.' },
      { q: 'Do they support wireless charging?', a: 'Yes, the Edge series supports 50W wireless charging on compatible pads.' },
      { q: 'Is there a Razr model with stylus?', a: 'No — but Moto AI and Magic Canvas cover most stylus use-cases on Razr.' },
    ],

    reasons: WHY_BUY,
    environment: ENVIRONMENT,
    products: byCat('motorola'),
    compareNote: 'Compare every Motorola model side-by-side.',
  },
}

export const hasBrandLanding = (slug) => Boolean(brandLandings[slug])

// Used by the hero/CTA, intentionally kept here so other components can
// re-use the same icon palette without re-importing lucide-react.
export const __iconRef = Chev
