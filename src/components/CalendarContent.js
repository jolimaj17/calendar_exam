import React from "react";
import moment from "moment";

function CalendarContent() {
  const Days = () => {
    const weekDays = moment.weekdays();
    const days = [];

    weekDays.forEach((week, index) => {
      days.push(
        <th
          className="border-4	border-purple-100 p-5 text-white uppercase"
          key={`week-${index}`}
        >
          {week}
        </th>
      );
    });
    return <tr className="bg-purple-400 p-5">{days}</tr>;
  };

  let blanks = [];
  for (let i = 0; i < moment(moment()).startOf("month").format("d"); i++) {
    blanks.push(<td className="bg-purple-100  ">{""}</td>);
  }
  let daysInMonth = [];
  for (let days = 1; days <= moment().daysInMonth(); days++) {
    daysInMonth.push(
      <td
        key={days}
        className="border-4	border-purple-100 p-5 text-purple-400 text-lg text-center font-medium hover:animate-pulse"
      >
        {days}
      </td>
    );
  }
  const totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];
  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });
  let weeks = rows.map((week, index) => {
    return (
      <tr
        className="bg-purple-100 p-5 text-purple-400 hover:cursor-pointer"
        key={index}
      >
        {week}
      </tr>
    );
  });
  return (
    <div className="flex py-2 align-middle inline-block ">
      <div className="grow shadow overflow-hidden border-b border-purple-100 ">
        <table className="w-full divide-y divide-purple-100 bg-purple-400 	">
          <thead>{Days()}</thead>
          <tbody>{weeks}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CalendarContent;
