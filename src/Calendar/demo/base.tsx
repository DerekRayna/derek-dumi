import { Calendar } from 'derek-dumi';
import React, { useRef, useState } from 'react';

export default () => {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <div>当前选中日期{selectedDate.toLocaleDateString()}</div>
      <Calendar
        ref={calendarRef}
        value={selectedDate}
        onChange={(date: Date) => {
          console.log(date);
          setSelectedDate(date);
        }}
      ></Calendar>
    </div>
  );
};
