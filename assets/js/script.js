/*

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
  c: "Nagahama Plaza",
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
  a: "Nightmare on ELm Street", 
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
correct: "d",
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
//DOM Elements
var startButtonEl = document.getElementById('startBtn');
var timerEl = document.getElementById('finalCountdown');

var questionAreaEl = document.getElementById('questionArea');
var guess1El = document.getElementById('guess1');
var guess2El = document.getElementById('guess2');
var guess3El = document.getElementById('guess3');
var guess4El = document.getElementById('guess4');
var choice1El = document.getElementById('choice1');
var choice2El = document.getElementById('choice2');
var choice3El = document.getElementById('choice3');
var choice4El = document.getElementById('choice4');

var listHOFEl = document.getElementById('listHOF');

//Global variables
var timeMinsLeft = 5;
var timeSecsLeft = 0;
var timeInterval = 0;

var storedHOF = JSON.parse(localStorage.getItem("HallOfFame")) || [];

var hallOfFame= [{
  player: "AAA",
  rightAns: 0,
  wrongAns: 0,
  minsLeft: 0,
  secsLeft: 0
}];

var playerRecord = [{
  player: "xxx", 
  rightAns: 9, 
  wrongAns: 9, 
  MinsLeft: 99,
  secsLeft: 99 
}];

// This variable will hold the randomized list of Indexes for the quiz questions
var questionsList = randomQuestions();
var questionsIdx = 0;


function programInit() {
  console.log(">>> Entered programInit function <<<<")
  //  display timer
  timerEl.textContent = "05:00";
  //  display stored Hall of Fame
  retrieveHallOfFame();
  console.log('questionsList>> ' + questionsList);
  // Testing access to quiz questions
  console.log("random question list Idx=>> " + questionsIdx);
  console.log("random question list quiz idx # =>> " + questionsList[questionsIdx]);
  console.log("quiz length ==>" + quiz.length);
  var testIdx = questionsList[questionsIdx];
  console.log("quiz question ==>" + quiz[testIdx].question);
  console.log("quiz choice 1 ==>" + quiz[testIdx].choices.a);
  prompt("What are your initials?", playerRecord[0].player);
  playerRecord[0].rightAns = 0;
  playerRecord[0].wrongAns = 0;
  playerRecord[0].minsLeft = 0;
  playerRecord[0].secsLeft = 0;
};
function programClose() {
  console.log(">>> Entered programClose function <<<<");
  // update Hall Of Fame
  storeScore();
  questionAreaEl.innerHTML = "      Great Job! ";
  choice1El.innerHTML= "         Quiz is done!";
  choice2El.innerHTML= " I hope you had a good time.";
  choice3El.innerHTML= " ";
  choice4El.innerHTML= " ";
};

// retrieve Hall of Fame names from stroage 
function retrieveHallOfFame() {
  console.log(">>> Entered retrieveHallOfFame function <<<<");
  
  // If stored data is null save an empty array
  if (storedHOF == null) {
    console.log("Storage is null --save an empty array");
    localStorage.setItem("HallOfFame","[]");
    storedHOF = [];
  }
  console.log("LocalStorage Hall Of Fame==>>", storedHOF);
  HallOfFame = storedHOF;
  renderHOF();
};

function renderHOF() {
  console.log(">>> Entered renderHOF function <<<<");
  listHOFEl.innerHTML = "";
  var textHOF = "";
  console.log(">>> Hall Of Fame Length ==>" + HallOfFame.length);
  // storing last 5 players
  // for (var i in HallOfFame) {
    if (HallOfFame.length === 0) {
      console.log(">>> inside if length 0 ==>");
      var liEl = document.createElement("li");           // create "li" element
      textHOF = "No players in Hall Of Fame";
      liElText = document.createTextNode(textHOF);       // create "li" textNode 
      liEl.appendChild(liElText);   // connect the text to the element
      listHOFEl.appendChild(liEl);  // connect the element to the list
  }  else {
    for (var i = 0; i < HallOfFame.length; i++) {
      var liEl = document.createElement("li");          // create "li" element
      textHOF  = HallOfFame.player   + '     ';
      textHOF += HallOfFame.rightAns + '     ' ; 
      textHOF += HallOfFame.wrongAns + '     ' ;
      textHOF += HallOfFame.minsLeft + ':';
      textHOF += HallOfFame.secsLeft;
      textHOF += HallOfFame.secsLeft;
      console.log("textHOF ===>> " + textHOF);
      liElText = document.createTextNode(textHOF);       // create "li" textNode 
      liEl.appendChild(liElText);   // connect the text to the element
      listHOFEl.appendChild(liEl);  // connect the element to the list
  };
  };
};

// Gets a random list of 10 questions making sure none duplicate
function randomQuestions() {
  console.log(">>> Entered randomQuestions <<<<")
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
    
//  Subtract time from timer using Global vars
function subtractTime (minutes,seconds) {
  if (timeSecsLeft > seconds) {
    timeSecsLeft -= seconds;
  } else if (timeMinsLeft > 0) {
    timeMinsLeft--;
    timeSecsLeft -= seconds + 60;
  } else {
    timeSecsLeft = 0;
    timeMinsLeft = 0;
    return;
  };
  if (timeMinsLeft >= minutes) {
    timeMinsLeft -= minutes;
  } else {
    timeSecsLeft = 0;
    timeMinsLeft = 0;
  };
};

// Timer that counts down from 5 min 0 sec
function countdown(minutes,seconds) {
  console.log(">>> Entered countdown function <<<<")
  timeMinsLeft = minutes;
  timeSecsLeft = seconds;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeSecsLeft > 0) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeMinsLeft + ':' + timeSecsLeft;
      // Decrement `timeLeft` by 1
      timeSecsLeft--;
    } else if (timeMinsLeft > 0) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeMinsLeft + ':' + timeSecsLeft;
      timeMinsLeft--;
      timeSecsLeft = 59;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '00:00';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
      console.log(">>> Out of Time message here <<<" );
    }
  }, 1000);
};

// Clear Timer 
function stopInterval() {
  console.log(">>> Entered clearInterval function <<<<")
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
      console.log(">>> Stopped timer message here <<<" );
  }, 1000);
};

// stores last 5 players on Hall of Fame in local Storage
function storeScore() {
  console.log(">>> Entered storeScore function <<<");

  if (hallOfFame.length < 5) {
    hallOfFame.concat(playerRecord);
  } else {
    hallOfFame.shift();
    hallOfFame.concat(playerRecord);
  };
  localStorage.setItem("HallOfFame", JSON.stringify(hallOfFame));
};

function askQuestions() {
  console.log(">>> Entered renderQuestion function <<<<");
  
  // questionsIdx = inputIdx; 
  console.log("question Idx=>> " + questionsIdx);
  console.log("questionList entry>> " + questionsList[questionsIdx]);
  // questionAreaEl.innerHTML = (quiz.question[questionsList(questionsIdx)])
  questionAreaEl.innerHTML = "quiz.question.randomidx";
  choice1El.innerHTML= "quiz.choice 1";
  choice2El.innerHTML= "quiz.choice 2";
  choice3El.innerHTML= "quiz.choice 3";
  choice4El.innerHTML= "quiz.choice 4";
  
  for (var i = 0; i < questionsList.length; i++) {
    var quizIdx = questionsList[i]
    questionAreaEl.innerHTML= quiz[quizIdx].question;
    choice1El.innerHTML= quiz[quizIdx].choices.a;
    choice2El.innerHTML= quiz[quizIdx].choices.b;
    choice3El.innerHTML= quiz[quizIdx].choices.c;
    choice4El.innerHTML= quiz[quizIdx].choices.d;
    
    correctAns = quiz[quizIdx].correct;
    console.log (">> correctAns ==>" + correctAns);
    choice1El.addEventListener("click", guessAnswerA);
    choice2El.addEventListener("click", guessAnswerB);
    choice3El.addEventListener("click", guessAnswerC);
    choice4El.addEventListener("click", guessAnswerD);
  }
  // storing last 5 players
  // choice1El.textContent = quiz.choices.a[questionsList(questionsIdx)]; 
};

function guessAnswerA(event) {
  console.log(">>> Entered guessAnswerA function <<<<");
  event.preventDefault();

  if (choice1El.dataset['data-choice'] == correctAns) {
    playerRecord.rightAns++;
  } else {
    playerRecord.wrongAns++;
    subtractTime(0,30);
  }
};
function guessAnswerB(event) {
  console.log(">>> Entered guessAnswerB function <<<<");
  event.preventDefault();

  if (choice2El.dataset['data-choice'] == correctAns) {
    playerRecord.rightAns++;
  } else {
    playerRecord.wrongAns++;
    subtractTime(0,30);
  }
};
function guessAnswerC(event) {
  console.log(">>> Entered guessAnswerC function <<<<");
  event.preventDefault();

  if (choice3El.dataset['data-choice'] == correctAns) {
    playerRecord.rightAns++;
  } else {
    playerRecord.wrongAns++;
    subtractTime(0,30);
  }
};
function guessAnswerD(event) {
  console.log(">>> Entered guessAnswerD function <<<<");
  event.preventDefault();

  if (choice4El.dataset['data-choice'] == correctAns) {
    playerRecord.rightAns++;
  } else {
    playerRecord.wrongAns++;
    subtractTime(0,30);
  }
};

function programFlow(event) {
  console.log(">>> Entered programFlow function <<<<");
  event.preventDefault();
    prompt("What are your initials?", playerRecord.player);
  // start countdown for 5 min
  countdown(5,0);
  askQuestions();
};

// Populate Hall of Fame, init countdown and 
programInit();
// Attach event listener to start button element
startButtonEl.addEventListener("click", programFlow);
programClose();
console.log(">>>>>>>>>>>>>>>>>>>  End of JavaScript  <<<<<<<<<<<<<<<<")