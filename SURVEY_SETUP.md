# Survey Integration Setup Guide

## Overview
This guide explains how to set up the survey form to automatically submit responses to your Google Sheet.

## Your Google Sheet
- URL: https://docs.google.com/spreadsheets/d/1kaaHHRhX_Axi7Izc2hLc0cymSfgciVWY_LNEll-dQZ4/edit?gid=0#gid=0
- The survey responses will be added to columns A-G (Name, Email, Q1, Q2, Q3, Q4, Q5)

## Step-by-Step Setup

### 1. Create Google Apps Script
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1kaaHHRhX_Axi7Izc2hLc0cymSfgciVWY_LNEll-dQZ4/
2. Click on **Extensions** in the top menu
3. Select **Apps Script**
4. A new window will open
5. Clear the existing code and copy the entire code from `GOOGLE_APPS_SCRIPT.js` file in this project
6. Click **Save** (Ctrl+S / Cmd+S)

### 2. Deploy the Apps Script as Web App
1. Click on **Deploy** button (top right)
2. Select **New Deployment**
3. Click the gear icon and select **Web app**
4. Set the following:
   - **Execute as**: [Your Google Account]
   - **Who has access**: Anyone (or Specific domain if you prefer)
5. Click **Deploy**
6. A dialog will appear asking for authorization - click **Authorize**
7. After authorization, you'll see a **Deployment ID**
8. Copy the provided URL (it will look like: `https://script.google.com/macros/s/[ID]/userweb`)

### 3. Add Environment Variable to Your Project
1. In your Vercel project settings, add a new environment variable:
   - **Key**: `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`
   - **Value**: Paste the URL you copied from step 2 (ending with `/userweb`)

2. Or in your `.env.local` file (for local development):
   ```
   NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/[YOUR_ID]/userweb
   ```

### 4. Test the Survey
1. Restart your development server (or redeploy on Vercel)
2. Click on "Take a Survey" button on the homepage
3. Fill out the form with test data
4. Click "Submit Survey"
5. Check your Google Sheet - the data should appear in columns A-G

## What Each Column Contains
- **Column A**: Name
- **Column B**: Email
- **Column C**: Question 1 Response
- **Column D**: Question 2 Response
- **Column E**: Question 3 Response
- **Column F**: Question 4 Response
- **Column G**: Question 5 Response

## Troubleshooting

### If submissions are not working:
1. Check that the Google Apps Script is deployed as "Web app" and "Who has access" is set to "Anyone"
2. Verify the environment variable is set correctly
3. Check the browser console for any error messages
4. Ensure the Google Sheet is shared/accessible

### To see error details:
1. Open the Apps Script editor again (Extensions > Apps Script)
2. Click on **Executions** to view recent runs and any errors
3. Check the browser's Network tab to see the actual response

## Re-deploying the Script (if you make changes)
1. If you need to update the Apps Script, make changes and save
2. Click Deploy again
3. You can either create a new deployment or update the existing one
4. If updating existing, the URL stays the same
