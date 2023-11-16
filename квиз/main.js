const questions = [
    {
        question: 'Какой изображен инструмент?',
        image: 'image1.png',
        userAnswer: 'молоток'
    },
    {
        question: "Мужчина зашел в магазин и спросил цену на товар. Продавец ему ответил:\n один стоит 1$\n восемь 1$\n тринадцать 2$\n сто шестьдесят восемь 3$\n Что покупал мужчина?",
        answers: ["Грабли", "Лыжи", "Сапоги", "Номерки на двери"],
        correct: 4,
    },
    {
        question: "У строителя есть 8 кирпичей, 7 из которых имеют одинаковый вес, а один - тяжелее. Как строителю выявить бракованный кирпич с помощью весов всего за два взвешивания",
        answers: [
            "Никак",
            "Взвесить все сразу",
            "Разделить 8 кирпичей на три стопки по 3, 3 и 2 штуки. Взвесить 2 стопки, в которых по 3 кирпича. Если они уравновесились, значит взвесить стопку из двух кирпичей и найти бракованный. Если не уравновесились, то взять 3 кирпича из стопки, которая перевесила и разделить на 3 штуки.",
            "Разделить 8 кирпичей на три стопки по 2, 2 и 4 штуки. Взвесить 2 стопки, в которых по 2 кирпича. Если они уравновесились, значит взвесить стопку из четырех кирпичей и найти бракованный. Если не уравновесились, то взять 2 кирпича из стопки, которая перевесила и разделить на 2 штуки.",
        ],
        correct: 3,
    },
    {
        question: "Парень спросил у девушки: «Сколько тебе лет?», на что она загадочно улыбнулась и ответила: «Позавчера мне было 22, а в следующем году будет 25». Попробуйте догадаться, когда у девушки День рождения и какого числа происходил разговор между парой?",
        answers: [
            "Разговаривали - 12 марта. День рождения девушки - 28 января",
            "Разговаривали - 2 декабря. День рождения девушки - 1 декабря",
            "Разговаривали - 1 января. День рождения девушки - 31 декабря",
            "Разговаривали - 5 февраля. День рождения девушки - 21 мая",
        ],
        correct: 3,
    },
    {
        question: "Если одиннадцать плюс два равняются одному, чему равны девять плюс пять?",
        answers: [
            "3",
            "2",
            "1",
            "14"
        ],
        correct: 2,
    },
    {
        question: "Запишите восемь восьмерок таким образом, чтобы в сумме получилась тысяча.",
        answers: [
            "888 + 88 + 8 + 8 + 8",
            "888 + 88 + 8 + 88",
            "8888 + 88 + 8 + 8",
            "888 + 88 + 888"
        ],
        correct: 1,
    },
    {
        question: "У вас есть две одинаковые по длине нити, и известно, что при зажигании одного конца любой из них горение будет длиться ровно один час. Как с помощью всего двух таких ниток и спичек отмерить 45 минут, не прикасаясь при этом руками к ниткам?",
        answers: [
            "Зажгите оба конца первой нити и один конец второй. Когда полностью сгорит первая нить, это будет сигнализировать о прошествии 30 минут. Сразу же подпалите второй конец горящей нитки таким образом, чтобы огонь шел навстречу друг другу. В результате, когда она полностью сгорит, пройдет 45 минут.",
            "Зажгите оба конца первой нити и один конец второй. Когда полностью сгорит первая нить, это будет сигнализировать о прошествии 30 минут. Сразу же подпалите второй конец горящей нитки таким образом, чтобы огонь шел навстречу друг другу. В результате, когда она полностью сгорит, пройдет 12 минут.",
            "Зажгите оба конца первой нити и один конец второй. Когда полностью сгорит первая нить, это будет сигнализировать о прошествии 30 минут. Сразу же подпалите второй конец горящей нитки таким образом, чтобы огонь шел навстречу друг другу. В результате, когда она полностью сгорит, пройдет 45 минут.",
            "Ни как"
        ],
        correct: 3,
    },
];

const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const correctAnswerContainer = document.querySelector("#correctAnswer");
const submitButton = document.querySelector("#submit");

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitButton.addEventListener("click", checkAnswer);

function clearPage() {
    headerContainer.innerHTML = "";
    listContainer.innerHTML = "";
    correctAnswerContainer.innerHTML = "";
}

function showQuestion() {
    const headerTemplate = '<h2 class="title">%title%</h2>';
    const title = headerTemplate.replace(
        "%title%",
        questions[questionIndex]["question"]
    );

    headerContainer.innerHTML = title;

    let answerNumber = 1;
    if (questionIndex === 0) {
        const queryTemplate = `
	  <li>
		<label>
		  <input type="text" class="answer" placeholder="Введите ответ" />
		</label>
	  </li>
	`;

        listContainer.innerHTML += queryTemplate;
    } else {
        for (const answerText of questions[questionIndex]["answers"]) {
            const queryTemplate = `
		<li>
		  <label>
			<input type="radio" class="answer" name="answer" value="${answerText}">
			${answerText}
		  </label>
		</li>
	  `;

            listContainer.innerHTML += queryTemplate;
        }
    }
}

function showCorrectAnswer() {
    if ('userAnswerCorrect' in questions[questionIndex] && questions[questionIndex]['userAnswerCorrect'] === false) {
        const answerMessage = 'Неверный ответ';
        const answerMessageElement = document.createElement('p');
        answerMessageElement.classList.add('answer-message');
        answerMessageElement.innerText = answerMessage;
        correctAnswerContainer.appendChild(answerMessageElement);
        return;
    }

    if ('correct' in questions[questionIndex] && typeof questions[questionIndex]['correct'] === 'number') {
        const correctAnswerIndex = questions[questionIndex]['correct'] - 1;
        const correctAnswer = questions[questionIndex]['answers'][correctAnswerIndex];
        const answerMessage = `Правильный ответ: ${correctAnswer}`;
        const answerMessageElement = document.createElement('p');
        answerMessageElement.classList.add('answer-message');
        answerMessageElement.innerText = answerMessage;
        correctAnswerContainer.appendChild(answerMessageElement);
    }
}

function checkAnswer() {
    const answerInput = listContainer.querySelector('input[type="text"]');
    const userAnswer = answerInput ? answerInput.value.trim().toLowerCase() : null;

    if (userAnswer === null || userAnswer === "") {
        submitButton.blur();
        return;
    }

    if ('userAnswer' in questions[questionIndex] && questions[questionIndex].userAnswer.toLowerCase() === userAnswer) {
        questions[questionIndex]["userAnswerCorrect"] = true;
    } else {
        questions[questionIndex]["userAnswerCorrect"] = false;
    }

    showCorrectAnswer();

    if (questions[questionIndex]["userAnswerCorrect"]) {
        score++;
    }

    if (questionIndex !== questions.length - 1) {
        questionIndex++;
        clearPage();
        showQuestion();
    } else {
        clearPage();
        showResults();
    }
}

function showResults() {
    const resultsTemplate = `<h2 class="title">%title%</h2>
    <h3 class="summary">%message%</h3>
    <p class="result">%result%</p>`;

    let title, message;

    if (score === questions.length) {
        title = "Поздравляем";
        message = "Вы ответили верно на все вопросы";
    } else if (score * 100 / questions.length >= 50) {
        title = "Неплохой результат";
        message = "Вы дали более половины правильных ответов";
    } else {
        title = "Ты глупый";
        message = "Закрой сайт";
    }

    let result = `${score} из ${questions.length}`;

    let finalMessage = resultsTemplate
        .replace("%title%", title)
        .replace("%message%", message)
        .replace("%result%", result);

    headerContainer.innerHTML = finalMessage;

    submitButton.blur();
    submitButton.innerText = "Начать заново";
    submitButton.addEventListener("click", resetQuiz);
}

function resetQuiz() {
    score = 0;
    questionIndex = 0;
    clearPage();
    showQuestion();
}
