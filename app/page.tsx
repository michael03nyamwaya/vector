// app/page.tsx
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import FAQSection from './components/FrequentQuestion';
import Mockup from './components/Mockup';
import Latest from './components/Latest';
import Service from './components/Service';
import Hero2 from './components/Hero2';
import ViewAll from './components/ViewAll';

const Homepage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = (await searchParams).category || "all"
  
  return (
    <>
      <Head>
        <title>Vector Printers Ltd - Professional Printing Services</title>
        <meta name="description" content="High-quality printing services for all your business needs. Business cards, t-shirts, books, prints, and invitation cards." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero2 />
      <Service />
      {/* <Latest /> */}
      <ProductList category={category} showHeader={true} />
      <ViewAll />
      <Mockup />
      <About />
      {/* <Portfolio/> */}
      <Banner />
      <Testimonials />
      <FAQSection />
      <Contact />
    </>
  );
}

export default Homepage