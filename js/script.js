/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'Words offer the means to meaning, and for those who will listen, the ennunciaiton of truth.',
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
    quote: 'Women challenge the status quo becasue we are never it.',
    source: 'Cindy Gallop',
    citation: '',
    year: ''
  },
  {
    quote: 'The greatest discovery of my generation is that a human being can alster his life by altering his attitudes.',
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

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  // console.log(randomNumber);
  // console.log(quotes[randomNumber]);
  return randomNumber;
} 
// getRandomQuote();

let quoteString;
let quoteObject;

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


// printQuote();
// console.log(quoteString);
// console.log(quoteObject);

// document.getElementById('quote-box').innerHTML = printQuote(); 


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);