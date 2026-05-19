import { HeroSection } from "@/components/hero-section"
import { BrandStory } from "@/components/brand-story"
import { ProductsSection } from "@/components/products-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <BrandStory />
      <section id="products">
        <ProductsSection />
      </section>
      <section id="about">
        <WhyChooseUs />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
