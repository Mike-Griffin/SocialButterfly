$(document).ready(function () {
  $( "#dialog" ).hide();

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var lastView;
    var daySource = new Object();
    daySource.title = 'DAY'; // this should be string
    daySource.start = new Date(y, m, d); // this should be date object
    daySource.end = new Date(y, m, d);

    var day = new Array();
    day[0] = daySource;

    var monthSource = new Object();
    monthSource.title = 'MONTH'; // this should be string
    monthSource.start = new Date(y, m, d); // this should be date object
    monthSource.end = new Date(y, m, d);

    var month = new Array();
    month[0] = monthSource;

    $('#calendar').fullCalendar({

    	dayClick: function(date) {
        //this is the popup to create the event
              $( "#dialog" ).show();
/*
        var format_date = date.format('MM/DD/YYYY hh:mm a');
        var date_split = format_date.split(" ");
        var date_time = date_split[1];
        var event_name=prompt('Enter name of event');
        if(event_name) {
        var start_time=prompt('Enter time of event', date_time);
        date_split[1] = start_time;
        var event_time = date_split.join(' ');
 // for example I've made an alert
    		var myEvent = {
  				title:event_name,
  				allDay: false,
  				start: event_time ,
  				end: date
        }
			};


			$('#calendar').fullCalendar('renderEvent', myEvent);
*/
    	},
    	eventClick: function() {
    		alert('event clicked');
    	},
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        columnFormat: {
            month: 'ddd',
            week: 'ddd d/M',
            day: 'dddd d/M'
        },
        viewDisplay: function (view) {
            if (lastView == 'undefined') {
                lastView = 'firstRun';
            }
            if (view.name !== lastView) {
                if (view.name == 'agendaWeek') {
                    $('#calendar').fullCalendar('addEventSource', month);
                    $('#calendar').fullCalendar('removeEventSource', day);
                    $('#calendar').fullCalendar('removeEventSource', day);
                    $('#calendar').fullCalendar('renderEvents');
                }
                if (view.name == 'agendaDay') {
                    $('#calendar').fullCalendar('addEventSource', day);
                    $('#calendar').fullCalendar('removeEventSource', month);
                    $('#calendar').fullCalendar('removeEventSource', month);
                    $('#calendar').fullCalendar('renderEvents');
                }
                if (view.name == 'month') {
                    $('#calendar').fullCalendar('addEventSource', month);
                    $('#calendar').fullCalendar('removeEventSource', day);
                    $('#calendar').fullCalendar('removeEventSource', day);
                    $('#calendar').fullCalendar('renderEvents');
                }
                lastView = view.name;
            }
        },
        timeFormat: { // for event elements
            agendaDay: '',
            agendaWeek: '',
            month: '',
                '': 'h(:mm)t' // default
        }
    });
    $('#calendar').fullCalendar('addEventSource', month);

    $('#calendar').fullCalendar({
    dayClick: function(date, allDay, jsEvent, view) {

        if (allDay) {
            // Clicked on the entire day

            if ($(jsEvent.target).is('div.fc-day-number')) {
                // Clicked on the day number

                $('#calendar')
                    .fullCalendar('changeView', 'agendaDay'/* or 'basicDay' */)
                    .fullCalendar('gotoDate', date.getFullYear(), date.getMonth(), date.getDate());
            }
        }
    }
});


    $('#calendar').fullCalendar('rerenderEvents');


});
