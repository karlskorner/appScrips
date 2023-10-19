// Finds email in inbox with any label and archives it. (i.e. removes inbox label)


// Sets variables to send an email when script is run.
var email = Session.getEffectiveUser().getEmail()
// Sets Time Zone. America/New_York adjusts for DST (EST & EDT do not)
var TIMEZONE = "America/New_York"
var now = new Date()
var localdate = Utilities.formatDate(new Date(), TIMEZONE, "EEE MMM dd yyyy HH:mm")


function ArchiveInboxLabeled() {

   try {

    var labeledthreads = GmailApp.search('in:inbox has:userlabels')
    GmailApp.moveThreadsToArchive(labeledthreads)
    // Sends Email:
    GmailApp.sendEmail(email, "Archive Inbox Script run", "Script ran at: " + localdate.toString())
    Logger.log("Script ran at: " + localdate.toString())

  } catch {

    console.log('Failed with error %s', err.message)
  }

}