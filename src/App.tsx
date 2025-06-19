import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@components/sections/header'
import Footer from '@components/sections/footer'
import ScrollToTop from '@components/sections/scrollToTop'
import RecentProjects from '@components/sections/recentProjects'
import Hero from '@components/sections/hero'
import About from '@components/sections/about'
import Testimonials from '@components/sections/testimonials'
import Booking from '@components/sections/booking'
import Terms from '@components/others/Terms'
import Privacy from '@components/others/Privacy'
import Courses from '@components/others/Courses'
import Services from '@components/sections/services'
import Bootcamps from '@components/others/Bootcamps'
import Story from '@components/sections/Story'
import Projects from '@components/sections/projects'
import Pricing from '@components/sections/pricing'

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

        {/* Route for Story Page */}
        <Route path="/story" element={
          <>
            <Header />
            <Story />
            <Footer />
            <ScrollToTop />
          </>
        } />

        {/* Route for Bootcamps Page */}
        <Route path="/Bootcamps" element={
          <>
            <Bootcamps />
            <Footer />
            <ScrollToTop />
          </>
        } />
        
        {/* Route for Home Page (or other pages) */}
        <Route path="/" element={
          <>
            <Header />
            <main>
              <Hero />
              <RecentProjects />
              <About />
              <Projects />
              <Testimonials />
              <Services />
              <Pricing />
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
