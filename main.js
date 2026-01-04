document.addEventListener("click", (e) => {

  // find nearest speaker button (works even if img is clicked)
  const button = e.target.closest("button");
  if (!button) return;

  const block = button.closest(".phrase-block");
  if (!block) return;

  // Hindi button
  if (button.classList.contains("speakerhindi")) {
    const text = block.querySelector(".phindi").innerText;
    speak(text, "hi-IN");
  }

  // English button
  if (button.classList.contains("speakereng")) {
    const text = block.querySelector(".penglish").innerText;
    speak(text, "en-US");
  }
});

function speak(text, lang) {
  window.speechSynthesis.cancel(); // stop previous speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 1;
  utterance.pitch = 0;

  window.speechSynthesis.speak(utterance);
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const blocks = document.querySelectorAll(".phrase-block");

  blocks.forEach(block => {
    const hindiText = block.querySelector(".phindi").innerText.toLowerCase();
    const englishText = block.querySelector(".penglish").innerText.toLowerCase();

    // match with Hindi OR English
    if (hindiText.includes(query) || englishText.includes(query)) {
      block.style.display = "";
    } else {
      block.style.display = "none";
    }
  });
});