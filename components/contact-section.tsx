"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappNumber = "919956098430"
    const text = `Hello Aila Naturals!

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}`
    
    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`
    
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
        Get In Touch
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
        Interested in herbal skincare? Connect with Aila Naturals for product
        updates, collaborations, and orders.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-card rounded-[2rem] shadow-xl p-8 md:p-10 max-w-3xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="rounded-xl px-4 py-3 h-12 border-border focus:ring-2 focus:ring-primary"
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="rounded-xl px-4 py-3 h-12 border-border focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <Textarea
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="mt-6 rounded-xl px-4 py-3 border-border focus:ring-2 focus:ring-primary resize-none"
          required
        />

        <Button
          type="submit"
          size="lg"
          className="mt-6 rounded-2xl shadow-lg px-8 gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Send via WhatsApp
        </Button>
      </form>
    </section>
  )
}
