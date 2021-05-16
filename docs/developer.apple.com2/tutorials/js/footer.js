document.querySelectorAll('#directorynav h3').forEach((item) => {
  item.addEventListener('click', (event) => {
    item.classList.toggle('enhance');
  });
});
