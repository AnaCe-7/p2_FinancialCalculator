window.addEventListener('load', ()=> {
    const display = document.querySelector(".calculator-display");
    const calculatorButtons = document.getElementsByClassName('btn');

    const calculatorButtonsArray = Array.from(calculatorButtons);

    calculatorButtonsArray.forEach( (button) => {
        button.addEventListener('click', ()=> {
            calculadora(button, display);            
        })
    })
});

function calculadora (button, display) {
    switch (button.innerHTML){
        case 'C':
            erase(display);
            break;

        case '=':
            calculate(display);
            break;
        
        default:
            update(display, button);
            break;
    }
}