// Net Portfolio Value = capital × (1 + interest / 100) ^ years

function calculateNetPortfolioValue(years, capital, interest) {
    let portfolioValue = capital * Math.pow((1 + interest / 100), years);
    return portfolioValue;
}

const calculateBtn = document.querySelector('.button');
const resetBtn = document.querySelector('.resetButton');

calculateBtn.addEventListener('click', function () {
    const capital = Number(document.querySelector('#capital input').value);
    const years = Number(document.querySelector('#years input').value);
    const interest = Number(document.querySelector('#interest input').value);
    const output = document.querySelector('#output');

    if(capital === 0 && years === 0 && interest === 0){
        alert("Enter all the values.");
    }
    else{
        const result = calculateNetPortfolioValue(years, capital, interest);
        output.innerHTML = `Net Portfolio Value: ₹${result.toFixed(2)}`;
    }
});

resetBtn.addEventListener('click', function(){
    if(capital !== 0 && years !== 0 && interest !== 0){
        document.querySelector('#capital input').value = '';
        document.querySelector('#years input').value = '';
        document.querySelector('#interest input').value = '';
    }
});








