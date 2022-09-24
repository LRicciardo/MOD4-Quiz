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

  store in an arrary string 
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

var startButtonEl = document.getElementById('startBtn');
var timerEl = document.getElementById('finalCountdown');
var listHOF = document.querySelector('listHOF');
var timeMinLeft = 5;
var timeSecLeft = 0;


var storageHallOfFame = {};
var playerRecord = {
  player: "xxx", 
  rightAns: 0, 
  wrongAns: 0, 
  recordMinsLeft: 0,
  recordSecsLeft:0 , 
};
// This variable will hold the randomized list of Indexes for the quiz questions
var questionsList = [];
var questionsCtr = 0;


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

function programInit() {
  console.log(">>> Entered programInit function <<<<")
  //  display timer
  timerEl.textContent = "05:00";
  //  display stored Hall of Fame
  retrieveHallOfFame();
  // create 10 random questions
  questionsList = randomQuestions();
  console.log('questionsList>> ' + questionsList);
}


// retrieve Hall of Fame names from stroage 
function retrieveHallOfFame() {
  console.log(">>> Entered retrieveHallOfFame function <<<<");
  storageHallOfFame = JSON.parse(localStorage.getItem("HallOfFame"));
  console.log("String saved in LocalStorage==>>", storageHallOfFame);
  
  
  // Check if data is returned, if not exit out of the function
  if (storageHallOfFame !== null) {
    console.log("Storage is not null --populate==>>");
    // renderHOF();
    // document.getElementById("saved-name").innerHTML = lastGrade.student;
    // document.getElementById("saved-grade").innerHTML = lastGrade.grade;
    // document.getElementById("saved-comment").innerHTML = lastGrade.comment;
  } else {
    return;
  };
};
function renderHOF() {
  listHOF.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  for (var i = 0; i < listHOF.length; i++) {
    var playerHOF = player[i];
    
    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);
    
    li.appendChild(button);
    todoList.appendChild(li);
  };
};

//  Subtract time from timer using Global vars
function subtractTime (minutes,seconds) {
  if (timeSecLeft > seconds) {
    timeSecLeft -= seconds;
  } else if (timeMinLeft > 0) {
    timeMinLeft--;
    timeSecLeft -= seconds + 60;
  } else {
    timeSecLeft = 0;
    timeMinLeft = 0;
    return;
  };
  if (timeMinLeft >= minutes) {
    timeMinLeft -= minutes;
  } else {
    timeSecLeft = 0;
    timeMinLeft = 0;
  };
};

// Timer that counts down from 5 min 0 sec
function countdown(minutes,seconds) {
  console.log(">>> Entered countdown function <<<<")
  timeMinLeft = minutes;
  timeSecLeft = seconds;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeSecLeft > 0) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeMinLeft + ':' + timeSecLeft;
      // Decrement `timeLeft` by 1
      timeSecLeft--;
    } else if (timeMinLeft > 0) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeMinLeft + ':' + timeSecLeft;
      timeMinLeft--;
      timeSecLeft = 59;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

function getAnswer() {
  console.log(">>> Entered getAnswer function <<< counter=" + questionCtr);
  questionsCtr++;
  // renderQuestion();

  //  onkeydown event

  //  if target is correct
  //    add 1 to the rightAns++
  //  else
  //    add 1 to the wrong counter
  //    display wrong ans
  //    subtractTime(0,30)
};

function programFlow() {
  console.log(">>> Entered programFlow function <<<<");
  event.preventDefault();
  
  prompt("What are your initials?", playerRecord.player);
  // start countdown for 5 min
  countdown(5,0);
  questionsList.foreach(getAnswer);
  //  retrieve first question and answerChoices (need a flag for which is correct)
  //  display question/answer
  //onkeydown event
  //  if answer is correct
  //    add 1 to the correct counter 
  //    got to next question
//  else
//    add 1 to the wrong counter
//    display wrong ans
//    subtract 30 seconds from timer subtractTime(0,30)
console.log (">> quiz length ==>"+ quiz.length);

//  if player completed question in time store in hall of fame
localStorage.setItem("HallOfFame", JSON.stringify(playerRecord));
console.log("Just setItem HallOfFame");
};

// Populate Hall of Fame, init countdown and 
 programInit();
 // Attach event listener to start button element
 startButtonEl.addEventListener("click", programFlow);