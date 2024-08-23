const db = require('../config/dbconfig');
const router = require('express').Router()

router.get('/mentors', (req, res) => {
    db.all('SELECT * FROM mentors', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Insert booking into the database
router.post('/bookings', (req, res) => {
    const { student_name, mentor_id, duration, is_premium=0, cost } = req.body;
    
    db.run(
        `INSERT INTO bookings (student_name, mentor_id, duration, is_premium, cost) VALUES (?, ?, ?, ?, ?)`,
        [student_name, mentor_id, duration, is_premium, cost],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Booking created successfully!', id: this.lastID });
            }
        }
    );
});


router.get('/bookings', (req, res) => {
    const query = `select mentors.name,bookings.student_name,bookings.duration,bookings.cost from bookings inner join mentors on mentors.id = bookings.mentor_id `
    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

router.get('/mentors/:id/availability', (req, res) => {
    const mentorId = req.params.id;
    db.get(`SELECT * FROM mentors WHERE id = ?`, [mentorId], (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(data);
        }
    });
});


module.exports = router