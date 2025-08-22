import ContactCTA from "../Components/ContactCTA"
import HeroSection from "../Components/HeroSection"

import ServicesOverview from "../Components/ServicesOverview"
import ServicesSlider from "../Components/ServicesSlider"
import Slider from "../Components/Slider"
import TestimonialsCarousel from "../Components/TestimonialsCarousel"

const Home = () => {
  return (
   <div>
  <HeroSection />
  <ServicesSlider />
  <Slider></Slider>
  <ServicesOverview />
  <TestimonialsCarousel />
  <ContactCTA />
</div>
  )
}

export default Home
