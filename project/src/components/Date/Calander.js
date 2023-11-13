import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

export default function CalendarDate() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [values, onChange] = useState([new Date()]);

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const onExpand = () => {
    const btn = document.getElementsByClassName("field");
    btn[0].style.marginBottom = "120px";
  };
  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      // Disable past days
      return date < new Date();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1>Add time</h1>
        <Calendar
          onChange={handleDateChange}
          value={values}
          tileDisabled={tileDisabled}
        />
      </div>
      <div style={{ flex: 1, marginLeft: 20 }}>
        <h2>Selected Date:</h2>
        {selectedDate ? (
          <p>{selectedDate.toDateString()}</p>
        ) : (
          <p>No date selected</p>
        )}

        {selectedDate && (
          <div>
            <h2>Select Time:</h2>
            <TimePicker
              onChange={handleTimeChange}
              value={selectedTime}
              className="custom - time - picker"
            />
            <p>Selected Time: {selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
}
