'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          question1: '',
          question2: '',
          question3: '',
          question4: '',
          question5: '',
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
            <label className="block text-sm font-medium mb-2">Question 1: What is your skin type?</label>
            <Textarea
              name="question1"
              value={formData.question1}
              onChange={handleChange}
              placeholder="Your answer..."
              disabled={isSubmitting}
              rows={2}
            />
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-medium mb-2">Question 2: What are your skincare concerns?</label>
            <Textarea
              name="question2"
              value={formData.question2}
              onChange={handleChange}
              placeholder="Your answer..."
              disabled={isSubmitting}
              rows={2}
            />
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-sm font-medium mb-2">Question 3: Have you used natural skincare before?</label>
            <Textarea
              name="question3"
              value={formData.question3}
              onChange={handleChange}
              placeholder="Your answer..."
              disabled={isSubmitting}
              rows={2}
            />
          </div>

          {/* Question 4 */}
          <div>
            <label className="block text-sm font-medium mb-2">Question 4: What matters most to you in skincare products?</label>
            <Textarea
              name="question4"
              value={formData.question4}
              onChange={handleChange}
              placeholder="Your answer..."
              disabled={isSubmitting}
              rows={2}
            />
          </div>

          {/* Question 5 */}
          <div>
            <label className="block text-sm font-medium mb-2">Question 5: How did you hear about aila naturals?</label>
            <Textarea
              name="question5"
              value={formData.question5}
              onChange={handleChange}
              placeholder="Your answer..."
              disabled={isSubmitting}
              rows={2}
            />
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
