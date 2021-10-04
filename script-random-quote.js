(function () {
	"use strict";

	const quoteButton = document.getElementById("quote-button");

	function getRandomNumber(max) {
		return Math.floor(Math.random() * max);
	}

	async function getRandomQuote() {
		const quoteURL = "https://type.fit/api/quotes";

		await fetch(quoteURL)


			.then(response => {
				response.text().then(function (text) {
					let quotes = JSON.parse(text);
					let quotesLength = quotes.length;
					let randomNumber = getRandomNumber(quotesLength);
					let randomQuote = quotes[randomNumber];
	
					const quoteContainer = document.getElementById("quote");
					const quoteText = document.getElementById("quote-text");
					const quoteAuthor = document.getElementById("quote-author");
	
					quoteContainer.classList.add("quote-transition");
	
					quoteText.innerHTML = randomQuote.text;
					quoteAuthor.innerHTML = randomQuote.author;
	
					quoteContainer.addEventListener("animationend", () => {
						quoteContainer.classList.remove("quote-transition");
					});
				});
				
			});
	}

	quoteButton.onclick = () => getRandomQuote();
})();
