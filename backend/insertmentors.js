const db = require('./config/dbconfig'); // Ensure this is the correct path to your database module

// Function to generate dummy mentor data for MBA placement preparation
function generateMentorData() {
    const names = ['John Smith', 'Jane Doe', 'Emily Davis', 'Michael Brown', 'Sarah Johnson', 'David Lee', 'Laura Wilson', 'Chris Taylor', 'Angela Martinez', 'Robert Anderson'];
    const areasOfExpertise = [
        'Interview Preparation',
        'Resume Building',
        'Personal Branding',
        'Networking Strategies',
        'Business Communication',
        'Case Study Analysis',
        'Group Discussions',
        'Aptitude Tests',
        'Industry Insights',
        'Leadership Skills'
    ];
    const mentors = [];

    for (let i = 0; i < 10; i++) {
        const name = names[i];
        const availability = JSON.stringify({
            monday: ['10:00-11:00', '14:00-15:00'],
            tuesday: ['11:00-12:00', '16:00-17:00'],
            wednesday: ['09:00-10:00', '13:00-14:00'],
            thursday: ['15:00-16:00'],
            friday: ['10:00-11:00', '12:00-13:00']
        });
        const area_of_expertise = areasOfExpertise[i % areasOfExpertise.length];
        const is_premium = i % 2; // Alternates between 0 and 1 for premium status

        mentors.push({ name, availability, area_of_expertise, is_premium });
    }

    return mentors;
}

// Insert dummy mentor data into the database
function insertMentorData() {
    const mentors = generateMentorData();

    mentors.forEach((mentor) => {
        db.run(
            `INSERT INTO mentors (name, availability, areas_of_expertise, is_premium) VALUES (?, ?, ?, ?)`,
            [mentor.name, mentor.availability, mentor.area_of_expertise, mentor.is_premium],
            function (err) {
                if (err) {
                    console.error('Error inserting mentor data', err.message);
                } else {
                    console.log(`Inserted mentor with ID: ${this.lastID}`);
                }
            }
        );
    });
}

// Run the insertion
insertMentorData();
