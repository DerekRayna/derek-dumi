import dayjs, { Dayjs } from 'dayjs';
import { Calendar } from 'derek-dumi';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<Dayjs>(dayjs('2024-06-01'));

  return (
    <div>
      <Calendar
        style={{ background: 'yellow' }}
        value={value}
        onChange={(date: Dayjs): void => {
          setValue(date);
        }}
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
