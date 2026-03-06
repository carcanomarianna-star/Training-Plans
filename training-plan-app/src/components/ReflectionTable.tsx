import React, { useRef, useState } from 'react';
import type { WeekData } from '../data/schedule';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface Props {
  week: WeekData;
  candidateName: string;
}

const ReflectionTable: React.FC<Props> = ({ week, candidateName }) => {
  const isWeek1 = week.weekNumber === 1;
  const tableRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const bgClass = isWeek1 ? 'bg-blue-100' : 'bg-emerald-100';
  const textClass = isWeek1 ? 'text-blue-900' : 'text-emerald-900';
  const borderClass = isWeek1 ? 'border-blue-200' : 'border-emerald-200';

  const handleDaySubmit = async (dayNumber: number) => {
    if (!tableRef.current) return;

    try {
      setIsGenerating(true);

      // Give a tiny tick for state updates if needed
      await new Promise(resolve => setTimeout(resolve, 50));

      const canvas = await html2canvas(tableRef.current, {
        scale: 2, // Higher quality
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

      const safeName = candidateName ? candidateName.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'candidate';
      const fileName = `${safeName}_day_${dayNumber}_reflection.pdf`;

      // Download the PDF
      pdf.save(fileName);

      // Trigger mailto link
      const subject = encodeURIComponent(`Day ${dayNumber} Reflection - ${candidateName || 'Candidate'}`);
      const body = encodeURIComponent(`Hello,\n\nPlease find attached my training reflection for Day ${dayNumber}.\n\n(Note: Please remember to manually attach the downloaded PDF: ${fileName})\n\nThank you,\n${candidateName || 'Candidate'}`);

      window.location.href = `mailto:?subject=${subject}&body=${body}`;

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-slate-50 border-x border-b border-slate-200 rounded-b-xl p-6 shadow-sm" ref={tableRef}>
      <h4 className="text-lg font-bold text-slate-800 mb-3 flex flex-wrap items-center gap-2">
        <span>📝 Week {week.weekNumber} Learning Reflection</span>
        {candidateName && <span className="text-sm font-normal text-slate-500 bg-slate-200 px-2 py-1 rounded-md ml-auto">Candidate: {candidateName}</span>}
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
              <th className="p-3 font-semibold w-24 text-center" data-html2canvas-ignore="true">Action</th>
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
                <td className="p-3 text-center" data-html2canvas-ignore="true">
                  <button
                    onClick={() => handleDaySubmit(day.day)}
                    disabled={isGenerating}
                    className={`bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-1.5 px-3 rounded shadow-sm transition-colors ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title="Generate PDF and email"
                  >
                    {isGenerating ? 'Wait...' : 'Submit'}
                  </button>
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