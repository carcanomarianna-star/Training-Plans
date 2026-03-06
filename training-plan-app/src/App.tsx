import React, { useState } from 'react';
import Header from './components/Header';
import CurriculumSection from './components/CurriculumSection';
import ScheduleSection from './components/ScheduleSection';
import ChartsSection from './components/ChartsSection';
import { scheduleData } from './data/schedule';

const App: React.FC = () => {
  const [candidateName, setCandidateName] = useState<string>('');

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 mt-10 space-y-12">
        <CurriculumSection />

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mt-12 max-w-2xl mx-auto flex items-center gap-4">
          <label htmlFor="candidateName" className="font-bold text-slate-700 whitespace-nowrap">
            Candidate Name:
          </label>
          <input
            type="text"
            id="candidateName"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter candidate's name..."
          />
        </div>

        <div className="text-center my-12">
          <h2 className="text-3xl font-bold gradient-text">The 10-Day Execution Plan</h2>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
            Structured perfectly over two calendar weeks. Week 1 establishes foundations and automated routines. Week 2 tests those skills on broken drawings and transitions to sustained live project production.
          </p>
        </div>

        {/* WEEK 1 */}
        <ScheduleSection data={scheduleData[0]} candidateName={candidateName} />

        <div className="flex justify-center items-center gap-4 text-slate-300 my-8">
          <div className="h-[2px] w-16 bg-slate-300"></div>
          <div className="text-lg font-bold tracking-widest uppercase">Weekend Break</div>
          <div className="h-[2px] w-16 bg-slate-300"></div>
        </div>

        {/* WEEK 2 */}
        <ScheduleSection data={scheduleData[1]} candidateName={candidateName} />

        {/* CHARTS */}
        <ChartsSection />
      </main>
    </>
  );
};

export default App;