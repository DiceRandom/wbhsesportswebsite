
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
        title: "5pm League",
        start: "2020-11-28"
      },
      {
        title: "8pm Minecraft Bingo",
        start: "2020-11-29"
      },
      {
        title: "3pm Club Meeting",
        start: "2020-12-03"
      },
      {
        title: "5pm League",
        start: "2020-12-03"
      },
      {
        title: "4pm Roblox",
        start: "2020-12-05"
      },
      {
        title: "7pm TF2",
        start: "2020-12-05"
      },
      {
        title: "5pm League",
        start: "2020-12-06"
      },
      {
        title: "5pm Smash",
        start: "2020-12-08"
      },
      {
        title: "6pm Valorant Stream",
        start: "2020-12-10"
      },
      {
        title: "3pm Club Meeting",
        start: "2020-12-10"
      }
      ,
      {
        title: "3pm Club Meeting",
        start: "2020-12-17"
      }


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
