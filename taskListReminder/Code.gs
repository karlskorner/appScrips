var taskArr=["Task List Reminder"];

function gettasks(){

var taskGroup = Tasks.Tasklists.list();//Group
  for (var i = 0; i < taskGroup.items.length; i++){
    taskArr.push("<b>" + taskGroup.items[i].title + "</b><br>")
    
Logger.log("taskGroup " + taskGroup.items[i].title);
    var taskGroup_Items = Tasks.Tasks.list(taskGroup.items[i].id)
        
    try{ 
      for (var j = 0; j < taskGroup_Items.items.length; j++){
      //Logger.log("j " + j);
      //Logger.log("Task ID i: " + taskGroup.items[i].id);
      //Logger.log("Tasks Title i: " + taskGroup.items[i].title);
      //Logger.log("Task ID j: " + taskGroup_Items.items[j].id);
      Logger.log("Tasks Title j: " + taskGroup_Items.items[j].title);
      taskArr.push("&nbsp;&nbsp;<b>" + taskGroup_Items.items[j].title + "</b><br>")
      if (taskGroup_Items.items[j].notes !== undefined){
      Logger.log("Tasks Notes j: " + taskGroup_Items.items[j].notes);
      taskArr.push("&nbsp;&nbsp;&nbsp;&nbsp;<b>" + taskGroup_Items.items[j].notes + "</b><br>");
      }

      }
Logger.log("array " + taskArr);

    }catch(err){Logger.log(err)} 
  }
  return(taskArr);
}


function setHtml() {
  var stuff = gettasks();

  // get the html template after retrieving the values
  var html_template = HtmlService.createTemplateFromFile('mail_template');

  // set the value for the index.html `hotel` placeholder/scriptlet
  html_template.hotel = stuff;

  // evaluate the template into a new variable
  var sidebar_html = html_template.evaluate();
  //get content of new variable.
  sidebar_html = sidebar_html.getContent();


 Logger.log(stuff + " and " + sidebar_html);

}