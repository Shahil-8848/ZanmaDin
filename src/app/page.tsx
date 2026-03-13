import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReminderForm from "@/components/ReminderForm";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageSequence from "@/components/ImageSequence";
import SecondaryBackground from "@/components/SecondaryBackground";
import Gallery from "@/components/Gallery";
import ScrollNavigation from "@/components/ScrollNavigation";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <div className="relative z-10">
          <Hero />

          <ImageSequence frameCount={192} directory="/assets/picClips" />

          {/* Post-Sequence Content with Shared Professional Background */}
          <div className="relative">
            <SecondaryBackground />
            <div className="relative z-10">
              <About />
              <Categories />
              <HowItWorks />
              <WhyChooseUs />
            </div>
          </div>
          <Gallery />
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="text-center space-y-8 glass p-12 rounded-[3rem] border-gold/30">
              <h2 className="text-5xl md:text-7xl font-reggae text-white">
                Ready to make <br /> <span className="text-gold">someone smile</span> today?
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <button className="px-12 py-5 bg-gold text-white font-bold text-xl rounded-full hover:scale-105 transition-brand">
                  Order Your Surprise Today
                </button>
              </div>
            </div>
          </div>

          <ReminderForm />
          <Testimonials />

          <Faq />
        </div>
      </main>

      <Footer />
      <ScrollNavigation />
      <WhatsAppButton />
    </div>
  );
}
