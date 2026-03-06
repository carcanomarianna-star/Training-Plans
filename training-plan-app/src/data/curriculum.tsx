export interface CurriculumItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  themeColor: 'blue' | 'purple' | 'emerald' | 'orange';
  bullets: React.ReactNode[];
}

export const curriculumData: CurriculumItem[] = [
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
      <><strong key="1">AC03.01-02:</strong> License, DB, UI</>,
      <><strong key="2">AC03.04-06:</strong> Slices & UCS</>,
      <><strong key="3">AC03.10:</strong> Clipping & Linework Trick</>,
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
