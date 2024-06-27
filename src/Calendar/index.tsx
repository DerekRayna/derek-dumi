import { useControllableValue } from 'ahooks';
import React, { useImperativeHandle } from 'react';
import './styles/index.less';

interface CalendarProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
}

export interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}

const monthNames = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = (props, ref) => {
  const [date, setDate] = useControllableValue(props, {
    defaultValue: new Date(),
  });

  // 向外暴露组件api
  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },
      setDate(date: Date) {
        setDate(date);
      },
    };
  });

  // 向前一个月
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // 向后一个月
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  // 计算获取某年的某月有多少天
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 判断某年的某月第一天是星期几
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDates = () => {
    const days = [];

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth()); // 当前选中年月的天数
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth()); // 当前选中年月的第一天是星期几

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth(), i);
        setDate(newDate);
      };
      if (i === date.getDate()) {
        days.push(
          <div key={i} className="day selected" onClick={() => clickHandler()}>
            {i}
          </div>,
        );
      } else {
        days.push(
          <div key={i} className="day" onClick={() => clickHandler()}>
            {i}
          </div>,
        );
      }
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <div onClick={handlePrevMonth}>&lt;</div>
        <div>
          {date.getFullYear()}年{monthNames[date.getMonth()]}
        </div>
        <div onClick={handleNextMonth}>&gt;</div>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates()}
      </div>
    </div>
  );
};

const Calendar = React.forwardRef(InternalCalendar);

export default Calendar;
