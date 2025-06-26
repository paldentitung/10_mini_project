const CorrectAnswers = {
  question1: "Paris",
  question2: "newDelhi",
  question3: "volleyball",
  question4: "Mars",
  question5: "Shakespeare",
  question6: "Pacific",
};

const modal = document.querySelector(".modal");
const closeBtnModal = document.querySelector(".closeBtn");
const modalContent = document.querySelector(".modal-content");
console.log(modalContent);
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const keys = Object.keys(CorrectAnswers);

  keys.forEach((key) => {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === CorrectAnswers[key]) {
      score++;
    }
  });

  modalContent.innerHTML = `you scored ${score} out of the ${keys.length}`;
  modal.classList.add("active");
  closeBtnModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});
document.querySelector("form").reset();

