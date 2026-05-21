# Google Sheets Survey Setup Guide

## Step 1: Create a Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1kaaHHRhX_Axi7Izc2hLc0cymSfgciVWY_LNEll-dQZ4/edit?gid=0#gid=0

2. Click **Extensions** → **Apps Script**

3. Replace the default code with this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append row with: name, email, question1, question2, question3, question4, question5
    sheet.appendRow([
      data.name,
      data.email,
      data.question1,
      data.question2,
      data.question3,
      data.question4,
      data.question5
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Survey submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy** → **New Deployment**

5. Select **Type** → **Web app**

6. Set **Execute as** to your account

7. Set **Who has access** to "Anyone"

8. Click **Deploy** and copy the deployment URL

9. Add this URL as an environment variable `GOOGLE_SHEETS_WEBHOOK_URL` in your Vercel project settings

## Step 2: Set the Column Headers (Optional)

Add headers to your Google Sheet:
- Column A: Name
- Column B: Email
- Column C: Question 1 (What is your skin type?)
- Column D: Question 2 (What are your skincare concerns?)
- Column E: Question 3 (Have you used natural skincare before?)
- Column F: Question 4 (What matters most to you in skincare products?)
- Column G: Question 5 (How did you hear about aila naturals?)

## How the Survey Works

1. Users click the **"Take a Survey"** button on the home page
2. A modal form appears with fields for:
   - Name (required)
   - Email Address (required)
   - 5 Survey Questions (optional)
3. When the user clicks "Submit Survey", the responses are sent to your Google Sheet
4. Each response is appended as a new row with data in columns A-G

## Troubleshooting

- **"Survey submission is not currently available"** - The GOOGLE_SHEETS_WEBHOOK_URL environment variable is not set
- **"Failed to submit survey"** - Check that the Google Apps Script deployment URL is correct and the Apps Script code matches the template
- **No data appearing in sheet** - Verify the Apps Script is deployed as a "Web app" with "Anyone" access
