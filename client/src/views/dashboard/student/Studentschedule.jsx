import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Studentschedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: "2025-05-15", title: "Math Exam" },
    { date: "2025-05-20", title: "Science Project Due" },
  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); 
    const daysInMonth = getDaysInMonth(currentDate);

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null); 
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(new Date(year, month, day));
    }

    return calendarDays;
  };

  const formatDate = (date) => date.toISOString().split("T")[0]; 

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const getEventForDate = (date) => {
    const formatted = formatDate(date);
    return events.find((e) => e.date === formatted);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">
        {currentDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h3>
      <div className="row fw-bold text-center border-bottom pb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div className="col" key={d}>
            {d}
          </div>
        ))}
      </div>

      <div className="row text-center">
        {calendarDays.map((date, index) => (
          <div
            className="col border py-3"
            key={index}
            style={{ height: "100px" }}
          >
            {date ? (
              <>
                <div
                  className={`fw-bold ${isToday(date) ? "text-primary" : ""}`}
                >
                  {date.getDate()}
                </div>
                <div className="small text-danger">
                  {getEventForDate(date)?.title}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Studentschedule;
