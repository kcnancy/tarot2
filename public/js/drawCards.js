

const myReading = document.getElementById('myReading')
const pastCardName = document.getElementById('cardName1');
const pastCardImg = document.getElementById('img-1')
const pastCardDesc = document.getElementById('info-1')

const pastCardName2 = document.getElementById('cardName2');
const pastCardImg2 = document.getElementById('img-2')
const pastCardDesc2 = document.getElementById('info-2')

const pastCardName3 = document.getElementById('cardName3');
const pastCardImg3 = document.getElementById('img-3')
const pastCardDesc3 = document.getElementById('info-3')


myReading.addEventListener('click', function() {
fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3")
.then(response => response.json())
  .then(data => {
    pastCardName.innerHTML = data.cards[0].name
    pastCardDesc.innerHTML = data.cards[0].meaning_up

    pastCardName2.innerHTML = data.cards[1].name
    pastCardDesc2.innerHTML = data.cards[1].meaning_up

    pastCardName3.innerHTML = data.cards[2].name
    pastCardDesc3.innerHTML = data.cards[2].meaning_up
      console.log(data)
  })

  
})