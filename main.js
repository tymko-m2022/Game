'use strict';

let user;
let minion_1;
let minion_2;
let minion_3;
let minion_4;
let minion_5;
let boss;



const bgLvl_1 = new Image();
bgLvl_1.src = './img/level1.jpg';
const nextLvl = new Image();
nextLvl.src = './img/loading.gif'
const bgLvl_2 = new Image();
bgLvl_2.src = './img/level2.jpg';
function startGame() {
   // add LVL selectors
   let minions_1 = document.querySelector("#mob_lvl_1");
   let minions_2 = document.querySelector("#mob_lvl_2");
   let minion_3 = document.querySelector("#mob_lvl_3");
   
   const wrapper = document.querySelector('.game');
   const menu = document.querySelector('.start');
   const indecators = document.querySelector(".interface");

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
      minions_1.remove();
      wrapper.style.background = `url(${nextLvl.src}) center/contain`;
      indecators.style.opacity = 0;
      setTimeout(()=>{
         wrapper.style.background = `url(${bgLvl_2.src}) center/contain`;
         indecators.style.opacity = 1;
         minions_2.style.display = "flex";
         minion_4 = new Minion("Oliver", 120, 10);
         minion_4.addDisplay(minions_2);
         minion_5 = new Minion("Charley", 250, 20);
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
      }, 3000)
   }
}

