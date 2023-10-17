function sendMail(){
  mailbody = doGet().getContent;
  MailApp.sendEmail("thecoolgoof@gmail.com", "Daily Task Reminder", "Please get html email",{
    htmlBody: mailbody
  })
}

function doGet() {
  return HtmlService
      .createTemplateFromFile('mail_template')
      .evaluate();
}

function listTaskLists() {
    return Tasks.Tasklists.list();
}

function listTasks(){
  return Tasks.Tasks.list();
}
