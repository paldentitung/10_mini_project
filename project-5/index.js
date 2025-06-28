function digit(num) {
  let result = document.getElementById("result");
  result.value += num;
}
function operation(ope) {
  let result = document.getElementById("result");
  const lastChar = result.value.slice(-1);

  if (ope === "Ac") {
    result.value = "";
    return;
  }
  if (ope === "c") {
    result.value = result.value.slice(0, -1);
    return;
  }
  if ("+-*/%".includes(ope)) {
    if ("+-*/%".includes(lastChar) || result.value === "") {
      return;
    }
    result.value += ope;
    return;
  }
}

const equalbtn = document.getElementById("equalbtn");
equalbtn.addEventListener("click", () => {
  let result = document.getElementById("result");
  result.value = eval(result.value) || 0;
});
