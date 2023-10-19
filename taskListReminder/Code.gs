var email = Session.getActiveUser().getEmail(); 

function sendMail(){
  mailbody = doGet().getContent();
  MailApp.sendEmail(email, "Daily Task Reminder", "Please get html email",{
    htmlBody: mailbody
  })
}

function doGet() {
  return HtmlService
      .createTemplateFromFile('mail_template')
      .evaluate();
}

// Returns the following error without the task functions below.
// GoogleJsonResponseException: 
// API call to tasks.tasklists.list failed with error: 
// Request had insufficient authentication scopes.

function listTaskLists() {
    return Tasks.Tasklists.list();
}

function listTasks(){
  return Tasks.Tasks.list();
}

function getdate(){
  var TIMEZONE = "America/New_York";
  var localdate = Utilities.formatDate(new Date(), TIMEZONE, "EEE MMM dd yyyy");
  return localdate;
}
