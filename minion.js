'use strict';

class Minion{
    constructor(name, hp, atack){
        this.name = name;
        this.hp = hp;
        this.current_hp = hp
        this.atack = atack;
        this.die = false;
        this.audioMinion = new Audio();
        this.audioMinion.src = './audio/atackM.mp3';
        this.atackUser = new Audio();
        this.atackUser.src = './audio/userAtack.mp3';
        this.sword = document.querySelector('.user_sword');
        
    }

    addDisplay(lvl){
        let minion = document.createElement("div");
        minion.setAttribute("class", "minion");
        minion.setAttribute("id", `minion_${this.name}`);
        minion.innerHTML = `
            <img class = "img_${this.name}" src="./img/${this.name}.png" alt="${this.name}">
            <p>
                ${this.name} 
                <span class="minion_atack">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FFF" height="16px" width="16px" version="1.1" id="Layer_1" viewBox="0 0 503.816 503.816" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M315.786,311.749c-6.178-5.959-14.747-8.158-22.654-6.48V84.144c0-1.175-0.243-2.333-0.722-3.408L258.836,4.994    C257.494,1.964,254.489,0,251.165,0c-3.315,0-6.329,1.964-7.672,4.994l-33.574,75.742c-0.47,1.074-0.722,2.233-0.722,3.408    v221.058c-7.42-1.142-15.259,1.016-21.051,6.446c-5.582,5.229-8.435,12.59-7.848,20.203c0.613,7.772,4.684,14.764,11.172,19.179    c10.584,7.21,22.268,12.347,34.514,15.36v87.367c-9.476,1.46-16.787,9.602-16.787,19.49v10.777    c0,10.911,8.88,19.792,19.792,19.792h44.351c10.92,0,19.792-8.88,19.792-19.792v-10.777c0-9.888-7.302-18.029-16.787-19.49    v-87.107c13.052-3.072,25.474-8.553,36.73-16.317c6.026-4.163,9.837-10.794,10.433-18.189    C324.129,324.507,321.326,317.087,315.786,311.749z M242.771,103.03c0-4.642,3.76-8.393,8.393-8.393    c4.642,0,8.393,3.752,8.393,8.393v174.164c0,4.633-3.752,8.393-8.393,8.393c-4.633,0-8.393-3.76-8.393-8.393V103.03z     M276.345,484.025c0,1.654-1.343,3.005-3.005,3.005h-44.351c-1.654,0-3.005-1.351-3.005-3.005v-10.777    c0-1.662,1.351-3.005,3.005-3.005h5.389h33.574h5.389c1.662,0,3.005,1.343,3.005,3.005V484.025z M306.78,330.786    c-0.109,1.385-0.688,3.97-3.24,5.733c-15.133,10.441-33.54,16.191-51.83,16.216h-0.713c-17.97-0.126-35.286-5.515-50.075-15.578    c-2.258-1.536-3.676-3.945-3.878-6.606c-0.118-1.469,0.067-4.297,2.585-6.656c1.612-1.519,3.693-2.3,5.75-2.3    c1.578,0,3.131,0.462,4.465,1.393c1.016,0.705,2.132,1.225,3.181,1.88c0.05,0.025,0.084,0.076,0.134,0.109    c0.168,0.101,0.353,0.168,0.52,0.269c2.627,1.612,5.321,3.072,8.133,4.314c0.319,0.143,0.655,0.252,0.982,0.395    c2.694,1.141,5.414,2.191,8.242,3.005c1.041,0.302,2.107,0.478,3.164,0.73c2.166,0.52,4.323,1.1,6.555,1.419    c3.416,0.52,6.874,0.814,10.349,0.839h0.067h0.034h0.05c0.168,0,0.327-0.034,0.495-0.042c3.458-0.059,6.849-0.344,10.181-0.831    c1.704-0.243,3.341-0.663,5.011-1.016c1.62-0.344,3.265-0.655,4.851-1.116c2.375-0.655,4.658-1.494,6.933-2.375    c0.688-0.269,1.377-0.512,2.056-0.806c2.694-1.133,5.288-2.434,7.814-3.878c0.117-0.059,0.235-0.101,0.344-0.168    c0.059-0.034,0.101-0.084,0.151-0.117c1.628-0.948,3.332-1.771,4.877-2.837c3.055-2.107,7.328-1.654,10.206,1.108    C306.041,325.674,306.99,328.192,306.78,330.786z"/>
                            </g>
                        </g>
                    </svg>${this.atack}
                </span>
            </p>
            <div class="interface_hp">
                <progress id="${this.name}_hp"></progress>
                <div class="hp_metrick">
                    <span id="${this.name}_value_hp"></span>/<span id="${this.name}_max_hp"></span>
                </div>
            </div>
        `;
        lvl.appendChild(minion);
        let displayHP = document.querySelector(`#${this.name}_hp`);
        this.d_HP(displayHP);
        minion.addEventListener("click", () => {
            if(this.current_hp > 0){
                this.lossAtack(user.atack, displayHP);
                this.sword.style.animationPlayState = 'running';
                setTimeout(() => {
                this.sword.style.animationPlayState = 'paused';
                }, 300);
            } else {
                alert("I die");
            }
        })
    }
    
    d_HP(displayHP){ 
        displayHP.setAttribute("max", this.hp)
        displayHP.setAttribute("value", this.current_hp)
        document.querySelector(`#${this.name}_max_hp`).textContent = this.hp;
        document.querySelector(`#${this.name}_value_hp`).textContent = this.current_hp;
    }

    minionAtack(user){
        user.lossAtack(this.atack);
        this.audioMinion.play();
    }

    lossAtack(atack, displayHP){
        let minion = document.querySelector(`#minion_${this.name}`)
        if( atack < this.current_hp || this.current_hp > 0){
            this.current_hp -= atack;
            displayHP.setAttribute("value", this.current_hp);
            document.querySelector(`#${this.name}_value_hp`).textContent = this.current_hp;
        }

        if(this.current_hp <= 0){
            user.addAtack(this.atack);
            displayHP.setAttribute("value", 0);
            document.querySelector(`#${this.name}_value_hp`).textContent = 0;
            this.die = true;
            minion.classList.add("die")
        }

        this.atackUser.play();  
    }

}