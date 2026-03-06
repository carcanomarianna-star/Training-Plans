document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    let candidateName = '';

    // Helpers
    const getThemeColors = (themeColor) => {
        const colors = {
            blue: {
                bg: 'bg-blue-100',
                border: 'border-blue-200',
                text: 'text-blue-900',
                borderTop: 'border-t-blue-500',
                dot: 'bg-blue-500'
            },
            purple: {
                bg: 'bg-purple-100',
                border: 'border-purple-200',
                text: 'text-purple-900',
                borderTop: 'border-t-purple-500',
                dot: 'bg-purple-500'
            },
            emerald: {
                bg: 'bg-emerald-100',
                border: 'border-emerald-200',
                text: 'text-emerald-900',
                borderTop: 'border-t-emerald-500',
                dot: 'bg-emerald-500'
            },
            orange: {
                bg: 'bg-orange-100',
                border: 'border-orange-200',
                text: 'text-orange-900',
                borderTop: 'border-t-orange-500',
                dot: 'bg-orange-500'
            },
            slate: {
                bg: 'bg-slate-100',
                border: 'border-slate-200',
                text: 'text-slate-900',
                borderTop: 'border-t-slate-500',
                dot: 'bg-slate-500'
            }
        };
        return colors[themeColor] || colors.blue;
    };

    // Components
    const renderHeader = () => `
        <header class="bg-slate-900 text-white py-12 px-6 shadow-xl border-b-4 border-blue-600">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-center gap-6 relative">
                    <div class="absolute top-0 right-0 hidden md:block">
                        <img src="training-plan-app/public/logo.jpg" alt="Plowman Craven Logo" class="h-12 object-contain mix-blend-screen opacity-90" onerror="this.style.display='none'">
                    </div>
                    <div class="text-center md:text-left w-full md:w-auto relative">
                        <div class="flex flex-col md:hidden justify-center items-center mb-6 w-full">
                            <img src="training-plan-app/public/logo.jpg" alt="Plowman Craven Logo" class="h-12 object-contain mix-blend-screen opacity-90" onerror="this.style.display='none'">
                        </div>
                        <p class="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-2">
                            Accelerated CAD to QA Pipeline
                        </p>
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">
                            10-Day QA Readiness Plan
                        </h1>
                        <p class="text-slate-300 max-w-2xl text-lg">
                            A highly condensed intensive program mapped perfectly across two standard Monday-Friday work weeks. Progresses from deliverable basics to robust QA auditing, culminating in project meetings, live project production, and sign-off.
                        </p>
                    </div>
                    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center min-w-[250px]">
                        <div class="text-4xl mb-2">⚡</div>
                        <div class="text-xl font-bold text-orange-400">10 Working Days</div>
                        <div class="text-sm text-slate-400 uppercase tracking-wide">Two Standard Weeks</div>
                    </div>
                </div>
            </div>
        </header>
    `;

    const renderCurriculumSection = () => {
        const cardsHTML = curriculumData.map(item => {
            const colors = getThemeColors(item.themeColor);
            return `
                <div class="glass-card rounded-xl p-6 module-card shadow-sm border-t-4 ${colors.borderTop}">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="${colors.bg} ${colors.text} p-3 rounded-lg text-2xl shadow-inner">
                            ${item.icon}
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-800 leading-tight">${item.title}</h3>
                            <p class="${colors.text} text-xs font-semibold uppercase tracking-wider mt-1">${item.subtitle}</p>
                        </div>
                    </div>
                    <ul class="space-y-3">
                        ${item.bullets.map(bullet => `
                            <li class="flex items-start gap-2 text-sm text-slate-600">
                                <span class="w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 shrink-0"></span>
                                <span>${bullet}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }).join('');

        return `
            <section class="mb-12">
                <div class="text-center mb-10 mt-8">
                    <h2 class="text-3xl font-bold text-slate-800">Curriculum Architecture</h2>
                    <p class="text-slate-500 mt-2 max-w-2xl mx-auto">
                        The daily schedule focuses specifically on these foundational topics and AC03 video modules extracted from the primary CAD Training Program.
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${cardsHTML}
                </div>
            </section>
        `;
    };

    const renderDayCard = (day) => {
        const titleColors = getThemeColors(day.themeColor);

        let theoryHTML = '';
        if (day.theory) {
            const theoryColors = getThemeColors(day.theory.themeColor);
            theoryHTML = `
                <div class="theory-block mt-4 text-xs">
                    <div class="${theoryColors.text} font-bold uppercase tracking-wider mb-1 text-[10px]">${day.theory.type}</div>
                    <div class="font-semibold text-slate-800 mb-1">${day.theory.title}</div>
                    <div class="text-slate-600 leading-relaxed">${day.theory.description}</div>
                </div>
            `;
        }

        const practiceColors = getThemeColors(day.practice.themeColor);
        let practiceHighlight = day.practice.highlightGoal ? `
            <div class="${practiceColors.bg} ${practiceColors.text} p-2 rounded mt-2 text-[11px] font-semibold border ${practiceColors.border}">
                ${day.practice.highlightGoal}
            </div>
        ` : '';

        const practiceHTML = `
            <div class="practice-block mt-auto text-xs flex-grow flex flex-col justify-end">
                <div class="${practiceColors.text} font-bold uppercase tracking-wider mb-1 text-[10px]">${day.practice.type}</div>
                <div class="font-semibold text-slate-800 mb-1">${day.practice.title}</div>
                <div class="text-slate-600 leading-relaxed">${day.practice.description}</div>
                ${practiceHighlight}
            </div>
        `;

        const medalHTML = day.hasMedal ? `
            <div class="absolute -top-3 -right-3 text-3xl drop-shadow-md z-10" title="Sign-off Milestone">
                🎖️
            </div>
        ` : '';

        return `
            <div class="flex flex-col h-full bg-slate-50/50 rounded-lg p-4 border border-slate-100 hover:shadow-md transition-shadow relative">
                ${medalHTML}
                <h4 class="${titleColors.text} font-bold text-lg border-b ${titleColors.border} pb-2 mb-3">
                    Day ${day.day} (${day.dayName})
                </h4>
                <div class="text-xs text-slate-700 italic mb-2 flex gap-1.5 items-start">
                    <span class="text-red-500 mt-0.5">🎯</span>
                    <span class="leading-tight">Goal: ${day.goal}</span>
                </div>
                <div class="flex-grow flex flex-col">
                    ${theoryHTML}
                    ${practiceHTML}
                </div>
            </div>
        `;
    };

    const renderReflectionTable = (week) => {
        const isWeek1 = week.weekNumber === 1;
        const bgClass = isWeek1 ? 'bg-blue-100' : 'bg-emerald-100';
        const textClass = isWeek1 ? 'text-blue-900' : 'text-emerald-900';
        const borderClass = isWeek1 ? 'border-blue-200' : 'border-emerald-200';

        const candidateSpan = candidateName ? `<span class="text-sm font-normal text-slate-500 bg-slate-200 px-2 py-1 rounded-md ml-auto">Candidate: ${candidateName}</span>` : '';

        const rowsHTML = week.days.map((day, index) => {
            const isLast = index === week.days.length - 1;
            return `
                <tr class="border-slate-200 hover:bg-slate-50 ${!isLast ? 'border-b' : ''}">
                    <td class="p-3 font-semibold text-slate-900">Day ${day.day}</td>
                    <td class="p-3">
                        <select class="reflection-input bg-white">
                            <option value="" disabled selected>Select response...</option>
                            <option value="1">Yes, completely clear</option>
                            <option value="2">Mostly, but had questions</option>
                            <option value="3">No, needed more guidance</option>
                        </select>
                    </td>
                    <td class="p-3">
                        <textarea class="reflection-input resize-y" rows="1" placeholder="Add your notes here..."></textarea>
                    </td>
                    <td class="p-3">
                        <textarea class="reflection-input resize-y" rows="1" placeholder="Suggestions for new guides/videos..."></textarea>
                    </td>
                    <td class="p-3 text-center" data-html2canvas-ignore="true">
                        <button class="submit-btn bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-1.5 px-3 rounded shadow-sm transition-colors" data-day="${day.day}" data-week="${week.weekNumber}">
                            Submit
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

        return `
            <div class="bg-slate-50 border-x border-b border-slate-200 rounded-b-xl p-6 shadow-sm reflection-table-container" id="reflection-table-w${week.weekNumber}">
                <h4 class="text-lg font-bold text-slate-800 mb-3 flex flex-wrap items-center gap-2">
                    <span>📝 Week ${week.weekNumber} Learning Reflection</span>
                    <span class="candidate-display ml-auto">${candidateSpan}</span>
                </h4>
                <p class="text-xs text-slate-500 mb-4">
                    ${isWeek1
                        ? "Complete this table at the end of each day to provide feedback on the training materials and identify areas for improvement."
                        : "Complete this table at the end of each day to provide feedback on the live environment transition and training effectiveness."}
                </p>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                        <thead>
                            <tr class="${bgClass} ${textClass} text-xs uppercase tracking-wide border-b ${borderClass}">
                                <th class="p-3 font-semibold w-24">Day</th>
                                <th class="p-3 font-semibold w-1/4">
                                    ${isWeek1 ? "Was material sufficient?" : "Was support sufficient?"}
                                </th>
                                <th class="p-3 font-semibold w-1/3">Key Takeaways / Challenges</th>
                                <th class="p-3 font-semibold">What additional material could be created?</th>
                                <th class="p-3 font-semibold w-24 text-center" data-html2canvas-ignore="true">Action</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm text-slate-700">
                            ${rowsHTML}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    };

    const renderScheduleSection = (data) => {
        const isWeek1 = data.weekNumber === 1;
        const headerBg = isWeek1 ? 'bg-blue-600' : 'bg-emerald-600';
        const headerText = isWeek1 ? 'text-blue-100' : 'text-emerald-100';
        const headerTrack = isWeek1 ? 'text-blue-200' : 'text-emerald-200';
        const contentBorder = isWeek1 ? 'border-blue-200' : 'border-emerald-200';

        const daysHTML = data.days.map(day => renderDayCard(day)).join('');
        const reflectionHTML = renderReflectionTable(data);

        return `
            <section class="${isWeek1 ? 'mb-12' : ''}">
                <div class="${headerBg} text-white p-4 rounded-t-xl flex justify-between items-center">
                    <div>
                        <h3 class="text-2xl font-bold flex items-center gap-2">${data.title}</h3>
                        <p class="${headerText} text-sm mt-1">${data.focus}</p>
                    </div>
                    <div class="hidden md:block ${headerTrack} font-bold uppercase tracking-widest opacity-50">
                        Monday — Friday
                    </div>
                </div>
                <div class="bg-white border-x border-b ${contentBorder} shadow-md p-6">
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
                        ${daysHTML}
                    </div>
                </div>
                ${reflectionHTML}
            </section>
        `;
    };

    const renderChartsSection = () => `
        <section class="mt-16 pt-12 border-t border-slate-200">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div class="glass-card rounded-xl p-6 shadow-sm col-span-1">
                    <h3 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        📊 Training Modality Focus
                    </h3>
                    <p class="text-xs text-slate-500 mb-6">
                        Visualizing the learning split. Heavy emphasis on hands-on practice directly applying the theory learned.
                    </p>
                    <div class="relative h-64 w-full">
                        <canvas id="doughnutChart"></canvas>
                    </div>
                </div>
                <div class="glass-card rounded-xl p-6 shadow-sm md:col-span-2">
                    <h3 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        📈 Daily Topic Weighting
                    </h3>
                    <p class="text-xs text-slate-500 mb-6">
                        Tracking the shift from pure CAD standards towards total Quality Assurance focus across the 10-day period.
                    </p>
                    <div class="relative h-[300px] w-full">
                        <canvas id="barChart"></canvas>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Main App Renderer
    const renderApp = () => {
        app.innerHTML = `
            ${renderHeader()}
            <main class="max-w-7xl mx-auto px-6 mt-10 space-y-12">
                ${renderCurriculumSection()}

                <div class="bg-white p-6 rounded-xl shadow-md border border-slate-200 mt-12 max-w-2xl mx-auto flex items-center gap-4">
                    <label for="candidateNameInput" class="font-bold text-slate-700 whitespace-nowrap">
                        Candidate Name:
                    </label>
                    <input
                        type="text"
                        id="candidateNameInput"
                        class="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter candidate's name..."
                    />
                </div>

                <div class="text-center my-12">
                    <h2 class="text-3xl font-bold gradient-text">The 10-Day Execution Plan</h2>
                    <p class="text-slate-500 mt-2 max-w-2xl mx-auto">
                        Structured perfectly over two calendar weeks. Week 1 establishes foundations and automated routines. Week 2 tests those skills on broken drawings and transitions to sustained live project production.
                    </p>
                </div>

                ${renderScheduleSection(scheduleData[0])}

                <div class="flex justify-center items-center gap-4 text-slate-300 my-8">
                    <div class="h-[2px] w-16 bg-slate-300"></div>
                    <div class="text-lg font-bold tracking-widest uppercase">Weekend Break</div>
                    <div class="h-[2px] w-16 bg-slate-300"></div>
                </div>

                ${renderScheduleSection(scheduleData[1])}

                ${renderChartsSection()}
            </main>
        `;

        // Setup Event Listeners
        const nameInput = document.getElementById('candidateNameInput');
        nameInput.addEventListener('input', (e) => {
            candidateName = e.target.value;
            const displays = document.querySelectorAll('.candidate-display');
            displays.forEach(display => {
                if (candidateName) {
                    display.innerHTML = `<span class="text-sm font-normal text-slate-500 bg-slate-200 px-2 py-1 rounded-md ml-auto">Candidate: ${candidateName}</span>`;
                } else {
                    display.innerHTML = '';
                }
            });
        });

        // Setup Submit Buttons
        document.querySelectorAll('.submit-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const button = e.target;
                const dayNumber = button.getAttribute('data-day');
                const weekNumber = button.getAttribute('data-week');
                const tableContainer = document.getElementById(`reflection-table-w${weekNumber}`);

                if (!tableContainer) return;

                try {
                    button.disabled = true;
                    button.textContent = 'Wait...';
                    button.classList.add('opacity-50', 'cursor-not-allowed');

                    // Need a slight delay for UI to update
                    await new Promise(r => setTimeout(r, 50));

                    const canvas = await html2canvas(tableContainer, {
                        scale: 2,
                        backgroundColor: '#ffffff'
                    });

                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jspdf.jsPDF({
                        orientation: 'landscape',
                        unit: 'px',
                        format: [canvas.width, canvas.height]
                    });

                    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

                    const safeName = candidateName ? candidateName.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'candidate';
                    const fileName = `${safeName}_day_${dayNumber}_reflection.pdf`;

                    pdf.save(fileName);

                    const subject = encodeURIComponent(`Day ${dayNumber} Reflection - ${candidateName || 'Candidate'}`);
                    const body = encodeURIComponent(`Hello,\n\nPlease find attached my training reflection for Day ${dayNumber}.\n\n(Note: Please remember to manually attach the downloaded PDF: ${fileName})\n\nThank you,\n${candidateName || 'Candidate'}`);

                    window.location.href = `mailto:?subject=${subject}&body=${body}`;
                } catch (error) {
                    console.error('Error generating PDF:', error);
                    alert('Failed to generate PDF. Please try again.');
                } finally {
                    button.disabled = false;
                    button.textContent = 'Submit';
                    button.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            });
        });

        // Render Charts
        const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
        new Chart(doughnutCtx, {
            type: 'doughnut',
            data: chartData.doughnutData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { usePointStyle: true, padding: 20 } },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                const label = context[0].label;
                                return Array.isArray(label) ? label.join(' ') : label;
                            }
                        }
                    }
                },
                cutout: '70%',
            }
        });

        const barCtx = document.getElementById('barChart').getContext('2d');
        new Chart(barCtx, {
            type: 'bar',
            data: chartData.barData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', align: 'end', labels: { usePointStyle: true, boxWidth: 8 } },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                const label = context[0].label;
                                return Array.isArray(label) ? label.join(' ') : label;
                            }
                        }
                    }
                },
                scales: {
                    x: { stacked: true, grid: { display: false } },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: 100,
                        title: { display: true, text: '% Focus', font: { size: 10 } }
                    }
                }
            }
        });
    };

    renderApp();
});