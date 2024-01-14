let paddle1=document.getElementById("paddle1");
let paddle2=document.getElementById("paddle2");
let ball=document.getElementById("ball");
let gamebox=document.getElementById("gamebox");

let wpressed=false;
let spressed=false;
let opressed=false;
let lpressed=false;


let p1val=50;
let p2val=50;
// Adding Key-up and Key-down event.
document.addEventListener("keyup",upHandeller);
document.addEventListener("keydown",downHandeller);

function upHandeller(ev){
    if(ev.key=='w'){
        wpressed=false;
    }
    else if(ev.key=='s'){
        spressed=false;
    }
    else if(ev.key=='o'){
        opressed=false;
    }
    else if(ev.key=='l'){
        lpressed=false;
    }
}

function downHandeller(ev){
    if(ev.key=='w'){
        wpressed=true;
        movebar();
    }
    else if(ev.key=='s'){
        spressed=true;
        movebar();
    }
    else if(ev.key=='o'){
        opressed=true;
        movebar();
    }
    else if(ev.key=='l'){
        lpressed=true;
        movebar();
    }
}

function movebar(){
    if(wpressed && p1val>10){
        p1val-=2;
        paddle1.style.top=p1val+"%";
    }

    else if(spressed && p1val<90){
        p1val+=2;
        paddle1.style.top=p1val+"%";
    }

    else if(opressed && p2val>10){
        p2val-=2;
        paddle2.style.top=p2val+"%";
    }

    else if(lpressed && p2val<90){
        p2val+=2;
        paddle2.style.top=p2val+"%";
    }
    // requestAnimationFrame(movebar);
}

