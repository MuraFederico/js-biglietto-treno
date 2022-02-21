let age = parseInt(prompt('quanti anni hai?'));

while (isNaN(age)) {
    alert('inserisci un numero');
    age = parseInt(prompt('quanti anni hai?'));
}

let km = prompt('quanti chilometri e lungo il viaggio?');

while (isNaN(km)) {
    alert('inserisci un numero');
    km = parseInt(prompt('quanti chilometri e lungo il viaggio?'));
}

let price = km * 0.21;

if (age < 18) {
    sale = price * 20 / 100;
    price = price - sale;
    // price = Math.floor(price * 100) / 100;
    document.getElementById('my-output').innerHTML = `il biglietto costa ${price.toFixed(2)}$`;    
} else if (age > 65) {
    sale = price * 40 / 100;
    price = price - sale;
    // price = Math.floor(price * 100) / 100;
    document.getElementById('my-output').innerHTML = `il biglietto costa ${price.toFixed(2)}$`;
} else {
    // price = Math.floor(price * 100) / 100;
    document.getElementById('my-output').innerHTML = `il biglietto costa ${price.toFixed(2)}$`;
}
console.log(age);
console.log(price);