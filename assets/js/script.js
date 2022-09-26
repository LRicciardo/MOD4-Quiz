/*
eventlistener click 
start timer (count down)

>>>>>>
display a question
    with 4 answer buttons
      until all questions are answered
        or timer reaches 0
eventListner keydown
  if correct button is pushed add 1 to correct counter
  else wrong button is pushed add 1 to wrong counter 
        and subtract 1 min from timer
    
  <<<<<< 
  end of quiz
  display score (right and wrong and time)

  store in an array string 
        initials and score (correct and wrong and time)


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
var ans1El = document.getElementById('ans1').value;
var ans2El = document.getElementById('ans2').value;
var ans3El = document.getElementById('ans3').value;
var ans4El = document.getElementById('ans4').value;

var listHOFEl = document.getElementById('listHOF');

//Global variables
var timeMinsLeft = 5;
var timeSecsLeft = 0;
var timeInterval = 0;

var storedHOF = JSON.parse(localStorage.getItem("HallOfFame")) || [];

var HallOfFame= [{player: "AAA",
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
  storeScore();
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
  
  // storing last 5 players
  // for (var i in HallOfFame) {
  if (HallOfFame.length === 0) {
    var liEl = document.createElement("li");
    liEl.textContent = " no players in Hall Of Fame";
    console.log("li ===>> " + liEl.textContent);
    listHOFEl.appendChild(liEl);
  }  else {
    for (var i = 0; i < HallOfFame.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent  = HallOfFame.player + '     ';
    liEl.textContent += HallOfFame.rightAns + '     ' ; 
    liEl.textContent += HallOfFame.wrongAns + '     ' ;
    liEl.textContent += HallOfFame.minsLeft + ':';
    liEl.textContent += HallOfFame.secsLeft;
    console.log("li ===>> " + liEl.textContent);
    listHOFEl.appendChild(liEl);
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
  console.log(">>> Entered storeHallOfFame function <<<");
  console.log(">>> before playerRecord ==>" + playerRecord);
  console.log(">>> before Hall Of Fame ==>" + HallOfFame);
  console.log(">>> before storeHallOfFame ==>" + storedHOF);
  if (HallOfFame.length < 5) {
    HallOfFame.concat(playerRecord.values);
  } else {
    HallOfFame.shift();
    HallOfFame.concat(playerRecord.values);
  };
  storedHOF = localStorage.setItem("HallOfFame", JSON.stringify(HallOfFame));
  console.table(">>> after playerRecord ==>" + playerRecord);
  console.table(">>> after Hall Of Fame ==>" + HallOfFame);
  console.log(">>> after storeHallOfFame ==>" + storedHOF);
};

function askQuestions() {
  console.log(">>> Entered renderQuestion function <<<<");
  console.log (">> questions List length ==>"+ questionsList.length);
  
  // questionsIdx = inputIdx; 
  console.log("question Idx=>> " + questionsIdx);
  console.log("questionList entry>> " + questionsList[questionsIdx]);
  questionAreaEl.innerHTML = (quiz.question[questionsList(questionsIdx)])
  
  for (var i = 0; i < questionsList.length; i++) {
    questionAreaEl.innerHTML= quiz[questionsList[i]].question.text;
    ans1El.innerHTML= quiz[questionsList[i]].choices[0].text;
    ans2El.innerHTML= quiz[questionsList[i]].choices[1].text;
    ans3El.innerHTML= quiz[questionsList[i]].choices[2].text;
    ans4El.innerHTML= quiz[questionsList[i]].choices[3].text;
    correctAns = quiz[questionsList[i]].correct;
    ans1El.addEventListener("click", guessAnswerA);
    ans2El.addEventListener("click", guessAnswerB);
    ans3El.addEventListener("click", guessAnswerC);
    ans4El.addEventListener("click", guessAnswerD);
    
    }
  // storing last 5 players
  ans1El.textContent = quiz.choices.a[questionsList(questionsIdx)]; 
};

function guessAnswerA() {
  if (ans1El.dataset['data-letter'] == correctAns) {
    playerRecord.rightAns++;
  } else {
    playerRecord.wrongAns++;
    subtractTime(0,30);
  }
};
function guessAnswerB() {
  if (ans2El.dataset['data-letter'] == correctAns) {
    playerRecord.rightAns++;
  } else {
    playerRecord.wrongAns++;
    subtractTime(0,30);
  }
};
function guessAnswerC() {
  if (ans3El.dataset['data-letter'] == correctAns) {
    playerRecord.rightAns++;
  } else {
    playerRecord.wrongAns++;
    subtractTime(0,30);
  }
};
function guessAnswerD() {
  if (ans4El.dataset['data-letter'] == correctAns) {
    playerRecord.rightAns++;
  } else {
    playerRecord.wrongAns++;
    subtractTime(0,30);
  }
};

function programFlow() {
  console.log(">>> Entered programFlow function <<<<");
  event.preventDefault();
  
  prompt("What are your initials?", playerRecord.player);
  // start countdown for 5 min
  countdown(5,0);
  askQuestions();
  
  // if (timeSecsLeft > 0 || timeMinsLeft > 0) {
    // playerRecord.minsLeft = timeMinsLeft;
    // playerRecord.secsLeft = timeSecsLeft;
    // timeMinsLeft = 0;
    // timeSecsLeft = 0;
    // console.log("All questions answered");
    // console.log(" reset time interval");
    // stopInterval();
  // };
  storeScore();
  console.log(">>>>>>>>>>>>>>>>>>>  End of JavaScript  <<<<<<<<<<<<<<<<")
};

// Populate Hall of Fame, init countdown and 
 programInit();
 // Attach event listener to start button element
 startButtonEl.addEventListener("click", programFlow);