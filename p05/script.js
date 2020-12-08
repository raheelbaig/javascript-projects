//
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-millionaires');
const sortButton = document.getElementById('sort');
const totalButton = document.getElementById('calculate-total');
//Initializing data Array
let data = [];


//Create Initial Users
generateRandomUser();
generateRandomUser();
generateRandomUser();

//Function to Fetch Random User from API
// API : randomuser.me/api
async function generateRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.result[0];
    
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        worth: Math.round(Math.random()*1000000)
    }

    addData(newUser);
}

//Add Newly Generate User into the data Array
function addData(newUser) {
    data.push(newUser);

    updateDOM();
}

//Functon to Update the UI with DOM
function updateDOM(inputData = data) {
    main.innerHTML = '<h2><strong>Name</strong>Net Worth</h2>'

    inputData.forEach( item => { 
        document.createElement('div')
        element.classlist.add('name');
        element.innerHTML = `<strong>${item.name}</strong>${formatCurrency(item.worth)}`;
        main.appendChild(element);
    });
}

//Function to format a number as a currency
function formatCurrency(num) {
    return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
//1. Add user Event listener
addUserButton.addEventListener('click', generateRandomUser);