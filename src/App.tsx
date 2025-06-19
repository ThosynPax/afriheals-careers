import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@components/sections/header'
import Footer from '@components/sections/footer'
import ScrollToTop from '@components/sections/scrollToTop'
import RecentProjects from '@components/sections/recentProjects'
import Hero from '@components/sections/hero'
import About from '@components/sections/about'
import Testimonials from '@components/sections/testimonials'
import Booking from '@components/sections/booking'
import Services from '@components/sections/services'
import Story from '@components/sections/Story'
import Projects from '@components/sections/projects'
import Pricing from '@components/sections/pricing'

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Route for Story Page */}
        <Route path="/story" element={
          <>
            <Header />
            <Story />
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
