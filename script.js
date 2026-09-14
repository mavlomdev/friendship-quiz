const questions = [
    {
        question: "Какое моё любимое блюдо?",
        options: ["Шаурма", "Плов", "Бургер", "Пицца"],
        correct: 1
    },
    {
        question: "Какие игры я больше всего люблю?",
        options: ["КС, Метро и Майнкрафт", "Дота и Роблокс", "Танки и ГТА", "Только мобилки"],
        correct: 0
    },
    {
        question: "Что я обожаю делать по ночам?",
        options: ["Спать до утра", "Гулять на улице", "Смотреть сериалы", "Убираться"],
        correct: 1
    },
    {
        question: "Какое моё любимое время года?",
        options: ["Лето", "Весна", "Зима", "Осень"],
        correct: 2
    },
    {
        question: "Какой процессор я считаю лучшим (фанат бренда)?",
        options: ["Intel Core", "Ryzen", "Xeon", "Apple M"],
        correct: 1
    },
    {
        question: "Есть ли у меня девушка в данное время?",
        options: ["Да, есть", "Влюблена в другую", "Никто не нравится", "Секрет"],
        correct: 2
    },
    {
        question: "С кем я больше всего люблю проводить время?",
        options: ["Сидеть одному", "С другом", "С родственниками", "В интернете с чужими людьми"],
        correct: 1
    },
    {
        question: "Как зовут моего лучшего друга?",
        options: ["Тимур", "Айдер", "Сергей", "Амир"],
        correct: 1
    },
    {
        question: "Как я учусь в школе?",
        options: ["На одни пятерки", "На 4", "На тройки", "Прогуливаю"],
        correct: 1
    },
    {
        question: "В каком городе я живу?",
        options: ["Ташкент", "Самарканд", "Янгиюль", "Бухара"],
        correct: 2
    },
    {
        question: "Какой у меня рост?",
        options: ["165 см", "173 см", "180 см", "168 см"],
        correct: 1
    },
    {
        question: "Люблю ли я готовить?",
        options: ["Вообще нет", "Только чай могу", "Да, очень люблю", "Умею только яичницу"],
        correct: 2
    },
    {
        question: "Какая у меня видеокарта?",
        options: ["RTX 3060", "RTX 3070", "GTX 1650", "RX 580"],
        correct: 1
    },
    {
        question: "Какой мой любимый фильм?",
        options: ["Форсаж", "1+1", "Интерстеллар", "Мстители"],
        correct: 1
    },
    {
        question: "Какое аниме мне нравится?",
        options: ["Наруто", "Клинок, рассекающий демонов", "Фарфоровая кукла влюбилась", "Магическая битва"],
        correct: 2
    },
    {
        question: "Кто мой любимый персонаж из аниме «Фарфоровая кукла влюбилась»?",
        options: ["Марин Китагава", "Садзюна Инуи", "Сидзуку Хана", "Ридзу Кюн"],
        correct: 0
    },
    {
        question: "Кто из супергероев Марвел мне нравится больше?",
        options: ["Человек-паук", "Железный человек", "Тор", "Капитан Америка"],
        correct: 1
    },
    {
        question: "Какой Человек-паук из фильмов мне нравится больше всего?",
        options: ["Тоби Магуайр", "Эндрю Гарфилд", "Том Холланд", "Все одинаково"],
        correct: 0
    },
    {
        question: "Что я люблю смотреть в свободное время для расслабления?",
        options: ["Твич стримы", "ТикТок (ТТ)", "Длинные обзоры на ютубе", "ТВ-шоу"],
        correct: 1
    },
    {
        question: "Какую настольную или интеллектуальную игру я люблю?",
        options: ["Шашки", "Шахматы", "Монополия", "Нарды"],
        correct: 1
    },
    {
        question: "Если мы идем гулять ночью, то что скорее всего делаем?",
        options: ["Сидим дома в тепле", "Просто ходим и болтаем", "Бегаем на стадионе", "Ищем приключения"],
        correct: 1
    },
    {
        question: "Какая из этих игр точно входит в мой топ?",
        options: ["Metro (серия)", "The Witcher 3", "Stalker", "Far Cry"],
        correct: 0
    },
    {
        question: "Что я выберу вместо душного дня?",
        options: ["Жаркий пляж", "Прохладную зиму", "Дождливую осень", "Душную комнату"],
        correct: 1
    },
    {
        question: "Какая у меня главная ассоциация с идеальным вечером?",
        options: ["Игры с кентами, музыка и ночь", "Клуб и тусовка", "Учеба и книги", "Сон в 9 вечера"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = "";

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const usernameInput = document.getElementById("username");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCount = document.getElementById("question-count");
const progressBar = document.getElementById("progress");
const resultName = document.getElementById("result-name");
const scorePercentage = document.getElementById("score-percentage");
const resultMessage = document.getElementById("result-message");
const resultEmoji = document.getElementById("result-emoji");

startBtn.addEventListener("click", () => {
    userName = usernameInput.value.trim();
    if (userName === "") {
        alert("Пожалуйста, введи своё имя!");
        return;
    }
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    loadQuestion();
});

function loadQuestion() {
    let currentQ = questions[currentQuestionIndex];
    questionText.textContent = currentQ.question;
    questionCount.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;
    
    let progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    optionsContainer.innerHTML = "";
    currentQ.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex) {
    let currentQ = questions[currentQuestionIndex];
    if (selectedIndex === currentQ.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    let percentage = Math.round((score / questions.length) * 100);
    
    resultName.textContent = `${userName}, твой результат:`;
    scorePercentage.textContent = `${percentage}%`;

    if (percentage < 60) {
        resultEmoji.textContent = "❌";
        resultMessage.textContent = "Ты меня совсем не знаешь! Надо срочно исправляться и чаще общаться 😅.";
    } else if (percentage < 100) {
        resultEmoji.textContent = "😎";
        resultMessage.textContent = "Неплохо! Ты знаешь меня довольно хорошо, но до идеала еще чуть-чуть не хватило.";
    } else {
        resultEmoji.textContent = "❤️🔥";
        resultMessage.textContent = "Вау, ровно 100%! Ты знаешь обо мне абсолютно всё, просто любимый человек / лучший друг!";
    }
}