let gameSeq=[];
let userSeq=[];
let color = ["red","green","pink","purple"];
let started = false;
let level = 0;

let h3 = document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started == false){
    started = true;

levelUp();
}
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}


function levelUp(){
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;


// random btn choose
 let randIndex = Math.floor(Math.random()*4);
 let randColor = color[randIndex];
 let randBtn = document.querySelector(`.${randColor}`)
//  alert(randColor);
 gameSeq.push(randColor);
 console.log(gameSeq);
 
  btnFlash(randBtn);
}

function checkAns(idx){
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
     setTimeout(levelUp,1500);
    }
  }else{
    h3.innerHTML = `Game Over Your Score was<b>${level}</b>.<br> Press Any key to Start.`;
    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(function(){
      document.querySelector('body').style.backgroundColor = "#b408083b";
    },150);
    reset();  
  }
  
}


function btnPress(){
  let btn = this;
  btnFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".button");
for(btn of allBtn){
btn.addEventListener("click",btnPress);}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
};


