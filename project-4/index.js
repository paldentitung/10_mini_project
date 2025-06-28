function clock() {
  const now = new Date();
  console.log(now);
  let hours = now.getHours();
  let min = now.getMinutes();
  let second = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  second = second < 10 ? "0" + second : second;

  const timeFormat = `${hours}:${min}:${second}`;
  document.querySelector(".time").innerHTML = timeFormat;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString(undefined, options);
  document.getElementById("date").textContent = dateString;
}
setInterval(clock, 1000);
clock();
const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  document.body.classList.toggle("active");
  if (document.body.classList.contains("active")) {
    mode.innerHTML = `      <i class="fa-solid fa-toggle-on"></i>`;
  } else {
    mode.innerHTML = `      <i class="fa-solid fa-toggle-off"></i>`;
  }
});
