"use strict";
const startGame = document.querySelector(".start-game");
const typeContainer = document.querySelector(".type");
const singlePlayer = document.querySelector(".single");
const text = document.querySelector(".text");
const multiplayer = document.querySelector(".multi");
const boxes = document.querySelectorAll(".box");
const gameContainer = document.querySelector(".container");
const reset = document.querySelector(".reset");
const img = document.querySelector(".img");
const scoreContainer = document.querySelector(".score");
let playerX_score = document.querySelector(".x");
let playerO_score = document.querySelector(".o");
startGame.addEventListener("click", () => {
    startGame.style.transform = "translateX(-120px)";
    setTimeout(() => {
        startGame.style.display = "none";
    }, 500);
    setTimeout(() => {
        typeContainer.style.display = 'block';
    }, 600);
});
window.addEventListener("DOMContentLoaded", drawBoard);
function drawBoard() {
    boxes.forEach((item, index) => {
        if (index < 3) {
            item.style.borderTop = "0";
        }
        if (index % 3 == 0) {
            item.style.borderLeft = "0";
        }
        if (index % 3 == 2) {
            item.style.borderRight = "0";
        }
        if (index > 5) {
            item.style.borderBottom = "0";
        }
        item.addEventListener("click", gameLoaded, { once: true });
    });
}
multiplayer.addEventListener("click", Init);
function Init() {
    setTimeout(() => {
        text.innerHTML = "Let's play";
    }, 2000);
    showScores();
    if (removeTexts()) {
        showGameArea();
    }
}
function removeTexts() {
    typeContainer.style.transform = "translateX(100px)";
    setTimeout(() => {
        typeContainer.style.display = "none";
    }, 900);
    return true;
}
function showGameArea() {
    setTimeout(() => {
        gameContainer.style.display = "block";
    }, 1000);
}
function showScores() {
    setTimeout(() => {
        scoreContainer.style.display = "block";
    }, 1000);
}
let spaces = ['', '', '', '', '', '', '', '', ''];
const player_O = "O";
const player_X = "X";
let currentPlayer = player_O;
function gameLoaded(e) {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;
    }
    if (playerHasWon()) {
        return;
    }
    currentPlayer = currentPlayer == player_O ? player_X : player_O;
    text.innerHTML = `${currentPlayer}'s turn`;
    checkSpaces();
}
playerX_score.innerHTML = "0";
let Xscore = Number(playerX_score.innerHTML);
playerO_score.innerHTML = "0";
let Oscore = Number(playerO_score.innerHTML);
function setInnerScores() {
    if (currentPlayer == player_X) {
        Xscore += 1;
        playerX_score.innerHTML = Xscore;
    }
    if (currentPlayer == player_O) {
        Oscore += 1;
        playerO_score.innerHTML = Oscore;
    }
}
function playerHasWon() {
    if (spaces[0] == currentPlayer && spaces[1] == currentPlayer && spaces[2] == currentPlayer) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
    else if (spaces[0] == currentPlayer && spaces[3] == currentPlayer && spaces[6] == currentPlayer) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
    else if (spaces[0] == currentPlayer && spaces[4] == currentPlayer && spaces[8] == currentPlayer) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
    else if (spaces[3] == currentPlayer && spaces[4] == currentPlayer && spaces[5] == currentPlayer) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
    else if (spaces[2] == currentPlayer && spaces[4] == currentPlayer && spaces[6] == currentPlayer) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
    else if (spaces[6] == currentPlayer && spaces[7] == currentPlayer && spaces[8] == currentPlayer) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
    else if (spaces[2] == currentPlayer && spaces[5] == currentPlayer && spaces[8] == currentPlayer) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
    else if (spaces[1] == currentPlayer && spaces[4] == currentPlayer && spaces[7] == currentPlayer) {
        text.innerHTML = `${currentPlayer} won!`;
        setInnerScores();
        removeClickEvent();
        showResetBtn();
        showJubilation();
        return true;
    }
}
function removeClickEvent() {
    boxes.forEach(item => {
        item.removeEventListener("click", gameLoaded);
    });
}
function checkSpaces() {
    if (spaces[0] != '' && spaces[1] != '' && spaces[2] != '' && spaces[3] != '' && spaces[4] != ''
        && spaces[5] != '' && spaces[6] != '' && spaces[7] != '' && spaces[8] != '') {
        text.innerHTML = "Draw game!!";
        showResetBtn();
    }
}
function showResetBtn() {
    setTimeout(() => {
        reset.style.display = "block";
        reset.style.opacity = "1";
    }, 1000);
}
function showJubilation() {
    img.style.width = "100px";
}
const restartGame = () => {
    boxes.forEach(box => {
        box.innerHTML = '';
        box.addEventListener("click", gameLoaded, { once: true });
    });
    spaces.forEach((_space, index) => {
        spaces[index] = '';
        console.log(`${spaces[index]} is the index`);
    });
    reset.style.opacity = "0";
    setTimeout(() => {
        reset.style.display = "none";
    }, 500);
    text.innerHTML = `Let's play`;
    img.style.width = "0px";
};
reset.addEventListener("click", restartGame);
(function () {
    singlePlayer.addEventListener("click", () => {
        const comingSoon = document.querySelector(".coming");
        comingSoon.style.display = "flex";
        setTimeout(() => {
            comingSoon.style.display = "none";
        }, 2500);
    });
})();
