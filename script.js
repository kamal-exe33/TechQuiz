const questions = [
    {
        category: "HTML",
        question: "Need to make a word clickable and open another page. Which tag helps?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<href>", correct: false },
            { text: "<click>", correct: false }
        ]
    },
    {
        category: "HTML",
        question: "What does the alt attribute do for an image?",
        answers: [
            { text: "Adds a border", correct: false },
            { text: "Changes its size", correct: false },
            { text: "Provides alternative text", correct: true },
            { text: "Opens the image in a new tab", correct: false }
        ]
    },
    {
        category: "HTML",
        question: "Which declaration tells the browser that the document uses HTML5?",
        answers: [
            { text: "<!DOCTYPE html>", correct: true },
            { text: "<!DOCTYPE html5>", correct: false },
            { text: "<html5>", correct: false },
            { text: "<doctype>", correct: false }
        ]
    },
    {
        category: "HTML",
        question: "You need a numbered list of three items. Which element should you use?",
        answers: [
            { text: "<ul>", correct: false },
            { text: "<li>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<list>", correct: false }
        ]
    },
    {
        category: "HTML",
        question: "In an image tag, which attribute contains the image file path?",
        answers: [
            { text: "href", correct: false },
            { text: "src", correct: true },
            { text: "alt", correct: false },
            { text: "target", correct: false }
        ]
    },
    {
        category: "HTML",
        question: "What is the largest standard HTML heading?",
        answers: [
            { text: "<h6>", correct: false },
            { text: "<head>", correct: false },
            { text: "<heading>", correct: false },
            { text: "<h1>", correct: true }
        ]
    },
    {
        category: "HTML",
        question: "Which semantic tag is commonly used for website navigation links?",
        answers: [
            { text: "<nav>", correct: true },
            { text: "<aside>", correct: false },
            { text: "<footer>", correct: false },
            { text: "<strong>", correct: false }
        ]
    },
    {
        category: "HTML",
        question: "How can a link be configured to open in a new tab?",
        answers: [
            { text: 'target="_self"', correct: false },
            { text: 'open="new"', correct: false },
            { text: 'target="_blank"', correct: true },
            { text: 'tab="new"', correct: false }
        ]
    },
    {
        category: "HTML",
        question: "Which HTML element inserts a line break?",
        answers: [
            { text: "<break>", correct: false },
            { text: "<br>", correct: true },
            { text: "<lb>", correct: false },
            { text: "<newline>", correct: false }
        ]
    },
    {
        category: "HTML",
        question: "Inside a form, what type creates a basic text input?",
        answers: [
            { text: 'type="paragraph"', correct: false },
            { text: 'type="word"', correct: false },
            { text: 'type="text"', correct: true },
            { text: 'type="write"', correct: false }
        ]
    },

    {
        category: "CSS",
        question: "Which property changes the size of text?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-style", correct: false },
            { text: "font-weight", correct: false },
            { text: "text-height", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "You want a blue background. Which property should you change?",
        answers: [
            { text: "text-color", correct: false },
            { text: "background-color", correct: true },
            { text: "font-color", correct: false },
            { text: "border-style", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "How do you select every element with the class name card?",
        answers: [
            { text: "#card", correct: false },
            { text: "card", correct: false },
            { text: ".card", correct: true },
            { text: "*card", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "In CSS, what does #header select?",
        answers: [
            { text: "An element with class header", correct: false },
            { text: "An element with id header", correct: true },
            { text: "Every heading element", correct: false },
            { text: "An element named header-tag", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "What is the main purpose of Flexbox?",
        answers: [
            { text: "To store website data", correct: false },
            { text: "To write JavaScript functions", correct: false },
            { text: "To arrange items in a layout", correct: true },
            { text: "To connect to a database", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "Which property adds space outside an element's border?",
        answers: [
            { text: "padding", correct: false },
            { text: "margin", correct: true },
            { text: "outline", correct: false },
            { text: "content", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "You want more space between text and its container's border. Use:",
        answers: [
            { text: "margin", correct: false },
            { text: "gap", correct: false },
            { text: "padding", correct: true },
            { text: "position", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "Which property rounds the corners of a card?",
        answers: [
            { text: "border-radius", correct: true },
            { text: "corner-style", correct: false },
            { text: "border-round", correct: false },
            { text: "radius-border", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "How is a comment written in CSS?",
        answers: [
            { text: "// comment", correct: false },
            { text: "<!-- comment -->", correct: false },
            { text: "/* comment */", correct: true },
            { text: "** comment **", correct: false }
        ]
    },
    {
        category: "CSS",
        question: "Which CSS feature applies styles only when a screen meets certain conditions?",
        answers: [
            { text: "@screen", correct: false },
            { text: "@media", correct: true },
            { text: "@responsive", correct: false },
            { text: "@device", correct: false }
        ]
    },

    {
        category: "JavaScript",
        question: "Which keyword declares a variable whose value should not be reassigned?",
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "fixed", correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "What does 5 + '2' return in JavaScript?",
        answers: [
            { text: "7", correct: false },
            { text: '"52"', correct: true },
            { text: "52 as a number", correct: false },
            { text: "An error", correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "How do you select an element with the id demo?",
        answers: [
            { text: 'document.getElement("demo")', correct: false },
            { text: 'document.getElementById("demo")', correct: true },
            { text: 'document.select("demo")', correct: false },
            { text: 'document.id("demo")', correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "Which HTML element is used to include JavaScript in a page?",
        answers: [
            { text: "<js>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<script>", correct: true },
            { text: "<code>", correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "Need to show a quick browser alert. Which function can do that?",
        answers: [
            { text: "alert()", correct: true },
            { text: "message()", correct: false },
            { text: "notifyBox()", correct: false },
            { text: "printAlert()", correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "What is the first index of an array?",
        answers: [
            { text: "1", correct: false },
            { text: "-1", correct: false },
            { text: "0", correct: true },
            { text: "It depends on the array length", correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "Which operator checks both value and data type?",
        answers: [
            { text: "=", correct: false },
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "A variable's value needs to change later. Which declaration is suitable?",
        answers: [
            { text: "const", correct: false },
            { text: "let", correct: true },
            { text: "fixed", correct: false },
            { text: "static", correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "How can you run a function when a button is clicked?",
        answers: [
            { text: "addEventListener('click', ...)", correct: true },
            { text: "addStyle('click', ...)", correct: false },
            { text: "runOnCSS('click', ...)", correct: false },
            { text: "createClick()", correct: false }
        ]
    },
    {
        category: "JavaScript",
        question: "What does localStorage help a website do?",
        answers: [
            { text: "Change the monitor brightness", correct: false },
            { text: "Save data in the browser", correct: true },
            { text: "Create HTML tags automatically", correct: false },
            { text: "Run SQL queries on a server", correct: false }
        ]
    },

    {
        category: "C",
        question: "Which symbol normally ends a C statement?",
        answers: [
            { text: ".", correct: false },
            { text: ";", correct: true },
            { text: ":", correct: false },
            { text: ",", correct: false }
        ]
    },
    {
        category: "C",
        question: "Need to store one character such as 'A'. Which data type fits?",
        answers: [
            { text: "int", correct: false },
            { text: "float", correct: false },
            { text: "char", correct: true },
            { text: "double", correct: false }
        ]
    },
    {
        category: "C",
        question: "Which function prints formatted output in C?",
        answers: [
            { text: "input()", correct: false },
            { text: "printf()", correct: true },
            { text: "echo()", correct: false },
            { text: "display()", correct: false }
        ]
    },
    {
        category: "C",
        question: "Which header file is needed for printf()?",
        answers: [
            { text: "math.h", correct: false },
            { text: "string.h", correct: false },
            { text: "stdio.h", correct: true },
            { text: "stdlib.hpp", correct: false }
        ]
    },
    {
        category: "C",
        question: "What does the & operator do when used before a variable in an expression?",
        answers: [
            { text: "Returns its address", correct: true },
            { text: "Deletes the variable", correct: false },
            { text: "Multiplies its value", correct: false },
            { text: "Converts it to a string", correct: false }
        ]
    },
    {
        category: "C",
        question: "Which format specifier is commonly used to print an int?",
        answers: [
            { text: "%c", correct: false },
            { text: "%f", correct: false },
            { text: "%s", correct: false },
            { text: "%d", correct: true }
        ]
    },
    {
        category: "C",
        question: "Where does execution of a typical C program begin?",
        answers: [
            { text: "start()", correct: false },
            { text: "main()", correct: true },
            { text: "run()", correct: false },
            { text: "program()", correct: false }
        ]
    },
    {
        category: "C",
        question: "Which function is commonly used to read formatted input?",
        answers: [
            { text: "printf()", correct: false },
            { text: "puts()", correct: false },
            { text: "scanf()", correct: true },
            { text: "write()", correct: false }
        ]
    },
    {
        category: "C",
        question: "What does the == operator check?",
        answers: [
            { text: "Assignment", correct: false },
            { text: "Equality", correct: true },
            { text: "Memory allocation", correct: false },
            { text: "Address of a variable", correct: false }
        ]
    },
    {
        category: "C",
        question: "In a normal C array, what is the index of its first element?",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "-1", correct: false },
            { text: "It starts from the array size", correct: false }
        ]
    },

    {
        category: "Python",
        question: "What file extension is normally used for Python source code?",
        answers: [
            { text: ".java", correct: false },
            { text: ".py", correct: true },
            { text: ".cpp", correct: false },
            { text: ".html", correct: false }
        ]
    },
    {
        category: "Python",
        question: "How do you assign 20 to a variable named age?",
        answers: [
            { text: "int age = 20", correct: false },
            { text: "age := 20", correct: false },
            { text: "age = 20", correct: true },
            { text: "var age = 20", correct: false }
        ]
    },
    {
        category: "Python",
        question: "What will print(2 + 3) display?",
        answers: [
            { text: "23", correct: false },
            { text: "5", correct: true },
            { text: "2 + 3", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        category: "Python",
        question: "You need an ordered collection whose items can be changed. Use a:",
        answers: [
            { text: "Tuple", correct: false },
            { text: "Set", correct: false },
            { text: "List", correct: true },
            { text: "String", correct: false }
        ]
    },
    {
        category: "Python",
        question: "Why does indentation matter in Python?",
        answers: [
            { text: "It defines code blocks", correct: true },
            { text: "It automatically creates variables", correct: false },
            { text: "It changes every number to a string", correct: false },
            { text: "It replaces parentheses", correct: false }
        ]
    },
    {
        category: "Python",
        question: "What is len('quiz')?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "An error", correct: false }
        ]
    },
    {
        category: "Python",
        question: "Which operator checks whether two values are equal?",
        answers: [
            { text: "=", correct: false },
            { text: "==", correct: true },
            { text: ":=", correct: false },
            { text: "===", correct: false }
        ]
    },
    {
        category: "Python",
        question: "Which keyword is used to define a function?",
        answers: [
            { text: "function", correct: false },
            { text: "define", correct: false },
            { text: "def", correct: true },
            { text: "fun", correct: false }
        ]
    },
    {
        category: "Python",
        question: "What type of value does input() normally return?",
        answers: [
            { text: "String", correct: true },
            { text: "Integer in every case", correct: false },
            { text: "Boolean in every case", correct: false },
            { text: "List", correct: false }
        ]
    },
    {
        category: "Python",
        question: "Which collection type cannot be changed after creation?",
        answers: [
            { text: "List", correct: false },
            { text: "Dictionary", correct: false },
            { text: "Tuple", correct: true },
            { text: "Set", correct: false }
        ]
    },

    {
        category: "DBMS",
        question: "What is the main job of a primary key?",
        answers: [
            { text: "Allow duplicate IDs", correct: false },
            { text: "Uniquely identify a record", correct: true },
            { text: "Store images", correct: false },
            { text: "Delete a table", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "SQL stands for what?",
        answers: [
            { text: "Structured Query Language", correct: true },
            { text: "Simple Question List", correct: false },
            { text: "System Query Logic", correct: false },
            { text: "Standard Queue Language", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "Which SQL command retrieves records from a table?",
        answers: [
            { text: "INSERT", correct: false },
            { text: "UPDATE", correct: false },
            { text: "SELECT", correct: true },
            { text: "DELETE", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "A foreign key is mainly used to do what?",
        answers: [
            { text: "Connect related tables", correct: true },
            { text: "Rename every column", correct: false },
            { text: "Sort a file on disk", correct: false },
            { text: "Delete the database", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "Why is database normalization useful?",
        answers: [
            { text: "To increase duplicate data", correct: false },
            { text: "To reduce unnecessary duplication", correct: true },
            { text: "To remove all relationships", correct: false },
            { text: "To prevent data retrieval", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "You want to add a new record to a table. Which command fits?",
        answers: [
            { text: "SELECT", correct: false },
            { text: "INSERT", correct: true },
            { text: "DROP", correct: false },
            { text: "ORDER BY", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "Which SQL clause filters records using a condition?",
        answers: [
            { text: "GROUP BY", correct: false },
            { text: "ORDER BY", correct: false },
            { text: "WHERE", correct: true },
            { text: "JOIN", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "Which SQL function counts rows?",
        answers: [
            { text: "SUM()", correct: false },
            { text: "COUNT()", correct: true },
            { text: "TOTALROW()", correct: false },
            { text: "NUMBER()", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "What does COMMIT do in a database transaction?",
        answers: [
            { text: "Saves the transaction's changes", correct: true },
            { text: "Always deletes the table", correct: false },
            { text: "Creates a new database", correct: false },
            { text: "Rolls back all changes", correct: false }
        ]
    },
    {
        category: "DBMS",
        question: "What does NULL generally represent in a database?",
        answers: [
            { text: "The number zero in every case", correct: false },
            { text: "An empty string in every case", correct: false },
            { text: "A missing or unknown value", correct: true },
            { text: "A duplicate primary key", correct: false }
        ]
    },

    {
        category: "DSA",
        question: "What is the time complexity of binary search on a sorted array?",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(n²)", correct: false },
            { text: "O(n log n)", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "A stack follows which rule?",
        answers: [
            { text: "First In, First Out", correct: false },
            { text: "Last In, First Out", correct: true },
            { text: "Random In, Random Out", correct: false },
            { text: "Smallest In, First Out", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "Which data structure normally follows FIFO?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Tree", correct: false },
            { text: "Graph", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "When removing an item from a standard queue, which end is used?",
        answers: [
            { text: "Rear", correct: false },
            { text: "Front", correct: true },
            { text: "Middle", correct: false },
            { text: "Any random position", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "Why does a balanced binary search tree help?",
        answers: [
            { text: "It avoids all comparisons", correct: false },
            { text: "It can make searching more efficient", correct: true },
            { text: "It stores only strings", correct: false },
            { text: "It removes the need for memory", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "Which sorting algorithm repeatedly selects the smallest remaining item?",
        answers: [
            { text: "Merge Sort", correct: false },
            { text: "Quick Sort", correct: false },
            { text: "Selection Sort", correct: true },
            { text: "Heap Sort", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "What does a node in a linked list usually contain?",
        answers: [
            { text: "Data and a link to another node", correct: true },
            { text: "Only a browser address", correct: false },
            { text: "Only a sorting algorithm", correct: false },
            { text: "A complete operating system", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "Breadth-First Search commonly uses which data structure?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Heap only", correct: false },
            { text: "Hash function", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "For a typical hash table, what is the average lookup time?",
        answers: [
            { text: "O(n²)", correct: false },
            { text: "O(n)", correct: false },
            { text: "O(1)", correct: true },
            { text: "O(log n) in every case", correct: false }
        ]
    },
    {
        category: "DSA",
        question: "Why does a recursive function need a base case?",
        answers: [
            { text: "To stop recursion when the condition is met", correct: true },
            { text: "To automatically sort an array", correct: false },
            { text: "To create a database table", correct: false },
            { text: "To remove all function calls", correct: false }
        ]
    }
];
const startTriggers = document.querySelectorAll(".start-trigger");
const topicCards = document.querySelectorAll(".topic-card");
const quizModal = document.getElementById("quizModal");
const closeModal = document.getElementById("closeModal");
const setupScreen = document.getElementById("setupScreen");
const quizSetupForm = document.getElementById("quizSetupForm");
const activeQuiz = document.getElementById("activeQuiz");
const playerName = document.getElementById("playerName");
const category = document.getElementById("category");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const questionCounter = document.getElementById("questionCounter");
const quizProgressBar = document.getElementById("quizProgressBar");
const timerPill = document.getElementById("timerPill");
const timerValue = document.getElementById("timerValue");
const quizCategoryLabel = document.getElementById("quizCategoryLabel");
const feedbackText = document.getElementById("feedbackText");
const nextQuestionButton = document.getElementById("nextQuestion");
const previousQuestionButton = document.getElementById("previousQuestion");
const modalResult = document.getElementById("resultScreen");
const resultGreeting = document.getElementById("resultGreeting");
const resultSubtitle = document.getElementById("resultSubtitle");
const finalScore = document.getElementById("finalScore");
const finalPercentage = document.getElementById("finalPercentage");
const finalCorrect = document.getElementById("finalCorrect");
const finalWrong = document.getElementById("finalWrong");
const finalBest = document.getElementById("finalBest");
const retryQuiz = document.getElementById("retryQuiz");
const backToSite = document.getElementById("backToSite");
const historyToggle = document.getElementById("historyToggle");
const historyList = document.getElementById("historyList");
const historyCount = document.getElementById("historyCount");
const mobileMenu = document.querySelector(".mobile-menu");
const mainNav = document.querySelector(".main-nav");

let quizQuestions = [];
let questionStates = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
let autoNextTimer;
let answered = false;
let currentName = "";

document.getElementById("currentYear").innerText =
    new Date().getFullYear();

function openQuizModal() {
    clearInterval(timer);
    clearTimeout(autoNextTimer);

    quizModal.classList.add("open");
    quizModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    setupScreen.hidden = false;
    activeQuiz.hidden = true;
    modalResult.hidden = true;
}

function closeQuizModal() {
    clearInterval(timer);
    clearTimeout(autoNextTimer);

    quizModal.classList.remove("open");
    quizModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    setupScreen.hidden = false;
    activeQuiz.hidden = true;
    modalResult.hidden = true;
}

startTriggers.forEach(button => {
    button.addEventListener("click", () => {
        category.value = "all";
        openQuizModal();
        playerName.focus();
    });
});

topicCards.forEach(button => {
    button.addEventListener("click", () => {
        category.value = button.dataset.category;
        openQuizModal();
        playerName.focus();
    });
});

closeModal.addEventListener("click", closeQuizModal);
backToSite.addEventListener("click", closeQuizModal);

quizModal.addEventListener("click", event => {
    if (event.target === quizModal) {
        closeQuizModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && quizModal.classList.contains("open")) {
        closeQuizModal();
    }
});

quizSetupForm.addEventListener("submit", event => {
    event.preventDefault();

    currentName = playerName.value.trim();

    if (!currentName) {
        playerName.focus();
        return;
    }

    startQuiz();
});

function startQuiz() {
    clearInterval(timer);
    clearTimeout(autoNextTimer);

    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    answered = false;
    questionStates = [];

    const selectedCategory = category.value;

    quizQuestions = questions
        .filter(question =>
            selectedCategory === "all" ||
            question.category === selectedCategory
        )
        .sort(() => Math.random() - 0.5);

    if (quizQuestions.length === 0) {
        feedbackText.innerText = "No questions are available.";
        return;
    }

    setupScreen.hidden = true;
    modalResult.hidden = true;
    activeQuiz.hidden = false;

    quizCategoryLabel.innerText = getCategoryName();

    showQuestion();
}

function getCategoryName() {
    return category.options[category.selectedIndex].text.split(" · ")[0];
}

function showQuestion() {
    clearInterval(timer);
    clearTimeout(autoNextTimer);

    const question = quizQuestions[currentQuestionIndex];
    let state = questionStates[currentQuestionIndex];

    if (!state) {
        state = {
            answers: [...question.answers].sort(() => Math.random() - 0.5),
            selectedText: null,
            answered: false,
            timeExpired: false,
            timeLeft: 30
        };

        questionStates[currentQuestionIndex] = state;
    }

    answered = state.answered;
    timeLeft = state.timeLeft;

    questionText.innerText = question.question;

    questionCounter.innerText =
        `QUESTION ${String(currentQuestionIndex + 1).padStart(2, "0")} / ${String(quizQuestions.length).padStart(2, "0")}`;

    quizProgressBar.style.width =
        `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;

    previousQuestionButton.disabled = currentQuestionIndex === 0;
    answerList.innerHTML = "";

    state.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        const letter = document.createElement("span");
        const text = document.createElement("span");
        const mark = document.createElement("span");

        button.type = "button";
        button.className = "answer-option";
        button.dataset.correct = answer.correct;

        letter.innerText = String.fromCharCode(65 + index);
        text.innerText = answer.text;
        mark.className = "answer-mark";

        button.append(letter, text, mark);

        if (state.answered) {
            button.disabled = true;

            if (answer.correct) {
                button.classList.add("correct");
                mark.innerText = "✓";
            } else if (answer.text === state.selectedText) {
                button.classList.add("wrong");
                mark.innerText = "×";
            }
        } else {
            button.addEventListener("click", () => selectAnswer(button));
        }

        answerList.appendChild(button);
    });

    timerValue.innerText = timeLeft;
    timerPill.classList.toggle("timer-warning", timeLeft <= 10);

    nextQuestionButton.innerHTML =
        currentQuestionIndex === quizQuestions.length - 1
            ? "See results <span>↗</span>"
            : "Next question <span>→</span>";

    nextQuestionButton.disabled = !state.answered;

    if (state.answered) {
        if (state.timeExpired) {
            feedbackText.innerText = "Time is up. Review the correct answer.";
        } else if (state.answers.some(
            answer => answer.text === state.selectedText && answer.correct
        )) {
            feedbackText.innerText = "Correct answer. Nice work!";
        } else {
            feedbackText.innerText = "Not quite. Review the highlighted answer.";
        }

        return;
    }

    feedbackText.innerText = "Select the best answer.";

    startTimer();
}

function startTimer() {
    updateTimer();

    timer = setInterval(() => {
        timeLeft--;

        questionStates[currentQuestionIndex].timeLeft = timeLeft;

        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timer);

            revealAnswers(null, true);

            autoNextTimer = setTimeout(() => {
                moveToNextQuestion();
            }, 2000);
        }
    }, 1000);
}

function updateTimer() {
    timerValue.innerText = timeLeft;
    timerPill.classList.toggle("timer-warning", timeLeft <= 10);
}

function selectAnswer(selectedOption) {
    if (answered) {
        return;
    }

    clearInterval(timer);
    clearTimeout(autoNextTimer);

    if (selectedOption.dataset.correct === "true") {
        score++;
    }

    revealAnswers(selectedOption, false);
}

function revealAnswers(selectedOption, timeExpired) {
    answered = true;

    const state = questionStates[currentQuestionIndex];

    state.answered = true;
    state.timeExpired = timeExpired;
    state.timeLeft = timeLeft;
    state.selectedText = selectedOption
        ? selectedOption.children[1].innerText
        : null;

    const options = answerList.querySelectorAll(".answer-option");

    options.forEach(option => {
        option.disabled = true;

        const mark = option.querySelector(".answer-mark");
        const isCorrect = option.dataset.correct === "true";

        if (isCorrect) {
            option.classList.add("correct");
            mark.innerText = "✓";
        } else if (option === selectedOption) {
            option.classList.add("wrong");
            mark.innerText = "×";
        }
    });

    if (timeExpired) {
        feedbackText.innerText = "Time is up. Review the correct answer.";
    } else if (selectedOption.dataset.correct === "true") {
        feedbackText.innerText = "Correct answer. Nice work!";
    } else {
        feedbackText.innerText = "Not quite. Review the highlighted answer.";
    }

    nextQuestionButton.disabled = false;
}

function moveToNextQuestion() {
    clearInterval(timer);
    clearTimeout(autoNextTimer);

    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

nextQuestionButton.addEventListener("click", () => {
    if (!answered) {
        return;
    }

    clearTimeout(autoNextTimer);
    moveToNextQuestion();
});

previousQuestionButton.addEventListener("click", () => {
    if (currentQuestionIndex === 0) {
        return;
    }

    clearInterval(timer);
    clearTimeout(autoNextTimer);

    if (!answered) {
        questionStates[currentQuestionIndex].timeLeft = timeLeft;
    }

    currentQuestionIndex--;
    showQuestion();
});

function showResult() {
    clearInterval(timer);
    clearTimeout(autoNextTimer);

    const total = quizQuestions.length;
    const wrong = total - score;
    const percentage = Math.round((score / total) * 100);
    const key = `techQuizBest_${category.value}`;
    const oldBest = Number(localStorage.getItem(key) || 0);
    const best = Math.max(oldBest, score);

    localStorage.setItem(key, best);

    resultGreeting.innerText = `Well done, ${currentName}!`;

    resultSubtitle.innerText =
        `You completed the ${getCategoryName()} quiz. Keep practicing to improve your score.`;

    finalScore.innerText = `${score}/${total}`;
    finalPercentage.innerText = `${percentage}% accuracy`;
    finalCorrect.innerText = score;
    finalWrong.innerText = wrong;
    finalBest.innerText = `${best}/${total}`;

    activeQuiz.hidden = true;
    modalResult.hidden = false;

    saveHistory({
        name: currentName,
        category: getCategoryName(),
        score: score,
        total: total,
        percentage: percentage,
        date: new Date().toLocaleDateString()
    });
}

function saveHistory(attempt) {
    const history = JSON.parse(
        localStorage.getItem("techQuizHistory") || "[]"
    );

    history.unshift(attempt);

    localStorage.setItem(
        "techQuizHistory",
        JSON.stringify(history.slice(0, 3))
    );

    loadHistory();
}

function loadHistory() {
    const history = JSON.parse(
        localStorage.getItem("techQuizHistory") || "[]"
    );

    historyList.innerHTML = "";
    historyCount.innerText = `${history.length} / 3`;

    if (history.length === 0) {
        const empty = document.createElement("div");
        const icon = document.createElement("span");
        const title = document.createElement("b");
        const description = document.createElement("small");

        empty.className = "history-empty";
        icon.innerText = "↗";
        title.innerText = "Your next attempt starts here.";
        description.innerText =
            "Complete a quiz to build your recent history.";

        empty.append(icon, title, description);
        historyList.appendChild(empty);

        return;
    }

    history.forEach(item => {
        const row = document.createElement("div");
        const details = document.createElement("div");
        const categoryName = document.createElement("b");
        const info = document.createElement("small");
        const result = document.createElement("div");
        const resultScore = document.createElement("strong");
        const resultPercent = document.createElement("small");

        row.className = "history-row";
        result.className = "history-row-score";

        categoryName.innerText = item.category;

        info.innerText =
            `${item.name} · ${item.date || "Previous attempt"} · ${item.percentage}%`;

        resultScore.innerText = `${item.score}/${item.total}`;
        resultPercent.innerText = `${item.percentage}%`;

        details.append(categoryName, info);
        result.append(resultScore, resultPercent);
        row.append(details, result);

        historyList.appendChild(row);
    });
}

historyToggle.addEventListener("click", () => {
    const expanded = historyList.hidden;

    historyList.hidden = !expanded;

    historyToggle.setAttribute("aria-expanded", String(expanded));

    historyToggle.childNodes[0].textContent =
        expanded ? "Hide recent attempts " : "View recent attempts ";
});

retryQuiz.addEventListener("click", () => {
    clearInterval(timer);
    clearTimeout(autoNextTimer);

    setupScreen.hidden = false;
    activeQuiz.hidden = true;
    modalResult.hidden = true;

    playerName.value = currentName;
    playerName.focus();
});

mobileMenu.addEventListener("click", () => {
    const expanded = mobileMenu.getAttribute("aria-expanded") === "true";

    mobileMenu.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("mobile-open", !expanded);
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("mobile-open");
        mobileMenu.setAttribute("aria-expanded", "false");
    });
});

historyList.hidden = true;
loadHistory();