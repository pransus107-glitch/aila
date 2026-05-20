'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsComingSoon() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center py-20">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Herbal Skincare Collection
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We&apos;re carefully crafting our herbal skincare collection to bring you the finest natural ingredients and time-tested beauty rituals.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-8">
          <p className="text-lg font-medium text-foreground mb-4">
            Coming Soon
          </p>
          <p className="text-muted-foreground mb-6">
            Be the first to experience Aila Naturals&apos; complete herbal skincare range. Our products are formulated with pure, natural ingredients to nourish and transform your skin.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              ✓ Sandalwood Face Pack<br />
              ✓ Rice Flour Scrub<br />
              ✓ Besan Glow Polish<br />
              ✓ Rose Clay Mask
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="rounded-2xl shadow-lg px-8">
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-2xl px-8 border-primary text-primary hover:bg-secondary"
          >
            Notify Me
          </Button>
        </div>
      </div>
    </main>
  )
}
