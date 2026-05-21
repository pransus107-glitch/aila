export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Google Apps Script Web App URL - Replace this with your Apps Script deployment URL
    // You'll need to create an Apps Script that appends data to your Google Sheet
    const appsScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL

    if (!appsScriptUrl) {
      return Response.json(
        { error: "Google Apps Script URL not configured" },
        { status: 500 }
      )
    }

    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: data.name,
        email: data.email,
        question1: data.question1,
        question2: data.question2,
        question3: data.question3,
        question4: data.question4,
        question5: data.question5,
      }),
    })

    if (response.ok) {
      return Response.json({ success: true })
    } else {
      return Response.json(
        { error: "Failed to submit survey" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("[v0] Survey API error:", error)
    return Response.json(
      { error: "An error occurred" },
      { status: 500 }
    )
  }
}
