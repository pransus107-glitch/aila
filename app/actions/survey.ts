'use server'

interface SurveyData {
  name: string
  email: string
  skinType: string
  skinConcerns: string
  productPreference: string
  ingredients: string
  purchaseDecision: string
}

export async function submitSurvey(data: SurveyData) {
  try {
    // Try Google Apps Script first if webhook URL is configured
    const googleScriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    console.log('[v0] Survey data received on server:', JSON.stringify(data, null, 2))

    if (googleScriptUrl) {
      console.log('[v0] Submitting to Google Sheets via webhook')
      
      const payload = {
        name: data.name,
        email: data.email,
        skinType: data.skinType,
        skinConcerns: data.skinConcerns,
        productPreference: data.productPreference,
        ingredients: data.ingredients,
        purchaseDecision: data.purchaseDecision,
        timestamp: new Date().toISOString(),
      }

      console.log('[v0] Payload being sent:', JSON.stringify(payload, null, 2))

      try {
        const response = await fetch(googleScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        const responseText = await response.text()
        console.log('[v0] Google Sheets response:', responseText, 'Status:', response.status)

        if (response.ok || response.status === 200) {
          try {
            const result = JSON.parse(responseText)
            if (result.success) {
              console.log('[v0] Survey submitted to Google Sheets successfully')
              return { success: true }
            }
          } catch (parseError) {
            console.log('[v0] Google Sheets accepted the request (status 200)')
            return { success: true }
          }
        }
      } catch (webhookError) {
        console.error('[v0] Google Sheets submission error:', webhookError)
        return {
          success: false,
          error: 'Failed to submit survey. Please check that the Google Sheets webhook URL is configured correctly.',
        }
      }
    } else {
      console.warn('[v0] GOOGLE_SHEETS_WEBHOOK_URL environment variable not set')
      return {
        success: false,
        error: 'Survey submission is not currently available. Please contact support.',
      }
    }

    return {
      success: false,
      error: 'Failed to submit survey. Please try again.',
    }
  } catch (error) {
    console.error('[v0] Error submitting survey:', error)
    return {
      success: false,
      error: 'An error occurred while submitting your survey. Please try again.',
    }
  }
}
