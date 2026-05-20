/**
 * Unsplash URL helper.
 *
 * Always returns a properly-sized URL with `auto=format` so Unsplash's CDN
 * serves WebP/AVIF to supported browsers automatically. Quality 85 is the
 * sweet spot between sharpness and file size for phone product shots.
 *
 *   unsplash('1592750475338-74b7b21085ab', 800)
 *   → 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=85'
 */
export function unsplash(id, w = 800, opts = {}) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: opts.fit || 'crop',
    w: String(w),
    q: String(opts.q || 85),
  })
  if (opts.h) params.set('h', String(opts.h))
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`
}

/**
 * Generate the `srcSet` string for responsive `<img srcSet>` usage.
 * Provides 1× / 2× / 3× density images at the requested base width.
 */
export function unsplashSrcSet(id, baseW = 400) {
  return [1, 2, 3]
    .map((d) => `${unsplash(id, baseW * d)} ${d}x`)
    .join(', ')
}

/**
 * Catalogue of curated, distinct Unsplash photo IDs used across the site.
 * Centralising them here means every product gets a unique, clean shot
 * and we can swap a single ID to update its image everywhere.
 *
 * Each entry's comment notes what the shot depicts so future edits don't
 * accidentally reuse the same ID for two different products.
 */
export const IMG = {
  // ── iPhone ────────────────────────────────────────────────
  iphone17ProMax:  '1592750475338-74b7b21085ab', // iPhone Pro, dark, in-hand
  iphone17Pro:     '1591337676887-a217a6970a8a', // gold iPhone, studio
  iphone17Air:     '1592286927505-1def25115558', // pink/blue iPhone, gradient bg
  iphone17:        '1605236453806-6ff36851218e', // iPhone with cases
  iphoneHero:      '1510557880182-3d4d3cba35a5', // iPhones aligned, dramatic

  // ── Mac ───────────────────────────────────────────────────
  macBookPro:      '1611186871348-b1ce696e52c9', // open MacBook, side
  macBookAir:      '1517336714731-489689fd1ca8', // open MacBook on desk
  macMini:         '1633957897986-70e83293f3ff', // Mac mini close-up
  imac:            '1527443224154-c4a3942d3acf', // iMac on desk

  // ── iPad ──────────────────────────────────────────────────
  ipadPro:         '1561154464-82e9adf32764',    // iPad held up
  ipadAir:         '1585790050230-5dd28404ccb9', // iPad with Pencil

  // ── Watch ─────────────────────────────────────────────────
  watchUltra:      '1579586337278-3befd40fd17a', // Apple Watch close-up
  watchSeries:     '1551816230-ef5deaed4a26',    // Apple Watch on wrist

  // ── AirPods ───────────────────────────────────────────────
  airpodsPro:      '1606220588913-b3aacb4d2f46', // AirPods Pro
  airpodsMax:      '1606841837239-c5a1a4a07af7', // AirPods Max

  // ── Apple accessories ─────────────────────────────────────
  applePencil:     '1623126908029-58cb08a2b272', // Pencil on iPad
  magicKeyboard:   '1587825140708-dfaf72ae4b04', // keyboard on desk

  // ── Samsung ───────────────────────────────────────────────
  galaxyS25Ultra:  '1610945415295-d9bbf067e59c', // dark Galaxy on white
  galaxyS25Plus:   '1592899677977-9c10ca588bbd', // Galaxy with stylus
  galaxyZFold:     '1615655406736-b37c4fabf923', // foldable phone
  galaxyZFlip:     '1556656793-08538906a9f8',    // flip phone in hand
  galaxyTabUltra:  '1561883088-039e53143d73', // tablet on desk
  galaxyWatch:     '1572569511254-d8f925fe2cbb', // round smartwatch
  galaxyBuds:      '1606400082777-ef05f3c5cde2', // earbuds case

  // ── Google Pixel ──────────────────────────────────────────
  pixelProXL:      '1598327105666-5b89351aff97', // Pixel-style phone close-up
  pixelPro:        '1592890288564-76628a30a657', // dark phones lineup
  pixel10:         '1574944985070-8f3ebc6b79d2', // phone in hand, minimal
  pixelWatch:      '1523275335684-37898b6baf30',    // smartwatch face

  // ── Xiaomi ────────────────────────────────────────────────
  xiaomiUltra:     '1607936854279-55e8a4c64888', // dark cinematic phone
  xiaomiPro:       '1565849904461-04a58ad377e0', // edge-curved phone
  redmiNotePro:    '1601972602237-8c79241e468b', // phone with green back
  xiaomiPad:       '1542751110-97427bbecf20', // tablet with stylus

  // ── Motorola ──────────────────────────────────────────────
  motoEdgeUltra:   '1610792516775-01de03eae630', // curved-screen phone
  motoEdgePro:     '1574629810360-7efbbe195018', // phone in dark scene
  motoRazrUltra:   '1591815302525-756a9bcc3425', // foldable / flip
  motoRazr:        '1567581935884-3349723552ca', // phone in pocket

  // ── Lifestyle / hero ──────────────────────────────────────
  heroDesk:        '1581092580497-e0d23cbdf1dc', // workshop desk
}
