import Image from "next/image"

export function BrandStory() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="bg-muted rounded-[2rem] p-8 md:p-10 shadow-lg grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="relative h-[300px] md:h-[350px] rounded-[1.5rem] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/story-j1E75D1Ny1JrObMLACxeKj7D1veUe6.jpeg"
            alt="Natural ingredients used in aila naturals products"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
            Rooted In Nature
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            aila naturals was born from a simple belief- that true beauty comes from nature and when nurtured with care it has the power to heal, restore and glow.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We create clean, effective and honest skincare using pure botanicals and time-honoured ingredients that have been trusted fore generations.
          </p>
        </div>
      </div>
    </section>
  )
}
