"use client"

import Image from "next/image"
 import { Button } from "@/components/ui/button"

const products = [
 {
   name: "Sandalwood Face Pack",
   description:
    "A refreshing herbal cleanser infused with sandalwood to gently purify, soothe, and brighten your skin naturally.",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandalwood-54BVBBVkT3nxDPkmHi1gwlGIOukSK7.jpeg",
  },
  {
 name: "Rice Flour Scrub",
    description:
     "A gentle exfoliating scrub made with rice flour to remove dull skin, leaving your face smooth, soft, and radiant.",
    image: "/images/rice-flour-scrub.jpeg",
  },
  {
   name: "Besan Glow Polish",
   description:
    "A deep cleansing scrub infused with besan to gently exfoliate, remove tan, and leave your skin smooth, radiant, and glowing.",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/besan-WmPcFGFwkY6AXe0RT2721330QxVxAB.jpeg",
  },
  {
   name: "Rose Clay Mask",
   description:
    "A purifying and glowing mask infused with rose clay to detoxify, purify, and brighten your skin while refining pores and revealing a radiant glow.",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rose%20mask-pC688BFynwWRMKt67QhAOpBJvDdiYW.jpeg",
  },
]

export function ProductsSection() {
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

             <Button className="rounded-xl shadow-md">
                Coming Soon
              </Button>
           </div>
         </article>
       ))}
     </div>
    </section>
  )
}
