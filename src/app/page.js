import Link from 'next/link'
import Hero from './components/hero';
import Footer from './components/footer';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="w-screen">
      {/* <h1>hey 👋🏻</h1> */}
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
