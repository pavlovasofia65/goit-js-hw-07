function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector('#boxes');
const choose = document.querySelector('[type="number"]');
const fragment = document.createDocumentFragment();

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
    fragment.appendChild(box);
  }
  collection.push(fragment);
  return collection;
}

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
