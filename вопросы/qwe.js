const questions = [
    {
        question: 'разгодай ребус',
        image: 'image1.png',
        userAnswer: 'снеговик'
    },
    {
        question: 'Заказчик за 30 часов до начала отгрузки передал заявку по установленной форме. Перевозчик отказался выполнять заявку. Правомерны ли действия перевозчика?',
        userAnswer: 'нет ответа'
    },
    {
        question: "Мужчина зашел в магазин и спросил цену на товар. Продавец ему ответил:\n один стоит 1$\n восемь 1$\n тринадцать 2$\n сто шестьдесят восемь 3$\n Что покупал мужчина?",
        answers: ["Грабли", "Лыжи", "Сапоги", "Номерки на двери"],
        correct: 4,
    },
    {
        question: '',
        image: 'image2.png',
        userAnswer: 'утро'
    },
    {
        question: 'Перевозчик отказался принять груз к перевозке, так как груз, заявленный в заявке, в ненадлежащей упаковке. Правомерны ли действия перевозчика? Ответ обоснуйте.',
        userAnswer: 'нет ответа'
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
        question: '',
        image: 'image3.png',
        userAnswer: 'день рождение'
    },
    {
        question: 'Грузополучатель при приемке груза обнаружил, что маркировка имеется только на трех грузовых местах. Груз доставляется одному грузополучателю, партия однородна. Грузополучатель отказался подписывать документы. Прав ли он? Ответ обоснуйте.',
        userAnswer: 'нет ответа'
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
        question: '',
        image: 'image4.png',
        userAnswer: 'логистика'
    },
    {
        question: `Грузополучатель отказался принимать груз, мотивируя отказ
        тем, что этот груз он не заказывал. Как в этой ситуации необходимо поступить перевозчику? 
        Что должен сделать грузополучатель? Ответ обоснуйте.`,
        userAnswer: 'нет ответа'
    },
    {
        question: "У вас есть две одинаковые по длине нити, и известно, что при зажигании одного конца любой из них горение будет длиться ровно один час. Как с помощью всего двух таких ниток и спичек отмерить 45 минут, не прикасаясь при этом руками к ниткам?",
        answers: [
            "Зажгите оба конца первой нити и один конец второй. Когда полностью сгорит первая нить, это будет сигнализировать о прошествии 30 минут. Сразу же подпалите второй конец горящей нитки таким образом, чтобы огонь шел навстречу друг другу. В результате, когда она полностью сгорит, пройдет 45 минут.",
            "Зажгите оба конца первой нити и один конец второй. Когда полностью сгорит первая нить, это будет сигнализировать о прошествии 30 минут. Сразу же подпалите второй конец горящей нитки таким образом, чтобы огонь шел навстречу друг другу. В результате, когда она полностью сгорит, пройдет 12 минут.",
            "Зажгите оба конца первой нити и один конец второй. Когда полностью сгорит первая нить, это будет сигнализировать о прошествии 25 минут. Сразу же подпалите второй конец горящей нитки таким образом, чтобы огонь шел навстречу друг другу. В результате, когда она полностью сгорит, пройдет 45 минут.",
            "Ни как"
        ],
        correct: 1,
    },
    {
        question: '',
        image: 'image5.png',
        userAnswer: 'приёмка'
    },
    {
        question: `Автомобильный перевозчик отказался принять груз к
        автомобильной перевозке, т.к. масса предъявленной партии груза превышает
        грузоподъемность грузового транспортного средства. Правомерны ли действия
        перевозчика? Ответ обоснуйте.`,
        userAnswer: 'нет ответа'
    },
    {
        question: '',
        image: 'image6.png',
        userAnswer: 'маркировка'
    },
    {
        question: `. Автомобильный перевозчик осуществил выполнение
        автомобильной перевозки грузов без оформления товарно-транспортной
        накладной. Правомерны ли действия перевозчика? Ответ обоснуйте. `,
        userAnswer: 'нет ответа'
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
    const submitButton = document.querySelector("#submit");
    submitButton.disabled = false;
    const headerTemplate = '<h2 class="title">%title%</h2>';
    const title = headerTemplate.replace(
        "%title%",
        questions[questionIndex]["question"]
    );

    headerContainer.innerHTML = title;

    if ("image" in questions[questionIndex]) {
        const imageTemplate = `
            <img src="${questions[questionIndex]['image']}" alt="Question Image" style="max-width: 100%;">
        `;
        listContainer.innerHTML += imageTemplate;
    }

    if ("answers" in questions[questionIndex]) {
        let answerNumber = 1;
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
    } else {
        const queryTemplate = `
            <li>
                <label>
                    <input type="text" class="answer" placeholder="Введите ответ" />
                </label>
            </li>
        `;
        listContainer.innerHTML += queryTemplate;
    }
}


function showCorrectAnswer() {
    if ('userAnswer' in questions[questionIndex] && questions[questionIndex]['userAnswerCorrect'] === false) {
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
    const submitButton = document.querySelector("#submit");
    submitButton.disabled = true;

    const answerInput = listContainer.querySelector('input[type="text"]');
    const radioInputs = listContainer.querySelectorAll('input[type="radio"]:checked');

    let userAnswer;

    if (answerInput) {
        userAnswer = answerInput.value.trim().toLowerCase();
    } else if (radioInputs.length > 0) {
        userAnswer = radioInputs[0].value.toLowerCase();
    }

    if (userAnswer === null || userAnswer === "") {
        alert("Пожалуйста, выберите или введите ответ перед тем, как нажать на кнопку.");
        submitButton.disabled = false;
        return;
    }

    if ('userAnswer' in questions[questionIndex]) {
        questions[questionIndex]["userAnswerCorrect"] = userAnswer.toLowerCase() === questions[questionIndex].userAnswer.toLowerCase();
    } else if ('correct' in questions[questionIndex] && typeof questions[questionIndex]['correct'] === 'number') {
        const correctAnswerIndex = questions[questionIndex]['correct'] - 1;
        const correctAnswer = questions[questionIndex]['answers'][correctAnswerIndex].toLowerCase();
        questions[questionIndex]["userAnswerCorrect"] = userAnswer === correctAnswer;
    } else {
        questions[questionIndex]["userAnswerCorrect"] = false;
    }

    console.log("userAnswer:", userAnswer);
    console.log("userAnswerCorrect:", questions[questionIndex]["userAnswerCorrect"]);
    if(questions[questionIndex]["userAnswerCorrect"]){
        const answerMessage = `Ответ верный!`;
        const answerMessageElement = document.createElement('p');
        answerMessageElement.classList.add('answer-message');
        answerMessageElement.innerText = answerMessage;
        correctAnswerContainer.appendChild(answerMessageElement);
        
    }
    else{
        
        const correctAnswerIndex = questions[questionIndex]['correct'] - 1;
        const correctAnswer = questions[questionIndex]['userAnswer'];
        let answerMessage = `Ответ не верный!`;
        console.log(answerInput)
        if (answerInput!==null) {
            answerMessage += `\nПравильный ответ: ${correctAnswer}`;
        }
        const answerMessageElement = document.createElement('p');
        answerMessageElement.classList.add('answer-message');
        answerMessageElement.innerText = answerMessage;
        correctAnswerContainer.appendChild(answerMessageElement);
    }
    showCorrectAnswer();

    setTimeout(() => {
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
    }, 2000); 
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
        title = "Наверное надо еще поучиться";
        message = "Почитай литературу на сайте";
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

submitButton.addEventListener("click", checkAnswer);