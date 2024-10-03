const questionDiv = document.getElementById('question');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');

async function fetchTriviaQuestions() {
    try {
        const response = await fetch('https://the-trivia-api.com/v2/questions');
        const data = await response.json();
        console.log("Data ", data);
        displayQuestion(data[0]); 
    } catch (error) {
        console.error('Error fetching the trivia question:', error);
        questionDiv.textContent = 'Failed to fetch a question. Please try again later.';
    }
}

function displayQuestion(question) {
    questionDiv.innerHTML = `
        <p>${question.question.text}</p>
        <ul>
            ${question.incorrectAnswers.map(answer => `<li>${answer}</li>`).join('')}
            <li>${question.correctAnswer}</li>
        </ul>
    `;
}


nextQuestionBtn.addEventListener('click', fetchTriviaQuestions);

fetchTriviaQuestions();
