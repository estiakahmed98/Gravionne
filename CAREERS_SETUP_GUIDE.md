# Careers Page - Google Form Setup Guide

This guide provides step-by-step instructions for setting up the Google Form integration for the Gravionne Careers page.

## Overview
The Careers page uses Google Forms to collect job applications. Each job listing links to a prefilled Google Form where the "Position Applying For" field is automatically filled based on the job selected.

## Step 1: Create the Google Form

1. Go to [forms.google.com](https://forms.google.com)
2. Click "Blank" to create a new form
3. Name the form: "Gravionne Job Application"

## Step 2: Add Form Fields

Add the following questions to your form (in this order):

### Required Fields

1. **Full Name** (Short answer)
   - Question: "Full Name"
   - Required: Yes

2. **Email Address** (Short answer)
   - Question: "Email Address"
   - Required: Yes
   - Validation: Text > Email address

3. **Phone Number** (Short answer)
   - Question: "Phone Number"
   - Required: Yes

4. **Position Applying For** (Short answer)
   - Question: "Position Applying For"
   - Required: Yes
   - **IMPORTANT**: This field will be prefilled via URL parameters

5. **Current Location** (Short answer)
   - Question: "Current Location"
   - Required: Yes

6. **Work Preference** (Multiple choice)
   - Question: "Work Preference"
   - Required: Yes
   - Options: Remote, On-site, Hybrid

7. **Years of Experience** (Short answer)
   - Question: "Years of Experience"
   - Required: Yes

8. **Key Skills** (Paragraph)
   - Question: "Key Skills"
   - Required: Yes
   - Description: "Please list your key skills and expertise"

9. **Resume/CV** (File upload)
   - Question: "Resume/CV"
   - Required: Yes
   - File type: PDF, DOC, DOCX
   - Max file size: 10MB
   - **Note**: File upload requires Google Drive integration

### Optional Fields

10. **Portfolio / LinkedIn / GitHub** (Short answer)
    - Question: "Portfolio / LinkedIn / GitHub (Optional)"
    - Required: No
    - Description: "Link to your portfolio, LinkedIn profile, or GitHub"

11. **Cover Letter / Message** (Paragraph)
    - Question: "Cover Letter / Message (Optional)"
    - Required: No
    - Description: "Tell us why you're interested in this position"

12. **Availability / Start Date** (Short answer)
    - Question: "Availability / Start Date (Optional)"
    - Required: No
    - Description: "When are you available to start?"

## Step 3: Configure File Upload (Resume/CV)

1. Click on the "Resume/CV" question
2. In the settings panel on the right:
   - Toggle on "File upload"
   - Set allowed file types: PDF, DOC, DOCX
   - Set maximum file size: 10MB
   - Click "Save"
3. Google Forms will prompt you to connect to Google Drive
4. Follow the prompts to authorize and create a folder for form responses

## Step 4: Get the Form ID

1. Click the "Send" button (top right)
2. Click the link icon (chain link)
3. Copy the URL - it will look like:
   `https://docs.google.com/forms/d/e/1FAIpQLSdXYZ1234567890/viewform`
4. The Form ID is the part between `/d/e/` and `/viewform`:
   `1FAIpQLSdXYZ1234567890`

## Step 5: Identify the Entry ID for "Position Applying For"

1. Open your form in preview mode
2. Right-click on the "Position Applying For" field
3. Select "Inspect" or "Inspect Element"
4. Look for `data-item-id` or `name` attribute
5. The entry ID typically looks like: `entry.1234567890`
6. Note this ID - you'll need it for the prefilled URLs

## Step 6: Update the Careers Page

1. Open `app/gravionne/careers/page.tsx`
2. Replace `YOUR_FORM_ID` with your actual Form ID from Step 4
3. Replace `entry.1234567890` with your actual entry ID from Step 5
4. Update the `jobListings` array with your actual job openings
5. For each job, the `formUrl` should follow this format:
   ```
   https://docs.google.com/forms/d/e/[FORM_ID]/viewform?entry.[ENTRY_ID]=[JOB_TITLE]
   ```
   Example:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSdXYZ1234567890/viewform?entry.1234567890=Senior+Software+Engineer
   ```

## Step 7: Set Up Google Sheets for Responses

1. In your Google Form, click the "Responses" tab
2. Click the green spreadsheet icon (Create spreadsheet)
3. Choose "Create a new spreadsheet"
4. Name it: "Gravionne Job Applications"
5. All form responses will automatically be saved here

## Step 8: Configure Email Notifications

### Option A: Using Google Forms Add-on (Recommended)

1. Go to your Google Form
2. Click the three dots (top right) > "Add-ons"
3. Search for "Email Notifications for Google Forms" or similar
4. Install a free add-on (e.g., "Email Notifications for Google Forms")
5. Configure the add-on:
   - Set recipient email: `recruitment@gravionne.com`
   - Enable email notifications for new responses
   - Customize the email template to include:
     - Subject: `New Job Application – {{Position Applying For}}`
     - Body: Include Full Name, Email, Phone, Position, Years of Experience

### Option B: Using Google Apps Script

1. In your Google Form, click the three dots > "Script editor"
2. Paste the following script:

```javascript
function onFormSubmit(e) {
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  
  var fullName = "";
  var email = "";
  var phone = "";
  var position = "";
  var experience = "";
  
  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var question = itemResponse.getItem().getTitle();
    var answer = itemResponse.getResponse();
    
    if (question === "Full Name") fullName = answer;
    if (question === "Email Address") email = answer;
    if (question === "Phone Number") phone = answer;
    if (question === "Position Applying For") position = answer;
    if (question === "Years of Experience") experience = answer;
  }
  
  var subject = "New Job Application – " + position;
  var body = "A new job application has been submitted:\n\n" +
             "Full Name: " + fullName + "\n" +
             "Email Address: " + email + "\n" +
             "Phone Number: " + phone + "\n" +
             "Position Applying For: " + position + "\n" +
             "Years of Experience: " + experience + "\n\n" +
             "Please check the Google Sheet for full details.";
  
  MailApp.sendEmail("recruitment@gravionne.com", subject, body);
}
```

3. Save the script
4. Click the clock icon (Triggers) > "Add Trigger"
5. Configure:
   - Choose function: `onFormSubmit`
   - Select event source: "From form"
   - Select event type: "On form submit"
6. Save the trigger

## Step 9: Configure Auto-Reply Email

### Using Google Forms Add-on

1. In your email notification add-on settings
2. Enable "Auto-reply to applicant"
3. Configure the auto-reply:
   - Subject: `Application Received – Thank You`
   - Body:
     ```
     Dear Applicant,
     
     Thank you for your application for the position of {{Position Applying For}} at Gravionne.
     
     We have successfully received your application. Our team will review your details and contact you if your profile matches our requirements.
     
     We appreciate your interest in joining Gravionne.
     
     Best regards,
     Gravionne Team
     ```

### Using Google Apps Script

Add this to your script (after the notification email):

```javascript
// Send auto-reply to applicant
var autoReplySubject = "Application Received – Thank You";
var autoReplyBody = "Dear Applicant,\n\n" +
                    "Thank you for your application for the position of " + position + " at Gravionne.\n\n" +
                    "We have successfully received your application. Our team will review your details and contact you if your profile matches our requirements.\n\n" +
                    "We appreciate your interest in joining Gravionne.\n\n" +
                    "Best regards,\n" +
                    "Gravionne Team";

MailApp.sendEmail(email, autoReplySubject, autoReplyBody);
```

## Step 10: Test the Integration

1. Open the Careers page in your browser
2. Click "Apply Now" on a job listing
3. Verify the Google Form opens with the position prefilled
4. Submit a test application
5. Check:
   - Response appears in Google Sheets
   - Email notification sent to recruitment@gravionne.com
   - Auto-reply sent to the test email address
   - Resume/CV uploaded to Google Drive

## Managing Job Listings

To add, edit, or remove job listings:

1. Open `app/gravionne/careers/page.tsx`
2. Find the `jobListings` array
3. Add/modify/remove job objects with the following structure:

```typescript
{
  id: 1,
  title: "Job Title",
  department: "Department Name",
  location: "Remote/On-site/Hybrid",
  jobType: "Full-time/Part-time",
  description: "Short job description",
  formUrl: "https://docs.google.com/forms/d/e/[FORM_ID]/viewform?entry.[ENTRY_ID]=[JOB_TITLE]",
}
```

## Important Notes

- **Security**: Ensure your Google Form is not set to "Limit to 1 response" if you want to accept multiple applications
- **File Storage**: Uploaded resumes are stored in the Google Drive folder you created during setup
- **Email Domain**: Make sure `recruitment@gravionne.com` is set up to receive emails
- **Form Access**: Keep the form public (no login required) as per requirements
- **URL Encoding**: Use `+` for spaces in job titles in the form URL (e.g., `Senior+Software+Engineer`)

## Troubleshooting

**Position field not prefilling:**
- Verify the entry ID is correct
- Check that the URL is properly formatted
- Ensure the "Position Applying For" field is a Short answer type

**Emails not sending:**
- Check Google Apps Script triggers are active
- Verify email addresses are correct
- Check spam/junk folders

**File upload not working:**
- Ensure Google Drive integration is complete
- Check file size limits
- Verify allowed file types

## Support

If you encounter any issues during setup, please refer to:
- [Google Forms Help Center](https://support.google.com/docs/topic/1382863)
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
