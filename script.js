
const quoteContainerEl = document.getElementById('quoteContainer');
const quoteTextEl = document.getElementById('quote');
const authorTextEl = document.getElementById('author');
const twitterBtnEl = document.getElementById('twitter');
const newQuoteBtnEl = document.getElementById('newQuote');
const loaderEl = document.getElementById('loader')
let apiQuotes = [];

// New Quote
function newQuote(){
    showLoader();
    const index = Math.floor(Math.random() * apiQuotes.length);
    const quote = apiQuotes[index];
    quoteTextEl.textContent = quote.text;
    authorTextEl.textContent = quote.author;
    hideLoader();
}

//show loader
function showLoader() {
    loaderEl.hidden = false;
    quoteContainerEl.hidden = true;
}

// hide loader
function hideLoader() {
    loaderEl.hidden = true;
    quoteContainerEl.hidden = false;
}

//tweet quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteTextEl.textContent} - ${authorTextEl.textContent}`;
    window.open(twitterUrl, '_blank')
}

// Get Quotes from API
async function getQuotes() {
    showLoader();
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(`Oops... Something went wrong`);
        // catch error
    }
}


// event listners
newQuoteBtnEl.onclick = function() {
    newQuote();
}

twitterBtnEl.addEventListener('click', tweetQuote);

// Load
getQuotes();