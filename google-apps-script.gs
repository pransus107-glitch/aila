// Google Apps Script for AILA Survey Data Collection
// Add this code to your Google Sheet and deploy as a web app

const SHEET_NAME = 'Survey Responses'; // Change this to your sheet name if different
const SHEET_ID = '175sWJxi-oB--iMYGLf192L7wUZkS2t8mBtV8hGYH9MA'; // Your Google Sheet ID

function doPost(e) {
  try {
    // Parse the JSON payload from the POST request
    const payload = JSON.parse(e.postData.contents);
    
    // Get or create the sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Skin Type',
        'Skin Concerns',
        'Product Preference',
        'Preferred Ingredients',
        'Purchase Decision Factor'
      ];
      sheet.appendRow(headers);
    }
    
    // Append the survey data
    const row = [
      payload.timestamp || new Date().toISOString(),
      payload.name || '',
      payload.email || '',
      payload.skinType || '',
      payload.skinConcerns || '',
      payload.productPreference || '',
      payload.ingredients || '',
      payload.purchaseDecision || ''
    ];
    
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Survey data recorded successfully'
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: 'Error: ' + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to test the webhook locally
function testWebhook() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    skinType: 'Dry',
    skinConcerns: 'Aging and wrinkles',
    productPreference: 'Serums and treatments',
    ingredients: 'Retinol and anti-aging',
    purchaseDecision: 'Visible results and effectiveness'
  };
  
  const payload = JSON.stringify(testData);
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: payload,
    muteHttpExceptions: true
  };
  
  const response = UrlFetchApp.fetch(
    'YOUR_DEPLOYMENT_URL_HERE',
    options
  );
  
  Logger.log('Response: ' + response.getContentText());
}
