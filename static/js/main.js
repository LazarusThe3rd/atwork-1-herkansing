const digits = document.querySelectorAll(".digits");

digits.forEach((digit, index) => {
  if (digit.textContent === ".") return;

  const finalNumber = digit.textContent;

  let counter = 0;

  const interval = setInterval(() => {
    digit.textContent = Math.floor(Math.random() * 5);

    counter++;

    if (counter > 20 + index * 2) {
      clearInterval(interval);
      digit.textContent = finalNumber;
    }
  }, 90);
});
