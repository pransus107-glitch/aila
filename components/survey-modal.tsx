"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface SurveyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Submit to our API route which forwards to Google Apps Script
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          question1: formData.question1,
          question2: formData.question2,
          question3: formData.question3,
          question4: formData.question4,
          question5: formData.question5,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          question1: "",
          question2: "",
          question3: "",
          question4: "",
          question5: "",
        })
        setTimeout(() => {
          onClose()
          setSuccess(false)
        }, 2000)
      } else {
        setError("Failed to submit survey. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error("[v0] Survey submission error:", err)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background">
          <h2 className="text-2xl font-serif font-bold text-foreground">Take a Survey</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close survey"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              Thank you for completing the survey!
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-input bg-background rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-input bg-background rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Question 1
            </label>
            <textarea
              name="question1"
              value={formData.question1}
              onChange={handleChange}
              required
              className="w-full border border-input bg-background rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={2}
              placeholder="Your answer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Question 2
            </label>
            <textarea
              name="question2"
              value={formData.question2}
              onChange={handleChange}
              required
              className="w-full border border-input bg-background rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={2}
              placeholder="Your answer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Question 3
            </label>
            <textarea
              name="question3"
              value={formData.question3}
              onChange={handleChange}
              required
              className="w-full border border-input bg-background rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={2}
              placeholder="Your answer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Question 4
            </label>
            <textarea
              name="question4"
              value={formData.question4}
              onChange={handleChange}
              required
              className="w-full border border-input bg-background rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={2}
              placeholder="Your answer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Question 5
            </label>
            <textarea
              name="question5"
              value={formData.question5}
              onChange={handleChange}
              required
              className="w-full border border-input bg-background rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={2}
              placeholder="Your answer"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground px-4 py-2 rounded-lg transition-all font-medium text-sm"
          >
            {loading ? "Submitting..." : "Submit Survey"}
          </button>
        </form>
      </div>
    </div>
  )
}
