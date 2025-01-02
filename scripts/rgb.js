// initialisation of game state
let gameActive = true;
let score = 0;
let scoreElement = document.getElementById("score");
let rgb = [getRandomInt(256),getRandomInt(256),getRandomInt(256)];
let rgbElement = document.getElementById("pickedColour")
let correctBox = 0
let motivate = document.getElementById("motivate");
let comment = ["Nice!","Yeah! You got it!","That's correct!","Keep it up!","Woohoo!","Awesome!"]
let retry = document.getElementById("retry");

// we need to store our palette boxes
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

// set the page score to 0
scoreElement.innerText = 'Score: ' + score;

//scoreboard storage
let scoreBoard = document.querySelectorAll('.score');

// Event listeners
box1.addEventListener('click', guess, false);
box2.addEventListener('click', guess, false);
box3.addEventListener('click', guess, false);
retry.addEventListener('click', retryGame, false);

//--------------------------------------------------

gameLoop();


function gameLoop(){

    //set the picked RGB
    rgbElement.innerText = `RGB( ${rgb[0]}, ${rgb[1]}, ${rgb[2]} )`

    //ensure the retry button is not shown
    retry.style.display = 'none';

    // set up the colour palette boxes
    colourSetup();
    scoreboard();



}

function guess(clickedBoxEvent){
    if (gameActive){
        const clickedBox = clickedBoxEvent.target;
        const clickedBoxIndex = parseInt(clickedBox.id.replace('box',''));
        
        // did the player guess right?

        //correct
        if (clickedBoxIndex === correctBox){
            console.log("correct!");
            score += 1;

            // Update score on page
            scoreElement.innerText = 'Score: ' + score;

            // motivate
            motivate.innerText = comment[getRandomInt(comment.length)];
            party.confetti(this);



            // new colour
            rgb = [getRandomInt(256),getRandomInt(256),getRandomInt(256)];
            gameLoop();
        }
        //incorrect
        else if (clickedBoxIndex != correctBox){
            gameActive = false;
            console.log("Incorrect!");
            score = 0;
            // Update score on page
            scoreElement.innerText = 'Score: ' + score;
            motivate.innerText = "Noooo! :( Try again!";
            retry.style.display = 'inline';
        }
    }

}

function retryGame(){
    gameActive = true;
    rgb = [getRandomInt(256),getRandomInt(256),getRandomInt(256)];
    motivate.innerText = "Let's go!";
    scoreboard();
    gameLoop();
}

function scoreboard(){
    for (let i = 0; i < scoreBoard.length; i++){

        let s = parseInt(scoreBoard[i].innerText);
        if (s < score){
            scoreBoard[i].innerText = score;
            break;
        }
    }
}


function colourSetup(){

    let choose = getRandomInt(3);

    if (choose === 0){
        box1.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        box2.style.backgroundColor = randomColour();
        box3.style.backgroundColor = randomColour();
        correctBox = 1;
    }
    else if (choose === 1){
        box2.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        box1.style.backgroundColor = randomColour();
        box3.style.backgroundColor = randomColour();
        correctBox = 2;       
    }
    else if (choose === 2){
        box3.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        box2.style.backgroundColor = randomColour();
        box1.style.backgroundColor = randomColour();
        correctBox = 3
    }
}

function randomColour(){
    let randrgb = [getRandomInt(256),getRandomInt(256),getRandomInt(256)]
    if (randrgb === rgb){
        randomColour();
    }
    else{
        return 'rgb(' + randrgb[0] + ',' + randrgb[1] + ',' + randrgb[2] + ')';
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

