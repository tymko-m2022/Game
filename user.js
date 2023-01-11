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
                window.location.reload();
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
}