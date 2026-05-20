"use client"

import { Leaf, Sparkles, Heart, Send, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,94,60,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-accent mb-4">
            Herbal Skincare
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card p-2 shadow-md flex items-center justify-center">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
              aila naturals
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Nourish your skin with the purity of natural ingredients. aila naturals blends
            herbal ingredients with timeless beauty rituals to create skincare
            that feels gentle, earthy, and luxurious.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-2xl shadow-lg transition-all font-medium">
              Shop Products
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-2xl hover:bg-muted transition-all font-medium">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-secondary rounded-[2rem] p-6 md:p-8 shadow-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-H7AooJP8ClTRiObEf3b39C4RRhQOSI.jpeg"
            alt="aila naturals logo"
            width={600}
            height={500}
            className="rounded-[1.5rem] w-full h-[350px] md:h-[500px] object-contain"
            priority
          />
          </div>
        </div>
      </div>
    </section>
  )
}

export function BrandStory() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="bg-muted rounded-[2rem] p-8 md:p-10 shadow-lg grid md:grid-cols-2 gap-10 items-center">
       <Image
  src="https://coulif.in/product/pure-sandalwood-chandan-stick-100-original-sandalwood-non-comparable-originality/"
  alt="Natural herbal ingredients for skincare"
  width={600}
  height={350}
  className="rounded-[1.5rem] h-[300px] md:h-[350px] w-full object-cover"
/>

        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Rooted In Nature</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            At aila naturals, we believe skincare should feel pure, calming,
            and connected to nature. Our herbal formulas are inspired by
            traditional beauty rituals and crafted with carefully selected
            natural ingredients. Every product is designed to refresh, cleanse, and restore your
            skin while giving you a luxurious self-care experience.
          
        </div>
      </div>
    </section>
  )
}

export function ProductsSection() {
  const products = [
    {
      name: "Sandalwood Face Pack",
      description: "A refreshing herbal cleanser infused with sandalwood to gently purify, soothe, and brighten your skin naturally.",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop",
      alt: "Aila Naturals Sandalwood Face Pack"
    },
    {
      name: "Rice Flour Scrub",
      description: "A gentle exfoliating scrub made with rice flour to remove dull skin, leaving your face smooth, soft, and radiant.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
      alt: "Aila Naturals Rice Flour Scrub"
    },
    {
      name: "Besan Glow Polish",
      description: "A deep cleansing scrub infused with besan to gently exfoliate, remove tan, and leave your skin smooth, radiant, and glowing.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/besan-WmPcFGFwkY6AXe0RT2721330QxVxAB.jpeg",
      alt: "Aila Naturals Besan Glow Polish"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">Our Signature Products</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Herbal skincare essentials crafted with natural ingredients and a
          soothing earthy touch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product) => (
          <div 
            key={product.name}
            className="bg-card rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <Image
              src={product.image}
              alt={product.alt}
              width={600}
              height={350}
              className="h-[280px] md:h-[350px] w-full object-cover"
            />

            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3 text-foreground">
                {product.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-xl shadow-md transition-all font-medium">
                Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "Herbal Ingredients",
      description: "Crafted with nature-inspired ingredients that care for your skin gently."
    },
    {
      icon: Sparkles,
      title: "Gentle Care",
      description: "Mild and soothing formulations suitable for everyday skincare."
    },
    {
      icon: Heart,
      title: "Earthy Luxury",
      description: "A rich blend of herbal beauty and elegant skincare aesthetics."
    }
  ]

  return (
    <section className="bg-secondary py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-foreground">Why aila naturals?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-background rounded-2xl p-8 shadow-md"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Get In Touch</h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
        Interested in herbal skincare? Connect with aila naturals for product
        updates, collaborations, and orders.
      </p>

      <div className="bg-card rounded-[2rem] shadow-xl p-8 md:p-10 max-w-3xl mx-auto">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-input bg-background rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-input bg-background rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring w-full"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-input bg-background rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />

          <button 
            type="submit"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-2xl shadow-lg transition-all font-medium inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card p-3 flex items-center justify-center">
          <Leaf className="w-10 h-10 text-primary" />
        </div>
      </div>
      <h3 className="text-2xl font-serif font-semibold mb-2">aila naturals</h3>
      <p className="text-background/80">
        Herbal skincare inspired by nature.
      </p>
      <p className="text-background/60 text-sm mt-4">
        &copy; {new Date().getFullYear()} aila naturals. All rights reserved.
      </p>
    </footer>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-muted p-1.5 flex items-center justify-center">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-serif font-bold text-foreground">aila naturals</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>

       <a
  href="https://wa.me/919956098430?text=Hi%20Aila%20Naturals%2C%20I%20want%20to%20order%20the%20Sandalwood%20Face%20Pack."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-xl shadow-md transition-all font-medium inline-block"
>
  Order Sandalwood Face Pack
</a>

        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#products" className="block text-muted-foreground hover:text-foreground transition-colors">Products</a>
          <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-xl transition-all font-medium text-sm">
            Shop Now
          </button>
        </div>
      )}
    </header>
  )
}
