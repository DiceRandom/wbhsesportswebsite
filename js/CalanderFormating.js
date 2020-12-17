
  var outtervar;

  document.addEventListener('DOMContentLoaded', function() {

  var calendarEl = document.getElementById('calendar');
  var d = new Date();
  var currentYear = d.getFullYear();
  var currentDay = d.getDate();
  currentDay = ("0" + currentDay).slice(-2);
  var currentMonth = d.getMonth()+1;
  var dateFormat = currentYear+'-'+currentMonth+'-'+currentDay;
  console.log(dateFormat);


  var dateTitle = "WACO";
  var todaysWeek;

  // Date Format: yyyy-mm-dd
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: dateFormat,
    editable: false,
    selectable: false,
    businessHours: false,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: dateTitle,
        start: dateFormat
      },
      {
        title: "League Tonight",
        start: "2020-12-17"
      },
      {
        title: "Austins Birthday Bash",
        start: "2020-12-19"
      },
      {
        title: "Art Stream Comp",
        start: "2020-12-20"
      },
      {
        title: "5PM Scribbl.io",
        start: "2020-12-23"
      },
      {
        title: "Community Night",
        start: "2020-12-26"
      },
     
    ]
  });

  calendar.render();

  var allEvents = document.getElementsByClassName('fc-event-title fc-sticky');
  var todaysEvent;

  for (i = 0; i < allEvents.length; i++) {
      if(allEvents[i].innerText == dateTitle){
          allEvents[i].innerText = "balls";
          todaysEvent = allEvents[i].parentElement.parentElement.parentElement.parentElement;
          todaysWeek = allEvents[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
          todaysWeek.id = "WACO";
      }
  };

  var monthArray = todaysWeek.parentElement.children;
  var weekNum = 0;

  console.log(monthArray);
  outtervar = monthArray;
  for (i = 0; i < monthArray.length; i++) {
      if(monthArray[i].id != "WACO"){
          monthArray[i].hidden = true;
      }else{
          weekNum = i;
      }
  };

  monthArray[weekNum + 1].hidden = false;
  monthArray[weekNum - 1].hidden = false;
  document.getElementsByClassName("fc-header-toolbar")[0].style = "display:none";

  todaysEvent.style = "display:none";
});
