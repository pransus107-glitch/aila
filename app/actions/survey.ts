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
      skinType: `Skin Type: ${data.skinType}`,
      skinConcerns: `Skin Concerns: ${data.skinConcerns}`,
      productPreference: `Product Preference: ${data.productPreference}`,
      ingredients: `Preferred Ingredients: ${data.ingredients}`,
      purchaseDecision: `Purchase Decision Factor: ${data.purchaseDecision}`,
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
