

const max = 6;
const min = 1;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
    
    let diceRoll = getRandomInt(min, max);

   

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.style.display = 'none');

    switch(diceRoll) {
        case 1:
            document.querySelector('.one').style.display = 'block';
            break;
        case 2:
            document.querySelector('.two').style.display = 'block';
            document.querySelector('.five').style.display = 'block';
            break;
        case 3:
            document.querySelector('.one').style.display = 'block';
            document.querySelector('.two').style.display = 'block';
            document.querySelector('.five').style.display = 'block';
            break;
        case 4:
            document.querySelector('.two').style.display = 'block';
            document.querySelector('.three').style.display = 'block';
            document.querySelector('.four').style.display = 'block';
            document.querySelector('.five').style.display = 'block';
            break;
        case 5:
            document.querySelector('.one').style.display = 'block';
            document.querySelector('.two').style.display = 'block';
            document.querySelector('.three').style.display = 'block';
            document.querySelector('.four').style.display = 'block';
            document.querySelector('.five').style.display = 'block';
            break;
        case 6:
            document.querySelector('.two').style.display = 'block';
            document.querySelector('.three').style.display = 'block';
            document.querySelector('.four').style.display = 'block';
            document.querySelector('.five').style.display = 'block';
            document.querySelector('.six').style.display = 'block';
            document.querySelector('.seven').style.display = 'block';
            break;
    }

}
