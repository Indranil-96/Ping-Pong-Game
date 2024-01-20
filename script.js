let paddle1=document.getElementById("paddle1");
let paddle2=document.getElementById("paddle2");
let ball=document.getElementById("ball");
let gamebox=document.getElementById("gamebox");

let wpressed=false;
let spressed=false;

let user1=document.getElementById("user1");
let user2=document.getElementById("user2");


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
}

//Accourding to pythagoras theorem v^2=vx^2 + vy^2;

let vx=-4;
let vy=-4;
let v= Math.sqrt(Math.pow(vx,2)+Math.pow(vy,2));


const reset=()=>{
    ball.style.top="50%";
    ball.style.left="50%";
    vx=-4;
    vy=-4;
    let v= Math.sqrt(Math.pow(vx,2)+Math.pow(vy,2));
}
const checkCollition=(activePaddle)=>{
    let balltop=ball.offsetTop;
    let ballleft=ball.offsetLeft;
    let ballbottom=ball.offsetTop+ball.offsetHeight;
    let ballright=ball.offsetLeft+ball.offsetWidth;

    let paddletop=activePaddle.offsetTop;
    let paddleleft=activePaddle.offsetLeft;
    let paddlebottom=activePaddle.offsetTop+activePaddle.offsetHeight;
    let paddleright=activePaddle.offsetLeft+activePaddle.offsetWidth;

    // console.log(balltop,ballbottom,ballleft,ballright);
    // console.log(paddletop,paddlebottom,paddleleft,paddleright);

    if(ballbottom>paddletop && balltop<paddlebottom && ballright > paddleleft && ballleft<paddleright){
        console.log(" Collison Detected"); // Something Wrong here.
        return true;
    }else{
        return false;
    }
}
function moveball(){
    if(ball.offsetLeft<0){
        vx=-vx;
        // reset();
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


    // Which one is the active panel ?

    let position=ball.offsetLeft;
    let boxwidth=gamebox.offsetWidth;

    let paddle=position<boxwidth/2 ? user1 : user2;
    // console.log(paddle);

    let ballcenterY=ball.offsetTop+ball.offsetHeight/2;

    let paddlecenterY=paddle.offsetTop+paddle.offsetHeight/2;
    let angle=0;
    checkCollition(paddle)

    requestAnimationFrame(moveball);
}

moveball();