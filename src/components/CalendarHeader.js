import React, { useState } from "react";
import moment from "moment";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

function CalendarHeader() {
  const [date, setCurrentDate] = useState(new Date());
  const currentDate = moment(date).format("MMMM YYYY");

  const MonthPrevious = () => {
    setCurrentDate(moment(currentDate).subtract(1, "M"));
  };
  const MonthNext = () => {
    setCurrentDate(moment(currentDate).add(1, "M"));
  };
  return (
    <div className="bg-purple-100	">
      <div className="flex ">
        <div className="flex-none">
          <ChevronDoubleLeftIcon
            className="h-5 w-5 text-purple-600 m-10 cursor-pointer"
            onClick={MonthPrevious}
          />
        </div>
        <div className="grow ">
          <h1 className="text-2xl text-center	text-purple-600  font-medium	uppercase m-10">
            {currentDate}
          </h1>
        </div>
        <div className="flex-none">
          <ChevronDoubleRightIcon
            className="h-5 w-5 text-purple-600 m-10 cursor-pointer"
            onClick={MonthNext}
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarHeader;
