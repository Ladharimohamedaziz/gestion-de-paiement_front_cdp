import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
// import './StudentSchedule.css';

const scheduleData = [
  {
    day: "Lundi",
    start: "09:30",
    end: "12:30",
    subject: "UE3.3 Cybersecurity",
    teacher: "Ibtissem BRAHMI",
    group: "B1 Bachelor Informatique",
    remote: true,
  },
  {
    day: "Lundi",
    start: "13:00",
    end: "15:00",
    subject: "UE1.6 HTML/CSS",
    teacher: "Sabrine BOUSSEMA",
    group: "B1 Bachelor Informatique",
    remote: false,
  },
  {
    day: "Mardi",
    start: "11:00",
    end: "15:00",
    subject: "UE1.8 Wordpress",
    teacher: "Seddik DIMASSI",
    group: "B1 Bachelor Informatique",
    remote: false,
  },
  {
    day: "Mercredi",
    start: "11:00",
    end: "14:00",
    subject: "UE1.8 Wordpress",
    teacher: "Seddik DIMASSI",
    group: "B1 Bachelor Informatique",
    remote: false,
  },
  {
    day: "Samedi",
    start: "09:30",
    end: "12:30",
    subject: "UE3.3 Cybersecurity",
    teacher: "Ibtissem BRAHMI",
    group: "B1 Bachelor Informatique",
    remote: true,
  },
];

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const hours = Array.from({ length: 11 }, (_, i) => 7 + i); 

const Teacherschedule = () => {
  return (
    <div className="container mt-5">
      <h4 className="fw-bold text-center mb-4">
        Emploi du Temps – Semaine du 12 au 17 mai 2025
      </h4>
      <div className="table-responsive">
        <table className="table table-bordered text-center schedule-table">
          <thead className="table-light">
            <tr>
              <th>Heure</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour}>
                <td>{hour.toString().padStart(2, "0")} h</td>
                {days.map((day) => {
                  const course = scheduleData.find(
                    (c) =>
                      c.day === day && parseInt(c.start.split(":")[0]) === hour
                  );
                  if (course) {
                    return (
                      <td
                        key={day}
                        rowSpan={
                          parseInt(course.end.split(":")[0]) -
                          parseInt(course.start.split(":")[0])
                        }
                      >
                        <div className="bgcolor text-white p-2 rounded">
                          <strong>
                            {course.start} - {course.end}
                          </strong>
                          <br />
                          {course.subject}
                          <br />
                          {course.remote && <BsCameraVideoFill />}
                          <br />
                          <small>{course.teacher}</small>
                          <br />
                          <small>{course.group}</small>
                        </div>
                      </td>
                    );
                  }
                  const isMerged = scheduleData.some(
                    (c) =>
                      c.day === day &&
                      hour > parseInt(c.start.split(":")[0]) &&
                      hour < parseInt(c.end.split(":")[0])
                  );
                  return isMerged ? null : <td key={day}></td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teacherschedule;
