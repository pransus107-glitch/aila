import Image from "next/image"

export function BrandStory() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="bg-muted rounded-[2rem] p-8 md:p-10 shadow-lg grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="relative h-[300px] md:h-[350px] rounded-[1.5rem] overflow-hidden">
          <Image
            src="/images/natural-ingredients.jpg"
            alt="Natural ingredients used in Aila Naturals products"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
            Rooted In Nature
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            At aila naturals, we believe skincare should feel pure, calming,
            and connected to nature. Our herbal formulas are inspired by
            traditional beauty rituals and crafted with carefully selected
            natural ingredients.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Every product is designed to refresh, cleanse, and restore your
            skin while giving you a luxurious self-care experience.
          </p>
        </div>
      </div>
    </section>
  )
}
