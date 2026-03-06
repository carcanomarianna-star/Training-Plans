import React from 'react';
import Header from './components/Header';
import CurriculumSection from './components/CurriculumSection';
import ScheduleSection from './components/ScheduleSection';
import ChartsSection from './components/ChartsSection';
import { scheduleData } from './data/schedule';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 mt-10 space-y-12">
        <CurriculumSection />

        <div className="text-center my-12">
          <h2 className="text-3xl font-bold gradient-text">The 10-Day Execution Plan</h2>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
            Structured perfectly over two calendar weeks. Week 1 establishes foundations and automated routines. Week 2 tests those skills on broken drawings and transitions to sustained live project production.
          </p>
        </div>

        {/* WEEK 1 */}
        <ScheduleSection data={scheduleData[0]} />

        <div className="flex justify-center items-center gap-4 text-slate-300 my-8">
          <div className="h-[2px] w-16 bg-slate-300"></div>
          <div className="text-lg font-bold tracking-widest uppercase">Weekend Break</div>
          <div className="h-[2px] w-16 bg-slate-300"></div>
        </div>

        {/* WEEK 2 */}
        <ScheduleSection data={scheduleData[1]} />

        {/* CHARTS */}
        <ChartsSection />
      </main>
    </>
  );
};

export default App;