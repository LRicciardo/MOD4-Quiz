
var startButtonEl = document.getElementById('startBtn');
console.log("**** Document startButtonEl ==>>" + startButtonEl);


var listHOFEl = document.getElementById('listHOF');
console.log("**** Document listHOFEl ==>>" + listHOFEl);


var storePlayer = [];

var storeHallOfFame = [{player: "AAA",
            rightAns: 0,
            wrongAns: 0,
            recordMinLeft: "00",
            recordSecLeft: "00"}];

var playerRecord = {
  player: "xxx", 
  rightAns: 0, 
  wrongAns: 0, 
  recordMinsLeft: "00",
  recordSecsLeft: "00" , 
};

function programInit() {
  console.log(">>> Entered programInit function <<<<")
  //  display stored Hall of Fame
  retrieveHallOfFame();

};

// retrieve Hall of Fame names from stroage 
function retrieveHallOfFame() {
  console.log(">>> Entered retrieveHallOfFame function <<<<");
  storeHallOfFame = JSON.parse(localStorage.getItem("HallOfFame"));
  storePlayer = JSON.parse(localStorage.getItem("Player"));
  console.log("String in LocalStorage==>>", storePlayer);
  
  
  // Check if data is returned, if not exit out of the function
  if (storeHallOfFame !== null) {
    console.log("Storage is not null --populate==>>");
    console.log(">>>>>>>>this.");
    console.log(this);

    // listHOFEl.innerHTML = "";
    // renderHOF();
    // document.getElementById("saved-name").innerHTML = lastGrade.student;
    // document.getElementById("saved-grade").innerHTML = lastGrade.grade;
    // document.getElementById("saved-comment").innerHTML = lastGrade.comment;
  } else {
    return;
  };
};


function renderHOF() {
  console.log(">>> Entered renderHOF function <<<<");
  listHOFEl.innerHTML = "";
  
  // storing last 5 players
  for (var i = 0; i < 5; i++) {
    
    var liEl = document.createElement("li");
    liEl.textContent  = storeHallOfFame.player[i].value + '    ' ;
    liEl.textContent += storeHallOfFame.rightAns + '     ' ; 
    liEl.textContent += storeHallOfFame.wrongAns + '     ' ;
    liEl.textContent += storeHallOfFame.recordMinLeft + ':' + storageHallOfFame.recordSecLeft;
    
    liEl.setAttribute("data-index", i);
    
    console.log("li ===>> " + liEl);
    listHOFEl.appendChild(liEl);
  };
};

function storeScore() {
  console.log(">>> Entered storeScore function <<<");
  console.log(">>> playerRecord ==>" + playerRecord);
  console.log(">>> storeHallOfFame ==>" + storeHallOfFame);
  if (storeHallOfFame.length < 5) {
    storeHallOfFame.push(playerRecord);
  } else {
    storeHallOfFame.shift();
    storeHallOfFame.push(playerRecord);
  };
  localStorage.setItem("HallOfFame", JSON.stringify("HallOfFame",storeHallOfFame));
};


function programFlow() {
  console.log(">>> Entered programFlow function <<<<");


  storeScore();

  console.log(">>>>>>>>>>>>>>>>>>>  End of JavaScript  <<<<<<<<<<<<<<<<")
};

// Populate Hall of Fame, init countdown and 
 programInit();
 programFlow();
 // Attach event listener to start button element
//  startButtonEl.addEventListener("click", programFlow);