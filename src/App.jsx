import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}