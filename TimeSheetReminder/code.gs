// [START gmail_send_email_with_markup]
/**
 * Send an email with schemas in order to test email markup.
 */

var TIMEZONE="America/New_York";
var emailQuotaRemaining = MailApp.getRemainingDailyQuota();
Logger.log("Remaining email quota: " + emailQuotaRemaining);
var today = Utilities.formatDate(new Date(), TIMEZONE, 'E MMM dd, yyyy');

function getDailyQuote() {
 // Fetch the quote of the day
  var response = UrlFetchApp.fetch("https://zenquotes.io/api/today");
  var quote = JSON.parse(response.getContentText())[0].q + " - " + JSON.parse(response.getContentText())[0].a;
  return quote;
}

function tsReminder() {
  try {
    var html_template = HtmlService.createTemplateFromFile('mail_template');
    var htmlBody = html_template.evaluate();
    htmlBody = htmlBody.getContent();
    MailApp.sendEmail({
      to: Session.getActiveUser().getEmail(),
      subject:  today + " Timesheets Reminder",
      htmlBody: htmlBody
    });
  } catch (err) {
    console.log(err.message);
  }
}
// [END gmail_send_email_with_markup]
