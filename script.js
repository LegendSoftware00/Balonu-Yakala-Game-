var xpos, ypos, counter, colorNum, gameStart, objTop, objLeft;
var selectionP = document.getElementById("selectionP");

var obj = document.querySelector(".obj");
var counterEl = document.getElementById("counter");
var restartBtn = document.getElementById("restartBtn");
counter = 0;
gameStart = false;

function gameStartFunction() {
    var difficultyContainer = document.querySelector(".difficulty-section");
    var easyBtn = document.getElementById("easyBtn");
    var mediumBtn = document.getElementById("mediumBtn");
    var hardBtn = document.getElementById("hardBtn");
    difficultyContainer.classList.add("difficulty-section-active");
    obj.classList.add("obj-first");


    function getObjAnm() {
        obj.style.animation = "objSecondAnm 700ms";
    }
    function difficultySectionRemove() {
        difficultyContainer.classList.remove("difficulty-section-active");
    }
    function difficultySelect(n) {
        var chooseDifficulty = n;
        AlertSectionFunc("e");
        obj.classList.remove("obj-first");
        getObjAnm();
        obj.style.top = objTop;
        obj.style.left = objLeft;
        if(n == 1) {
            obj.style.transition = "2s all";
            gameStart = true;
            selectionP.innerHTML = "Easy";
        }
        else if(n == 2) {
            obj.style.transition = "1s all";
            gameStart = true;
            selectionP.innerHTML = "Medium";
        }
        else if(n == 3) {
            obj.style.transition = "300ms all";
            gameStart = true;
            selectionP.innerHTML = "Hard";
        }
        else {
            gameStart = false;
        }
    }
    easyBtn.addEventListener("click",function() {
        difficultySelect(1);
        difficultySectionRemove();
    });
    mediumBtn.addEventListener("click", function() {
        difficultySelect(2);
        difficultySectionRemove();
    });
    hardBtn.addEventListener("click", function() {
        difficultySelect(3);
        difficultySectionRemove();
    });
}
function AlertSectionFunc(x) {
    var alertSection = document.querySelector(".alert-section");
    if(x == "e") {
        alertSection.classList.remove("alert-section-active");
    }
    else {
        alertSection.classList.add("alert-section-active");
    }
}
function gameFunctionMouseOver() {

    function randomNumber() {
        xpos = parseInt(Math.random() * 1920 );
        ypos = parseInt(Math.random() * 1080 );
        objLeft = xpos;
        objTop = ypos;
        colorNum = parseInt(Math.random() * 10);
    }
    function randomValidation() {
        if(xpos > 1800 ) {
            xpos = 100;
            objLeft = xpos;
        }
        if (ypos > 960) {
            ypos = 100;
            objTop = ypos;
        }
    }
    function colorSwitch() {
        switch (colorNum) {
    
            case 0:
                    colorNum = "red";
                break;
    
                    case 1:
                        colorNum = "green";
                        break;
    
                        case 2:
                            colorNum = "blue";
                            break;
    
                            case 3:
                                colorNum = "orange";
                                break;
    
                                case 4:
                                    colorNum = "tomato";
                                    break;
    
                                    case 5:
                                        colorNum = "white";
                                        break;
    
                                        case 6: 
                                            colorNum = "purple";
                                            break;
    
                                            case 7:
                                                colorNum = "grey";
                                                break;
    
                                                case 8:
                                                    colorNum = "rgb(110, 129, 96)";
                                                    break;
    
                                                    case 9:
                                                        colorNum = "rgb(208, 160, 216)";
                                                        break;
    
                                                        case 10:
                                                            colorNum = "rgb(128, 21, 29)";
                                                            break;
    
                                                                default:
    
                                                                    break;
    
        }
        obj.style.backgroundColor = colorNum;
    }
    function positionFunc() {
        obj.style.left = objLeft  + "px" ;
        obj.style.top = objTop  + "px";
    }

    if(gameStart == true) {
        randomNumber();
        randomValidation();
        colorSwitch();
        positionFunc();
        counter += 1;
        counterEl.innerHTML = counter;
    }
    else {
        AlertSectionFunc("h");
    }
}
function restartGame() {
    window.location.reload();
}
function gameFunctionMouseClick() {
    if(gameStart == true){
        obj.style.transition = "300ms all";
        obj.style.transform = "translate(-50% -50%)";
        obj.style.top = "0px";
        obj.style.left = "0px";
        obj.style.width = "98%";
        obj.style.height = "98%";
        obj.style.borderRadius = "0px";
        if(obj.children.length < 3) {
            restartBtn.style.visibility = "visible";
            selectionP.style.visibility = "visible";
            var text = document.createElement("p");
            text.id = "finishGame";
            obj.style.backgroundColor = "green";
            var textChildNode = document.createTextNode(" SAYAÇ: " + counter);
            text.appendChild(textChildNode);
            // obj.appendChild(text);
            obj.insertBefore(text, restartBtn);
            restartBtn.addEventListener("click", restartGame);
            obj.removeEventListener("mouseover", gameFunctionMouseOver);
        }
    }
}

obj.addEventListener("mouseover", gameFunctionMouseOver);
obj.addEventListener("click", gameFunctionMouseClick);
window.addEventListener("load", gameStartFunction);
