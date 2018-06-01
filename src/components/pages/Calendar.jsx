import React from "react";
import moment from "moment";

import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

export class CalendarComponent extends React.Component {
  render() {
    return (
      <div>
        We are Cincinnati Codes
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={[]}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}
