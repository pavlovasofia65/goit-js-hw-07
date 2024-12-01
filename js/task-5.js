function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');
btn.addEventListener('click', () => {
  console.log("click");
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = `${newColor}`;
  span.textContent = `${newColor}`;
})