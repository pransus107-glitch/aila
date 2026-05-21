// Google Apps Script Code - Copy this to your Google Sheet's Apps Script editor
// To use: 
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1kaaHHRhX_Axi7Izc2hLc0cymSfgciVWY_LNEll-dQZ4/
// 2. Go to Extensions > Apps Script
// 3. Replace the code in the editor with this script
// 4. Deploy as Web App (Deploy > New Deployment > Type: Web app > Execute as: your account > Allow access to anyone)
// 5. Copy the deployment URL and set it as NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL environment variable

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get the form data
    const name = e.parameter.name || "";
    const email = e.parameter.email || "";
    const question1 = e.parameter.question1 || "";
    const question2 = e.parameter.question2 || "";
    const question3 = e.parameter.question3 || "";
    const question4 = e.parameter.question4 || "";
    const question5 = e.parameter.question5 || "";
    
    // Append to sheet - columns A through G
    sheet.appendRow([name, email, question1, question2, question3, question4, question5]);
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Survey submitted successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Enable CORS
function doGet(e) {
  return doPost(e);
}
