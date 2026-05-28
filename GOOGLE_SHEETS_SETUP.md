# Google Sheets Integration Setup Guide

## Your Google Sheet
https://docs.google.com/spreadsheets/d/175sWJxi-oB--iMYGLf192L7wUZkS2t8mBtV8hGYH9MA/edit?gid=0#gid=0

## Step 1: Set Up Google Apps Script

1. **Open your Google Sheet** and click **Extensions** → **Apps Script**

2. **Delete the default code** and paste the complete code from `google-apps-script.gs` file in this project

3. **Important:** Update line 4 if your sheet name is different:
   ```javascript
   const SHEET_NAME = 'Survey Responses'; // Change to your actual sheet name
   ```

4. **Click Save** (Ctrl+S or Cmd+S)

## Step 2: Deploy as Web App

1. Click the **Deploy** button (top right) or select **Deploy** → **New Deployment**

2. Click the gear icon and select **Web app**

3. Configure the deployment:
   - **Execute as:** Select your Google account
   - **Who has access:** Select "Anyone"

4. Click **Deploy**

5. **Copy the deployment URL** that appears (it will look like: `https://script.google.com/macros/d/YOUR_ID/userwithscript`)

## Step 3: Add Environment Variable to Vercel

1. Go to your Vercel project settings: https://vercel.com/pransus107-5145s-projects/aila/settings/environment-variables

2. Click **Add New** and create:
   - **Name:** `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value:** Paste the deployment URL from Step 2
   - **Select all environments** (Production, Preview, Development)

3. Click **Save**

## Step 4: Redeploy Your Application

1. Push your code changes to your Git repository (your survey code updates are ready)
2. Vercel will automatically redeploy
3. The survey form will now send data to your Google Sheet

## Survey Questions Being Collected

The survey collects:
- **Name** (required)
- **Email** (required)
- **Question 1:** What is your skin type?
  - Dry, Oily, Combination, Sensitive
- **Question 2:** What are your main skincare concerns?
  - Acne and breakouts, Aging and wrinkles, Hyperpigmentation and dark spots, Redness and irritation
- **Question 3:** What product category interests you most?
  - Cleansers and face washes, Serums and treatments, Moisturizers and creams, Masks and exfoliators
- **Question 4:** Which ingredient appeals to you most?
  - Organic and natural ingredients, Hyaluronic acid and hydration, Retinol and anti-aging, Botanical extracts and oils
- **Question 5:** What influences your skincare purchase decision?
  - Quality of ingredients, Brand reputation and values, Price and value for money, Visible results and effectiveness

## Google Sheet Columns

Your sheet will automatically have these columns:
- A: Timestamp
- B: Name
- C: Email
- D: Skin Type
- E: Skin Concerns
- F: Product Preference
- G: Preferred Ingredients
- H: Purchase Decision Factor

## Troubleshooting

**Data not appearing in sheet:**
- Verify the `GOOGLE_SHEETS_WEBHOOK_URL` is correctly set in Vercel environment variables
- Check the Apps Script Executions tab for errors (in the Apps Script editor)
- Ensure the sheet name in the script matches your actual sheet tab name
- Make sure the Apps Script is deployed as a "Web app" with "Anyone" access

**Testing the connection:**
1. In the Apps Script editor, modify the `testWebhook()` function
2. Replace `YOUR_DEPLOYMENT_URL_HERE` with your actual deployment URL
3. Click the **Run** button
4. Check your Google Sheet - test data should appear
