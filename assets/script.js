//Mario pulando
const pipe = document.querySelector('.pipe')
const mario = document.querySelector('.mario');


setInterval(marioJump, 100);

function marioJump() {
    let distancePipe = pipe.offsetLeft;
    if(distancePipe < 290){
        mario.classList.add('jump')

        setTimeout(()=>{
            mario.classList.remove('jump')
        }, 700)
    }
}
