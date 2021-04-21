const tarot = require('./tarotdeck')

const myReading = document.getElementById('myReading')
const past = document.getElementById('info-1');
myReading.addEventListener('click', function() {
past.innerHTML = tarot.drawCard();
})