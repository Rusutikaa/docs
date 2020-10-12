const languageSelector = document.getElementById('footer-language-selector');
if (languageSelector) {
  languageSelector.onchange = (event) => {
    const { value } = event.target;
    window.location = value;
  };
}

document.querySelectorAll('#directorynav h3').forEach((item) => {
  item.addEventListener('click', (event) => {
    item.classList.toggle('enhance');
  });
});
