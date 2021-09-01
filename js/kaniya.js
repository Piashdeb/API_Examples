const loadQuots = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuots(data));
}

const displayQuots = quote => {
    // console.log(quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}