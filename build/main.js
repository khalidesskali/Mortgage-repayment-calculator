const submit = document.querySelector(".button");

submit.addEventListener("click", () => {
  // check the amount field
  const amount = document.querySelector(".amount input");
  if (amount.value === "") {
    showError(amount);
  } else clearError(amount);

  // check the rules
  const term = document.querySelector(".terms");
  const rate = document.querySelector(".rates");

  if (term.value === "") {
    showError(term);
  } else clearError(term);

  if (rate.value === "") {
    showError(rate);
  } else clearError(rate);

  // Check the types
  const error = document.querySelector(".types").nextElementSibling;
  const radios = document.querySelectorAll("input[type='radio']");

  let isChecked = false;

  radios.forEach((radio) => {
    if (radio.checked) {
      isChecked = true;
    }
  });

  if (isChecked) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }

  //  Show the price
  const result = document.querySelector(".result");
  const price = document.querySelector(".price");

  if (
    amount.value !== "" &&
    term.value !== "" &&
    rate.value !== "" &&
    isChecked === true
  ) {
    result.style.display = "none";
    price.style.display = "block";

    const number = document.querySelector(".number");
    number.textContent = "1,797.74";
  }
});

function showError(input) {
  input.style.border = "1px solid var(--red)";
  input.nextElementSibling.style.backgroundColor = "var(--red)";
  input.nextElementSibling.style.color = "white";
  let parent = input.parentElement.nextElementSibling;
  parent.style.display = "block";
}

function clearError(input) {
  let parent = input.parentElement.nextElementSibling;
  input.style.border = "1px solid var(--slate-500)";
  input.nextElementSibling.style.backgroundColor = "var(--slate-100)";
  input.nextElementSibling.style.color = "var(--slate-700)";
  parent.style.display = "none";
}
