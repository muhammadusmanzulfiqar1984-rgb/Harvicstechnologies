import { Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

import LabsHome from './pages/labs/LabsHome.jsx'
import CoursesList from './pages/labs/CoursesList.jsx'
import CourseDetail from './pages/labs/CourseDetail.jsx'
import ServicesList from './pages/labs/ServicesList.jsx'
import ServiceDetail from './pages/labs/ServiceDetail.jsx'
import BookRepair from './pages/labs/BookRepair.jsx'
import Instructors from './pages/labs/Instructors.jsx'
import Gallery from './pages/labs/Gallery.jsx'
import Testimonials from './pages/labs/Testimonials.jsx'
import LabsContact from './pages/labs/LabsContact.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-category/:category" element={<Shop />} />
          <Route path="/shop/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
