const { PrismaClient } = require('../lib/prisma');

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create Participants
    const participant1 = await prisma.participant.create({
        data: {
            firstName: 'Sarah',
            lastName: 'Jones',
            dateOfBirth: new Date('1995-05-15'),
            gender: 'Female',
            address: '42 Wallaby Way, Sydney',
            ndisNumber: '430 123 456',
            status: 'Active',
            planManagement: 'Agency Managed',
        },
    });

    const participant2 = await prisma.participant.create({
        data: {
            firstName: 'Michael',
            lastName: 'Brown',
            dateOfBirth: new Date('1988-11-20'),
            gender: 'Male',
            address: '10 George St, Paramatta',
            ndisNumber: '431 987 654',
            status: 'Active',
            planManagement: 'Self Managed',
        },
    });

    // Create Staff
    const staff1 = await prisma.staff.create({
        data: {
            name: 'Alice Smith',
            email: 'alice@example.com',
            role: 'Support Worker',
            wwccStatus: 'Valid',
            firstAidStatus: 'Valid',
            ndisScreenStatus: 'Valid',
        },
    });

    const staff2 = await prisma.staff.create({
        data: {
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Manager',
            wwccStatus: 'Valid',
            firstAidStatus: 'Expired',
            ndisScreenStatus: 'Valid',
        },
    });

    // Create Incident
    await prisma.incident.create({
        data: {
            date: new Date(),
            location: 'Kitchen',
            type: 'Physical Injury',
            description: 'Participant slipped on wet floor.',
            immediateAction: 'First aid applied.',
            severity: 'Low',
            participantId: participant1.id,
            staffId: staff1.id,
        },
    });

    // Create Risk
    await prisma.risk.create({
        data: {
            description: 'Risk of falls in shower',
            probability: 'Medium',
            impact: 'High',
            mitigation: 'Use shower chair and non-slip mat.',
            participantId: participant1.id,
        },
    });

    // Create Shift Report
    await prisma.shiftReport.create({
        data: {
            date: new Date(),
            shiftType: 'Morning',
            startTime: '07:00',
            endTime: '15:00',
            mood: 'Happy',
            notes: 'Sarah had a good day. We went for a walk.',
            participantId: participant1.id,
            staffId: staff1.id,
        },
    });

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
