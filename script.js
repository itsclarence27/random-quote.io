const quoteData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    const setOfQuote = data.quotes;
    const randomIdx = Math.floor(Math.random() * setOfQuote.length);
    const randomQuote = setOfQuote[randomIdx].quote;
    const authorQuote = setOfQuote[randomIdx].author;
    const quote = randomQuote;
    const author = authorQuote;
    $("#quoteText").text(`❝ ${quote} ❞`);
    $(".author").text(`-${author}`);
  } catch (err) {
    $("#quoteText").text(`Failed to generate, please check your connection`);
  }
};

$("#generateQuote").click(() => {
  quoteData();
});

$("#copyQuote").click(() => {
  const quoteText = $("#quoteText").text().trim();
  if (quoteText) {
    navigator.clipboard.writeText(quoteText).then(
      () => alert("Copied successfully"),
      (err) => alert("Can't copy the text: " + err.message)
    );
  } else {
    alert("No text to copy");
  }
});
