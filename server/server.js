const express = require('express');
const app = express();
const quizData = require('./quizData');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/quiz/:language', (req, res) => {
    console.log(`Request received for language: ${req.params.language}`);
    const language = req.params.language.toLowerCase();
    if (!quizData[language]) {
        return res.status(404).json({ error: `Quiz data for ${language} not found` });
    }
    res.json(quizData[language]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});