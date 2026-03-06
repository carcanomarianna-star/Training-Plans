export const tooltipConfig = {
  tooltip: {
    callbacks: {
      title: function (tooltipItems: any) {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
          return label.join(' ');
        } else {
          return label;
        }
      },
    },
  },
};

export const doughnutData = {
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
};

export const barData = {
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
};