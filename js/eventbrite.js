(function ($) {
    "use strict"; // Start of use strict
    $(document).ready(function () {

        var token = 'FAIJERLIQ6TWYNN52BO4';
        var $events = $("#events");

        $.get('https://www.eventbriteapi.com/v3/events/search/?token=' + token + '&organizer.id=5862734867&start_date.keyword=this_month', function (res) {
            console.dir(res);
            if (res.events.length) {
                var s = "<ul class='eventList'>";
                for (var i = 0; i < res.events.length; i++) {
                    var event = res.events[i];
                    console.dir(event);
                    var startdate = new Date(event.start.local);
                    s += "<li><strong>" + startdate + "</strong>: <a href='" + event.url + "'>" + event.name.text + "</a></li>";
                }
                s += "</ul>";
                $events.html(s);
            } else {
                $events.html("<p>Sorry, there are no upcoming events.</p>");
            }
        });

    });

})(jQuery); // End of use strict
