const getTextEncode = document.getElementById("text-into");
const setTextResult = document.getElementById("text-result");
const foundResult = document.getElementById("found-result");
const notFoundResult = document.getElementById("not-found");

function showHide(existResult){
    if(existResult){
        foundResult.classList.remove("hide");
        foundResult.classList.add("show-flex")
        notFoundResult.classList.remove("show-flex");
        notFoundResult.classList.add("hide")
    }else{
        foundResult.classList.remove("show-flex");
        foundResult.classList.add("hide")
        notFoundResult.classList.remove("hide");
        notFoundResult.classList.add("show-flex")
    }
}

function encode(){
    const getText = getTextEncode.value.trim();
    if(getText.length){
        let encodeString = window.btoa(getText);
        setTextResult.value = encodeString;
        showHide(true)
    }else{
        showHide(false)
    }
}

function decode(){
    const getText = getTextEncode.value.trim();
    if(getText.length){
        let decodeString = window.atob(getText);
        setTextResult.value = decodeString;
        showHide(true)
    }else{
        showHide(false)
    }
}

function reset(){
    getTextEncode.value = ""
    setTextResult.value = ""
    showHide(false)
}


const btnEncode = document.getElementById("btn-encode");
btnEncode.addEventListener("click",encode);

const btnDecode = document.getElementById("btn-decode");
btnDecode.addEventListener("click",decode);

const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click",reset);