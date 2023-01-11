'use strict';

let user;
let minion_1;
let minion_2;
let minion_3;
let minion_4;
let minion_5;
let boss;

setTimeout(()=>{
   if(localStorage.getItem("gameNum")){
      let count_game = Number(localStorage.getItem("gameNum"));
      document.querySelector('#count_game').textContent = count_game;
      let scoreBlock = document.querySelector("#ScoreTable_scores");
      for(let i = 0; i < count_game; i+=1){
         let score = localStorage.getItem(`gameClick_${i+1}`)
         let p = document.createElement('p');
         p.classList.add('ScoreTable_item');
         p.textContent = `Clicks game ${i+1}`;
         let span = document.createElement('span');
         span.textContent = score;
         p.appendChild(span);
         scoreBlock.appendChild(p);
      }
   }
}, 200)

const bgLvl_1 = new Image();
bgLvl_1.src = './img/level1.jpg';
const audioLvl_1 = new Audio();
audioLvl_1.src = './audio/audioLvl_1.mp3';
const nextLvl = new Image();
nextLvl.src = './img/loading.gif'
const audioLvl_2 = new Audio();
audioLvl_2.src = './audio/audioLvl_2.mp3';
const bgLvl_2 = new Image();
bgLvl_2.src = './img/level2.jpg';
const audioLvl_3 = new Audio();
audioLvl_3.src = './audio/audioLvl_2.mp3';
const bgLvl_3 = new Image();
bgLvl_3.src = './img/level3.jpg';
const bgOverGame = new Image();
bgOverGame.src = './img/game-over.jpg';
const audioOver = new Audio();
audioOver.src = './audio/game-over.mp3';

function random(max, min = 1){
   return Math.floor(Math.random()*(max - min) + min)
}

function startGame() {
   audioLvl_1.play();
   let current_game;
   if(localStorage.getItem("gameNum")){
      current_game = Number(localStorage.getItem("gameNum")) + 1;
      localStorage.setItem('gameNum', current_game)
   } else{
      current_game = 1;
      localStorage.setItem('gameNum', 1)
   }

   document.addEventListener("click", ()=>{
      if(localStorage.getItem(`gameClick_${current_game}`)){
         let clicks = Number(localStorage.getItem(`gameClick_${current_game}`));
         localStorage.setItem(`gameClick_${current_game}`, clicks + 1)
      } else{
         localStorage.setItem(`gameClick_${current_game}`, 0)
      }
   })
   let minions_1 = document.querySelector("#mob_lvl_1");
   let minions_2 = document.querySelector("#mob_lvl_2");
   let minions_3 = document.querySelector("#mob_lvl_3");
   
   const wrapper = document.querySelector('.game');
   const menu = document.querySelector('.start');
   const indecators = document.querySelector(".interface");

   user = new User(100, 1);
   user.interface();

   minions_1.style.display = "flex";
   minion_1 = new Minion("Felix", 50, random(5));
   minion_1.addDisplay(minions_1);
   minion_2 = new Minion("Wiki", 75, random(5));
   minion_2.addDisplay(minions_1);
   minion_3 = new Minion("Olivia", 100, random(5));
   minion_3.addDisplay(minions_1);

   wrapper.style.background = `url(${bgLvl_1.src}) center/contain`;

   menu.remove();

   let attack_1 = setInterval(()=>{
      if(minion_1.current_hp > 0){
         minion_1.minionAtack(user);
      } else{
         clearInterval(attack_1);
      }
   }, 6000);

   let attack_2 = setInterval(()=>{
      if(minion_2.current_hp > 0){
         minion_2.minionAtack(user);
      } else{
         clearInterval(attack_2);
      }
   }, 10000);

   let attack_3 = setInterval(()=>{
      if(minion_3.current_hp > 0){
         minion_3.minionAtack(user);
      } else{
         clearInterval(attack_3);
      }
   }, 14000);

   let Level_1 = setInterval(()=>{
      if(minion_1.die && minion_2.die && minion_3.die){
         nextLevel();
         clearInterval(Level_1);
      }
   }, 1000)

   function nextLevel(){
      audioLvl_2.play();
      minions_1.remove();
      wrapper.style.background = `url(${nextLvl.src}) center/contain`;
      indecators.style.opacity = 0;
      setTimeout(()=>{
         wrapper.style.background = `url(${bgLvl_2.src}) center/contain`;
         indecators.style.opacity = 1;
         minions_2.style.display = "flex";
         minion_4 = new Minion("Oliver", 120, random(30, 10));
         minion_4.addDisplay(minions_2);
         minion_5 = new Minion("Charley", 250, random(30, 10));
         minion_5.addDisplay(minions_2);
         let attack_1 = setInterval(()=>{
            if(minion_4.current_hp > 0){
               minion_4.minionAtack(user);
            } else{
               clearInterval(attack_1);
            }
         }, 10000);
      
         let attack_2 = setInterval(()=>{
            if(minion_5.current_hp > 0){
               minion_5.minionAtack(user);
            } else{
               clearInterval(attack_2);
            }
         }, 14000);

         let Level_2 = setInterval(()=>{
            if(minion_4.die && minion_5.die){
               lastLevel();
               clearInterval(Level_2);
            }
         }, 1000)
      }, 3000)
   }

   function lastLevel(){
      audioLvl_3.play();
      minions_2.remove();
      wrapper.style.background = `url(${nextLvl.src}) center/contain`;
      indecators.style.opacity = 0;
      setTimeout(()=>{
         wrapper.style.background = `url(${bgLvl_3.src}) center/contain`;
         indecators.style.opacity = 1;
         minions_3.style.display = "flex";
         boss = new Minion("Oskar", 1000, random(50, 25));
         boss.addDisplay(minions_3);
         let attack_1 = setInterval(()=>{
            if(boss.current_hp > 0){
               boss.minionAtack(user);
            } else{
               clearInterval(attack_1);
            }
         }, 10000);
         let endGame = setInterval(()=>{
            if(boss.die){
               overGame();
               clearInterval(endGame);
            }
         }, 1000)
         
      }, 3000)
   }

   function overGame(){
      audioOver.play();
      minions_3.remove();
      indecators.style.opacity = 0;
      wrapper.style.background = `url(${bgOverGame.src}) center/contain`;
      let endBlock = document.createElement('div');
      endBlock.setAttribute('class', 'endBlock');
      let p = document.createElement('p');
      p.innerHTML = `
      <h2>You win!</h2>
      <p>You have made ${localStorage.getItem(`gameClick_${current_game}`)} clicks</p> 
      `;
      endBlock.appendChild(p);
      let btnRestart = document.createElement('button');
      btnRestart.textContent = 'Restart';
      btnRestart.setAttribute('class', 'btn btn_start');
      btnRestart.addEventListener('click', () => location.reload());
      endBlock.appendChild(btnRestart);
      wrapper.appendChild(endBlock);
   }
}


