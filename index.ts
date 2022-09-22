//Refrences
const startGame = document.querySelector(".start-game") as HTMLButtonElement;
const typeContainer = document.querySelector(".type") as HTMLDivElement;
const singlePlayer = document.querySelector(".single") as HTMLButtonElement;
const text = document.querySelector(".text") as HTMLHeadingElement;
const multiplayer = document.querySelector(".multi") as HTMLButtonElement;
const boxes = document.querySelectorAll<HTMLElement>(".box");
const gameContainer = document.querySelector(".container") as HTMLDivElement;
const reset = document.querySelector(".reset") as HTMLButtonElement;
const img = document.querySelector(".img") as HTMLImageElement;
const scoreContainer = document.querySelector(".score") as HTMLDivElement;
let playerX_score = document.querySelector(".x") as HTMLSpanElement;
let playerO_score = document.querySelector(".o") as HTMLSpanElement;

//when start button is being clicked.

startGame.addEventListener("click", () => {

    startGame.style.transform = "translateX(-120px)"
    setTimeout( () => {
        startGame.style.display = "none";
    }, 500)
    
    setTimeout(() => {
        typeContainer.style.display = 'block'
    }, 600);

});

//Draw the game area

window.addEventListener("DOMContentLoaded", drawBoard);

function drawBoard(): void {

    boxes.forEach( (item, index ) => {

        if( index < 3 ) {

            item.style.borderTop = "0";
        }

        if( index % 3 == 0 ) {

            item.style.borderLeft = "0";
        }

        if( index % 3 == 2 ) {

            item.style.borderRight = "0";
        }

        if( index > 5 ) {

            item.style.borderBottom = "0";
        }

        item.addEventListener("click", gameLoaded, { once: true});
    });
}

multiplayer.addEventListener("click", Init);

//Initialize game.
function Init():void {
    
    setTimeout( () => {
        text.innerHTML = "Let's play";
    }, 2000);

    showScores();
    
    if( removeTexts() ) {
        showGameArea();
    }
}

//Remove all irrelevant stuff when game starts.

function removeTexts():boolean {

    typeContainer.style.transform = "translateX(100px)";

    setTimeout( () => {
        typeContainer.style.display = "none";
    }, 900)

    return true;
}

//Show the game area afterwards.

function showGameArea(): void {

    setTimeout( () => {
        gameContainer.style.display = "block";
    }, 1000);
}

function showScores():void {

    setTimeout( () => {
        scoreContainer.style.display = "block";
    }, 1000);
}


let spaces:string[] = ['', '', '', '', '', '', '', '', ''];

const player_O:string = "O";
const player_X:string = "X";
let currentPlayer = player_O;

function gameLoaded( e:Event | any ):boolean | void {

    const id = e.target.id;
    
    if( !spaces[id] ) {
        
        spaces[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;
    }

    if( playerHasWon() ) {
        return;
    }

    currentPlayer = currentPlayer == player_O ? player_X : player_O;
    text.innerHTML = `${currentPlayer}'s turn`;
    
    checkSpaces();
}

playerX_score.innerHTML = "0";
let Xscore:number = Number(playerX_score.innerHTML);
playerO_score.innerHTML = "0";
let Oscore:number = Number(playerO_score.innerHTML);

// Put the scores in the DOM.

function setInnerScores(): void {

    if( currentPlayer == player_X ) {

        Xscore += 1;
        playerX_score.innerHTML = Xscore as unknown as string;
   }

   if( currentPlayer == player_O ) {
        Oscore += 1;
        playerO_score.innerHTML = Oscore as unknown as string;
   }
}

//Player winning condition function.

function playerHasWon():boolean | any {

    if( spaces[0] == currentPlayer && spaces[1] == currentPlayer && spaces[2] == currentPlayer ) {

        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }

    else if( spaces[0] == currentPlayer && spaces[3] == currentPlayer && spaces[6] == currentPlayer ) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }

    else if( spaces[0] == currentPlayer && spaces[4] == currentPlayer && spaces[8] == currentPlayer ) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }

    else if( spaces[3] == currentPlayer && spaces[4] == currentPlayer && spaces[5] == currentPlayer ) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }

    else if( spaces[2] == currentPlayer && spaces[4] == currentPlayer && spaces[6] == currentPlayer ) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }

    else if( spaces[6] == currentPlayer && spaces[7] == currentPlayer && spaces[8] == currentPlayer ) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }

    else if( spaces[2] == currentPlayer && spaces[5] == currentPlayer && spaces[8] == currentPlayer ) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }

    else if( spaces[1] == currentPlayer && spaces[4] == currentPlayer && spaces[7] == currentPlayer ) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
}

// Remove the click listener when any player wins.

function removeClickEvent():void {

    boxes.forEach( item => {

        item.removeEventListener("click", gameLoaded);
    });
}

//Runs when game is draw.

function checkSpaces():void {

    if( spaces[0] != '' && spaces[1] != '' && spaces[2] != '' && spaces[3] != '' && spaces[4] != ''
        && spaces[5] != '' && spaces[6] != '' && spaces[7] != '' && spaces[8] != ''
    ) {
        text.innerHTML = "Draw game!!";
        showResetBtn();
    }
}

//Show the reset button when needed.

function showResetBtn():void {

    setTimeout( () => {
        reset.style.display = "block";
        reset.style.opacity = "1";
    }, 1000);
}

//Show Jubilation, ie the dancing image.

function showJubilation():void {

    img.style.width = "100px";
}

//Restart game.

const restartGame = () => {
    
    boxes.forEach( box => {

        box.innerHTML = '';
        box.addEventListener("click", gameLoaded, { once: true});
    });
    
    spaces.forEach( (_space, index) => {

        spaces[index] = '';
        console.log(`${spaces[index]} is the index`);
        // console.log(space);
    });

    reset.style.opacity = "0";
    setTimeout( () => {
        reset.style.display = "none";
    }, 500);

    text.innerHTML = `Let's play`;
    img.style.width = "0px"
}

reset.addEventListener("click", restartGame);



//Single player script. When user wants to play with the computer.

( function () {
    
    singlePlayer.addEventListener("click", () => {

        const comingSoon = document.querySelector(".coming") as HTMLDivElement;

        comingSoon.style.display = "flex";

        setTimeout( () => {
            
            comingSoon.style.display = "none";
        }, 2500);

    });
   
})();