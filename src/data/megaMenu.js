// Mega-menu data: per top-level brand/category, what links to show in dropdown
import { products } from './products.js'
import { courses, services } from './labs.js'

const pickFor = (cat, n = 4) =>
  products.filter((p) => p.category === cat).slice(0, n)

export const megaMenu = [
  {
    label: 'iPhone',
    to: '/product-category/iphone',
    columns: [
      { title: 'Shop iPhone', links: [
        { label: 'iPhone 17 Pro Max', to: '/shop/iphone-17-pro-max' },
        { label: 'iPhone 17 Pro',     to: '/shop/iphone-17-pro' },
        { label: 'iPhone 17 Air',     to: '/shop/iphone-17-air' },
        { label: 'iPhone 17',         to: '/shop/iphone-17' },
        { label: 'View all iPhone',   to: '/product-category/iphone', strong: true },
      ]},
      { title: 'Accessories', links: [
        { label: 'AirPods',           to: '/product-category/airpods' },
        { label: 'Cases & Covers',    to: '/product-category/accessories' },
        { label: 'Chargers',          to: '/product-category/accessories' },
      ]},
    ],
    featured: pickFor('iphone', 3),
  },
  {
    label: 'Mac',
    to: '/product-category/mac',
    columns: [
      { title: 'Shop Mac', links: [
        { label: 'MacBook Pro',       to: '/shop/macbook-pro-14-m5' },
        { label: 'MacBook Air',       to: '/shop/macbook-air-13-m5' },
        { label: 'iMac',              to: '/shop/imac-24-m4' },
        { label: 'Mac mini',          to: '/shop/mac-mini-m4' },
        { label: 'View all Mac',      to: '/product-category/mac', strong: true },
      ]},
      { title: 'Accessories', links: [
        { label: 'Magic Keyboard',    to: '/product-category/accessories' },
        { label: 'Magic Mouse',       to: '/product-category/accessories' },
      ]},
    ],
    featured: pickFor('mac', 3),
  },
  {
    label: 'iPad',
    to: '/product-category/ipad',
    columns: [
      { title: 'Shop iPad', links: [
        { label: 'iPad Pro',          to: '/shop/ipad-pro-m5-11-inch' },
        { label: 'iPad Air',          to: '/shop/ipad-air-11-m4' },
        { label: 'View all iPad',     to: '/product-category/ipad', strong: true },
      ]},
      { title: 'Accessories', links: [
        { label: 'Apple Pencil Pro',  to: '/shop/apple-pencil-pro' },
        { label: 'Magic Keyboard',    to: '/shop/magic-keyboard-ipad-pro-13' },
      ]},
    ],
    featured: pickFor('ipad', 2),
  },
  {
    label: 'Watch',
    to: '/product-category/watch',
    columns: [
      { title: 'Shop Apple Watch', links: [
        { label: 'Apple Watch Ultra 3', to: '/shop/apple-watch-ultra-3' },
        { label: 'Apple Watch Series 11', to: '/shop/apple-watch-series-11' },
        { label: 'View all Watch',  to: '/product-category/watch', strong: true },
      ]},
    ],
    featured: pickFor('watch', 2),
  },
  {
    label: 'AirPods',
    to: '/product-category/airpods',
    columns: [
      { title: 'Shop AirPods', links: [
        { label: 'AirPods Pro 3',     to: '/shop/airpods-pro-3' },
        { label: 'AirPods Max',       to: '/shop/airpods-max-2024' },
        { label: 'View all AirPods',  to: '/product-category/airpods', strong: true },
      ]},
    ],
    featured: pickFor('airpods', 2),
  },
  {
    label: 'Samsung',
    to: '/product-category/samsung',
    columns: [
      { title: 'Galaxy Phones', links: [
        { label: 'Galaxy S25 Ultra',  to: '/shop/galaxy-s25-ultra' },
        { label: 'Galaxy S25+',       to: '/shop/galaxy-s25-plus' },
        { label: 'Galaxy Z Fold 7',   to: '/shop/galaxy-z-fold-7' },
        { label: 'Galaxy Z Flip 7',   to: '/shop/galaxy-z-flip-7' },
      ]},
      { title: 'Wearables & More', links: [
        { label: 'Galaxy Watch 8',    to: '/shop/galaxy-watch-8' },
        { label: 'Galaxy Buds 4 Pro', to: '/shop/galaxy-buds-4-pro' },
        { label: 'Galaxy Tab S11',    to: '/shop/galaxy-tab-s11-ultra' },
        { label: 'View all Samsung',  to: '/product-category/samsung', strong: true },
      ]},
    ],
    featured: pickFor('samsung', 3),
  },
  {
    label: 'Google Pixel',
    to: '/product-category/google',
    columns: [
      { title: 'Shop Pixel', links: [
        { label: 'Pixel 10 Pro XL',   to: '/shop/pixel-10-pro-xl' },
        { label: 'Pixel 10 Pro',      to: '/shop/pixel-10-pro' },
        { label: 'Pixel 10',          to: '/shop/pixel-10' },
        { label: 'Pixel Watch 4',     to: '/shop/pixel-watch-4' },
        { label: 'View all Pixel',    to: '/product-category/google', strong: true },
      ]},
    ],
    featured: pickFor('google', 2),
  },
  {
    label: 'Xiaomi',
    to: '/product-category/xiaomi',
    columns: [
      { title: 'Shop Xiaomi', links: [
        { label: 'Xiaomi 15 Ultra',   to: '/shop/xiaomi-15-ultra' },
        { label: 'Xiaomi 15 Pro',     to: '/shop/xiaomi-15-pro' },
        { label: 'Redmi Note 14 Pro', to: '/shop/redmi-note-14-pro' },
        { label: 'Xiaomi Pad 7 Pro',  to: '/shop/xiaomi-pad-7-pro' },
        { label: 'View all Xiaomi',   to: '/product-category/xiaomi', strong: true },
      ]},
    ],
    featured: pickFor('xiaomi', 2),
  },
  {
    label: 'Motorola',
    to: '/product-category/motorola',
    columns: [
      { title: 'Shop Motorola', links: [
        { label: 'Edge 60 Ultra',     to: '/shop/moto-edge-60-ultra' },
        { label: 'Edge 60 Pro',       to: '/shop/moto-edge-60-pro' },
        { label: 'Razr 60 Ultra',     to: '/shop/moto-razr-60-ultra' },
        { label: 'Razr 60',           to: '/shop/moto-razr-60' },
        { label: 'Moto G85 Power',    to: '/shop/moto-g85-power' },
        { label: 'View all Motorola', to: '/product-category/motorola', strong: true },
      ]},
    ],
    featured: pickFor('motorola', 2),
  },
]

// Separate mega menu for Tech Labs — rendered as the styled "Labs" pill
export const labsMega = {
  label: 'Labs',
  to: '/labs',
  columns: [
    { title: 'Training Courses', links: [
      ...courses.map((c) => ({ label: c.title, to: `/labs/courses/${c.slug}` })),
      { label: 'View all courses', to: '/labs/courses', strong: true },
    ]},
    { title: 'Repair Services', links: [
      ...services.slice(0, 5).map((s) => ({ label: s.title, to: `/labs/services/${s.slug}` })),
      { label: 'View all services', to: '/labs/services', strong: true },
    ]},
    { title: 'More', links: [
      { label: 'Book a Repair',  to: '/labs/book' },
      { label: 'Instructors',    to: '/labs/instructors' },
      { label: 'Gallery',        to: '/labs/gallery' },
      { label: 'Testimonials',   to: '/labs/testimonials' },
      { label: 'Contact Lab',    to: '/labs/contact' },
    ]},
  ],
  featuredCourses: courses.slice(0, 3),
}

