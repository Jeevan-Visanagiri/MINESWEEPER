var div1=document.createElement("div"); // Inserting Div tag into body.
div1.className='Homepagediv';
div1.id='FirstDiv';

var backgroundimage=document.createElement("img"); ///adding back ground image.
backgroundimage.className="Back-ground-image";
backgroundimage.src='home-image.jpg';
div1.appendChild(backgroundimage)

var playbutton=document.createElement('a'); // adding play button on the Image.
playbutton.className="Button";
playbutton.id="PlayButton"
playbutton.innerText="PLAY";
playbutton.setAttribute("href","game-page.html")
div1.appendChild(playbutton);

var Game_title=document.createElement('h1')//Game title
Game_title.innerHTML='MINESWEEPER';
Game_title.className='title-header';
div1.appendChild(Game_title);


document.body.appendChild(div1);
