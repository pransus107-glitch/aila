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
    // Try Google Apps Script first if webhook URL is configured
    const googleScriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (googleScriptUrl) {
      console.log('[v0] Submitting to Google Sheets via webhook')
      
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

      try {
        const response = await fetch(googleScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          const result = await response.json()
          if (result.success) {
            console.log('[v0] Survey submitted to Google Sheets successfully')
            return { success: true }
          }
        }
      } catch (webhookError) {
        console.warn('[v0] Google Sheets submission failed, trying Formspree fallback:', webhookError)
      }
    }

    // Fallback to Formspree for email submission
    console.log('[v0] Using Formspree fallback for survey submission')
    
    const formspreeUrl = 'https://formspree.io/f/xyzgwkde'
    
    const emailPayload = {
      name: data.name,
      email: data.email,
      question1: `Q1 (Skin type): ${data.question1}`,
      question2: `Q2 (Concerns): ${data.question2}`,
      question3: `Q3 (Natural skincare): ${data.question3}`,
      question4: `Q4 (What matters): ${data.question4}`,
      question5: `Q5 (How you heard): ${data.question5}`,
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    if (!response.ok) {
      console.error('[v0] Formspree submission failed:', response.statusText)
      return {
        success: false,
        error: 'Failed to submit survey. Please try again.',
      }
    }

    console.log('[v0] Survey submitted successfully via email')
    return { success: true }
  } catch (error) {
    console.error('[v0] Error submitting survey:', error)
    return {
      success: false,
      error: 'An error occurred while submitting your survey. Please try again.',
    }
  }
}
