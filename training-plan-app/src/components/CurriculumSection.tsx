import React from 'react';
import { curriculumData } from '../data/curriculum';
import CurriculumCard from './CurriculumCard';

const CurriculumSection: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Curriculum Architecture</h2>
        <p className="text-slate-500 mt-2 max-w-3xl mx-auto">
          The daily schedule focuses specifically on these foundational topics and AC03 video modules extracted from the primary CAD Training Program.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {curriculumData.map((item) => (
          <CurriculumCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CurriculumSection;