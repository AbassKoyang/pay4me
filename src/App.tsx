import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Sponsors from './components/Sponsors.tsx';
import PaymentSection from './components/PaymentSection.tsx';
import Testimonial from './components/Testimonial.tsx';

function App() {

  return (
    <main className='w-screen min-h-screen bg-secondarygray'>
      <Header />
      <Hero />
      <Sponsors />
      <PaymentSection />
      <Testimonial />
    </main>
  )
}

export default App
