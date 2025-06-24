const RandomBtn = document.querySelector(".quote-btn");
const quote = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".quote-author");
const quotelist = [
  {
    id: 1,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    id: 2,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 3,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    id: 4,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 5,
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    id: 6,
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    id: 7,
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    id: 8,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 9,
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    id: 10,
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
];

RandomBtn.addEventListener("click",()=>{
    const RandomQuote = quotelist[Math.floor(Math.random() * quotelist.length)];
    quote.innerHTML=`${RandomQuote.text}`;
    quoteAuthor.innerHTML=`-${RandomQuote.author}`
})
