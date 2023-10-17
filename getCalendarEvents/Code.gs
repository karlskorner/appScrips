//found on stackOverflow
//https://stackoverflow.com/questions/65805730/apps-script-function-native-code

function myFunction() {
  var today = new Date();
  var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
  var event1 = events[0];
  var startTime = event1.getStartTime(); //modified ()
  Logger.log(startTime);
  var id = event1.getId(); //modified ()
  Logger.log(id);
  var title = event1.getTitle(); //modified ()
  Logger.log(title);
}