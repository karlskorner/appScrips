// Array of labels to act on.
var LABELS = [
  "AppScan/z-misc",  
  "AppScan/Tickets",
  "AppScan/Tickets/New",
  "AppScan/Tickets/P1",
  "AppScan/Tickets/SWAT",
  "AppScan/Tickets/Tasks",
  "HCL-Spam"
  ]

  var TIMEZONE="America/New_York"
  var age = new Date()  
  age.setDate(age.getDate() -7)  
  var purge  = Utilities.formatDate(age, TIMEZONE, "yyyy-MM-dd")
  Logger.log("purge before: " +purge )


function CleanUpOldEmail() {
  try{ 
    //Loops through array of LABELS
    for (var l=0 l<LABELS.length l++) {
      var ltd = GmailApp.getUserLabelByName(LABELS[l])

    //Now find all email with each of the above labels
    
      var lbls = ltd.getThreads()
      for (var e in lbls){
        var lbl = lbls[e]

        if(lbl.getLastMessageDate() < age){
           lbl.moveToTrash()
        }
      }
    }
  } catch (e) {
    console.log('Failed with error %s', e.message)
  }
}