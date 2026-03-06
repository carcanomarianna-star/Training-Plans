import React from 'react';
import type { CurriculumItem } from '../data/curriculum';

interface Props {
  data: CurriculumItem;
}

const themeBorderColors = {
  blue: 'border-blue-500',
  purple: 'border-purple-500',
  emerald: 'border-emerald-500',
  orange: 'border-orange-500',
};

const themeTextColors = {
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  emerald: 'text-emerald-600',
  orange: 'text-orange-600',
};

const CurriculumCard: React.FC<Props> = ({ data }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md border-t-8 p-6 module-card ${themeBorderColors[data.themeColor]}`}>
      <div className="text-4xl mb-3">{data.icon}</div>
      <h3 className="text-xl font-bold text-slate-800 mb-1">{data.title}</h3>
      <div className={`text-sm font-semibold mb-4 uppercase tracking-wide ${themeTextColors[data.themeColor]}`}>
        {data.subtitle}
      </div>
      <ul className="text-sm text-slate-600 space-y-2">
        {data.bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2">
            <span>▪️</span> <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurriculumCard;