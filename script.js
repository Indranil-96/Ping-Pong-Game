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
    if(wpressed && p1val>15){
        p1val-=5;
        paddle1.style.top=p1val+"%";
    }

    else if(spressed && p1val<85){
        p1val+=5;
        paddle1.style.top=p1val+"%";
    }

    else if(opressed && p2val>15){
        p2val-=5;
        paddle2.style.top=p2val+"%";
    }

    else if(lpressed && p2val<85){
        p2val+=5;
        paddle2.style.top=p2val+"%";
    }
    // requestAnimationFrame(movebar);
}

//Accourding to pythagoras theorem v^2=vx^2 + vy^2;

let vx=-2;
let vy=-15;
let v= Math.sqrt(Math.pow(vx,2)+Math.pow(vy,2));


const reset=()=>{
    ball.style.top="50%";
    ball.style.left="50%";
    vx=-2;
    vy=-15;
    let v= Math.sqrt(Math.pow(vx,2)+Math.pow(vy,2));
}

function moveball(){
    if(ball.offsetLeft<0){
        // vx=-vx;
        reset();
    }

    if(ball.offsetLeft>gamebox.offsetWidth-(ball.offsetWidth/2)){
        vx=-vx;
    }

    if(ball.offsetTop<0){
        vy=-vy;
    }

    if(ball.offsetTop>gamebox.offsetHeight-(ball.offsetHeight/2)){
        vy=-vy;
    }

    ball.style.left=ball.offsetLeft+vx+"px";
    ball.style.top=ball.offsetTop+vy+"px";

    requestAnimationFrame(moveball);
}

moveball();