'use strict';

var scores,roundScore,activePlayer,dice,playingGame,winningPoint;
winningPoint=100;
init();
//Rolling Dice Activity
document.querySelector('.btn--roll').addEventListener('click',function(){
    
    
    if(playingGame)
    {
        dice=Math.floor(Math.random()*6)+1;
        document.querySelector('.dice').src=`dice-${dice}.png`;
        document.querySelector('.dice').style.display='block';
        if(dice!==1)
        {
            roundScore+=dice;
            document.getElementById('current--'+activePlayer).textContent=roundScore;
        }
        else
        {
            changePlayer();
        }
    
    }
    

});

// Holding points and adding to globle point.
document.querySelector('.btn--hold').addEventListener('click',function(){
    //update Globle Score the current Player
    if(playingGame)
    {
        scores[activePlayer]+=roundScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];


        //Check if winner
        if(scores[activePlayer]>=winningPoint)
        {
            document.getElementById('name--'+activePlayer)
            .textContent='Winner!';
            playingGame=false;
            return;
        }
        changePlayer();
    }
    
});

// Change Player function
function changePlayer(){
    document.getElementById('current--'+activePlayer).textContent=0;
    activePlayer=activePlayer===0?1:0;
    roundScore=0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

// init function
function init()
{
    scores=[0,0];
    roundScore=0;
    activePlayer=0; 
    playingGame=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score--0').textContent='0';
    document.getElementById('current--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
}

//New game initilation
document.querySelector('.btn--new').addEventListener('click',init);

//setting winning point
var setWinningPoint=document.querySelectorAll('.btn-header');
setWinningPoint[0].addEventListener('click',function()
{
    winningPoint=50;
    setWinningPoint[0].classList.toggle('btn-bk-color');
    setWinningPoint[1].classList.remove('btn-bk-color');
    setWinningPoint[2].classList.remove('btn-bk-color');
})
setWinningPoint[1].addEventListener('click',function()
{
    winningPoint=100;
    setWinningPoint[1].classList.toggle('btn-bk-color');
    setWinningPoint[0].classList.remove('btn-bk-color');
    setWinningPoint[2].classList.remove('btn-bk-color');
})
setWinningPoint[2].addEventListener('click',function()
{
    winningPoint=150;
    setWinningPoint[2].classList.toggle('btn-bk-color');
    setWinningPoint[0].classList.remove('btn-bk-color');
    setWinningPoint[1].classList.remove('btn-bk-color');
})
document.querySelector('.btn-header').addEventListener('click',function(){
    
})