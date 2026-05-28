"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { SurveyModal } from "@/components/survey-modal"

const products = [
 {
   name: "Sandalwood Face Pack",
   description:
    "A refreshing herbal cleanser infused with sandalwood to gently purify, soothe, and brighten your skin naturally.",
   fullDescription:
    "Our Sandalwood Face Pack is a luxurious herbal blend that combines the ancient wisdom of Ayurveda with modern skincare. Sandalwood has been revered for centuries for its cooling and anti-inflammatory properties. This face pack gently removes impurities, reduces redness, and leaves your skin feeling fresh, smooth, and naturally radiant. Perfect for all skin types, especially sensitive and irritated skin.",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sfp-mJSQjlnprEl58mmNTALIFLzAMfVTcR.jpeg",
  },
  {
 name: "Rice Flour Scrub",
    description:
     "A gentle exfoliating scrub made with rice flour to remove dull skin, leaving your face smooth, soft, and radiant.",
    fullDescription:
     "Experience the gentle power of rice flour with our signature Rice Flour Scrub. Rice flour is nature's gentle exfoliant that removes dead skin cells without harsh abrasion, revealing the smooth and luminous skin underneath. This scrub nourishes while it cleanses, making it ideal for sensitive skin. Regular use promotes a brighter complexion, reduces clogged pores, and enhances skin texture for a naturally glowing appearance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rice%20flour%20scrub-EsnoPTaVXh7drVEjVlbKn8Qwf4QPMe.jpeg",
  },
  {
   name: "Besan Glow Polish",
   description:
    "A deep cleansing scrub infused with besan to gently exfoliate, remove tan, and leave your skin smooth, radiant, and glowing.",
   fullDescription:
    "Besan, also known as gram flour, has been a cherished ingredient in Indian beauty rituals for generations. Our Besan Glow Polish harnesses this traditional ingredient to offer deep cleansing and gentle exfoliation. It effectively removes dead skin cells, reduces tan, and brightens the complexion naturally. The nutrient-rich formula nourishes your skin while polishing away dullness, unveiling the beautiful, glowing skin that lies beneath.",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/besan-lNGvxHwzDSHNJhSIkbNXgMH1bKHtFS.jpeg",
  },
  {
   name: "Rose Clay Mask",
   description:
    "A purifying and glowing mask infused with rose clay to detoxify, purify, and brighten your skin while refining pores and revealing a radiant glow.",
   fullDescription:
    "Rose clay is a precious natural ingredient known for its powerful detoxifying and purifying properties. Our Rose Clay Mask combines this potent ingredient with the soothing benefits of rose to create a luxurious spa-like experience at home. It draws out impurities, minimizes pores, and refines skin texture while leaving your skin hydrated and glowing. Perfect for deep cleansing, this mask reveals a clearer, brighter, and more radiant complexion.",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rose%20mask-McTWXRf8yEWKAGEghtWeftTow2vt6k.jpeg",
  },
]

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [isSurveyOpen, setIsSurveyOpen] = useState(false)

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-12 md:mb-14">
     <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Our Signature Products
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Herbal skincare essentials crafted with natural ingredients and a
          soothing earthy touch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 place-items-start">
        {products.map((product) => (
         <article
           key={product.name}
            className="bg-card rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300 group"
         >
           <div className="relative h-[300px] md:h-[350px] overflow-hidden">
             <Image
                src={product.image}
               alt={`aila naturals ${product.name}`}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
             />
            </div>

           <div className="p-6 md:p-8">
             <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
                {product.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

             <div className="flex gap-3">
               <Button className="rounded-xl shadow-md">
                  Coming Soon
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-xl shadow-md"
                  onClick={() => setIsSurveyOpen(true)}
                >
                  Survey
                </Button>
                <Dialog>
                  <Button 
                    variant="outline" 
                    className="rounded-xl shadow-md"
                    onClick={() => setSelectedProduct(product)}
                  >
                    About Product
                  </Button>
                  {selectedProduct?.name === product.name && (
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl">{selectedProduct.name}</DialogTitle>
                        <DialogDescription className="text-base leading-relaxed">
                          {selectedProduct.fullDescription}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  )}
                </Dialog>
             </div>
           </div>
         </article>
       ))}
     </div>

      <Dialog open={selectedProduct !== null} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">{selectedProduct.name}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed pt-4">
                {selectedProduct.fullDescription}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>

      <SurveyModal 
        isOpen={isSurveyOpen} 
        onClose={() => setIsSurveyOpen(false)} 
      />
    </section>
  )
}
