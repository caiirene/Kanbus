import React, { useState } from "react";
function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());
  const dateObjectToHtmlDateString = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };
  return (
    <div>
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        className="form-control"
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
    </div>
  );
}
export default DateStateVariable;


// import React, { useState } from "react";

// function DateStateVariable() {
//   const [startDate, setStartDate] = useState(new Date());
//   const [eventInfo, setEventInfo] = useState(null);

//   const dateObjectToHtmlDateString = (date) => {
//     return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
//       date.getMonth() + 1
//     }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
//   };

//   const handleInputChange = (e) => {
//     setStartDate(new Date(e.target.value));

//     // Capture some key properties from the event for display
//     const capturedInfo = {
//       targetValue: e.target.value,
//       eventType: e.type,
//       nodeName: e.target.nodeName,
//       className: e.target.className,
//     };

//     setEventInfo(capturedInfo);
//   };

//   return (
//     <div>
//       <h2>Date State Variables</h2>
//       <h3>{JSON.stringify(startDate)}</h3>
//       <h3>{dateObjectToHtmlDateString(startDate)}</h3>
//       <input
//         className="form-control"
//         type="date"
//         value={dateObjectToHtmlDateString(startDate)}
//         onChange={handleInputChange}
//       />
//       <h2>Event Information</h2>
//       <pre>{JSON.stringify(eventInfo, null, 2)}</pre>
//     </div>
//   );
// }

// export default DateStateVariable;
