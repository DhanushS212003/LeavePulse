import BreadCrumb from "../breadcrumb/Breadcrumb";
import { Calendar as ReactCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const events = [
    {
      title: "Jon Snow - Sick Leave",
      start: new Date(2026, 0, 15),
      end: new Date(2026, 0, 16),
      resource: "sick",
    },
    {
      title: "Arya Stark - Casual Leave",
      start: new Date(2026, 0, 20),
      end: new Date(2026, 0, 20),
      resource: "casual",
    },
    {
      title: "Jamie Lannister - Personal Leave",
      start: new Date(2026, 0, 22),
      end: new Date(2026, 0, 24),
      resource: "personal",
    },
    {
      title: "Jon Snow - Annual Leave",
      start: new Date(2026, 0, 28),
      end: new Date(2026, 1, 1),
      resource: "annual",
    },
    {
      title: "Jon Snow - Medical Leave",
      start: new Date(2026, 1, 5),
      end: new Date(2026, 1, 5),
      resource: "medical",
    },
    {
      title: "Arya Stark - Vacation",
      start: new Date(2026, 1, 10),
      end: new Date(2026, 1, 12),
      resource: "vacation",
    },
  ];

  const eventStyleGetter = (event) => {
    const colors = {
      sick: { backgroundColor: "#ff6b6b", borderColor: "#ff5252" },
      casual: { backgroundColor: "#4ecdc4", borderColor: "#26a69a" },
      personal: { backgroundColor: "#95e1d3", borderColor: "#6ab5a8" },
      annual: { backgroundColor: "#f38181", borderColor: "#e85a5a" },
      medical: { backgroundColor: "#ffa07a", borderColor: "#ff8c69" },
      vacation: { backgroundColor: "#87ceeb", borderColor: "#5f9ea0" },
    };

    const style = colors[event.resource] || {
      backgroundColor: "#2d7474",
      borderColor: "#2d7474",
    };

    return {
      style: {
        ...style,
        borderRadius: "4px",
        color: "white",
        border: "none",
        padding: "2px 6px",
        fontSize: "0.875rem",
      },
    };
  };

  return (
    <>
      <BreadCrumb title="Calendar" path="Dashboard > Calendar Module" />

      <div className="calendar_section">
        <ReactCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventStyleGetter}
          style={{ height: 600 }}
        />
      </div>
    </>
  );
};

export default Calendar;
