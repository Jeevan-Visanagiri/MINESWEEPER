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
  for (let c = 0; c < (16 * 16); c++) {
    let cell = document.createElement("div");
    //cell.innerHTML = (c + 1);                           //cell value
    grid.appendChild(cell).className = "grid-item";
  };
Div1.appendChild(grid);

document.body.appendChild(Div1);   // appending the div to body


/// Game Logic

var Start_Game=()=>
{
    // Running the timer
    setInterval(function(){
        if(seconds==0)
            clearInterval();
        else
        timer.innerHTML=seconds--;
    },1000,seconds=300);
    Start_button.disabled=true;
}

Start_button.addEventListener("click",()=>{ Start_Game()});  ''
