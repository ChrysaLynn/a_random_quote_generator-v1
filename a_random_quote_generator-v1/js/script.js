/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Random quotes array 

const quotes = [
  {
    quote: 'Words offer the means to meaning, and for those who will listen, the enunciaiton of truth.',
    source: 'V',
    citation: 'V for Vendetta',
    year: '2005'
  }, 
  {
   quote: 'If you are working on something you really care about, you don\'t have to be pushed. The vision pulls you.',
   source: 'Steve Jobs',
   citation: '',
   year: ''
  },
  {
    quote: 'Women challenge the status quo because we are never it.',
    source: 'Cindy Gallop',
    citation: '',
    year: ''
  },
  {
    quote: 'The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.',
    source: 'William James',
    citation: '',
    year: ''
  },
  {
    quote: 'The most dangerous phrase in the language is, "We\'ve always done it this way."',
    source: 'Grace Hopper',
    citation: '',
    year: ''
  },
  {
    quote: 'The one thing that doesn\'t abide by majority rule is a person\'s conscience.',
    source: 'Atticus Finch',
    citation: 'To Kill a Mockingbird (by Harper Lee)',
    year: '1960'
  },
  {
    quote: 'I never look back darling, it distracts from the now. ',
    source: 'Edna Mode',
    citation: 'The Incredibles',
    year: '2004'
  },
  {
    quote: 'We build our computer (systems) the way we build our citites: over time, without a plan, on top of ruins.',
    source: 'Ellen Ullman',
    citation: 'Twitter @CodeWisdom',
    year: '2017'
  } 
]

// Function to create a random number to retrieve an random array item

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return randomNumber;
} 

// Declaring the variables used in the function below

let quoteString;
let quoteObject;

// This function will call the getRandomQuote() function, then use that array item to create an HTML string with quote properties that'll be displayed in the browser

function printQuote () {
  quoteObject = quotes[getRandomQuote()];
  quoteString = `<p class="quote">${quoteObject.quote}</p>
  <p class="source">${quoteObject.source}`;
  if (quoteObject.citation) {
    quoteString += `<span class="citation">${quoteObject.citation}</span>`;
  }
  if (quoteObject.year) {
    quoteString += `<span class="year">${quoteObject.year}</span>`;
  }
  quoteString += `</p>`;
  console.log(quoteObject);
  document.getElementById('quote-box').innerHTML = quoteString;
}


document.getElementById('load-quote').addEventListener("click", printQuote, false);