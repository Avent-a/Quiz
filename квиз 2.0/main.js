const questions = [
	{
	  imagePath: "image1.png",
	  correctAnswer: "JavaScript",
	  userAnswer: ""
	},
	{
	  imagePath: "image2.png",
	  correctAnswer: "Cascading Style Sheets",
	  userAnswer: ""
	},
	{
	  imagePath: "image3.png",
	  correctAnswer: "Hypertext Markup Language",
	  userAnswer: ""
	},
	{
	  imagePath: "image4.png",
	  correctAnswer: "1995",
	  userAnswer: ""
	},
  ];
  
  const headerContainer = document.querySelector("#header");
  const answerContainer = document.querySelector("#answer");
  const submitButton = document.querySelector("#submit");
  
  let score = 0;
  let questionIndex = 0;
  
  clearPage();
  showQuestion();
  submitButton.addEventListener("click", checkAnswer);
  
  function clearPage() {
	headerContainer.innerHTML = "";
	answerContainer.innerHTML = "";
  }
  
  function showQuestion() {
	const currentQuestion = questions[questionIndex];
	headerContainer.innerHTML = `<img src="${currentQuestion.imagePath}" alt="Question Image" class="question-image" />`;
  
	const answerTemplate = '<label><input type="text" class="answer" /></label>';
	answerContainer.innerHTML = answerTemplate;
  }
  
  function checkAnswer() {
	const answerInput = answerContainer.querySelector('input[type="text"]');
	const userAnswer = answerInput.value.trim();
  
	questions[questionIndex].userAnswer = userAnswer;
  
	const correctAnswer = questions[questionIndex].correctAnswer;
  
	if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
	  score++;
	}
  
	// Показываем правильный ответ
	const answerMessage = `Правильный ответ: ${correctAnswer}`;
	const answerMessageElement = document.createElement("p");
	answerMessageElement.classList.add("answer-message");
	answerMessageElement.innerText = answerMessage;
	answerContainer.appendChild(answerMessageElement);
  
	// Показываем ответ пользователя
	const userAnswerMessage = `Ваш ответ: ${userAnswer}`;
	const userAnswerMessageElement = document.createElement("p");
	userAnswerMessageElement.classList.add("user-answer-message");
	userAnswerMessageElement.innerText = userAnswerMessage;
	answerContainer.appendChild(userAnswerMessageElement);
  
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
  
	const result = `${score} из ${questions.length}`;
  
	const finalMessage = resultsTemplate
	  .replace("%title%", title)
	  .replace("%message%", message)
	  .replace("%result%", result);
  
	// Показываем ответы пользователя и правильные ответы
	let answersHTML = "<h3>Ваши ответы:</h3>";
	questions.forEach((question, index) => {
	  const userAnswer = question.userAnswer ? question.userAnswer : "Нет ответа";
	  answersHTML += `<p>${index + 1}. <img src="${question.imagePath}" alt="Question Image" class="question-image" /> - Ваш ответ: ${userAnswer}</p>`;
	  answersHTML += `<p>   Правильный ответ: ${question.correctAnswer}</p>`;
	});
  
	// Добавляем стили и классы к ответам
	const answersContainer = document.createElement("div");
	answersContainer.classList.add("answers-container");
	answersContainer.innerHTML = answersHTML;
  
	headerContainer.innerHTML = finalMessage;
	headerContainer.appendChild(answersContainer);
  
	submitButton.blur();
	submitButton.innerText = "Начать заново";
	submitButton.addEventListener("click", () => {
	  location.reload();
	});
  }