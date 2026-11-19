import CTASection from "./components/CTASection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <div className="text-base leading-base text-white min-h-screen bg-teal-800 flex flex-col">
      <div className="flex flex-col gap-20 px-6 pt-12 pb-50 bg-bottom bg-no-repeat bg-[url('/public/assets/bg-pattern-home-2.svg')]">
        <Header />
        <HeroSection />
      </div>

      <main className="flex flex-col">
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      
      <CTASection />
      <Footer />
    </div>
  )
}

export default App;