export const alerts = [
    { id: 1, type: 'critical', message: 'Staff "John Doe" First Aid expired yesterday.', date: '2025-12-26' },
    { id: 2, type: 'warning', message: 'Incident Report #102 requires Manager Review.', date: '2025-12-27' },
    { id: 3, type: 'info', message: 'New NDIS Practice Standard released.', date: '2025-12-20' },
];

export const incidentRegistry = [
    { id: 'INC-001', date: '2025-12-01', type: 'Behavioural', status: 'Closed', description: 'Client shouted at staff.', severity: 'Low' },
    { id: 'INC-002', date: '2025-12-10', type: 'Injury', status: 'Open', description: 'Staff slipped in kitchen.', severity: 'Medium' },
    { id: 'INC-003', date: '2025-12-25', type: 'Medication', status: 'Review', description: 'Missed dose.', severity: 'High' },
];

export const riskRegister = [
    { id: 'RSK-001', risk: 'Staff Burnout', probability: 'High', impact: 'High', mitigation: 'Regular rotation', status: 'Active' },
    { id: 'RSK-002', risk: 'Data Breach', probability: 'Low', impact: 'Critical', mitigation: '2FA enforced', status: 'Monitored' },
];

export const staffCompliance = [
    { name: 'Alice Smith', role: 'Support Worker', checks: { wwcc: 'Valid', firstAid: 'Valid', ndisScreen: 'Valid' } },
    { name: 'John Doe', role: 'Support Worker', checks: { wwcc: 'Valid', firstAid: 'Expired', ndisScreen: 'Valid' } },
];
