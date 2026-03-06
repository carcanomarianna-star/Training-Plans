import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white py-12 px-6 shadow-xl border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
          <div className="absolute top-0 right-0 hidden md:block">
            <img src="/logo.jpg" alt="Plowman Craven Logo" className="h-12 object-contain mix-blend-screen opacity-90" />
          </div>
          <div className="text-center md:text-left w-full md:w-auto relative">
            <div className="flex flex-col md:hidden justify-center items-center mb-6 w-full">
              <img src="/logo.jpg" alt="Plowman Craven Logo" className="h-12 object-contain mix-blend-screen opacity-90" />
            </div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-2">
              Accelerated CAD to QA Pipeline
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              10-Day QA Readiness Plan
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg">
              A highly condensed intensive program mapped perfectly across two standard Monday-Friday work weeks. Progresses from deliverable basics to robust QA auditing, culminating in project meetings, live project production, and sign-off.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center min-w-[250px]">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-xl font-bold text-orange-400">10 Working Days</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Two Standard Weeks</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;