/*

Old Time Movies Trivia 
How much do you know? 
This script retieves 10 random trivia questions from the quiz database. 
This goal is to get as many rihgt answers in the set amount of time.
If you have the most correct answers with the most time left, you are aces.

Click on the start button, enter your initials, and your off!

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  notes: Movie titles should be italicized. not on the impotant side.

*/


const quiz = [
  {question: "What are the dying words of Charles Foster Kane in Citizen Kane?",
  choices: {
    a: "Rosebud",
    b: "Daisy",
    c: "Buttercup", 
    d: "Elsie"
  },
  correct: "a",
},
  {question: "Who played Mrs. Robinson in The Graduate?",
  choices: {
    a: "Shirley Maclaine", 
    b: "Sophia Loren", 
    c: "Anne Bancroft",
    d: "Natalie Wood",
  },
  correct: "c",
},
{question: "For what movie did Tom Hanks score his first Academy Award nomination?",
choices: {
  a: "Philadelphia", 
  b: "Big", 
  c: "Forrest Gump", 
  d: "Castaway"
},
correct: "b",
},
{question: "What 1927 musical was the first \"talkie\"?",
choices: { 
  a:"Tenderloin", 
  b: "Mother Machree", 
  c: "The Jazz Singer", 
  d:"Glorious Betsy",
},
correct: "c",
},
{question: "What's the name of the skyscraper in Die Hard?",
choices: { 
  a: "Nagasaki Tower",
  b: "Continental Building", 
  c: "Nakatomi Plaza",
  d: "Aon Center", 
},
correct: "c",
},
{question: "What flavor of Pop Tarts does Buddy the Elf use in his spaghetti in Elf?", 
choices: { 
  a: "Chocolate",
  b: "Snickerdoodle", 
  c: "Gingerbread", 
  d: "Blueberry",
},
correct: "a",
},
{question: "What shocking Wes Craven horror movie carried the marketing tagline, \"To avoid fainting, keep repeating, \'It's only a movie...\'\"?",
choices: { 
  a: "Nightmare on Elm Street", 
  b:"The Last House on the Left",
  c: "Scream", 
  d: "My Soul to Take",
},
correct: "b",
},
{question: "What pop vocal group performs at the wedding in Bridesmaids?",
choices: { 
  a: "ABBA",
  b: "Black Eyed Peas", 
  c: "Guns N\' Roses",
  d: "Wilson Phillips",
},
correct: "d",
},
{question: "What real-life on-again off-again Hollywood power couple starred in the film Who's Afraid of Virginia Woolf?",
choices: { 
  a: "Elizabeth Taylor and Richard Burton",
  b: "Humphrey Bogart and Lauren Bacall",
  c: "Orson Welles and Rita Hayword", 
  d: "Tony Curtis and Janet Leigh",
},
correct: "a",
},
{question: "What American writer/director starred in several iconic European-produced \"Spaghetti Westerns\"?",
choices: {
  a: "John Wayne", 
  b: "Clint Eastwood",
  c: "Gene Hackman",
  d: "Robert Redford", 
},
correct: "b",
},
{question: "Who played Juror Number 8 in 12 Angry Men?",
choices: { 
  a: "Henry Fonda",
  b: "Robert De Niro", 
  c: "Clint Eastwood", 
  d: "Jack Klugman",
},
correct: "a",
},
{question: "The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
choices: { 
  a: "A chicken", 
  b: "A horse",
  c: "A pig", 
  d: "A cat",
},
correct: "b",
},
{question: "What TV show was Jack Nicholson referencing when he ad-libbed \"Here\'s Johnny!\" in The Shining?",
choices: { 
  a: "The Tonight Show Starring Johnny Carson",
  b: "Jonny Quest", 
  c: "The Outsiders", 
  d: "The Pirates of the Carribean",
},
correct: "a",
},
{question: "What critically panned 1984 country-musical comedy starring Dolly Parton and Sylvester Stallone eventually became a cult classic?",
choices: { 
  a: "The Best Little Whorehouse in Texas", 
  b: "9 to 5", 
  c: "Rhinestone",
  d: "Blue Valley Songbird",
},
correct: "c",
},
{question: "Who played park owner John Hammond in Jurassic Park?",
choices: { 
  a: "Sam Neil", 
  b: "Richard Attenborough",
  c: "Jeff Goldblum", 
  d: "Samuel L. Jackson",
},
correct: "b",
},
{question: "In what 1976 thriller does Robert De Niro famously say \"You talkin\' to me?\"",
choices: { 
  a: "Raging Bull",
  b: "The Godfather Part II", 
  c: "the Deer Hunter", 
  d: "Taxi Driver", 
},
correct: "d",
},
{question: "What\'s the name of the anthemic dance near the beginning of The Rocky Horror Picture Show?",
choices: { 
  a: "The Time Warp",
  b: "Science Fiction/Double Feature",
  c: "Sweet Transvestite",	
  d: "Touch-a, Touch-a, Touch-a, Touch Me"
},
correct: "a",
},
{question: "For what movie did Steven Spielberg win his first Oscar for Best Director?",
choices: { 
  a: "E.T. the Extra-Terestrial", 
  b: "The Color Purple", 
  c: "Saving Private Ryan",
  d: "Schindler\'s List", 
},
correct: "d",
},
];
//>>>>>>>>>>>>>>>>>>>    DOM Elements   <<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>   Event Keys Elements   <<<<<<<<<<<<<<
var startButtonEl = document.getElementById('startBtn');          // Start Button
var guess1El = document.getElementById('guess1');                 // Guess A Button
var guess2El = document.getElementById('guess2');                 // Guess B Button
var guess3El = document.getElementById('guess3');                 // Guess C Button
var guess4El = document.getElementById('guess4');                 // Guess D Button  

//>>>>>>>>>>>>>>>>>>>   Display Change Elements   <<<<<<<<<<<<<<
var questionAreaEl = document.getElementById('questionArea');     // Change Question
var choice1El = document.getElementById('choice1');               // Change Choice A
var choice2El = document.getElementById('choice2');               // Change Choice B
var choice3El = document.getElementById('choice3');               // Change Choice C
var choice4El = document.getElementById('choice4');               // Change Choice D

var timerEl = document.getElementById('finalCountdown');          // Change Timer
var displayHOFEl = document.getElementById('displayHOF');         // Change Hall of Fame player list

//>>>>>>>>>>>>>>>>>>>   Local Storage variables    <<<<<<<<<<<<<<
var storedHOF = JSON.parse(localStorage.getItem("HallOfFame")) || [];

//>>>>>>>>>>>>>>>>>>>   Global Variables    <<<<<<<<<<<<<<
// ...........Quiz State Flag
// ...........  Value  0 if Quiz not started
// ...........  Value  1 if Quiz in process
// ...........  Value -1 if Quiz over
var quizWiz = 0;
// ........... The current event 
// ...........  Value  "start" if start button 
// ...........  Value  "a" 1 if Answer A button
// ...........  Value  "b" 1 if Answer B button
// ...........  Value  "c" 1 if Answer C button
// ...........  Value  "d" 1 if Answer D button
// ...........  Value  "timer" if start button 
var callButton = "none"

// ............Timer Minutes and Seconds remaining
var timeLeft = 0;

// ............Tracks the number of questions asked 
var quizCtr = 0;
//  ...........randomized list of Indexes for the quiz questions
var randomQuestion = [];
//  ...........correct answer to the current question 
var correctAns = "not set";

// ...........do I need? Tracks the number of questions asked 
var hallOfFame= [{
  player: "AAA",
  rightAns: 0,
  wrongAns: 0,
  timeLeft: "99:99",
}];

//  ...........current player information  
var playerRecord = [{
  player: "xxx", 
  rightAns: 9, 
  wrongAns: 9, 
  timeLeft: "99:99",
}];

// Gets a random list of 10 questions making sure none duplicate
function randomQuestions() {
  // console.log(">>> Entered randomQuestions <<<<")
  var randomList = [];
  do { 
    // get random index from number of available quiz questions 
    var randomIdx = Math.floor(Math.random() * quiz.length);
    // if not duplicate, add to list
    if (randomList.indexOf(randomIdx) == -1) {
      randomList.push(randomIdx);
    } 
  } while (randomList.length < 10) ;
  return  randomList; 
};

// initialize the global variables for the quiz
function initQuiz() {
  // console.log(">>> Entered initQuiz function <<<<");

  //  display timer
  timeLeft = ((5 * 60) + 0)
  timerEl.textContent = "05:00";

  buildHall();
  quizCtr = 0 ;

  // prompt player initials
  playerRecord[0].player = prompt("What are your initials?", "XXX");
  // playerRecord[0].player = "XXX";
  playerRecord[0].rightAns = 0;
  playerRecord[0].wrongAns = 0;
  playerRecord[0].timeLeft = "99:99";
  // get a different set of questions at the start of each quiz
  randomQuestion = randomQuestions();
};

function buildHall() {
  // console.log(">>> Entered buildHall function <<<<");
  var storedHOF = JSON.parse(localStorage.getItem("HallOfFame")) || [];

  // If stored data is null save an empty array
  if (storedHOF == null) {
    localStorage.setItem("HallOfFame", "[]");
    storedHOF = [];
  }

  hallOfFame = storedHOF;
  // console.log(">>> Hall Of Fame==>>", hallOfFame);

  //  clears all children of the parent
  //   Hall of Fame Display on the screen
  while (displayHOFEl.firstChild) {
    displayHOFEl.removeChild(displayHOFEl.firstChild);
  };

  var textHOF = "";

  if (hallOfFame.length === 0) {
    // console.log("Hall of Fame array is empty");
    var pEl = document.createElement("p"); // create "p" element
    textHOF = "No famous people yet";
    pEl.textContent = textHOF;
    displayHOFEl.appendChild(pEl); // connect the p element to the "div"
  } else {
    // create table
    var tableEl = document.createElement("table"); // create "table" element
    displayHOFEl.appendChild(tableEl); // connect the table element to the "div"
    // create table heading row
    var trEl = document.createElement("tr"); // create "tr" element
    tableEl.appendChild(trEl); // connect the row element to the table
    // create table heading elements
    var thEl = document.createElement("th"); // create "th" element
    thEl.textContent = "Player";
    trEl.appendChild(thEl); // connect the heading element to the table row
    // create table heading elements
    var thEl = document.createElement("th"); // create "th" element
    thEl.textContent = "# Right";
    trEl.appendChild(thEl); // connect the heading element to the table row
    // create table heading elements
    var thEl = document.createElement("th"); // create "th" element
    thEl.textContent = "# Wrong";
    trEl.appendChild(thEl); // connect the heading element to the table row
    // create table heading elements
    var thEl = document.createElement("th"); // create "th" element
    thEl.textContent = "Time Left";
    trEl.appendChild(thEl); // connect the heading element to the table row

    for (let record in hallOfFame) {
      var trEl = document.createElement("tr"); // create "tr" element
      tableEl.appendChild(trEl); // connect the row element to the table
      // create table heading elements
      var tdEl = document.createElement("td"); // create "td" element
      tdEl.textContent = hallOfFame[record].player;
      trEl.appendChild(tdEl); // connect the heading element to the table row
      // create table heading elements
      var tdEl = document.createElement("td"); // create "td" element
      tdEl.textContent = hallOfFame[record].rightAns;
      trEl.appendChild(tdEl); // connect the heading element to the table row
      // create table heading elements
      var tdEl = document.createElement("td"); // create "td" element
      tdEl.textContent = hallOfFame[record].wrongAns;
      trEl.appendChild(tdEl); // connect the heading element to the table row
      // create table heading elements
      var tdEl = document.createElement("td"); // create "td" element
      tdEl.textContent = hallOfFame[record].timeLeft;
      trEl.appendChild(tdEl); // connect the heading element to the table row
    };
  };
};

// runs when quizWiz is -1 (end state)
function endQuiz() {
  // console.log(">>> Entered endQuiz function <<<<");
  // update Hall Of Fame
  playerRecord[0].timeLeft = displayTime();
  timerEl.textContent = displayTime();

  questionAreaEl.innerHTML = "      Great Job, " + playerRecord[0].player + "!";
  choice1El.innerHTML= " You had " + playerRecord[0].rightAns + " right answers and " + playerRecord[0].wrongAns + " wrong.";
  if (callButton === "timer") {
    choice2El.innerHTML= "          You had ran out of time.";
  } else {   
    choice2El.innerHTML= "          You had " + playerRecord[0].timeLeft + " time remaining.";
  }
  choice3El.innerHTML= "                         Quiz is done!";
  choice4El.innerHTML= "                  I hope you had a good time.";
  storeScore();
};

function storeScore() {
  console.log(">>> Entered storeScore function <<<");
  console.log(" Hall of Fame  ==>" + hallOfFame);
  console.log(" playerRecord ==>" + playerRecord[0].player + '/' + playerRecord[0].rightAns + '/' + playerRecord[0].wrongAns + '/' + playerRecord[0].timeLeft);
  
  if (hallOfFame.length < 5) {
    hallOfFame.push(playerRecord[0]);
  } else {
    hallOfFame.shift();
    hallOfFame.push(playerRecord[0]);
  };
  localStorage.setItem("HallOfFame", JSON.stringify(hallOfFame));
  buildHall();
};

//  Subtract time from timer using Global vars
function subtractTime (minutes,seconds) {
  console.log(">>> Entered subtractTime function <<<<")
  timeLeft -= ((minutes * 60) + seconds);
};

// Timer that counts down from 5 min 0 sec
function runTimer() {
  // console.log(">>> Entered runTimer function <<<<")
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timerInterval = setInterval(function () {
    timeLeft--;
    // if end of questions, stop the timer
    if (quizWiz === -1) { 
      // Use `clearInterval()` to stop the timer
      clearInterval(timerInterval);
    } else if (timeLeft <= 0) {
      console.log(">>> Out of Time message here <<<" );
      timerEl.textContent = "00:00";
      timeLeft = 0;
      alert("You ran out of time!");
      // Use `clearInterval()` to stop the timer
      clearInterval(timerInterval);
      callButton = "timer";       // set the call status
      quizWiz = -1;                 // set state to quiz over
      stateOfTheUnion();
    } else {
     // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = displayTime();
    };
  }, 1000);
};

function displayTime () {
  // console.log(">>> Entered displayTime function <<<<")
  var displayTime  = "";
  var timeMinsLeft = Math.floor(timeLeft / 60);
  var timeSecsLeft = timeLeft % 60;
  displayTime = "";
  if (timeMinsLeft <= 9) {
    displayTime += "0";
  };
  displayTime += timeMinsLeft;
  displayTime +=  ":";
  if (timeSecsLeft <= 9) {
    displayTime += "0";
  }; 
  displayTime += timeSecsLeft;
  return displayTime;
};

function AskQuestion () {
  // console.log(">>> Entered AskQuestion function <<<<");
  // Testing access to quiz questions
    
  if (callButton == 'start') {
    // console.log(" Should be first Question ");
    quizCtr = 0;
  } else {
    quizCtr++;
  };
    
  // run the loop to ask the questions
  if (quizCtr < randomQuestion.length) {
    var questionIdx = randomQuestion[quizCtr];
    //  populate Question and choices
    questionAreaEl.innerHTML= quiz[questionIdx].question;
    choice1El.innerHTML= quiz[questionIdx].choices.a;
    choice2El.innerHTML= quiz[questionIdx].choices.b;
    choice3El.innerHTML= quiz[questionIdx].choices.c;
    choice4El.innerHTML= quiz[questionIdx].choices.d;
    // hold the correct answer
    correctAns = quiz[questionIdx].correct;
  } else {
    //  All questions have been asked-- set the end quiz switch
    quizWiz = -1;
    stateOfTheUnion();
  }
};

//  check the answer
function checkAnswer() {
  // console.log(">>> Entered checkAnswer function <<<<");
  if (callButton == correctAns) {
    playerRecord[0].rightAns++;
  } else {
    playerRecord[0].wrongAns++;
    subtractTime(0,30);
  }
};

//  event onclick guess Button A
function guessAnswerA(event) {
  // console.log(">>> Entered guessAnswerA function <<<<");
  // event.preventDefault();
  callButton = "a";
  stateOfTheUnion();
};

//  event onclick guess Button B
function guessAnswerB(event) {
  // console.log(">>> Entered guessAnswerB function <<<<");
  // event.preventDefault();
  callButton = "b";
  stateOfTheUnion();
};

//  event onclick guess Button C
function guessAnswerC(event) {
  // console.log(">>> Entered guessAnswerC function <<<<");
  // event.preventDefault();
  callButton = "c";
  stateOfTheUnion();
};

//  event onclick guess Button D
function guessAnswerD(event) {
  // console.log(">>> Entered guessAnswerD function <<<<");
  // event.preventDefault();
  callButton = "d";
  stateOfTheUnion();
};

// Event onclick start button
function startQuiz(event) {
  // console.log(">>> Entered startQuiz function <<<<");
  // event.preventDefault();
  callButton = "start";
  stateOfTheUnion();
};

function stateOfTheUnion() {
  // console.log(">>> Entered stateOfTheUnion function <<<<");
  switch (quizWiz) {
    case -1:
      console.log(">>> End quiz <<<<" );
      console.log("quizWiz ==>" + quizWiz);
      console.log("callButton==>" + callButton)
      //  quiz is over
      if (callButton === "start") {
        console.log(">>> restart quiz <<<<");
        quizWiz = 0;
        stateOfTheUnion();
      } else {
        endQuiz();
      }
      break;
    case 0:
      console.log(">>> begin quiz <<<<");
      console.log("quizWiz ==>" + quizWiz);
      console.log("callButton==>" + callButton)
      // quiz has started
      if (callButton !== "start") {
        console.log(">>> What are you doing? You need to press start button.");
      } else {
        quizWiz = 1;
        initQuiz();
        runTimer(5,0);
        AskQuestion();
      }
      break;
    case 1:
      console.log(">>> quiz in progress<<<<");
      console.log("quizWiz ==>" + quizWiz);
      console.log("callButton==>" + callButton)
      // quiz has started
      if (callButton === "start") {
        console.log(">>> What are you doing? The quiz is in progress. You can\'t restart now.");
      } else {
        // quizWiz = 1;
        checkAnswer();
        AskQuestion();
      }
      break;
    default:
      console.log(">>> What happened here?");
      console.log("quizWiz ==>" + quizWiz);
      console.log(" callButton ==>" + callButton)
      break;
  }
}
