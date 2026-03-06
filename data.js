// --- Curriculum Data ---
const curriculumData = [
  {
    id: 'stds',
    icon: '📘',
    title: 'Deliverables & Stds',
    subtitle: 'Core Foundation',
    themeColor: 'blue',
    bullets: [
      'Deliverable Types (SF1/RL5)',
      'AutoCAD Naming & UNICLASS',
      'Border Templates & Routines',
    ],
  },
  {
    id: 'pc',
    icon: '☁️',
    title: 'Point Cloud Workflows',
    subtitle: 'Cloudworx (AC03)',
    themeColor: 'purple',
    bullets: [
      '<strong>AC03.01-02:</strong> License, DB, UI',
      '<strong>AC03.04-06:</strong> Slices & UCS',
      '<strong>AC03.10:</strong> Clipping & Linework Trick',
    ],
  },
  {
    id: 'val',
    icon: '✅',
    title: 'Drawing Validation',
    subtitle: 'Quality Assurance',
    themeColor: 'emerald',
    bullets: [
      'Validating Border Details',
      'Running Automated Routines',
      'Archives & Record Sheets',
    ],
  },
  {
    id: 'rev6',
    icon: '📄',
    title: 'Rev 6 Guidelines',
    subtitle: 'QA Principles',
    themeColor: 'orange',
    bullets: [
      'Consistency & Fit for Purpose',
      'Accuracy & Floor Stacking',
      '2D Spec Checklists (p.21-28)',
    ],
  },
];

// --- Schedule Data ---
const scheduleData = [
  {
    weekNumber: 1,
    title: '📅 Week 1: Foundations, Cloudworx & Admin',
    focus: 'Mastering PCL standards, deep Cloudworx video integration (AC03), and learning QA administrative routines.',
    themeColor: 'blue',
    days: [
      {
        day: 1,
        dayName: 'Mon',
        themeColor: 'blue',
        goal: 'Familiarize with standards, deliverable types, and UNICLASS layers.',
        theory: {
          type: 'Theory (Stds)',
          themeColor: 'slate',
          title: 'Standards & Checklists',
          description: 'Review SF1/RL5 types and the fundamental CAD QA Checklist. Study AutoCAD Naming, UNICLASS layers, PCLayer routine, and Borders.',
        },
        practice: {
          type: 'Practice',
          themeColor: 'blue',
          title: 'Layer 0 Correction',
          description: 'Identify deliverable types from 3 past projects. <strong>Receive a drawing with all linework on Layer 0.</strong> Run PCLayer, correctly assign lines to UNICLASS layers, and insert/edit a PCL Border.',
        },
      },
      {
        day: 2,
        dayName: 'Tue',
        themeColor: 'blue',
        goal: 'Practice handling point clouds to draft missing 2D elements.',
        theory: {
          type: 'Videos (AC03.01 & 02)',
          themeColor: 'purple',
          title: 'Cyclone UI & DBs',
          description: 'License Manager, DB Import, Toolbar, PC VPORTS, Point cloud colours, and Visibility.',
        },
        practice: {
          type: 'Practice',
          themeColor: 'blue',
          title: 'Drafting Missing Lines',
          description: '<strong>Receive a faulty drawing missing obvious linework.</strong> Connect license, load point cloud database, configure PC VPORTS, and draft missing walls/levels directly from the cloud.',
        },
      },
      {
        day: 3,
        dayName: 'Wed',
        themeColor: 'blue',
        goal: 'Practice advanced point cloud handling for complex 3D elements & UCS.',
        theory: {
          type: 'Videos (AC03.04-10)',
          themeColor: 'purple',
          title: 'UCS & Slicing Tools',
          description: 'Matching & Creating UCS. Vertical slices, Clipping Manager, and the View Linework Trick.',
        },
        practice: {
          type: 'Practice',
          themeColor: 'blue',
          title: 'Complex Alignments',
          description: 'Master UCS manipulation to align with irregular buildings. <strong>Draft complex elements including a staircase and overhead structural linework</strong> using advanced slicing.',
        },
      },
      {
        day: 4,
        dayName: 'Thu',
        themeColor: 'blue',
        goal: 'Understand core QA principles, consistency, and 2D specifications.',
        theory: {
          type: 'Theory (QA Rev 6)',
          themeColor: 'emerald',
          title: 'Principles & Specs',
          description: 'Study <strong>QA Guidelines Rev 6</strong>. Focus on Consistency, Accuracy (floor stacking), and Fit for Purpose. Review Grids, North Points, and the 2D Spec Checklist (p.21-28).',
        },
        practice: {
          type: 'Practice',
          themeColor: 'emerald',
          title: 'Full Setup Audit',
          description: 'From scratch: Load DB -> Align UCS -> Slice -> PCLayer -> Border. Perform an immediate QA audit on the created setup, strictly applying the Rev 6 guidelines.',
        },
      },
      {
        day: 5,
        dayName: 'Fri',
        themeColor: 'blue',
        goal: 'Master automated QA routines and project administration processes.',
        theory: {
          type: 'Theory (QA Admin)',
          themeColor: 'emerald',
          title: 'Automated QA',
          description: 'Understand AutoCAD QA Routines, Project Archive procedures, and Record Sheet tracking.',
        },
        practice: {
          type: 'Practice',
          themeColor: 'emerald',
          title: 'Run & Record',
          description: 'Execute automated QA routines on a dataset, interpret the generated error logs, and accurately fill out a mock Record Sheet.',
        },
      },
    ],
  },
  {
    weekNumber: 2,
    title: '✅ Week 2: Mock Audits, Live Production & Sign-Off',
    focus: 'Transitioning from theoretical checklists to identifying errors in seeded drawings, entering project meetings, and sustained live project production.',
    themeColor: 'emerald',
    days: [
      {
        day: 6,
        dayName: 'Mon',
        themeColor: 'emerald',
        goal: 'Identify and correct planted errors in a controlled mock environment.',
        practice: {
          type: 'Intensive Practice',
          themeColor: 'emerald',
          title: 'Seeded Mock Audit',
          description: 'Receive a drawing intentionally seeded with critical errors spanning Layers, Bad UCS/Slicing, missing linework, and invalid Border data.',
          highlightGoal: 'Goal: Identify, document, and fix errors.',
        },
      },
      {
        day: 7,
        dayName: 'Tue',
        themeColor: 'emerald',
        goal: 'Review mock audit performance and finalize drawing preparation.',
        practice: {
          type: 'Correction & Prep',
          themeColor: 'emerald',
          title: 'Audit Review',
          description: 'Review the results of the Day 6 mock audit with a senior tech. Run the final automated QA routines on the corrected drawing and prepare mock sign-off paperwork.',
        },
      },
      {
        day: 8,
        dayName: 'Wed',
        themeColor: 'orange',
        goal: 'Understand project instructions and start live QA workflows.',
        practice: {
          type: 'Live Application',
          themeColor: 'orange',
          title: 'Meetings & Production',
          description: '<strong>Attend a New Instruction Meeting</strong> to understand how projects are initially briefed.<br/><br/>Begin live project production. Work alongside a senior CAD technician to co-audit live drawing setups and borders.',
        },
      },
      {
        day: 9,
        dayName: 'Thu',
        themeColor: 'orange',
        goal: 'Engage in sustained live project production and Drafter feedback.',
        practice: {
          type: 'Live Application',
          themeColor: 'orange',
          title: 'Sustained Production',
          description: 'Continue live project production on the active QA queue.<ul class="list-disc pl-4 space-y-1 mt-2"><li>Focus on UCS, slicing, and linework checks using AC03 methods.</li><li>Actively engage in Drafter communication and feedback loops.</li></ul>',
        },
      },
      {
        day: 10,
        dayName: 'Fri',
        themeColor: 'emerald',
        goal: 'Execute an independent QA audit and achieve final sign-off.',
        hasMedal: true,
        practice: {
          type: 'Final Assessment',
          themeColor: 'emerald',
          title: 'Independent QA',
          description: 'Perform an independent, complete QA audit on a small live project without direct assistance.',
          highlightGoal: 'Complete project sign-off admin forms and formally present findings to the CAD Manager.',
        },
      },
    ],
  },
];

// --- Chart Data ---
const chartData = {
  doughnutData: {
    labels: [
      ['Theory &', 'Manual Reading'],
      ['AC03 Video', 'Observation'],
      ['Guided', 'Practical Draft/QA'],
      ['Live Meetings, Production', '& Independent QA'],
    ],
    datasets: [
      {
        data: [20, 10, 40, 30],
        backgroundColor: ['#94A3B8', '#8B5CF6', '#3B82F6', '#10B981'],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  },
  barData: {
    labels: [
      ['W1: Mon', '(Standards)'],
      ['W1: Tue', '(CWX UI)'],
      ['W1: Wed', '(CWX Adv)'],
      ['W1: Thu', '(QA Rev6)'],
      ['W1: Fri', '(QA Admin)'],
      ['W2: Mon', '(Mock QA)'],
      ['W2: Tue', '(Audit Rev)'],
      ['W2: Wed', '(Meetings/Prod)'],
      ['W2: Thu', '(Production)'],
      ['W2: Fri', '(Sign-off)'],
    ],
    datasets: [
      {
        label: 'CAD & Cloudworx Setup Focus',
        data: [100, 80, 80, 40, 20, 30, 10, 10, 10, 0],
        backgroundColor: '#3B82F6',
        stack: 'Stack 0',
      },
      {
        label: 'QA Application Focus',
        data: [0, 20, 20, 60, 80, 70, 90, 90, 90, 100],
        backgroundColor: '#10B981',
        stack: 'Stack 0',
      },
    ],
  }
};
