//this is the server part
import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Features from "./Pages/Features";
import VideoSection from "./Pages/VideoSection";
import Pricing from "./Pages/Pricing";
import DownloadSection from "./Pages/DownloadSection";
import Faq from "./Pages/Faq";
import ContactForm from "./Pages/ContactForm";
export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="about" className="mt-20">
        <About />
      </section>
      <section id="features" className="mt-20">
        <Features />
      </section>
      <section id="video">
        <VideoSection />
      </section>
      <section id="pricing" className="mt-30">
        <Pricing />
      </section>
      <section id="download">
        <DownloadSection />
      </section>
      {/*<section id="testimonial" className="mt-20">
        <Testimonial />
  </section> */}
      <section id="faq">
        <Faq />
      </section>
      <section id="contact">
        <ContactForm />
      </section>

      <section id="Footer">
        <Footer />
      </section>
    </main>
  );
}
