'use server'

interface SurveyData {
  name: string
  email: string
  question1: string
  question2: string
  question3: string
  question4: string
  question5: string
}

export async function submitSurvey(data: SurveyData) {
  try {
    // Get the Google Apps Script deployment URL from environment variable
    const googleScriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (!googleScriptUrl) {
      console.error('[v0] GOOGLE_SHEETS_WEBHOOK_URL not configured')
      return {
        success: false,
        error: 'Survey submission is not currently available. Please try again later.',
      }
    }

    // Prepare the payload for Google Sheets
    const payload = {
      name: data.name,
      email: data.email,
      question1: data.question1,
      question2: data.question2,
      question3: data.question3,
      question4: data.question4,
      question5: data.question5,
      timestamp: new Date().toISOString(),
    }

    // Send to Google Apps Script
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
        error: 'Failed to submit survey. Please try again.',
      }
    }

    const result = await response.json()

    if (result.success) {
      console.log('[v0] Survey submitted successfully')
      return { success: true }
    } else {
      console.error('[v0] Google Sheets error:', result.error)
      return {
        success: false,
        error: result.error || 'Failed to submit survey.',
      }
    }
  } catch (error) {
    console.error('[v0] Error submitting survey:', error)
    return {
      success: false,
      error: 'An error occurred while submitting your survey.',
    }
  }
}
