import cs from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import React, { useContext } from 'react';
import LocaleContext from './LocaleContext';
import { CalendarProps } from './index';
import allLocales from './locale';

interface MonthCalendarProps extends CalendarProps {
  curMonth: Dayjs;
  selectHandler?: (date: Dayjs) => void;
}

function renderDays(
  value: Dayjs,
  days: Array<{ date: Dayjs; currentMonth: boolean }>,
  dateRender: MonthCalendarProps['dateRender'],
  dateInnerContent: MonthCalendarProps['dateInnerContent'],
  selectHandler: MonthCalendarProps['selectHandler'],
) {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          className={
            'calendar-month-body-cell ' +
            (item.currentMonth ? 'calendar-month-body-cell-current' : '')
          }
          key={j}
          onClick={() => {
            selectHandler?.(item.date);
          }}
        >
          {dateRender ? (
            dateRender(item.date)
          ) : (
            <div className="calendar-month-body-cell-date">
              <div
                className={cs(
                  'calendar-month-body-cell-date-value',
                  value.format('YYYY-MM-DD') === item.date.format('YYYY-MM-DD')
                    ? 'calendar-month-body-cell-date-selected'
                    : '',
                )}
              >
                {item.date.date()}
              </div>
              <div className="calendar-month-cell-body-date-content">
                {dateInnerContent?.(item.date)}
              </div>
            </div>
          )}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row, index) => (
    <div className="calendar-month-body-row" key={index}>
      {row}
    </div>
  ));
}

const MonthCalendar = (props: MonthCalendarProps) => {
  const {
    value,
    curMonth = dayjs(),
    defaultValue = dayjs(),
    selectHandler,
    dateRender,
    dateInnerContent,
  } = props;

  const localeContext = useContext(LocaleContext);

  const CalendarLocale = allLocales[localeContext.locale];

  const weekList = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  function getAllDays(date: Dayjs) {
    const startDate = date.startOf('month'); // 获取日期月的第一天
    const day = startDate.day(); // 获取当前天是星期几
    const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
      6 * 7,
    );
    for (let i = 0; i < day; i++) {
      daysInfo[i] = {
        date: startDate.subtract(day - i, 'day'),
        currentMonth: false,
      };
    } // 向前填充
    for (let i = day; i < daysInfo.length; i++) {
      const calcDate = startDate.add(i - day, 'day');
      daysInfo[i] = {
        date: calcDate,
        currentMonth: calcDate.month() === date.month(),
      };
    } // 向后填充
    return daysInfo;
  }

  const allDays = getAllDays(curMonth || defaultValue);

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">
        {renderDays(
          value,
          allDays,
          dateRender,
          dateInnerContent,
          selectHandler,
        )}
      </div>
    </div>
  );
};

export default MonthCalendar;
