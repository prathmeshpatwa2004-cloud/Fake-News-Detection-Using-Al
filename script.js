const newsInput = document.getElementById("news");
const result = document.getElementById("result");
const checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", function () {
  const news = newsInput.value.trim();

  if (news.length < 20) {
    result.textContent =
      "Please enter a news article with at least 20 characters.";
    result.style.background = "#fff3cd";
    return;
  }

  result.style.background = "#e8f2fc";
  result.textContent =
    "Demo mode: Your article has been submitted for checking, " +
    "but this website does not yet have an AI verification service. " +
    "No truth or fake-news determination has been made. " +
    "Check the claims against reliable news reports and official sources.";
});
