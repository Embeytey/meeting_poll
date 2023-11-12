import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import CalendarDate from "./Calander";

function RangeDate() {
  const [dates, setDates] = useState(null);
  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={dates}
        onChange={(e) => setDates(e.value)}
        selectionMode="range"
        readOnlyInput
      />
      <CalendarDate />
    </div>
  );
}

export default RangeDate;
