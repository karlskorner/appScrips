var calendar = CalendarApp.getDefaultCalendar();
var TIMEZONE = calendar.getTimeZone();

var email = Session.getActiveUser().getEmail(); 

function sendMail(){
  mailbody = doGet().getContent();
  MailApp.sendEmail(email, "Daily Schedule", "Please get html email",{
    htmlBody: mailbody
  })
}

function getCalendarEntries() {
  var today = new Date()
}


function doGet() {
  return HtmlService
      .createTemplateFromFile('template')
      .evaluate();
}
