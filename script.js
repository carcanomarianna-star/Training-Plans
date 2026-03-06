document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    let candidateName = '';

    // Helpers
    const getThemeColors = (themeColor) => {
        const colors = {
            blue: {
                bg: 'bg-brand-offwhite',
                border: 'border-brand-lightgray',
                text: 'text-brand-darkest',
                borderTop: 'border-t-brand-teal',
                dot: 'bg-brand-teal'
            },
            purple: {
                bg: 'bg-brand-offwhite',
                border: 'border-brand-lightgray',
                text: 'text-brand-darkest',
                borderTop: 'border-t-brand-dark',
                dot: 'bg-brand-dark'
            },
            emerald: {
                bg: 'bg-brand-offwhite',
                border: 'border-brand-lightgray',
                text: 'text-brand-darkest',
                borderTop: 'border-t-brand-teal',
                dot: 'bg-brand-teal'
            },
            orange: {
                bg: 'bg-brand-offwhite',
                border: 'border-brand-lightgray',
                text: 'text-brand-darkest',
                borderTop: 'border-t-brand-gray',
                dot: 'bg-brand-gray'
            },
            slate: {
                bg: 'bg-brand-offwhite',
                border: 'border-brand-lightgray',
                text: 'text-brand-darkest',
                borderTop: 'border-t-brand-darkest',
                dot: 'bg-brand-darkest'
            }
        };
        return colors[themeColor] || colors.blue;
    };

    // Components
    const renderHeader = () => `
        <header class="bg-[#b2cfe1] text-brand-900 py-12 px-6 shadow-xl border-b-4 border-brand-teal">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
                    <div class="text-center md:text-left w-full md:w-auto flex-grow">
                        <div class="flex flex-col md:hidden justify-center items-center mb-6 w-full">
                            <img src="No background.png" alt="Primary Logo" class="h-12 object-contain" onerror="this.style.display='none'">
                        </div>
                        <p class="text-brand-teal font-bold tracking-widest uppercase text-sm mb-2">
                            Accelerated CAD to QA Pipeline
                        </p>
                        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-brand-darkest">
                            10-Day QA Readiness Plan
                        </h1>
                        <p class="text-brand-dark max-w-2xl text-lg font-medium">
                            A highly condensed intensive program mapped perfectly across two standard Monday-Friday work weeks. Progresses from deliverable basics to robust QA auditing, culminating in project meetings, live project production, and sign-off.
                        </p>
                    </div>
                    <div class="flex flex-col items-end gap-6 w-full md:w-auto">
                        <div class="hidden md:block">
                            <img src="No background.png" alt="Primary Logo" class="h-12 object-contain" onerror="this.style.display='none'">
                        </div>
                        <div class="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/50 text-center min-w-[250px] shadow-sm w-full md:w-auto">
                            <div class="text-4xl mb-2">⚡</div>
                            <div class="text-xl font-extrabold text-brand-teal">10 Working Days</div>
                            <div class="text-sm text-brand-dark uppercase tracking-wide font-bold">Two Standard Weeks</div>
                        </div>
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
                        <div class="${colors.bg} ${colors.text} p-3 rounded-lg text-2xl shadow-inner border ${colors.border}">
                            ${item.icon}
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-brand-darkest leading-tight">${item.title}</h3>
                            <p class="${colors.text} text-xs font-semibold uppercase tracking-wider mt-1">${item.subtitle}</p>
                        </div>
                    </div>
                    <ul class="space-y-3">
                        ${item.bullets.map(bullet => `
                            <li class="flex items-start gap-2 text-sm text-brand-dark">
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
                    <h2 class="text-3xl font-bold text-brand-darkest">Curriculum Architecture</h2>
                    <p class="text-brand-gray mt-2 max-w-2xl mx-auto">
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
                    <div class="font-semibold text-brand-darkest mb-1">${day.theory.title}</div>
                    <div class="text-brand-dark leading-relaxed">${day.theory.description}</div>
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
            <div class="practice-block mt-auto text-xs flex-grow flex flex-col justify-end border-l-4 border-brand-teal">
                <div class="${practiceColors.text} font-bold uppercase tracking-wider mb-1 text-[10px]">${day.practice.type}</div>
                <div class="font-semibold text-brand-darkest mb-1">${day.practice.title}</div>
                <div class="text-brand-dark leading-relaxed">${day.practice.description}</div>
                ${practiceHighlight}
            </div>
        `;

        const medalHTML = day.hasMedal ? `
            <div class="absolute -top-3 -right-3 text-3xl drop-shadow-md z-10" title="Sign-off Milestone">
                🎖️
            </div>
        ` : '';

        return `
            <div class="flex flex-col h-full bg-white rounded-lg p-4 border border-brand-lightgray hover:shadow-md transition-shadow relative">
                ${medalHTML}
                <h4 class="${titleColors.text} font-bold text-lg border-b ${titleColors.border} pb-2 mb-3">
                    Day ${day.day} (${day.dayName})
                </h4>
                <div class="text-xs text-brand-dark italic mb-2 flex gap-1.5 items-start">
                    <span class="text-brand-teal mt-0.5">🎯</span>
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
        const bgClass = 'bg-brand-offwhite';
        const textClass = 'text-brand-darkest';
        const borderClass = 'border-brand-lightgray';

        const candidateSpan = candidateName ? `<span class="text-sm font-normal text-brand-darkest bg-brand-lightgray px-2 py-1 rounded-md ml-auto">Candidate: ${candidateName}</span>` : '';

        const rowsHTML = week.days.map((day, index) => {
            const isLast = index === week.days.length - 1;
            return `
                <tr class="border-brand-lightgray hover:bg-brand-offwhite align-top ${!isLast ? 'border-b' : ''}">
                    <td class="p-3 font-semibold text-brand-darkest">Day ${day.day}</td>
                    <td class="p-3">
                        <select class="reflection-input bg-white">
                            <option value="" disabled selected>Select response...</option>
                            <option value="1">Yes, completely clear</option>
                            <option value="2">Mostly, but had questions</option>
                            <option value="3">No, needed more guidance</option>
                        </select>
                    </td>
                    <td class="p-3">
                        <textarea class="reflection-input resize-y min-h-[60px]" rows="3" placeholder="Add your notes here..."></textarea>
                    </td>
                    <td class="p-3">
                        <textarea class="reflection-input resize-y min-h-[60px]" rows="3" placeholder="Suggestions for new guides/videos..."></textarea>
                    </td>
                    <td class="p-3 text-center" data-html2canvas-ignore="true">
                        <button class="submit-btn bg-brand-teal hover:bg-brand-dark text-white text-xs font-semibold py-1.5 px-3 rounded shadow-sm transition-colors" data-day="${day.day}" data-week="${week.weekNumber}">
                            Submit
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

        return `
            <div class="bg-brand-offwhite border-x border-b border-brand-lightgray rounded-b-xl p-6 shadow-sm reflection-table-container" id="reflection-table-w${week.weekNumber}">
                <h4 class="text-lg font-bold text-brand-darkest mb-3 flex flex-wrap items-center gap-2">
                    <span>📝 Week ${week.weekNumber} Learning Reflection</span>
                    <span class="candidate-display ml-auto">${candidateSpan}</span>
                </h4>
                <p class="text-xs text-brand-dark mb-4">
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
                        <tbody class="text-sm text-brand-darkest">
                            ${rowsHTML}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    };

    const renderScheduleSection = (data) => {
        const isWeek1 = data.weekNumber === 1;
        const headerBg = isWeek1 ? 'bg-brand-teal' : 'bg-brand-dark';
        const headerText = 'text-white/90';
        const headerTrack = 'text-white/50';
        const contentBorder = 'border-brand-lightgray';

        const daysHTML = data.days.map(day => renderDayCard(day)).join('');
        const reflectionHTML = renderReflectionTable(data);

        return `
            <section class="${isWeek1 ? 'mb-12' : ''}">
                <div class="${headerBg} text-white p-4 rounded-t-xl flex justify-between items-center border-b border-white/10">
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
        <section class="mt-16 pt-12 border-t border-brand-lightgray">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div class="glass-card rounded-xl p-6 shadow-sm col-span-1">
                    <h3 class="text-lg font-bold text-brand-darkest mb-2 flex items-center gap-2">
                        📊 Training Modality Focus
                    </h3>
                    <p class="text-xs text-brand-dark mb-6">
                        Visualizing the learning split. Heavy emphasis on hands-on practice directly applying the theory learned.
                    </p>
                    <div class="relative h-64 w-full">
                        <canvas id="doughnutChart"></canvas>
                    </div>
                </div>
                <div class="glass-card rounded-xl p-6 shadow-sm md:col-span-2">
                    <h3 class="text-lg font-bold text-brand-darkest mb-2 flex items-center gap-2">
                        📈 Daily Topic Weighting
                    </h3>
                    <p class="text-xs text-brand-dark mb-6">
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

                <div class="bg-white p-6 rounded-xl shadow-md border border-brand-lightgray mt-12 max-w-2xl mx-auto flex items-center gap-4">
                    <label for="candidateNameInput" class="font-bold text-brand-darkest whitespace-nowrap">
                        Candidate Name:
                    </label>
                    <input
                        type="text"
                        id="candidateNameInput"
                        class="flex-1 px-4 py-2 border border-brand-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                        placeholder="Enter candidate's name..."
                    />
                </div>

                <div class="text-center my-12">
                    <h2 class="text-3xl font-bold gradient-text">The 10-Day Execution Plan</h2>
                    <p class="text-brand-gray mt-2 max-w-2xl mx-auto">
                        Structured perfectly over two calendar weeks. Week 1 establishes foundations and automated routines. Week 2 tests those skills on broken drawings and transitions to sustained live project production.
                    </p>
                </div>

                ${renderScheduleSection(scheduleData[0])}

                <div class="flex justify-center items-center gap-4 text-brand-gray my-8">
                    <div class="h-[2px] w-16 bg-brand-lightgray"></div>
                    <div class="text-lg font-bold tracking-widest uppercase">Weekend Break</div>
                    <div class="h-[2px] w-16 bg-brand-lightgray"></div>
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
                    display.innerHTML = `<span class="text-sm font-normal text-brand-darkest bg-brand-lightgray px-2 py-1 rounded-md ml-auto">Candidate: ${candidateName}</span>`;
                } else {
                    display.innerHTML = '';
                }
            });
        });

        // Setup Submit Buttons
        document.querySelectorAll('.submit-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const button = e.target;
                const dayNumber = parseInt(button.getAttribute('data-day'), 10);
                const weekNumber = parseInt(button.getAttribute('data-week'), 10);
                const tableContainer = document.getElementById(`reflection-table-w${weekNumber}`);

                if (!tableContainer) return;

                // Find the specific day's data from scheduleData
                const weekData = scheduleData.find(w => w.weekNumber === weekNumber);
                const dayData = weekData ? weekData.days.find(d => d.day === dayNumber) : null;
                const objective = dayData ? dayData.goal : 'No objective found.';

                // Extract reflection data from the table row
                const tr = button.closest('tr');
                const selectElement = tr.querySelector('select');
                const textareas = tr.querySelectorAll('textarea');

                const escapeHTML = (str) => {
                    return str.replace(/[&<>'"]/g,
                        tag => ({
                            '&': '&amp;',
                            '<': '&lt;',
                            '>': '&gt;',
                            "'": '&#39;',
                            '"': '&quot;'
                        }[tag])
                    );
                };

                const reflectionResponse = selectElement && selectElement.options[selectElement.selectedIndex].text !== 'Select response...' ? escapeHTML(selectElement.options[selectElement.selectedIndex].text) : 'No response selected';
                const takeaways = textareas[0] && textareas[0].value ? escapeHTML(textareas[0].value) : 'None';
                const suggestions = textareas[1] && textareas[1].value ? escapeHTML(textareas[1].value) : 'None';
                const safeCandidateName = escapeHTML(candidateName || 'Not specified');
                const safeObjective = escapeHTML(objective);

                try {
                    button.disabled = true;
                    button.textContent = 'Wait...';
                    button.classList.add('opacity-50', 'cursor-not-allowed');

                    // Create a hidden container for the PDF layout
                    const pdfContainer = document.createElement('div');
                    pdfContainer.style.position = 'absolute';
                    pdfContainer.style.left = '-9999px';
                    pdfContainer.style.top = '0';
                    pdfContainer.style.width = '800px';
                    pdfContainer.style.backgroundColor = '#ffffff';
                    pdfContainer.style.padding = '40px';
                    pdfContainer.style.fontFamily = 'sans-serif';
                    pdfContainer.style.color = '#0f131d'; // brand-darkest

                    const today = new Date().toLocaleDateString();

                    pdfContainer.innerHTML = `
                        <div style="border-bottom: 4px solid #025267; padding-bottom: 20px; margin-bottom: 30px;">
                            <h1 style="color: #025267; margin: 0; font-size: 28px;">CAD to QA Training Plan</h1>
                            <div style="display: flex; justify-content: space-between; margin-top: 10px; color: #1a2e3e; font-size: 14px; font-weight: bold;">
                                <span>Day ${dayNumber} Learning Reflection</span>
                                <span>Date: ${today}</span>
                            </div>
                            <div style="margin-top: 5px; color: #1a2e3e; font-size: 14px;">
                                <strong>Candidate:</strong> ${safeCandidateName}
                            </div>
                        </div>

                        <div style="background-color: #f2f1ef; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #025267;">
                            <h2 style="margin: 0 0 10px 0; font-size: 18px; color: #0f131d;">Daily Objective</h2>
                            <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #1a2e3e;">${safeObjective}</p>
                        </div>

                        <div style="margin-bottom: 30px;">
                            <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #0f131d; border-bottom: 1px solid #b8b8b8; padding-bottom: 5px;">Learning Reflection</h2>

                            <div style="margin-bottom: 20px;">
                                <strong style="display: block; margin-bottom: 5px; font-size: 14px; color: #1a2e3e;">Was material/support sufficient?</strong>
                                <div style="background-color: #ffffff; border: 1px solid #b8b8b8; padding: 10px 15px; border-radius: 4px; font-size: 14px;">
                                    ${reflectionResponse}
                                </div>
                            </div>

                            <div style="margin-bottom: 20px;">
                                <strong style="display: block; margin-bottom: 5px; font-size: 14px; color: #1a2e3e;">Key Takeaways / Challenges:</strong>
                                <div style="background-color: #ffffff; border: 1px solid #b8b8b8; padding: 15px; border-radius: 4px; font-size: 14px; min-height: 100px; white-space: pre-wrap; word-wrap: break-word; vertical-align: top;">${takeaways}</div>
                            </div>

                            <div style="margin-bottom: 20px;">
                                <strong style="display: block; margin-bottom: 5px; font-size: 14px; color: #1a2e3e;">What additional material could be created?</strong>
                                <div style="background-color: #ffffff; border: 1px solid #b8b8b8; padding: 15px; border-radius: 4px; font-size: 14px; min-height: 100px; white-space: pre-wrap; word-wrap: break-word; vertical-align: top;">${suggestions}</div>
                            </div>
                        </div>
                    `;

                    document.body.appendChild(pdfContainer);

                    // Need a slight delay for DOM to render the hidden element
                    await new Promise(r => setTimeout(r, 100));

                    const canvas = await html2canvas(pdfContainer, {
                        scale: 2,
                        backgroundColor: '#ffffff'
                    });

                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jspdf.jsPDF({
                        orientation: 'portrait',
                        unit: 'px',
                        format: [canvas.width, canvas.height]
                    });

                    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

                    const safeName = candidateName ? candidateName.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'candidate';
                    const fileName = `${safeName}_day_${dayNumber}_reflection.pdf`;

                    pdf.save(fileName);

                    document.body.removeChild(pdfContainer);

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
        // Map original chart colors to brand colors if needed. For now, keep as configured in data.js or override here.
        // Let's override the background colors of the chart data to use the brand palette.
        const brandPalette = ['#025267', '#1a2e3e', '#989fa7', '#b8b8b8'];
        const updatedDoughnutData = {
            ...chartData.doughnutData,
            datasets: [{
                ...chartData.doughnutData.datasets[0],
                backgroundColor: brandPalette,
                borderWidth: 0
            }]
        };

        const updatedBarData = {
            ...chartData.barData,
            datasets: chartData.barData.datasets.map((dataset, i) => ({
                ...dataset,
                backgroundColor: brandPalette[i % brandPalette.length]
            }))
        };

        const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
        new Chart(doughnutCtx, {
            type: 'doughnut',
            data: updatedDoughnutData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { usePointStyle: true, padding: 20, font: { family: 'inherit' } } },
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
            data: updatedBarData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', align: 'end', labels: { usePointStyle: true, boxWidth: 8, font: { family: 'inherit' } } },
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
                    x: { stacked: true, grid: { display: false }, ticks: { font: { family: 'inherit' } } },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: 100,
                        title: { display: true, text: '% Focus', font: { size: 10, family: 'inherit' } },
                        ticks: { font: { family: 'inherit' } }
                    }
                }
            }
        });
    };

    renderApp();
});