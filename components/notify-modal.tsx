'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitNotify } from '@/app/actions/notify'
import { useToast } from '@/hooks/use-toast'
import { Loader2 } from 'lucide-react'

interface NotifyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NotifyModal({ open, onOpenChange }: NotifyModalProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your name',
        variant: 'destructive',
      })
      return
    }

    if (!formData.email.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your email',
        variant: 'destructive',
      })
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      })
      return
    }

    if (!formData.contactNumber.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your contact number',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)
    try {
      const result = await submitNotify(formData)

      if (result.success) {
        toast({
          title: 'Success!',
          description: 'Thank you! We will notify you soon.',
        })
        setFormData({ name: '', email: '', contactNumber: '' })
        onOpenChange(false)
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to submit. Please try again.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error('[v0] Error submitting form:', error)
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Notify Me</DialogTitle>
          <DialogDescription>
            Enter your details and we&apos;ll notify you about our upcoming products.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Submitting...' : 'Notify Me'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
