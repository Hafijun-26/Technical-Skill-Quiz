const quizData = {
    java: [
        {
            question: "Which keyword is used to inherit a class in Java?",
            options: ["implements", "extends", "inherits", "super"],
            answer: 1,
            explanation: "The extends keyword is used for class inheritance."
        },
        {
            question: "Which method is the entry point of a Java application?",
            options: ["start()", "run()", "main()", "init()"],
            answer: 2,
            explanation: "The main() method is the standard entry point."
        },
        {
            question: "Which is not a primitive data type in Java?",
            options: ["int", "boolean", "char", "String"],
            answer: 3,
            explanation: "String is a class, not a primitive data type."
        },
        {
            question: "Which keyword creates an object?",
            options: ["class", "new", "this", "void"],
            answer: 1,
            explanation: "The new keyword creates an object."
        },
        {
            question: "Which loop executes at least once?",
            options: ["for", "while", "do-while", "enhanced for"],
            answer: 2,
            explanation: "A do-while loop checks its condition after executing the body."
        },
        {
            question: "Which concept hides data using private fields?",
            options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
            answer: 1,
            explanation: "Encapsulation protects data and controls access to it."
        },
        {
            question: "Which keyword refers to the current object?",
            options: ["super", "static", "this", "final"],
            answer: 2,
            explanation: "The this keyword refers to the current object."
        },
        {
            question: "What is the default value of an int instance field?",
            options: ["null", "0", "1", "-1"],
            answer: 1,
            explanation: "An int instance field defaults to 0."
        },
        {
            question: "Which keyword prevents a method from being overridden?",
            options: ["static", "private", "final", "void"],
            answer: 2,
            explanation: "A final method cannot be overridden in a subclass."
        },
        {
            question: "Which class is commonly used for keyboard input?",
            options: ["Scanner", "Printer", "ConsoleReader", "InputWriter"],
            answer: 0,
            explanation: "Scanner can read user input from System.in."
        }
    ], 
    sql: [
        { question: "Which SQL command retrieves data?", options: ["GET", "SELECT", "OPEN", "FETCH"], answer: 1, explanation: "SELECT retrieves data from a table." },
        { question: "Which clause filters rows?", options: ["ORDER BY", "GROUP BY", "WHERE", "FROM"], answer: 2, explanation: "WHERE filters rows based on a condition." },
        { question: "Which command inserts a new row?", options: ["ADD", "INSERT INTO", "UPDATE", "ALTER"], answer: 1, explanation: "INSERT INTO adds new rows." },
        { question: "Which command modifies existing rows?", options: ["UPDATE", "CHANGE", "ALTER", "MODIFY"], answer: 0, explanation: "UPDATE changes values in existing rows." },
        { question: "Which clause sorts results?", options: ["SORT", "GROUP BY", "ORDER BY", "ARRANGE"], answer: 2, explanation: "ORDER BY sorts query results." },
        { question: "Which function counts rows?", options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"], answer: 1, explanation: "COUNT() counts rows or non-NULL values, depending on its argument." },
        { question: "Which key uniquely identifies a row?", options: ["Foreign key", "Primary key", "Duplicate key", "Common key"], answer: 1, explanation: "A primary key uniquely identifies each row." },
        { question: "Which JOIN returns matching rows from both tables?", options: ["INNER JOIN", "CROSS JOIN", "LEFT JOIN", "SELF JOIN"], answer: 0, explanation: "INNER JOIN returns rows matching the join condition in both tables." },
        { question: "Which condition checks for NULL?", options: ["= NULL", "IS NULL", "== NULL", "EQUAL NULL"], answer: 1, explanation: "Use IS NULL to test for NULL values." },
        { question: "Which command removes a table definition?", options: ["DELETE", "REMOVE", "DROP TABLE", "CLEAR"], answer: 2, explanation: "DROP TABLE removes the table definition and its data." }
    ],

    html: [
        { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Markup Link", "Home Tool Markup Language"], answer: 0, explanation: "HTML stands for HyperText Markup Language." },
        { question: "Which is the highest-level standard HTML heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: 2, explanation: "h1 is the highest-level heading element." },
        { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1, explanation: "The a element creates hyperlinks." },
        { question: "Which tag embeds an image?", options: ["<picture-src>", "<image>", "<img>", "<src>"], answer: 2, explanation: "The img element embeds an image." },
        { question: "Which attribute supplies alternative image text?", options: ["title", "alt", "src", "name"], answer: 1, explanation: "The alt attribute provides alternative text." },
        { question: "Which tag creates an unordered list?", options: ["<ol>", "<li>", "<ul>", "<list>"], answer: 2, explanation: "ul creates an unordered list." },
        { question: "Which tag defines a paragraph?", options: ["<para>", "<p>", "<text>", "<pg>"], answer: 1, explanation: "The p element represents a paragraph." },
        { question: "Which attribute should be unique within a document?", options: ["class", "style", "id", "type"], answer: 2, explanation: "An id should uniquely identify an element in the document." },
        { question: "Which tag links an external CSS file?", options: ["<css>", "<style src>", "<link>", "<script>"], answer: 2, explanation: "The link element connects an external stylesheet." },
        { question: "Which tag is used to include JavaScript?", options: ["<javascript>", "<script>", "<codejs>", "<js>"], answer: 1, explanation: "The script element includes or references JavaScript." }
    ],

    css: [
        { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Styling System", "Colorful Style Syntax"], answer: 1, explanation: "CSS stands for Cascading Style Sheets." },
        { question: "Which property changes text color?", options: ["font-color", "text-color", "color", "foreground"], answer: 2, explanation: "The color property sets text color." },
        { question: "Which property changes background color?", options: ["background-color", "bgcolor", "color-background", "background-style"], answer: 0, explanation: "background-color sets the background color." },
        { question: "Which selector targets a class?", options: ["#box", ".box", "box()", "*box"], answer: 1, explanation: "A dot selects elements by class." },
        { question: "Which selector targets an ID?", options: [".header", "#header", "header*", "@header"], answer: 1, explanation: "A hash selects an element by ID." },
        { question: "Which property adds space inside the border?", options: ["margin", "padding", "outline", "gap"], answer: 1, explanation: "Padding adds space between content and border." },
        { question: "Which property adds space outside the border?", options: ["padding", "margin", "outline", "inset"], answer: 1, explanation: "Margin adds space outside an element's border." },
        { question: "Which declaration enables Flexbox?", options: ["position: flex", "display: flex", "flex: display", "layout: flex"], answer: 1, explanation: "display: flex creates a flex container." },
        { question: "Which rule supports responsive styles?", options: ["@responsive", "@screen", "@media", "@device"], answer: 2, explanation: "@media applies CSS based on media conditions." },
        { question: "Which property rounds corners?", options: ["corner-style", "border-round", "border-radius", "round-edge"], answer: 2, explanation: "border-radius rounds an element's corners." }
    ],

    javascript: [
        { question: "Which keyword declares a reassignable block-scoped variable?", options: ["const", "let", "static", "define"], answer: 1, explanation: "let declares a block-scoped variable that can be reassigned." },
        { question: "Which operator checks strict equality?", options: ["=", "==", "===", "!="], answer: 2, explanation: "=== compares without type coercion." },
        { question: "Which method selects an element by ID?", options: ["getElementById()", "queryAllId()", "getClass()", "selectId()"], answer: 0, explanation: "document.getElementById() selects an element by ID." },
        { question: "Which method adds an item to an array's end?", options: ["pop()", "push()", "shift()", "unshift()"], answer: 1, explanation: "push() adds items to the end of an array." },
        { question: "Which value represents an intentional absence of a value?", options: ["undefined", "null", "NaN", "false"], answer: 1, explanation: "null commonly represents an intentional absence of value." },
        { question: "Which method parses JSON text?", options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.read()"], answer: 1, explanation: "JSON.parse() converts JSON text into a JavaScript value." },
        { question: "Which array method transforms each item into a new array?", options: ["map()", "find()", "some()", "pop()"], answer: 0, explanation: "map() creates a new array from transformed items." },
        { question: "Which keywords are used for exception handling?", options: ["check/catch", "error/fix", "try/catch", "test/except"], answer: 2, explanation: "try and catch handle exceptions." },
        { question: "Which method registers an event handler?", options: ["addEventListener()", "addEvent()", "onEvent()", "listenEvent()"], answer: 0, explanation: "addEventListener() registers an event listener." },
        { question: "Which keyword declares a function?", options: ["method", "function", "define", "func"], answer: 1, explanation: "The function keyword declares a function." }
    ],

    react: [
        { question: "What is React primarily used for?", options: ["Database management", "Building user interfaces", "Operating systems", "Writing SQL"], answer: 1, explanation: "React is a library for building user interfaces." },
        { question: "What is a React component?", options: ["Reusable UI building block", "Database table", "CSS property", "Server port"], answer: 0, explanation: "Components are reusable pieces of UI." },
        { question: "Which hook manages local component state?", options: ["useFetch", "useState", "useRoute", "useStyle"], answer: 1, explanation: "useState manages state in function components." },
        { question: "What syntax is commonly used to describe UI in React?", options: ["SQL", "JSX", "XML only", "Markdown only"], answer: 1, explanation: "JSX lets you write HTML-like syntax in JavaScript." },
        { question: "How do you pass data from a parent to a child component?", options: ["Props", "SQL", "CSS selectors", "DOM queries only"], answer: 0, explanation: "Props pass data to child components." },
        { question: "Which hook runs side effects?", options: ["useStyle", "useEffect", "useHTML", "useClass"], answer: 1, explanation: "useEffect is used for side effects." },
        { question: "Why are keys used when rendering lists?", options: ["To encrypt data", "To help React identify list items", "To style text", "To call APIs"], answer: 1, explanation: "Keys help React track list items between renders." },
        { question: "What is a controlled input?", options: ["An input whose value is managed by React state", "A disabled input only", "An input styled with CSS", "An input stored only in SQL"], answer: 0, explanation: "A controlled input gets its value from React state." },
        { question: "What should a React component generally return?", options: ["A database", "UI elements or null", "A CSS file", "A SQL query"], answer: 1, explanation: "A component returns React nodes, commonly JSX." },
        { question: "Which syntax renders content conditionally?", options: ["if/else or conditional expressions", "SQL JOIN", "CSS padding", "HTML comments only"], answer: 0, explanation: "JavaScript conditions can determine which UI is rendered." }
    ],

    jdbc: [
        { question: "What does JDBC stand for?", options: ["Java Database Connectivity", "Java Data Browser Control", "Joint Database Code", "Java Direct Binary Connection"], answer: 0, explanation: "JDBC stands for Java Database Connectivity." },
        { question: "Which class can obtain a database connection?", options: ["Driver", "DriverManager", "ConnectionBuilderOnly", "Database"], answer: 1, explanation: "DriverManager.getConnection() can obtain a JDBC connection." },
        { question: "Which interface represents a database connection?", options: ["ResultSet", "Connection", "Statement", "Driver"], answer: 1, explanation: "Connection represents a database session." },
        { question: "Which interface is suited for parameterized SQL?", options: ["PreparedStatement", "PrintWriter", "Scanner", "FileReader"], answer: 0, explanation: "PreparedStatement supports parameterized SQL." },
        { question: "Which object holds rows returned by a query?", options: ["Connection", "ResultSet", "DriverManager", "SQLException"], answer: 1, explanation: "ResultSet represents query results." },
        { question: "Which method commonly executes a SELECT query?", options: ["executeQuery()", "executeUpdate()", "runSelect()", "getRowsOnly()"], answer: 0, explanation: "executeQuery() returns a ResultSet for a query." },
        { question: "Which method commonly executes INSERT or UPDATE?", options: ["executeQuery()", "executeUpdate()", "next()", "getConnection()"], answer: 1, explanation: "executeUpdate() is used for INSERT, UPDATE and DELETE statements." },
        { question: "Which method advances to the next ResultSet row?", options: ["next()", "forward()", "move()", "advanceRow()"], answer: 0, explanation: "ResultSet.next() advances to the next row." },
        { question: "Which exception is commonly associated with JDBC operations?", options: ["SQLException", "IOException only", "ClassFormatError", "ArithmeticException only"], answer: 0, explanation: "JDBC operations commonly throw SQLException." },
        { question: "Why should JDBC resources be closed?", options: ["To release resources", "To create more tables", "To compile Java", "To change CSS"], answer: 0, explanation: "Closing connections and statements releases database resources." }
    ],

    springboot: [
        { question: "What is Spring Boot primarily used for?", options: ["Building Java applications with less setup", "Styling HTML", "Writing CSS only", "Replacing SQL"], answer: 0, explanation: "Spring Boot simplifies setup for Spring applications." },
        { question: "Which annotation marks a Spring Boot application class?", options: ["@StartApp", "@SpringBootApplication", "@JavaMain", "@BootClass"], answer: 1, explanation: "@SpringBootApplication is commonly used on the main application class." },
        { question: "Which annotation maps HTTP GET requests?", options: ["@PostMapping", "@GetMapping", "@PutMapping", "@DeleteMapping"], answer: 1, explanation: "@GetMapping maps HTTP GET requests." },
        { question: "Which annotation is commonly used to define a REST controller?", options: ["@RestController", "@Database", "@HtmlController", "@SqlController"], answer: 0, explanation: "@RestController combines controller behavior with response-body handling." },
        { question: "Which annotation injects a dependency through constructor or field mechanisms?", options: ["@Autowired", "@Html", "@InjectSQL", "@RequestOnly"], answer: 0, explanation: "@Autowired supports dependency injection; constructor injection is often preferred." },
        { question: "Which file commonly holds Spring Boot configuration?", options: ["index.html", "application.properties", "style.css", "package-lock.json"], answer: 1, explanation: "application.properties is a common configuration file." },
        { question: "Which annotation maps POST requests?", options: ["@GetMapping", "@PostMapping", "@DeleteMapping", "@ReadMapping"], answer: 1, explanation: "@PostMapping maps HTTP POST requests." },
        { question: "What does dependency injection help with?", options: ["Providing required objects to a class", "Changing font size", "Deleting Java", "Sorting CSS"], answer: 0, explanation: "Dependency injection supplies dependencies rather than requiring classes to create them directly." },
        { question: "What is an embedded server useful for?", options: ["Running the web application without a separately installed server", "Editing images", "Creating HTML tags", "Replacing Java"], answer: 0, explanation: "An embedded server can run within the application." },
        { question: "Which annotation maps a PUT request?", options: ["@PutMapping", "@PatchOnly", "@GetMapping", "@SelectMapping"], answer: 0, explanation: "@PutMapping maps HTTP PUT requests." }
    ],

    apis: [
        { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Internet", "Automatic Processing Input", "Application Page Index"], answer: 0, explanation: "API stands for Application Programming Interface." },
        { question: "Which HTTP method usually retrieves a resource?", options: ["POST", "GET", "DELETE", "PATCH"], answer: 1, explanation: "GET requests retrieve representations of resources." },
        { question: "Which HTTP method commonly creates a resource?", options: ["GET", "POST", "HEAD", "OPTIONS"], answer: 1, explanation: "POST commonly submits data to create a resource." },
        { question: "Which HTTP method commonly replaces a resource?", options: ["GET", "PUT", "HEAD", "TRACE"], answer: 1, explanation: "PUT commonly replaces a resource representation." },
        { question: "Which HTTP method commonly removes a resource?", options: ["DELETE", "GET", "OPTIONS", "HEAD"], answer: 0, explanation: "DELETE requests removal of a resource." },
        { question: "What does HTTP status 200 generally mean?", options: ["Not Found", "OK", "Server Error", "Unauthorized"], answer: 1, explanation: "200 means the request succeeded." },
        { question: "What does HTTP status 404 mean?", options: ["Created", "OK", "Not Found", "No Content"], answer: 2, explanation: "404 means the requested resource was not found." },
        { question: "Which format is commonly used for API data?", options: ["JSON", "MP3", "EXE", "CSS only"], answer: 0, explanation: "JSON is a common data interchange format." },
        { question: "What does REST stand for?", options: ["Representational State Transfer", "Remote Server Text", "Reliable Software Transfer", "Request State Tool"], answer: 0, explanation: "REST stands for Representational State Transfer." },
        { question: "Which HTTP status indicates successful resource creation?", options: ["200", "201", "404", "500"], answer: 1, explanation: "201 Created indicates that a resource was created successfully." }
    ],

    fullstack: [
        { question: "What does frontend development focus on?", options: ["User-facing interface", "Database backups only", "Server hardware only", "SQL administration only"], answer: 0, explanation: "Frontend development focuses on the interface users interact with." },
        { question: "What does backend development commonly handle?", options: ["Business logic and server-side processing", "Only page colors", "Only image editing", "Only browser fonts"], answer: 0, explanation: "The backend handles server-side logic and data processing." },
        { question: "Which technology is commonly used for relational databases?", options: ["MySQL", "HTML", "CSS", "JSX"], answer: 0, explanation: "MySQL is a relational database management system." },
        { question: "Which technology can connect Java applications to databases directly?", options: ["JDBC", "CSS", "HTML", "React"], answer: 0, explanation: "JDBC provides Java APIs for database access." },
        { question: "Which combination is suitable for a Java backend?", options: ["Java and Spring Boot", "CSS and HTML only", "Photoshop and CSS", "React only"], answer: 0, explanation: "Spring Boot is commonly used to build Java backend applications." },
        { question: "What is the purpose of a database primary key?", options: ["Uniquely identify a row", "Style a web page", "Run a timer", "Create a React component"], answer: 0, explanation: "A primary key uniquely identifies a row." },
        { question: "What does CRUD stand for?", options: ["Create Read Update Delete", "Copy Run Undo Deploy", "Create Render Upload Download", "Connect Read Use Design"], answer: 0, explanation: "CRUD describes Create, Read, Update and Delete operations." },
        { question: "What is JSON commonly used for?", options: ["Exchanging structured data", "Styling page layouts", "Compiling Java source", "Managing CPU hardware"], answer: 0, explanation: "JSON is commonly used to exchange structured data between applications." },
        { question: "What is Git used for?", options: ["Version control", "Database querying only", "CSS rendering", "Running a web server only"], answer: 0, explanation: "Git tracks changes to source code and other files." },
        { question: "What is a common way for a frontend to communicate with a backend?", options: ["HTTP requests to APIs", "Changing CSS colors", "HTML comments", "Renaming variables only"], answer: 0, explanation: "Frontends commonly send HTTP requests to backend APIs." }
    ]
};

// Get HTML elements
const topicSelect = document.getElementById("topic-select");
const startBtn = document.getElementById("start-btn");
const topicSection = document.getElementById("topic-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");

const questionCount = document.getElementById("question-count");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const questionDisplay = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const finalScore = document.getElementById("final-score");
const percentage = document.getElementById("percentage");
const restartBtn = document.getElementById("restart-btn");

// Quiz variables
let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer = null;
let answered = false;

// Initial screen
quizSection.style.display = "none";
resultSection.style.display = "none";

// Start quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    const selectedTopic = topicSelect.value;
    questions = quizData[selectedTopic];

    if (!questions || questions.length === 0) {
        alert("Questions for this topic will be added soon!");
        return;
    }

    currentQuestion = 0;
    score = 0;

    topicSection.style.display = "none";
    resultSection.style.display = "none";
    quizSection.style.display = "block";

    showQuestion();
}

// Display question
function showQuestion() {
    clearInterval(timer);

    answered = false;
    timeLeft = 30;

    const current = questions[currentQuestion];

    questionCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionDisplay.textContent = current.question;
    timerDisplay.textContent = timeLeft;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    feedback.textContent = "";
    optionsContainer.innerHTML = "";

    nextBtn.style.display = "none";

    current.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option-btn";
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);
    });

    startTimer();
}

// 30-second countdown
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

// Check answer
function selectAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    clearInterval(timer);

    const current = questions[currentQuestion];
    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === current.answer) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex === current.answer) {
        score++;
        feedback.textContent = "Correct! " + current.explanation;
        feedback.style.color = "#16a34a";
    } else {
        buttons[selectedIndex].classList.add("wrong");

        feedback.textContent =
            "Wrong! Correct answer: " +
            current.options[current.answer] +
            ". " +
            current.explanation;

        feedback.style.color = "#dc2626";
    }

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "See Results"
            : "Next Question";

    nextBtn.style.display = "block";
}

// Time is up
function timeUp() {
    if (answered) return;

    answered = true;

    const current = questions[currentQuestion];
    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === current.answer) {
            button.classList.add("correct");
        }
    });

    feedback.textContent =
        "Time's up! Correct answer: " +
        current.options[current.answer] +
        ". " +
        current.explanation;

    feedback.style.color = "#dc2626";

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "See Results"
            : "Next Question";

    nextBtn.style.display = "block";
}

// Next question
nextBtn.addEventListener("click", () => {
    if (!answered) return;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
});

// Results screen
function showResults() {
    clearInterval(timer);

    quizSection.style.display = "none";
    resultSection.style.display = "block";

    finalScore.textContent =
        `Your Score: ${score}/${questions.length}`;

    percentage.textContent =
        `Percentage: ${Math.round((score / questions.length) * 100)}%`;
    
    progressBar.style.width = "100%";
}

// Restart quiz
restartBtn.addEventListener("click", () => {
    clearInterval(timer);

    resultSection.style.display = "none";
    quizSection.style.display = "none";
    topicSection.style.display = "block";

    timerDisplay.textContent = "30";
    progressBar.style.width = "0%";
});