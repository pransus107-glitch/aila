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
    
    // Append row with: name, email, q1, q2, q3, q4, q5
    sheet.appendRow([
      data.name,
      data.email,
      data.q1,
      data.q2,
      data.q3,
      data.q4,
      data.q5
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Survey submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
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
- Column C: Question 1
- Column D: Question 2
- Column E: Question 3
- Column F: Question 4
- Column G: Question 5
