const colorContainer = document.querySelector(".color-container");
const colorInput = document.querySelector(".user-color");
const resetBTn = document.querySelector(".reset");
const HexColor = document.querySelector(".sub-container p");
colorInput.addEventListener("change", () => {
  colorContainer.style.backgroundColor = colorInput.value;
  HexColor.innerHTML = colorInput.value;
});
resetBTn.addEventListener("click", () => {
  colorContainer.style.backgroundColor = "black";
  HexColor.innerHTML = "choose the color";
});
