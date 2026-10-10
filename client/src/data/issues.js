// Mock reports for SIS-2 (no backend yet)
export const categories = ['Ramp', 'Lift', 'Door', 'Signage', 'Toilet', 'Other'];
export const severities = ['low', 'medium', 'high'];

export const initialIssues = [
  {
    id: 1,
    building: 'Main building (GMK)',
    location: 'Entrance from Satbayev st.',
    category: 'Ramp',
    severity: 'high',
    description: 'Ramp is covered with ice, no handrail on the left side.',
  },
  {
    id: 2,
    building: 'IT building',
    location: 'Floor 3, lift',
    category: 'Lift',
    severity: 'medium',
    description: 'Lift buttons have no Braille labels.',
  },
  {
    id: 3,
    building: 'Library',
    location: 'Reading hall',
    category: 'Door',
    severity: 'low',
    description: 'Heavy door, hard to open from a wheelchair.',
  },
];
