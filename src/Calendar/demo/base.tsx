import { Calendar } from 'derek-dumi';
import React from 'react';

export default () => {
  // const calendarRef = useRef(null);

  return (
    <div>
      <Calendar
      // ref={calendarRef}s
      // className={'aaa'}
      // style={{ background: 'yellow' }}
      // defaultValue={dayjs()}
      // value={selectedDate}
      // locale='en-US'
      // onChange={(date: Dayjs): void => {
      //   setSelectedDate(date);
      // }}
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
