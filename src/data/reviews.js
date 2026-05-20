/**
 * Mock customer reviews. In production, this would be backed by an API
 * (e.g. /api/products/:id/reviews). For the demo we synthesise stable,
 * realistic reviews per product so the UI behaves identically across
 * reloads without bringing in any backend.
 */
import { products } from './products.js'

const NAMES = ['Ahmed K.', 'Sara M.', 'Bilal R.', 'Hira A.', 'Usman T.', 'Ayesha N.', 'Hassan J.', 'Mariam S.', 'Faisal Q.', 'Zoya I.']
const CITIES = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Multan', 'Faisalabad', 'Peshawar', 'Quetta']
const TEMPLATES = [
  'Absolutely love the {name}. Build quality is premium and it feels great in hand.',
  'Genuine product, PTA approved, and delivered the very next day. Highly recommended.',
  'Battery life on the {name} easily lasts a full day of heavy use. Worth every rupee.',
  'Camera is incredible — low-light shots are sharp and colors are accurate.',
  'Switched from my old phone and the {name} feels like an upgrade in every way.',
  'Quick delivery in Karachi. Box was sealed and the staff helped me set it up.',
  'Display is gorgeous and the speakers are surprisingly loud. Gaming is buttery smooth.',
  'Cleanest software experience I have used. Updates arrive on time.',
  'After a few weeks of use, the {name} has not missed a beat. Solid choice.',
  'Customer service was fantastic — answered every question over WhatsApp before I bought.',
]

/** Stable pseudo-random number from a string seed. */
function seeded(seed, salt = 0) {
  let h = 2166136261 ^ salt
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  }
  return ((h >>> 0) % 1000) / 1000
}

function pick(arr, seed, salt) {
  return arr[Math.floor(seeded(seed, salt) * arr.length)]
}

/** Build N stable reviews for a product slug. */
export function reviewsFor(slug, n = 5) {
  const out = []
  for (let i = 0; i < n; i++) {
    const ratingRoll = seeded(slug, i * 17)
    const rating = ratingRoll > 0.18 ? 5 : ratingRoll > 0.05 ? 4 : 3
    const tpl = pick(TEMPLATES, slug, i * 31)
    const product = products.find((p) => p.slug === slug)
    const text = tpl.replace('{name}', product?.name || 'phone')
    out.push({
      id: `${slug}-r${i}`,
      name: pick(NAMES, slug, i * 7),
      city: pick(CITIES, slug, i * 11),
      rating,
      text,
      // days ago, between 1 and 90
      daysAgo: 1 + Math.floor(seeded(slug, i * 53) * 90),
    })
  }
  return out
}

/** Aggregate rating summary used on product cards. */
export function ratingSummary(slug) {
  const rs = reviewsFor(slug, 12)
  const total = rs.length
  const avg = rs.reduce((s, r) => s + r.rating, 0) / total
  return { average: Number(avg.toFixed(1)), count: total }
}
