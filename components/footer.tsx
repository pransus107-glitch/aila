"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-10 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-card p-2 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-y2rHIXkFqRkpwFAlv0TH9NX3G82JNF.jpeg"
              alt="Aila Naturals Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2">
          aila naturals
        </h3>
        <p className="text-primary-foreground/80">
          For more queries either get in touch with us or drop a mail at admin@ailanaturals.co.in
        </p>
        
        <div className="mt-6 pt-6 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} aila naturals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
