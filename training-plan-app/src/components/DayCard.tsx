import React from 'react';
import type { DayData } from '../data/schedule';

interface Props {
  data: DayData;
}

const themeColors = {
  blue: {
    text: 'text-blue-800',
    border: 'border-blue-200',
    bgLight: 'bg-blue-50/50',
    textLight: 'text-blue-700',
    borderLight: 'border-blue-100',
  },
  emerald: {
    text: 'text-emerald-800',
    border: 'border-emerald-200',
    bgLight: 'bg-emerald-50/50',
    textLight: 'text-emerald-700',
    borderLight: 'border-emerald-200',
  },
  orange: {
    text: 'text-emerald-800', // The original HTML had emerald text for the day title even on orange themes, but let's stick closer to the orange theme logic or keep it as was
    border: 'border-emerald-200',
    bgLight: 'bg-orange-50/50',
    textLight: 'text-orange-700',
    borderLight: 'border-orange-200',
  },
  purple: {
    text: 'text-purple-800',
    border: 'border-purple-200',
    bgLight: 'bg-purple-50/50',
    textLight: 'text-purple-700',
    borderLight: 'border-purple-100',
  }
};

// Overrides based on exact HTML
const getTheme = (day: number, baseTheme: string) => {
    if (day >= 8 && day <= 9) return themeColors.orange;
    if (day === 10) return {
        text: 'text-emerald-800',
        border: 'border-emerald-400',
        bgLight: 'bg-emerald-100/50',
        textLight: 'text-emerald-800',
        borderLight: 'border-emerald-300',
    };
    return themeColors[baseTheme as keyof typeof themeColors] || themeColors.blue;
};


const DayCard: React.FC<Props> = ({ data }) => {
  const theme = getTheme(data.day, data.themeColor);

  return (
    <div className={`flex flex-col ${data.hasMedal ? 'relative overflow-hidden' : ''}`}>
      {data.hasMedal && <div className="absolute -right-4 -top-4 text-6xl opacity-10">🏅</div>}

      <div className={`font-bold ${theme.text} text-lg mb-1 border-b-2 ${theme.border} pb-1`}>
        Day {data.day} ({data.dayName})
      </div>

      <div className={`text-xs font-semibold ${theme.textLight} ${theme.bgLight} p-1.5 rounded mb-2 border ${theme.borderLight} italic`}>
        🎯 Goal: {data.goal}
      </div>

      {data.theory && (
        <div className={`theory-block mb-2 ${data.theory.themeColor === 'emerald' ? '!border-emerald-300' : ''}`}>
          <div className={`text-xs font-bold uppercase ${
            data.theory.themeColor === 'purple' ? 'text-purple-600' :
            data.theory.themeColor === 'emerald' ? 'text-emerald-600' : 'text-slate-500'
          }`}>
            {data.theory.type}
          </div>
          <div className="text-sm font-semibold">{data.theory.title}</div>
          <p className="text-xs text-slate-600 mt-1">{data.theory.description}</p>
        </div>
      )}

      <div className={`practice-block flex-grow ${data.day >= 6 && data.day !== 8 && data.day !== 9 ? 'h-full' : ''}`} style={
        data.practice.themeColor === 'emerald' ? { backgroundColor: '#ECFDF5', borderLeftColor: '#10B981' } :
        data.practice.themeColor === 'orange' ? { backgroundColor: '#FFF7ED', borderLeftColor: '#F97316' } :
        data.day === 10 ? { backgroundColor: '#D1FAE5', borderLeftColor: '#059669' } : {}
      }>
        <div className={`text-xs font-bold uppercase ${
            data.practice.themeColor === 'emerald' ? 'text-emerald-600' :
            data.practice.themeColor === 'orange' ? 'text-orange-600' : 'text-blue-500'
        }`}>
          {data.practice.type}
        </div>
        <div className={`text-sm font-semibold ${data.day >= 6 ? 'mb-2' : ''}`}>{data.practice.title}</div>
        <div className={`text-xs ${data.day >= 6 ? 'text-slate-700' : 'text-slate-700 mt-1'}`}>
          {data.practice.description}
        </div>

        {data.practice.highlightGoal && data.day === 6 && (
            <p className="text-xs text-slate-700 mt-2 p-2 bg-emerald-100 rounded border border-emerald-200 font-semibold text-emerald-800">
                {data.practice.highlightGoal}
            </p>
        )}
        {data.practice.highlightGoal && data.day === 10 && (
            <p className="text-xs text-slate-800 mt-2 border-t border-emerald-300 pt-2 font-semibold">
                {data.practice.highlightGoal}
            </p>
        )}
      </div>
    </div>
  );
};

export default DayCard;