import cs from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import React, { CSSProperties, ReactNode, useState } from 'react';
import Header from './Header';
import LocaleContext from './LocaleContext';
import MonthCalendar from './MonthCalendar';
import './styles/index.less';

export interface CalendarProps {
  value?: Dayjs;
  defaultValue?: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { style, className, locale, onChange, value } = props;

  const [curMonth, setCurMonth] = useState<Dayjs>(value);
  const [curValue, setCurValue] = useState<Dayjs>(value);

  const classNames = cs('calendar', className);

  // 选择日期
  function selectHandler(date: Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  // 上一个月
  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'));
  }

  // 下一个月
  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'));
  }

  // 选择当天
  function todayHandler() {
    const date = dayjs();
    setCurMonth(date);
    setCurValue(date);
    onChange?.(date);
  }

  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        ></Header>
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        ></MonthCalendar>
      </div>
    </LocaleContext.Provider>
  );
}

export default Calendar;
