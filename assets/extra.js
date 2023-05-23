
const boneco = document.querySelector('.boneco');
const squ = document.querySelector('.squ');
textstart = document.querySelector('text-start');



/*variavel para a adição e remoção do pulo do personagem*/ 
const an= () => {
    boneco.classList.add('an');
    setTimeout(()=>{
        boneco.classList.remove('an');
      

    },500)
}
/*ação de evento ao pressionar qualquer tecla do teclado*/
document.addEventListener('keydown', an);
/*variavel criada com intervalos e posições para determinar o alcance do obstacúlo*/
var colisao = setInterval( function(){
    var bonecoPosition = parseInt(
        window.getComputedStyle(boneco).getPropertyValue('top')
    )
    var squPosition = parseInt(
        window.getComputedStyle(squ).getPropertyValue('left')
    )
/*Se a posição estiver nessas condições o jogo ira acabar*/
    if(squPosition <= 7 && squPosition > 0 && bonecoPosition >=180){
        squ.style.animation = 'none'
        squ.style.display = 'none'
        boneco.style.display = 'none'
        document.getElementById("text-start").innerHTML="<strong>GAME OVER PRESSIONE F5 PARA RECOMEÇAR</strong>";  
    }
}, 10)











