document.getElementById("generateBtn").addEventListener("click", () => {
  const lower = document.getElementById("lowercase").checked;
  const upper = document.getElementById("uppercase").checked;
  const number = document.getElementById("numbers").checked;
  const symbol = document.getElementById("symbols").checked;
  const length = parseInt(document.getElementById("length").value);

  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

  let pool = "";
  if (lower) pool += lowerChars;
  if (upper) pool += upperChars;
  if (number) pool += numberChars;
  if (symbol) pool += symbolChars;

  if (!pool) {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }

  document.getElementById("result").value = password;
});
