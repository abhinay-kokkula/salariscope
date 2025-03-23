let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let selectedLanguage = '';

function showLanguageSelection() {
    console.log('Get Started clicked'); // Debug log
    try {
        const hero = document.querySelector('.hero');
        const features = document.querySelector('.features');
        const instructions = document.querySelector('.instructions');
        const about = document.querySelector('.about');
        const developed = document.querySelector('.developed');
        const quizContainer = document.querySelector('.quiz-container');
        const languageSelection = document.getElementById('language-selection');

        if (!hero || !features || !instructions || !about || !developed || !quizContainer || !languageSelection) {
            throw new Error('One or more elements not found');
        }

        // Hide all non-quiz sections
        hero.style.display = 'none';
        features.style.display = 'none';
        instructions.style.display = 'none';
        about.style.display = 'none';
        developed.style.display = 'none';

        // Show quiz container and language selection
        quizContainer.style.display = 'block';
        languageSelection.style.display = 'block';
        document.getElementById('quiz-content').style.display = 'none';

        console.log('Language selection shown'); // Debug log
    } catch (error) {
        console.error('Error in showLanguageSelection:', error);
        alert('An error occurred while starting the quiz. Check the console for details.');
    }
}

async function startQuiz(language) {
    selectedLanguage = language;
    const languageSelection = document.getElementById('language-selection');
    const quizContent = document.getElementById('quiz-content');

    languageSelection.style.display = 'none';
    quizContent.style.display = 'block';
    document.getElementById('quiz-title').textContent = `${language.toUpperCase()} Quiz`;

    try {
        const response = await fetch(`/api/quiz/${language}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        currentQuiz = await response.json();
        if (!currentQuiz.length) {
            throw new Error('No questions found for this language');
        }
        currentQuestion = 0;
        score = 0;
        showQuestion();
    } catch (error) {
        console.error('Error details:', error);
        alert(`Failed to load quiz: ${error.message}. Please check if the server is running and try again.`);
        document.getElementById('quiz-content').innerHTML = `
                    <h2>Error</h2>
                    <p>${error.message}</p>
                    <button onclick="location.reload()" class="lang-btn">Return to Home</button>
                `;
    }
}

function showQuestion() {
    if (currentQuestion >= currentQuiz.length) {
        showResults();
        return;
    }

    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');

    // Calculate the current question number (1-based index) and total questions
    const questionNumber = currentQuestion + 1;
    const totalQuestions = currentQuiz.length;

    // Update the question text with numbering and progress
    questionEl.innerHTML = `
        <span>Question ${questionNumber}: </span> 
        ${currentQuiz[currentQuestion].question} 
        <span style="float: right;">${questionNumber}/${totalQuestions}</span>
    `;

    optionsEl.innerHTML = '';

    currentQuiz[currentQuestion].options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.onclick = () => {
            checkAnswer(index);
            div.style.backgroundColor = ' #ffcc5c';
            optionsEl.querySelectorAll('.option').forEach(opt => {
                opt.style.pointerEvents = 'none';
            });
            nextBtn.disabled = false;
        };
        optionsEl.appendChild(div);
    });

    nextBtn.disabled = true;
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === currentQuiz[currentQuestion].correctIndex) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

function showResults() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
                <h2>Quiz Results</h2>
                <div id="result"></div>
                <button onclick="location.reload()" class="lang-btn">Try Again</button>
            `;

    const percentage = (score / currentQuiz.length) * 100;
    const salary = calculateSalary(percentage);

    document.getElementById('result').innerHTML = `
                <p>Language: ${selectedLanguage.toUpperCase()}</p>
                <p>Score: ${score}/${currentQuiz.length} (${percentage.toFixed(1)}%)</p>
                <p>Estimated Annual Salary: ₹${salary.toLocaleString()}</p>
                <p>Performance Level: ${getPerformanceLevel(percentage)}</p>
            `;
}

function calculateSalary(percentage) {
    const salaryRanges = {
        java: { base: 10000, maxBonus: 80000 },
        python: { base: 15000, maxBonus: 85000 },
        cpp: { base: 12000, maxBonus: 82000 },
        html: { base: 8000, maxBonus: 60000 },
        css: { base: 8000, maxBonus: 60000 },
        c: { base: 10000, maxBonus: 75000 },
        javascript: { base: 12000, maxBonus: 78000 },
        sql: { base: 10000, maxBonus: 70000 }
    };
    if (percentage > 0) {
        const { base, maxBonus } = salaryRanges[selectedLanguage] || { base: 5000, maxBonus: 50000 };
        return Math.round(base + (maxBonus * (percentage / 100)));
    } else {
        return 0;
    }
}

function getPerformanceLevel(percentage) {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 60) return 'Intermediate';
    if (percentage >= 40) return 'Beginner';
    if (percentage >= 20) return 'Average';
    return 'Below Average';
}