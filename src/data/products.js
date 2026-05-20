import { unsplash, IMG } from './imageMap.js'

export const categories = [
  { slug: 'iphone',      name: 'iPhone',        icon: '📱' },
  { slug: 'mac',         name: 'Mac',           icon: '💻' },
  { slug: 'ipad',        name: 'iPad',          icon: '📋' },
  { slug: 'watch',       name: 'Watch',         icon: '⌚' },
  { slug: 'airpods',     name: 'AirPods',       icon: '🎧' },
  { slug: 'samsung',     name: 'Samsung',       icon: '📲' },
  { slug: 'google',      name: 'Google Pixel',  icon: '🅖' },
  { slug: 'xiaomi',      name: 'Xiaomi',        icon: '🔶' },
  { slug: 'motorola',    name: 'Motorola',      icon: '🅼' },
  { slug: 'accessories', name: 'Accessories',   icon: '🔌' },
]

/**
 * Build a product entry with both a `card` and `hero`-sized image. Keeping
 * sizes consistent here means cards stay light (~50 KB) and the detail page
 * still gets a crisp ~1400px hero.
 */
const make = (p) => ({
  ...p,
  image:    unsplash(p.imgId, 800),
  imageLg:  unsplash(p.imgId, 1600),
  gallery:  (p.galleryIds || [p.imgId]).map((id) => unsplash(id, 1200)),
})

export const products = [
  // ── iPhone ────────────────────────────────────────────────
  make({
    id: 'iphone-17-pro-max', slug: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max', category: 'iphone',
    price: 549999, imgId: IMG.iphone17ProMax,
    badge: 'PTA Approved',
    tagline: 'Titanium. So strong. So light. So Pro.',
    galleryIds: [IMG.iphone17ProMax, IMG.iphone17Pro, IMG.iphoneHero],
  }),
  make({
    id: 'iphone-17-pro', slug: 'iphone-17-pro',
    name: 'iPhone 17 Pro', category: 'iphone',
    price: 489999, imgId: IMG.iphone17Pro,
    badge: 'PTA Approved',
  }),
  make({
    id: 'iphone-17-air', slug: 'iphone-17-air',
    name: 'iPhone 17 Air', category: 'iphone',
    price: 419999, imgId: IMG.iphone17Air,
    badge: 'New',
  }),
  make({
    id: 'iphone-17', slug: 'iphone-17',
    name: 'iPhone 17', category: 'iphone',
    price: 349999, imgId: IMG.iphone17,
  }),

  // ── Mac ───────────────────────────────────────────────────
  make({
    id: 'macbook-pro-14-m5', slug: 'macbook-pro-14-m5',
    name: 'MacBook Pro 14" M5', category: 'mac',
    price: 689999, imgId: IMG.macBookPro,
    badge: 'New',
  }),
  make({
    id: 'macbook-air-13-m5', slug: 'macbook-air-13-m5',
    name: 'MacBook Air 13" M5', category: 'mac',
    price: 379999, imgId: IMG.macBookAir,
  }),
  make({
    id: 'mac-mini-m4', slug: 'mac-mini-m4',
    name: 'Mac mini M4', category: 'mac',
    price: 229999, imgId: IMG.macMini,
  }),
  make({
    id: 'imac-24-m4', slug: 'imac-24-m4',
    name: 'iMac 24" M4', category: 'mac',
    price: 459999, imgId: IMG.imac,
  }),

  // ── iPad ──────────────────────────────────────────────────
  make({
    id: 'ipad-pro-m5', slug: 'ipad-pro-m5-11-inch',
    name: 'iPad Pro 11" M5', category: 'ipad',
    price: 339999, imgId: IMG.ipadPro,
  }),
  make({
    id: 'ipad-air-m4', slug: 'ipad-air-11-m4',
    name: 'iPad Air 11" M4', category: 'ipad',
    price: 219999, imgId: IMG.ipadAir,
  }),

  // ── Watch ─────────────────────────────────────────────────
  make({
    id: 'watch-ultra-3', slug: 'apple-watch-ultra-3',
    name: 'Apple Watch Ultra 3', category: 'watch',
    price: 259999, imgId: IMG.watchUltra,
    badge: 'New',
  }),
  make({
    id: 'watch-series-11', slug: 'apple-watch-series-11',
    name: 'Apple Watch Series 11', category: 'watch',
    price: 139999, imgId: IMG.watchSeries,
  }),

  // ── AirPods ───────────────────────────────────────────────
  make({
    id: 'airpods-pro-3', slug: 'airpods-pro-3',
    name: 'AirPods Pro 3', category: 'airpods',
    price: 79999, imgId: IMG.airpodsPro,
  }),
  make({
    id: 'airpods-max', slug: 'airpods-max-2024',
    name: 'AirPods Max', category: 'airpods',
    price: 169999, imgId: IMG.airpodsMax,
  }),

  // ── Apple Accessories ─────────────────────────────────────
  make({
    id: 'apple-pencil-pro', slug: 'apple-pencil-pro',
    name: 'Apple Pencil Pro', category: 'accessories',
    price: 39999, imgId: IMG.applePencil,
  }),
  make({
    id: 'magic-keyboard-ipad', slug: 'magic-keyboard-ipad-pro-13',
    name: 'Magic Keyboard for iPad Pro 13"', category: 'accessories',
    price: 89999, imgId: IMG.magicKeyboard,
  }),

  // ── Samsung ───────────────────────────────────────────────
  make({
    id: 'galaxy-s25-ultra', slug: 'galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra', category: 'samsung',
    price: 459999, imgId: IMG.galaxyS25Ultra,
    badge: 'New',
    tagline: 'Galaxy AI. Pro-grade camera.',
    galleryIds: [IMG.galaxyS25Ultra, IMG.galaxyS25Plus, IMG.galaxyZFold],
  }),
  make({
    id: 'galaxy-s25-plus', slug: 'galaxy-s25-plus',
    name: 'Samsung Galaxy S25+', category: 'samsung',
    price: 359999, imgId: IMG.galaxyS25Plus,
  }),
  make({
    id: 'galaxy-z-fold-7', slug: 'galaxy-z-fold-7',
    name: 'Samsung Galaxy Z Fold 7', category: 'samsung',
    price: 729999, imgId: IMG.galaxyZFold,
    badge: 'Foldable',
  }),
  make({
    id: 'galaxy-z-flip-7', slug: 'galaxy-z-flip-7',
    name: 'Samsung Galaxy Z Flip 7', category: 'samsung',
    price: 419999, imgId: IMG.galaxyZFlip,
  }),
  make({
    id: 'galaxy-tab-s11-ultra', slug: 'galaxy-tab-s11-ultra',
    name: 'Samsung Galaxy Tab S11 Ultra', category: 'samsung',
    price: 329999, imgId: IMG.galaxyTabUltra,
  }),
  make({
    id: 'galaxy-watch-8', slug: 'galaxy-watch-8',
    name: 'Samsung Galaxy Watch 8', category: 'samsung',
    price: 109999, imgId: IMG.galaxyWatch,
  }),
  make({
    id: 'galaxy-buds-4-pro', slug: 'galaxy-buds-4-pro',
    name: 'Samsung Galaxy Buds 4 Pro', category: 'samsung',
    price: 49999, imgId: IMG.galaxyBuds,
  }),

  // ── Google Pixel ──────────────────────────────────────────
  make({
    id: 'pixel-10-pro-xl', slug: 'pixel-10-pro-xl',
    name: 'Google Pixel 10 Pro XL', category: 'google',
    price: 379999, imgId: IMG.pixelProXL,
    badge: 'New',
    tagline: 'Powered by Tensor G5.',
  }),
  make({
    id: 'pixel-10-pro', slug: 'pixel-10-pro',
    name: 'Google Pixel 10 Pro', category: 'google',
    price: 309999, imgId: IMG.pixelPro,
  }),
  make({
    id: 'pixel-10', slug: 'pixel-10',
    name: 'Google Pixel 10', category: 'google',
    price: 239999, imgId: IMG.pixel10,
  }),
  make({
    id: 'pixel-watch-4', slug: 'pixel-watch-4',
    name: 'Google Pixel Watch 4', category: 'google',
    price: 109999, imgId: IMG.pixelWatch,
  }),

  // ── Xiaomi ────────────────────────────────────────────────
  make({
    id: 'xiaomi-15-ultra', slug: 'xiaomi-15-ultra',
    name: 'Xiaomi 15 Ultra', category: 'xiaomi',
    price: 299999, imgId: IMG.xiaomiUltra,
    badge: 'New',
    tagline: 'Leica co-engineered camera.',
    galleryIds: [IMG.xiaomiUltra, IMG.xiaomiPro, IMG.redmiNotePro],
  }),
  make({
    id: 'xiaomi-15-pro', slug: 'xiaomi-15-pro',
    name: 'Xiaomi 15 Pro', category: 'xiaomi',
    price: 219999, imgId: IMG.xiaomiPro,
  }),
  make({
    id: 'redmi-note-14-pro', slug: 'redmi-note-14-pro',
    name: 'Redmi Note 14 Pro', category: 'xiaomi',
    price: 84999, imgId: IMG.redmiNotePro,
  }),
  make({
    id: 'xiaomi-pad-7-pro', slug: 'xiaomi-pad-7-pro',
    name: 'Xiaomi Pad 7 Pro', category: 'xiaomi',
    price: 119999, imgId: IMG.xiaomiPad,
  }),

  // ── Motorola ──────────────────────────────────────────────
  make({
    id: 'moto-edge-60-ultra', slug: 'moto-edge-60-ultra',
    name: 'Motorola Edge 60 Ultra', category: 'motorola',
    price: 239999, imgId: IMG.motoEdgeUltra,
    badge: 'New',
    tagline: 'Curved pOLED. Pantone tuned.',
    galleryIds: [IMG.motoEdgeUltra, IMG.motoEdgePro, IMG.motoRazrUltra],
  }),
  make({
    id: 'moto-edge-60-pro', slug: 'moto-edge-60-pro',
    name: 'Motorola Edge 60 Pro', category: 'motorola',
    price: 189999, imgId: IMG.motoEdgePro,
  }),
  make({
    id: 'moto-razr-60-ultra', slug: 'moto-razr-60-ultra',
    name: 'Motorola Razr 60 Ultra', category: 'motorola',
    price: 359999, imgId: IMG.motoRazrUltra,
    badge: 'Foldable',
    tagline: 'Iconic flip. Modern flagship.',
  }),
  make({
    id: 'moto-razr-60', slug: 'moto-razr-60',
    name: 'Motorola Razr 60', category: 'motorola',
    price: 219999, imgId: IMG.motoRazr,
  }),
  make({
    id: 'moto-g85-power', slug: 'moto-g85-power',
    name: 'Motorola Moto G85 Power', category: 'motorola',
    price: 74999, imgId: IMG.motoEdgePro,
  }),
]

export const heroSlides = [
  {
    id: 1,
    eyebrow: 'New',
    title: 'iPhone 17 Pro',
    subtitle: 'Titanium. So strong. So light. So Pro.',
    cta: { label: 'Buy now',    to: '/shop/iphone-17-pro' },
    secondary: { label: 'Learn more', to: '/shop/iphone-17-pro' },
    image: unsplash(IMG.iphoneHero, 1800),
    align: 'left',
    theme: 'dark',
  },
  {
    id: 2,
    eyebrow: 'New',
    title: 'MacBook Pro M5',
    subtitle: 'A whole new level of performance.',
    cta: { label: 'Buy now',    to: '/shop/macbook-pro-14-m5' },
    secondary: { label: 'Learn more', to: '/shop/macbook-pro-14-m5' },
    image: unsplash(IMG.macBookPro, 1800),
    align: 'right',
    theme: 'dark',
  },
  {
    id: 3,
    eyebrow: 'Now in Pakistan',
    title: 'Apple Watch Ultra 3',
    subtitle: 'Built for adventure.',
    cta: { label: 'Buy now',    to: '/shop/apple-watch-ultra-3' },
    secondary: { label: 'Learn more', to: '/shop/apple-watch-ultra-3' },
    image: unsplash(IMG.watchUltra, 1800),
    align: 'left',
    theme: 'dark',
  },
]

export const testimonials = [
  { id: 1, name: 'Ahmed K.', city: 'Karachi',   text: 'Genuine product, fast delivery, and great after-sales support.',     rating: 5 },
  { id: 2, name: 'Sara M.',  city: 'Lahore',    text: 'Picked up my iPhone 17 Pro on launch day. Smooth experience.',       rating: 5 },
  { id: 3, name: 'Bilal R.', city: 'Islamabad', text: 'PTA-approved units, transparent pricing — finally a shop I trust.', rating: 5 },
  { id: 4, name: 'Hira A.',  city: 'Karachi',   text: 'WhatsApp support is instant. They walked me through every option.', rating: 5 },
]

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(n)
