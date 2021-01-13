window.addEventListener("load", hjemSiden);

function hjemSiden() {
    console.log("hjemSiden");


    const text = document.querySelector('.monica');
    const strText = text.textContent;


    //deler text op en for en bogstav//
    const splitText = strText.split("");


    //text innhold//
    text.textContent = "";

    //lengden på animation//
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);


    function onTick() {

        //animation//
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if (char === splitText.length) {
            complete();
            return;
        }
    }
    //stop animation//
    function complete() {
        clearInterval(timer);
        timer = null;
    }



}


/*-------------------------jeg elsker-------------------*/


/*window.addEventListener("load", omSiden);*/

/*function omSiden() {
    console.log("omSiden");*/

/*const texts = ["foto, design, glas"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);


}());*/

/*}*/
