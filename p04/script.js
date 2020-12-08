//Geting element from DOM
const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const currOneAmount = document.getElementById('amount-one');
const currTwoAmount = document.getElementById('amount-two');
const flipButton = document.getElementById('flip');
const rate = document.getElementById('rate');

//Fetch exchange rate from 3rd party API and update DOM
//www.exchangerate-api.com
function calculate() {
    const currencyOneCode = currOnePicker.value;
    const currencyTwoCode = currTwoPicker.value;

    fetch(`https://v6.exchangerate-api.com/v6/30d750ca95c527f396b3cd36/latest/${currencyOneCode}`)
        .then( res => res.json() )
        .then( data => {
            //Get the exchange rate from API data 
            const exchangeRate = data.conversion_rates[currencyTwoCode];

            //Display the conversion rate
            rate.innerText = `1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode}`;

            //Apply conversion rate and update amount of currency Two
            currTwoAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);
        });
}

//Flip Funvtion for hte flip button to reverse currency
function flip() {
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();
};

//Event Listners
currOnePicker.addEventListener('change', calculate);
currTwoPicker.addEventListener('change', calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click', flip);

calculate();