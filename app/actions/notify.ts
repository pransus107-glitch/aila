'use server'

interface NotifyData {
  name: string
  email: string
  contactNumber: string
}

export async function submitNotify(data: NotifyData) {
  try {
    const googleScriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (!googleScriptUrl) {
      console.error('[v0] GOOGLE_SHEETS_WEBHOOK_URL is not configured')
      return {
        success: false,
        error: 'Google Sheets integration is not configured. Please contact support.',
      }
    }

    console.log('[v0] Submitting notify data to Google Sheets')

    const payload = {
      name: data.name,
      email: data.email,
      contactNumber: data.contactNumber,
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error('[v0] Google Sheets submission failed:', response.statusText)
      return {
        success: false,
        error: 'Failed to submit your information. Please try again.',
      }
    }

    const result = await response.json()
    if (result.success) {
      console.log('[v0] Notify data submitted to Google Sheets successfully')
      return { success: true }
    }

    return {
      success: false,
      error: 'Failed to submit your information. Please try again.',
    }
  } catch (error) {
    console.error('[v0] Error submitting notify data:', error)
    return {
      success: false,
      error: 'An error occurred while submitting your information. Please try again.',
    }
  }
}
