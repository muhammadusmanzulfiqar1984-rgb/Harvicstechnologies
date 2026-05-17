export const courses = [
  {
    slug: 'basic-advance',
    title: 'Basic + Advance',
    level: 'Beginner',
    duration: '1 – 1.5 Months',
    fee: 35000,
    bestFor: 'Beginners & Job Seekers',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    syllabus: [
      'Mobile open-to-close & glass changing',
      'All kinds of parts replacement and housing',
      'Use of tools — multimeter, soldering iron, hot air',
      'Hands-on practice on real smartphone models',
      'Basics of chip-level repairing',
    ],
  },
  {
    slug: 'master',
    title: 'Master Course',
    level: 'Advanced',
    duration: '2 – 3 Months',
    fee: 75000,
    bestFor: 'Overseas Job Seekers, Business Setup',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80',
    syllabus: [
      'Full motherboard repairing with schematics',
      'BGA IC reballing, reflow & replacing',
      'UFI Box, JCID & advanced training',
      'Oscilloscope & DC power supply usage',
      'iPhone & latest Android troubleshooting',
    ],
  },
  {
    slug: 'special',
    title: 'Special Course',
    level: 'Pro',
    duration: 'Fast-track / 2 – 4 Months',
    fee: 120000,
    bestFor: 'Professionals & Experienced Technicians',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    syllabus: [
      'Includes everything: Basic + Advance + Master',
      'Hands-on work on new mobiles & boards',
      'Basic to double-board swapping',
      'Deep fault-finding with Borneo schematics',
      'Real-market fault-case solving',
    ],
  },
  {
    slug: 'software',
    title: 'Software Course',
    level: 'All levels',
    duration: '1 Month',
    fee: 40000,
    bestFor: 'Repair shop owners & technicians',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    syllabus: [
      'Firmware flashing (official & custom ROMs)',
      'FRP, pattern, PIN & password removal',
      'Country & network unlocking',
      'UFI Box, JCID, iRepair tools',
      'eMMC/UFS read & write, dead-boot repair',
    ],
  },
]

export const services = [
  { slug: 'screen-replacement', title: 'Screen Replacement', from: 5000, icon: '📱',
    desc: 'OEM-quality displays for iPhone, Samsung, Pixel, Xiaomi and more.' },
  { slug: 'battery-replacement', title: 'Battery Replacement', from: 3500, icon: '🔋',
    desc: 'Genuine batteries with health-check warranty.' },
  { slug: 'board-repair', title: 'Motherboard / Chip-level', from: 8000, icon: '🛠️',
    desc: 'Micro-soldering, reflow, BGA reballing by certified technicians.' },
  { slug: 'software-flash', title: 'Flashing & Unlocking', from: 2000, icon: '⚙️',
    desc: 'FRP bypass, country unlock, firmware re-flash for all brands.' },
  { slug: 'data-recovery', title: 'Data Recovery', from: 6000, icon: '💾',
    desc: 'Recover photos, chats, contacts from dead or locked phones.' },
  { slug: 'frp-icloud-unlock', title: 'FRP / iCloud Unlock', from: 4000, icon: '🔐',
    desc: 'Safe removal of Google FRP and iCloud activation locks.' },
]

export const instructors = [
  { name: 'Anees Khan', role: 'Lead Instructor — Chip Level', image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80', years: 12 },
  { name: 'Bilal Ahmad', role: 'Software & Unlocking Expert', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', years: 9 },
  { name: 'Sara Iqbal', role: 'iPhone Repair Specialist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', years: 7 },
  { name: 'Hamza Tariq', role: 'BGA / Reballing Trainer', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80', years: 10 },
]

export const labStats = [
  { value: '5,000+', label: 'Students trained' },
  { value: '40,000+', label: 'Repairs delivered' },
  { value: '12+', label: 'Years of expertise' },
  { value: '4.9★', label: 'Google rating' },
]

export const labTestimonials = [
  { id: 1, name: 'Umair S.', city: 'Faisalabad', text: 'Master course got me a job in Dubai within 2 months. Best decision.', rating: 5 },
  { id: 2, name: 'Fatima R.', city: 'Lahore', text: 'They fixed my MacBook board nobody else would touch. Brilliant team.', rating: 5 },
  { id: 3, name: 'Junaid M.', city: 'Karachi', text: 'Software course paid for itself in the first week of running my shop.', rating: 5 },
  { id: 4, name: 'Ayesha K.', city: 'Islamabad', text: 'Quick screen + battery replacement, genuine parts, fair price.', rating: 5 },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
  'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800&q=80',
  'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
]

export const formatPKR = (n) =>
  new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(n)
