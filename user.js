'use strict';

class User{
    constructor(hp, atack){
        this.hp = hp;
        this.current_hp = hp
        this.atack = atack;
        this.displayHP = document.querySelector("#user_hp");
        this.audioUserDie = new Audio();
        this.audioUserDie.src = './audio/user-die.mp3';
        
    }

    d_HP(){ 
        this.displayHP.setAttribute("max", this.hp)
        this.displayHP.setAttribute("value", this.current_hp)
        document.querySelector('#user_max_hp').textContent = this.hp;
        document.querySelector('#user_value_hp').textContent = this.current_hp;
        document.querySelector('#user_atack').textContent = this.atack;
    }

    lossAtack(atack){
        if(atack < this.current_hp || this.current_hp > 0){
            this.current_hp -= atack;
            this.displayHP.setAttribute("value", this.current_hp);
            document.querySelector('#user_value_hp').textContent = this.current_hp;
            document.querySelector('body').style.animationPlayState = 'running';
            setTimeout(() => {
                document.querySelector('body').style.animationPlayState = 'paused';
            }, 150);
            if(this.current_hp <= 0){
                this.die = true;
                // user.classlist.add("die");
                this.lostLvGame();
                this.audioUserDie.play();
                
            }
        }   
    }

    interface(){
        let inface = document.querySelector(".interface");
        inface.style.display = "block";
        this.d_HP();
    }

    userAtack(minion){
        minion.lossAtack(this.atack);
        
    }

    addAtack(atack){
        this.atack += random(atack);
        document.querySelector('#user_atack').textContent = this.atack;
    }

    lostLvGame(){
        document.querySelector('body').style.animation = 'none';
        const wrapper = document.querySelector('.game');
        wrapper.innerHTML = '';
        let current_game = Number(localStorage.getItem("gameNum"));
        for (let i = 1; i < 99999; i++)
        window.clearInterval(i);
        audioOver.play();
        wrapper.style.background = `url(${bgLostGame.src}) center/contain`;
        let lostBlock = document.createElement('div');
        lostBlock.setAttribute('class', 'lostBlock');
        let p = document.createElement('p');
        p.innerHTML = `
        <h2>You lost!</h2>
        <p>You have made ${localStorage.getItem(`gameClick_${current_game}`)} clicks</p> 
        `;
        lostBlock.appendChild(p);
        let btnRestart = document.createElement('button');
        btnRestart.textContent = 'Restart';
        btnRestart.setAttribute('class', 'btn btn_start');
        btnRestart.addEventListener('click', () => location.reload());
        lostBlock.appendChild(btnRestart);
        wrapper.appendChild(lostBlock);
        
     }
}

