const quoteWrapper = document.querySelector("h1");

const randomize = () => {
    
    const quotes = ['"Confidence is 10% hard work and 90% delusion."', '“Hard work never killed anybody, but why take a chance?”', '"Oh, you hate your job? Why didn’t you say so? There’s a support group for that. It’s called everybody, and they meet at the bar."']
    
    const randomNum = Math.round(Math.random() * (quotes.length -1));

    const words = quotes[randomNum];

    return quoteWrapper.innerHTML = words;
}

randomize();