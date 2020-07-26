var Div1=document.createElement("div"); // Adding div
Div1.className='Main-div';
Div1.id='MainDiv';

var Start_button=document.createElement("button");   //Start button.
Start_button.className='start-button';
Start_button.id='Sbutton';
Start_button.innerHTML='Start';
Div1.appendChild(Start_button);

var Difficult_level=document.createElement("SELECT");  //Game Difficult level.
Difficult_level.className='Game-level';
var option1=document.createElement("option");//Easy
option1.value= 'Easy';
option1.innerHTML= 'Easy';
Difficult_level.appendChild(option1);
var option2=document.createElement("option");//Medium
option2.value='Medium';
option2.innerHTML='Medium';
Difficult_level.appendChild(option2);
var option3=document.createElement("option");//Hard
option3.value='Hard';
option3.innerHTML='Hard';
Difficult_level.appendChild(option3);
Div1.appendChild(Difficult_level);

var timer_label=document.createElement("label");  // timer label
timer_label.className="timer";
timer_label.id="timer_label";
timer_label.innerText="Timer : ";
Div1.appendChild(timer_label);

var timer=document.createElement("h1");// time counter
timer.className="timer";
timer.id="time_counter";
timer.innerHTML="0";
Div1.appendChild(timer);

var Score_label=document.createElement("label"); // score label
Score_label.className="score-lab";
Score_label.id="score_label";
Score_label.innerText="Score : ";
Div1.appendChild(Score_label);


var Score=document.createElement("h1"); // score
Score.className="scorecount";
Score.id="score";
Score.innerHTML="0";
Div1.appendChild(Score);

var grid=document.createElement("div"); // creating a grid
grid.className="grid-container";
grid.id="Mine-grid";
grid.style.setProperty('--grid-rows', 16);
  grid.style.setProperty('--grid-cols', 16 );
  
  var cell=[];
  for (let c = 0; c < (16 * 16); c++) {
    cell[c] = document.createElement("div");
    //cell.innerHTML = (c + 1);                           //cell value
  //  var mine= document.createAttribute("Mines");   // creating a mine attribute and assigniing it to false by default
    //mine.value="false";
    //    cell[c].setAttributeNode(mine);
    grid.appendChild(cell[c]).className = "grid-item";

  };
Div1.appendChild(grid);

document.body.appendChild(Div1);   // appending the div to body


/// Game Logic

var Start_Game=(cell)=>
{ 
 addmines(cell);    // adding mines.
    addNumbers(cell)// adding Number to the grids.
    ClickCellEvent(cell);  //capturing ell event.
    // Running the timer
    setInterval(function(){
        if(seconds==0)
       {    timer.innerHTML=seconds;
            Gameover();
            clearInterval();
        }
        else
        timer.innerHTML=seconds--;
       },1000,seconds=30);
    Start_button.disabled=true;
}

Start_button.addEventListener("click",()=>{ Start_Game(cell)});/// Start actions

function addmines(cell)
{
    var arr = [];
    while (arr.length < 40) {
        var r = Math.floor(Math.random() * 256) + 1;
        if (arr.indexOf(r) === -1)
            arr.push(r);
    }
    for (let i = 0;i < arr.length; i++) {
        cell[arr[i]].innerHTML="X";
    }
}
function addNumbers(cell) {
    for (let i = 0; i < 256; i++) {
         if (cell[i].innerHTML!=='X') {
             let r=Math.floor(Math.random()*8);
             cell[i].innerHTML=r;
         }
    }   
}
function ClickCellEvent(cell) {
    for (let i = 0; i <256; i++) {
        var s=0;
        cell[i].addEventListener("click",()=>
        {
            if (cell[i].innerHTML==="X") {
                Gameover();
            }
            else{
                Score.innerHTML=++s;
            }
        })
    }
}
function Gameover()
{
    var EndGame=document.createElement('a'); // adding play button on the Image.
EndGame.className="end-Button";
EndGame.id="endButton"
EndGame.innerText="END";
EndGame.setAttribute("href","EndGame.html") ;

}