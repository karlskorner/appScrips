 // Log the email address of the user under whose authority the script is running.
 var email = Session.getEffectiveUser().getEmail()
 Logger.log(email)
 
 // Log the email address of the person running the script.
 var email = Session.getActiveUser().getEmail() 
 Logger.log(email)


sendEmail(){

    
}