import CTASection from "./components/CTASection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <div className="text-base leading-base text-white min-h-screen bg-teal-800 flex flex-col">
      <Header />
      <HeroSection />

      <FeaturesSection />
      <TestimonialsSection />
      
      <CTASection />
      <Footer />
    </div>
  )
}

export default App;