function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector('#boxes');
const choose = document.querySelector('[type="number"]');

function createBoxes(amount) {
  const collection = [];
  for (let i=0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 20 + i*10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.textContent = i + 1;
    box.classList.add("box");
    collection.push(box);
  }
  return collection;
}

// const createCollection = () => {
//   const collection = [];
//   const divs = createBoxes(amount);
//   const height = 20;
//   const width = 20;
//   x = 0
//   for (const div of divs) {
//     div.style.height = height + 10 + 'px'; 
//     div.style.width = height + 10 + 'px';
//     div.style.backgroundColor = getRandomHexColor();
//     div.textContent = x + 1;
//   }
// }

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
create.addEventListener('click', () => {
  const amount = Number(choose.value);
  const boxes = createBoxes(amount);
  mainDiv.innerHTML = '';
  boxes.forEach(box => mainDiv.appendChild(box));
});
destroy.addEventListener('click', () => {
  mainDiv.innerHTML = '';
  choose.value = '';
});
