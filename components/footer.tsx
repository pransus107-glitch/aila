import Image from "next/image"
import Link from "next/link"

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
          <div className="flex justify-center mb-4">
            <Link 
              href="https://www.instagram.com/theailanaturals/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-primary-foreground/70 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} aila naturals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
