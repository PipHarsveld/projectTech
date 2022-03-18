const apiUrl = "https://type.fit/api/quotes";

//Random quotenummer uit lijst halen
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }


async function getApi(url) {
    // alle data uit url opslaan in response
    const response = await fetch(url);
    
    // data uit response opslaan in json vorm onder data
    const data = await response.json();
    

    if (response) {
        //html section element = quote
        const quote = document.querySelector('section');
        // quote ophalen
        const quoteText = data[getRandomNumber(1643)].text;
        //quote plaatsen in de html
        quote.innerHTML = quoteText;
    }
}

    // async functie aanroepen
    getApi(apiUrl);



    // let touchstartX = 0
    // let touchendX = 0
    
    // const slider = document.getElementById('card')
    
    // function handleGesture() {
    //   if (touchendX < touchstartX) alert('swiped left!')
    //   if (touchendX > touchstartX) alert('swiped right!')
    // }
    
    // slider.addEventListener('touchstart', e => {
    //   touchstartX = e.changedTouches[0].screenX
    // })
    
    // slider.addEventListener('touchend', e => {
    //   touchendX = e.changedTouches[0].screenX
    //   handleGesture()
    // })