       //Javascript watch code starts from here 

alert("Hell0 bro! kaise ho aap theek ho");
 
var text = prompt ("theek ho ap bro");
if(text==="theek ho "){
    alert("Good ho gya ");
}
 if (text==="theek ho mei"){
    alert("chalo batreen bro");
}
if(text==="G mei theek ho ap kaise ho"){
    alert("mei bhi theek ho allah ka bht sukar ha");
}










   
var mseccounter = 0;
var seccounter = 0;
var mincounter = 0;

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var counter= 0;
var interval;

function timer(){
    mseccounter ++;
    msec.innerHTML = mseccounter;
    console.log(mseccounter);
    if(mseccounter===100){
        seccounter++;
        sec .innerHTML = seccounter;
        mseccounter = 0;
        if(seccounter===60){
            seccounter = 0;
            mincounter++;
            min .innerHTML = mincounter;
        } 
    } 

}
function startTimer(e){
    interval = setInterval(timer,10);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);


min .innerHTML = "00";
sec .innerHTML ="00";
msec .innerHTML ="00";

seccounter = 0;
mincounter = 0;
mseccounter = 0;

}

