const subButton = document.getElementsByName('subtraction')[0];
const addButton = document.getElementsByName('addition')[0];
const currentNumberSpan = document.getElementById('currentNumber');
const msgDiv = document.getElementById('msg');

function verifyNegativeNumber() {
    if (parseInt(currentNumberSpan.innerHTML) < 0 ) {
        currentNumberSpan.style.color = 'blue';
    } else {
        currentNumberSpan.style.color = 'black';
    }
}

subButton.addEventListener('click', () => {
    if (parseInt(currentNumberSpan.innerHTML) > -10) {
        currentNumberSpan.innerHTML = parseInt(currentNumberSpan.innerHTML) - 1;
        verifyNegativeNumber();
        msgDiv.innerHTML = '';
        currentNumberSpan.style.animation = '';
    } else {
        msgDiv.innerHTML = 'Número não pode ser menor que -10.';
        currentNumberSpan.style.color = 'red';
        currentNumberSpan.style.animation = 'shake 0.5s';
    }
});

addButton.addEventListener('click', () => {
    if (parseInt(currentNumberSpan.innerHTML) < 10) {
        currentNumberSpan.innerHTML = parseInt(currentNumberSpan.innerHTML) + 1;
        verifyNegativeNumber();
        msgDiv.innerHTML = '';
        currentNumberSpan.style.animation = '';
    } else {
        msgDiv.innerHTML = 'Número não pode ser maior que 10.';
        currentNumberSpan.style.color = 'red';
        currentNumberSpan.style.animation = 'shake 0.5s';
    }
});