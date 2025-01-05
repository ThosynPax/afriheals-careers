import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@components/sections/header'
import Footer from '@components/sections/footer'
import ScrollToTop from '@components/sections/scrollToTop'
import Hero from '@components/sections/hero'
import About from '@components/sections/about'
import WorkingProcess from '@components/sections/workingProcess'
import Testimonials from '@components/sections/testimonials'
import Faqs from '@components/sections/faqs'
import Booking from '@components/sections/booking'
import Terms from '@components/others/Terms'
import Privacy from '@components/others/Privacy'
import Courses from '@components/others/Courses'
import Services from '@components/sections/services'
import Bootcamps from '@components/others/Bootcamps'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Terms Page */}
        <Route path="/terms" element={
          <>
            <Header />
            <Terms />
            <Footer />
            <ScrollToTop />
          </>
        } />

        {/* Route for Privacy Page */}
        <Route path="/privacy" element={
          <>
            <Header />
            <Privacy />
            <Footer />
            <ScrollToTop />
          </>
        } />

         {/* Route for Courses Page */}
         <Route path="/courses" element={
          <>
            <Header />
            <Courses />
            <Footer />
            <ScrollToTop />
          </>
        } />

        {/* Route for Bootcamps Page */}
        <Route path="/Bootcamps" element={
          <>
            <Bootcamps />
            <ScrollToTop />
          </>
        } />
        
        {/* Route for Home Page (or other pages) */}
        <Route path="/" element={
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <WorkingProcess />
              <Testimonials />
              <Services />
              <Faqs />
              <Booking />
            </main>
            <Footer />
            <ScrollToTop />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
