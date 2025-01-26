import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Sponsors from './components/Sponsors.tsx';
import PaymentSection from './components/PaymentSection.tsx';
import Testimonial from './components/Testimonial.tsx';
import Faq from './components/Faq.tsx';
import Why from './components/Why.tsx';
import Blog from './components/Blog.tsx';
import Download from './components/Download.tsx';
import Footer from './components/Footer.tsx';
import OverlappingText from './components/OverlappingText.tsx';

function App() {

  return (
    <main className='w-screen min-h-screen bg-secondarygray'>
      <Header />
      <Hero />
      <Sponsors />
      <PaymentSection />
      <Testimonial />
      <Faq />
      <Why />
      <Blog />
      <Download />
      <Footer />
      <OverlappingText />
    </main>
  )
}

export default App
