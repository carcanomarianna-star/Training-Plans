import React from 'react';
import type { WeekData } from '../data/schedule';
import DayCard from './DayCard';
import ReflectionTable from './ReflectionTable';

interface Props {
  data: WeekData;
}

const ScheduleSection: React.FC<Props> = ({ data }) => {
  const isWeek1 = data.weekNumber === 1;
  const headerBg = isWeek1 ? 'bg-blue-600' : 'bg-emerald-600';
  const headerText = isWeek1 ? 'text-blue-100' : 'text-emerald-100';
  const headerTrack = isWeek1 ? 'text-blue-200' : 'text-emerald-200';
  const contentBorder = isWeek1 ? 'border-blue-200' : 'border-emerald-200';

  return (
    <section className={isWeek1 ? "mb-12" : ""}>
      <div className={`${headerBg} text-white p-4 rounded-t-xl flex justify-between items-center`}>
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2">{data.title}</h3>
          <p className={`${headerText} text-sm mt-1`}>{data.focus}</p>
        </div>
        <div className={`hidden md:block ${headerTrack} font-bold uppercase tracking-widest opacity-50`}>
          Monday — Friday
        </div>
      </div>
      <div className={`bg-white border-x border-b ${contentBorder} shadow-md p-6`}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {data.days.map((day) => (
            <DayCard key={day.day} data={day} />
          ))}
        </div>
      </div>

      <ReflectionTable week={data} />
    </section>
  );
};

export default ScheduleSection;