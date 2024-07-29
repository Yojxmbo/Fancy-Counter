const counterEl = document.querySelector('.counter');
const titleEL = document.querySelector('.counter__title');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const descreaseButtonEl = document.querySelector('.counter__button--descrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');



// increaseButtonEl.addEventListener('click', function() {
//     // get current value of counter
//     const currentValue = counterValueEl.textContent;
//     // convert value to number type
//     const currentValueAsNumber = +currentValue;
//     // increment by 1
//     const newValue = currentValueAsNumber + 1;
//     //set counter with new value    
//     counterValueEl.textContent = newValue;
// });

// descreaseButtonEl.addEventListener('click', function() {
//     const currentValue = counterValueEl.textContent;
//     const currentValueAsNumber = +currentValue;
//     const newValue = currentValueAsNumber - 1;  
//     counterValueEl.textContent = newValue;
// });

resetButtonEl.addEventListener('click', function() {
    counterValueEl.textContent = 0;
    counterEl.classList.remove('counter--limit');
    titleEL.textContent = 'Fancy Counter';
    increaseButtonEl.disabled = false;
    descreaseButtonEl.disabled = false;
    resetButtonEl.blur();
    
});

function incrementCounter() {
    const currentValue = counterValueEl.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber + 1;
    if (newValue > 10) {
        newValue = 10;
        counterEl.classList.add('counter--limit');
        titleEL.innerHTML = 'Limit! Buy <b>Pro</b> for >10';
        increaseButtonEl.disabled = true;
        descreaseButtonEl.disabled = true;

    };
    counterValueEl.textContent = newValue;
    increaseButtonEl.blur();
  };

function decrementCounter() {
    const currentValue = counterValueEl.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber - 1;  
    // check if new value less than 0
    if (newValue < 0) {
        newValue = 0;
    };

    counterValueEl.textContent = newValue;
    descreaseButtonEl.blur(); 
};


increaseButtonEl.addEventListener('click', incrementCounter);
descreaseButtonEl.addEventListener('click', decrementCounter);
document.addEventListener('keydown', incrementCounter);