import dayjs from 'dayjs';
import { Calendar } from 'derek-dumi';
import React from 'react';

export default () => {
  // const calendarRef = useRef(null);

  return (
    <div>
      <Calendar
        // ref={calendarRef}
        defaultValue={dayjs()}
        locale="en-US"
        dateInnerContent={(value) => {
          return (
            <div>
              <p style={{ background: 'yellowgreen', height: '30px' }}>
                {value.format('YYYY/MM/DD')}
              </p>
            </div>
          );
        }}
      ></Calendar>
    </div>
  );
};
