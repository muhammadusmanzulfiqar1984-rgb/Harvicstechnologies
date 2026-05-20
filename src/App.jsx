import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import CompareDrawer from './components/CompareDrawer.jsx'
import useRevealOnScroll from './hooks/useRevealOnScroll.js'

// Eager: Home is the landing page, keep it in the main bundle.
import Home from './pages/Home.jsx'

// Lazy: split every secondary route into its own chunk so the initial
// JS payload stays small. Routes are fetched on demand on first visit.
const Shop           = lazy(() => import('./pages/Shop.jsx'))
const CategoryRoute  = lazy(() => import('./pages/CategoryRoute.jsx'))
const ProductDetail  = lazy(() => import('./pages/ProductDetail.jsx'))
const Cart           = lazy(() => import('./pages/Cart.jsx'))
const About          = lazy(() => import('./pages/About.jsx'))
const Contact        = lazy(() => import('./pages/Contact.jsx'))
const NotFound       = lazy(() => import('./pages/NotFound.jsx'))
const Wishlist       = lazy(() => import('./pages/Wishlist.jsx'))
const Compare        = lazy(() => import('./pages/Compare.jsx'))
const Business       = lazy(() => import('./pages/Business.jsx'))

const LabsHome       = lazy(() => import('./pages/labs/LabsHome.jsx'))
const CoursesList    = lazy(() => import('./pages/labs/CoursesList.jsx'))
const CourseDetail   = lazy(() => import('./pages/labs/CourseDetail.jsx'))
const ServicesList   = lazy(() => import('./pages/labs/ServicesList.jsx'))
const ServiceDetail  = lazy(() => import('./pages/labs/ServiceDetail.jsx'))
const BookRepair     = lazy(() => import('./pages/labs/BookRepair.jsx'))
const Instructors    = lazy(() => import('./pages/labs/Instructors.jsx'))
const Gallery        = lazy(() => import('./pages/labs/Gallery.jsx'))
const Testimonials   = lazy(() => import('./pages/labs/Testimonials.jsx'))
const LabsContact    = lazy(() => import('./pages/labs/LabsContact.jsx'))

const Careers       = lazy(() => import('./pages/Careers.jsx').then((m) => ({ default: m.Careers })))
const CareerDetail  = lazy(() => import('./pages/Careers.jsx').then((m) => ({ default: m.CareerDetail })))

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--color-accent-blue)] border-t-transparent"
        aria-label="Loading"
      />
    </div>
  )
}

export default function App() {
  useRevealOnScroll()
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product-category/:category" element={<CategoryRoute />} />
            <Route path="/shop/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/business" element={<Business />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />

            <Route path="/labs" element={<LabsHome />} />
            <Route path="/labs/courses" element={<CoursesList />} />
            <Route path="/labs/courses/:slug" element={<CourseDetail />} />
            <Route path="/labs/services" element={<ServicesList />} />
            <Route path="/labs/services/:slug" element={<ServiceDetail />} />
            <Route path="/labs/book" element={<BookRepair />} />
            <Route path="/labs/instructors" element={<Instructors />} />
            <Route path="/labs/gallery" element={<Gallery />} />
            <Route path="/labs/testimonials" element={<Testimonials />} />
            <Route path="/labs/contact" element={<LabsContact />} />

            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<CareerDetail />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CompareDrawer />
    </div>
  )
}
