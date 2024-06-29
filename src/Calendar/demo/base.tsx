import dayjs, { Dayjs } from 'dayjs';
import { Calendar } from 'derek-dumi';
import React, { useState } from 'react';

export default () => {
  // const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <div>
      <Calendar
        // ref={calendarRef}
        className={'aaa'}
        // style={{ background: 'yellow' }}
        value={selectedDate}
        // locale='en-US'
        onChange={(date: Dayjs): void => {
          setSelectedDate(date);
        }}
        // dateInnerContent={(value) => {
        //   return (
        //     <div>
        //       <p style={{ background: 'yellowgreen', height: '30px' }}>
        //         {value.format('YYYY/MM/DD')}
        //       </p>
        //     </div>
        //   );
        // }}
      ></Calendar>
    </div>
  );
};
