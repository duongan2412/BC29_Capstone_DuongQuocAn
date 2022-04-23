function removeBg()
{
    var allElements = document.querySelectorAll(".bgLight");
    for (i=0; i<allElements.length; i++){
        allElements[i].classList.toggle("bgDark");
    }
}

function removeBgContent()
{
    var allElements = document.querySelectorAll(".bgLightContent");
    for (i=0; i<allElements.length; i++){
        allElements[i].classList.toggle("bgDarkContent");
    }
}

function removeClrText()
{
    var allElements = document.querySelectorAll(".clrDark");
    for (i=0; i<allElements.length; i++){
        allElements[i].classList.toggle("clrLight");
    }
}

function titleLightBefore() {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.classList.add("title__contentLight::before");
}

function titleLightAfter() {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.classList.add("title__contentLight::after");
}

function removeTitlePseudoLight() {
    var allElements = document.querySelectorAll(".title__content");
    for (i=0; i<allElements.length; i++){
        allElements[i].classList.toggle("title__contentLight");
    }
}


document.getElementById("darkMode").onclick = function() {
    document.getElementById("darkMode").classList.add("d-none");
    document.getElementById("lightMode").classList.remove("d-none");
    document.getElementById("navbarTitle").style.color = "white";
    removeBg();
    removeBgContent()
    removeClrText();
    removeTitlePseudoLight();
}

document.getElementById("lightMode").onclick = function() {
    document.getElementById("darkMode").classList.remove("d-none");
    document.getElementById("lightMode").classList.add("d-none");
    document.getElementById("navbarTitle").style.color = "#0d369f";
    removeBg()
    removeBgContent()
    removeClrText();
    removeTitlePseudoLight();
}

