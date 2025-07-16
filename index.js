let homePoints = document.getElementById("homePoints");
let homePointsCounter = 0;
let guestPoints = document.getElementById("guestPoints");
let guestPointsCounter = 0;

function homeAddOne() {
    homePointsCounter += 1;
    homePoints.textContent = homePointsCounter;
    if (homePointsCounter == guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "";
    }
    if (homePointsCounter > guestPointsCounter) {
        homePoints.className = "winner";
        guestPoints.className = "";
    }
}

function homeAddTwo() {
    homePointsCounter += 2;
    homePoints.textContent = homePointsCounter;
    if (homePointsCounter == guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "";
    }
    if (homePointsCounter > guestPointsCounter) {
        homePoints.className = "winner";
        guestPoints.className = "";
    }
}

function homeAddThree() {
    homePointsCounter += 3;
    homePoints.textContent = homePointsCounter;
    if (homePointsCounter == guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "";
    }
    if (homePointsCounter > guestPointsCounter) {
        homePoints.className = "winner";
        guestPoints.className = "";
    }
}

function guestAddOne() {
    guestPointsCounter += 1;
    guestPoints.textContent = guestPointsCounter;
    if (homePointsCounter == guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "";
    }
    
    if (homePointsCounter < guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "winner";
    }
}

function guestAddTwo() {
    guestPointsCounter += 2;
    guestPoints.textContent = guestPointsCounter;
    if (homePointsCounter == guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "";
    }
    if (homePointsCounter < guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "winner";
    }
}

function guestAddThree() {
    guestPointsCounter += 3;
    guestPoints.textContent = guestPointsCounter;
        if (homePointsCounter == guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "";
    }
    if (homePointsCounter < guestPointsCounter) {
        homePoints.className = "";
        guestPoints.className = "winner";
    }
}

function newGame() {
    homePointsCounter = 0;
    guestPointsCounter = 0;
    guestPoints.textContent = guestPointsCounter;
    homePoints.textContent = homePointsCounter;
    homePoints.className = "";
    guestPoints.className = "";
}