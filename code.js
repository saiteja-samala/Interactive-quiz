// Quiz Questions
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Madrid"],
      answer: 0
    },
    {
      question: "Which is the largest country in the world?",
      options: ["Russia", "Canada", "China", "United States"],
      answer: 0
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro", "Pound"],
      answer: 0
    }
  ];

  const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');

let currentQuestionIndex = 0;
let userAnswers = [];

function showQuestion() {
  const question = quizData[currentQuestionIndex];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = '';
  for (let i = 0; i < question.options.length; i++) {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.value = i;
    input.addEventListener('change', handleOptionChange);
    label.appendChild(input);
    label.appendChild(document.createTextNode(question.options[i]));
    li.appendChild(label);
    optionsElement.appendChild(li);
  }
}

function handleOptionChange(event) {
  const selectedOption = parseInt(event.target.value);
  userAnswers[currentQuestionIndex] = selectedOption;
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    submitButton.disabled = false;
  }
}

function calculateScore() {
  let score = 0;
  for (let i = 0; i < quizData.length; i++) {
    if (userAnswers[i] === quizData[i].answer) {
      score++;
    }
  }
  return score;
}

function submitQuiz() {
  submitButton.disabled = true;
  const score = calculateScore();
  alert('Your score is: ' + score);
}

submitButton.addEventListener('click', submitQuiz);

// Initialize the quiz
showQuestion();