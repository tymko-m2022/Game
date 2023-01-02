'use strict';

let user;
let minion_1;
let minion_2;
let minion_3;


const bgLvl_1 = new Image();
bgLvl_1.src = './img/level1.jpg';
 function startGame() {
   let minions_1 = document.querySelector("#mob_lvl_1");
   let minions_2 = document.querySelector("#mob_lvl_2");
   let minions_3 = document.querySelector("#mob_lvl_3");
    const wrapper = document.querySelector('.game');
    const menu = document.querySelector('.start');
    user = new User(100,1);
    user.interface();
    minions_1.style.display = "flex";
    minion_1 = new Minion("Felix", 40, 1);
    minion_1.addDisplay(minions_1);
    minion_2 = new Minion("Wiki", 60, 2);
    minion_2.addDisplay(minions_1);
    minion_3 = new Minion("Olivia", 90, 3);
    minion_3.addDisplay(minions_1);
    wrapper.style.background = `url(${bgLvl_1.src}) center/contain`;
    menu.remove();
    setInterval(()=>{
      if(minion_1.current_hp > 0){
         minion_1.minionAtack(user);
      }
   }, 6000);
   setInterval(()=>{
      if(minion_2.current_hp > 0){
         minion_2.minionAtack(user);
      }
   }, 10000);
   setInterval(()=>{
      if(minion_3.current_hp > 0){
         minion_3.minionAtack(user);
      }
   }, 14000);
 }




//'

// let cvs = document.getElementById("canvas");
// let ctx = cvs.getContext("2d");

// let bird = new Image();
// let bg = new Image();
// let fg = new Image();
// let pipeUp = new Image();
// let pipeBottom = new Image();

// bird.src = "img/bird.png";
// bg.src = "img/bg.png";
// fg.src = "img/fg.png";
// pipeUp.src = "img/pipeUp.png";
// pipeBottom.src = "img/pipeBottom.png";

// // Звуковые файлы
// let fly = new Audio();
// let score_audio = new Audio();

// fly.src = "audio/fly.mp3";
// score_audio.src = "audio/score.mp3";

// let gap = 90;

// // При нажатии на какую-либо кнопку
// document.addEventListener("keydown", moveUp);

// function moveUp() {
//  yPos -= 25;
//  fly.play();
// }

// // Создание блоков
// let pipe = [];

// pipe[0] = {
//  x : cvs.width,
//  y : 0
// }

// let score = 0;
// // Позиция птички
// let xPos = 10;
// let yPos = 150;
// let grav = 1.5;

// function draw() {
//  ctx.drawImage(bg, 0, 0);

//  for(let i = 0; i < pipe.length; i+=1) {
//  ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
//  ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

//  pipe[i].x--;

//  if(pipe[i].x == 125) {
//  pipe.push({
//  x : cvs.width,
//  y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
//  });
//  }

//  // Отслеживание прикосновений
//  if(xPos + bird.width >= pipe[i].x
//  && xPos <= pipe[i].x + pipeUp.width
//  && (yPos <= pipe[i].y + pipeUp.height
//  || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
//  location.reload(); // Перезагрузка страницы
//  }

//  if(pipe[i].x == 5) {
//  score++;
//  score_audio.play();
//  }
//  }

//  ctx.drawImage(fg, 0, cvs.height - fg.height);
//  ctx.drawImage(bird, xPos, yPos);

//  yPos += grav;

//  ctx.fillStyle = "#000";
//  ctx.font = "24px Verdana";
//  ctx.fillText("Счет: " + score, 10, cvs.height - 20);

//  requestAnimationFrame(draw);
// }

// pipeBottom.onload = draw;