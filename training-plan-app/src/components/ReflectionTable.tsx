import React from 'react';
import type { WeekData } from '../data/schedule';

interface Props {
  week: WeekData;
}

const ReflectionTable: React.FC<Props> = ({ week }) => {
  const isWeek1 = week.weekNumber === 1;

  const bgClass = isWeek1 ? 'bg-blue-100' : 'bg-emerald-100';
  const textClass = isWeek1 ? 'text-blue-900' : 'text-emerald-900';
  const borderClass = isWeek1 ? 'border-blue-200' : 'border-emerald-200';

  return (
    <div className="bg-slate-50 border-x border-b border-slate-200 rounded-b-xl p-6 shadow-sm">
      <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
        📝 Week {week.weekNumber} Learning Reflection
      </h4>
      <p className="text-xs text-slate-500 mb-4">
        {isWeek1
          ? "Complete this table at the end of each day to provide feedback on the training materials and identify areas for improvement."
          : "Complete this table at the end of each day to provide feedback on the live environment transition and training effectiveness."}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          <thead>
            <tr className={`${bgClass} ${textClass} text-xs uppercase tracking-wide border-b ${borderClass}`}>
              <th className="p-3 font-semibold w-24">Day</th>
              <th className="p-3 font-semibold w-1/4">
                {isWeek1 ? "Was material sufficient?" : "Was support sufficient?"}
              </th>
              <th className="p-3 font-semibold w-1/3">Key Takeaways / Challenges</th>
              <th className="p-3 font-semibold">What additional material could be created?</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {week.days.map((day, index) => (
              <tr key={day.day} className={`border-slate-200 hover:bg-slate-50 ${index !== week.days.length - 1 ? 'border-b' : ''}`}>
                <td className="p-3 font-semibold text-slate-900">Day {day.day}</td>
                <td className="p-3">
                  <select className="reflection-input bg-white" defaultValue="">
                    <option value="" disabled>Select response...</option>
                    <option value="1">Yes, completely clear</option>
                    <option value="2">Mostly, but had questions</option>
                    <option value="3">No, needed more guidance</option>
                  </select>
                </td>
                <td className="p-3">
                  <textarea className="reflection-input resize-y" rows={1} placeholder="Add your notes here..."></textarea>
                </td>
                <td className="p-3">
                  <textarea className="reflection-input resize-y" rows={1} placeholder="Suggestions for new guides/videos..."></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReflectionTable;