const quizData = [
  {
    question: 'What is the baby of a moth known as?',
    choices: ['baby', 'infant', 'kit', 'larva'],
    correctAnswer: 'c',
  },
  {
    question: 'What is the adult of a kid called?',
    choices: ['calf', 'doe', 'goat', 'chick'],
    correctAnswer: 'b',
  },
  {
    question: 'What is the young of buffalo called?',
    choices: ['calf', 'baby', 'pup', 'cow'],
    correctAnswer: 'a',
  },
  {
    question: 'What is a baby alligator called?',
    choices: ['baby', 'gator', 'hatchling', 'calf'],
    correctAnswer: 'b',
  },
  {
    question: 'What is a baby goose called?',
    choices: ['gooser', 'gosling', 'gup', 'pup'],
    correctAnswer: 'b',
  },
];

const quiz = document.querySelector('.quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let score = 0;
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.choices[0];
  b_text.innerText = currentQuizData.choices[1];
  c_text.innerText = currentQuizData.choices[2];
  d_text.innerText = currentQuizData.choices[3];
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

getSelected();

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correctAnswer) {
      score++;
    }
    currentQuiz++;
  }
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered ${score} questions correct! </h2>
    <button onclick="location.reload()">Reload</button>
    
    `;
  }
});
