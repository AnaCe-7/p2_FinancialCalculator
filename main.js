window.addEventListener('load', ()=> {
    const display = document.querySelector(".calculator-display");
    const calculatorButtons = document.getElementsByClassName('btn');

    const calculatorButtonsArray = Array.from(calculatorButtons);

    calculatorButtonsArray.forEach( (button) => {
        button.addEventListener('click', ()=> {
            console.log(button.innerHTML);            
        })
    })
});







