function rollDice() {



    fetch('https://dice-roller-nodejs-se-eeerhre6ecaqb4gz.centralus-01.azurewebsites.net/d6')  //API reference
        .then(response => response.json())
        .then(data => {
            
            let diceRoll = data.diceRoll;

           
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
        })
        .catch(error => {
            console.error('Error fetching dice roll:', error);
        });
}
