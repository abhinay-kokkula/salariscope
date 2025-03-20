const express = require('express');
const path = require('path');
const quizData = require('./quizData');
const app = express();

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, '../public')));

// API route
app.get('/api/quiz/:language', (req, res) => {
    const { language } = req.params;
    const questions = quizData[language] || [];
    res.json(questions);
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));