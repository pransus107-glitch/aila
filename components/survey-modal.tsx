'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { submitSurvey } from '@/app/actions/survey'
import { Loader2 } from 'lucide-react'

interface SurveyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skinType: '',
    skinConcerns: '',
    productPreference: '',
    ingredients: '',
    purchaseDecision: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Name and email are required')
      setIsSubmitting(false)
      return
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      const result = await submitSurvey(formData)
      
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          skinType: '',
          skinConcerns: '',
          productPreference: '',
          ingredients: '',
          purchaseDecision: '',
        })
        onClose()
      } else {
        setError(result.error || 'Failed to submit survey')
      }
    } catch (err) {
      setError('An error occurred while submitting the survey')
      console.error('[v0] Survey submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">aila naturals Survey</DialogTitle>
          <DialogDescription>
            We&apos;d love to hear from you! Please take a moment to answer these questions.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-destructive/10 text-destructive text-sm rounded">
              {error}
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Question 1 */}
          <div>
            <label className="block text-sm font-medium mb-2">1. What is your skin type? *</label>
            <select
              name="skinType"
              value={formData.skinType}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border border-input rounded-md px-3 py-2 text-sm"
            >
              <option value="">Select an option</option>
              <option value="dry">Dry</option>
              <option value="oily">Oily</option>
              <option value="combination">Combination</option>
              <option value="sensitive">Sensitive</option>
            </select>
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-medium mb-2">2. What are your main skincare concerns? *</label>
            <select
              name="skinConcerns"
              value={formData.skinConcerns}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border border-input rounded-md px-3 py-2 text-sm"
            >
              <option value="">Select an option</option>
              <option value="acne">Acne and breakouts</option>
              <option value="aging">Aging and wrinkles</option>
              <option value="hyperpigmentation">Hyperpigmentation and dark spots</option>
              <option value="redness">Redness and irritation</option>
            </select>
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-sm font-medium mb-2">3. What product category interests you most? *</label>
            <select
              name="productPreference"
              value={formData.productPreference}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border border-input rounded-md px-3 py-2 text-sm"
            >
              <option value="">Select an option</option>
              <option value="cleansers">Cleansers and face washes</option>
              <option value="serums">Serums and treatments</option>
              <option value="moisturizers">Moisturizers and creams</option>
              <option value="masks">Masks and exfoliators</option>
            </select>
          </div>

          {/* Question 4 */}
          <div>
            <label className="block text-sm font-medium mb-2">4. Which ingredient appeals to you most? *</label>
            <select
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border border-input rounded-md px-3 py-2 text-sm"
            >
              <option value="">Select an option</option>
              <option value="organic">Organic and natural ingredients</option>
              <option value="hyaluronic">Hyaluronic acid and hydration</option>
              <option value="retinol">Retinol and anti-aging</option>
              <option value="botanical">Botanical extracts and oils</option>
            </select>
          </div>

          {/* Question 5 */}
          <div>
            <label className="block text-sm font-medium mb-2">5. What influences your skincare purchase decision? *</label>
            <select
              name="purchaseDecision"
              value={formData.purchaseDecision}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border border-input rounded-md px-3 py-2 text-sm"
            >
              <option value="">Select an option</option>
              <option value="ingredients">Quality of ingredients</option>
              <option value="brand">Brand reputation and values</option>
              <option value="price">Price and value for money</option>
              <option value="results">Visible results and effectiveness</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Survey'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
