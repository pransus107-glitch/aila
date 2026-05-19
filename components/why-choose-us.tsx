import { Leaf, Sparkles, Heart } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Herbal Ingredients",
    description:
      "Crafted with nature-inspired ingredients that care for your skin gently.",
  },
  {
    icon: Sparkles,
    title: "Gentle Care",
    description:
      "Mild and soothing formulations suitable for everyday skincare.",
  },
  {
    icon: Heart,
    title: "Earthy Luxury",
    description:
      "A rich blend of herbal beauty and elegant skincare aesthetics.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 md:mb-12">
          Why Aila Naturals?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">
                {feature.title}
              </h3>
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
