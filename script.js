
const colorPicker = document.getElementById('color');
const button = document.getElementById('btn');
const colorCode = document.getElementById('color-code');

button.addEventListener('click', generateBackground);

function generateBackground() {
  const selectedColor = colorPicker.value;
  document.body.style.backgroundColor = selectedColor;
  colorCode.textContent = `Color code: ${selectedColor}`;
}