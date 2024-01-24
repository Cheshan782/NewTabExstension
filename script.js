let quote = document.getElementById("quote");
let author = document.getElementById("author");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      document.getElementById("Quote").textContent = item.content;
      document.getElementById("Author").textContent = item.author;
      console.log(item.content);
      console.log(item.author);
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
