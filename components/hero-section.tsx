"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card p-2 shadow-md overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-KhOMFwFqsaDAmA9NAU3wZ3aUrKQBKJ.jpeg"
                alt="aila naturals Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
              aila naturals
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Nourish yourself with the purity of nature. aila naturals blends
            herbal ingredients with timeless beauty rituals to create skincare
            that feels gentle, earthy, and luxurious.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <Button size="lg" className="rounded-2xl shadow-lg px-6">
                Shop Products
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-2xl px-6 border-primary text-primary hover:bg-secondary"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-secondary rounded-[2rem] p-6 md:p-8 shadow-2xl">
            <div className="relative h-[400px] md:h-[500px] rounded-[1.5rem] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/replacelogo-GQBa70xdS137vdxl3KL52aMwSxKIuj.jpeg"
                alt="aila naturals coming soon"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
