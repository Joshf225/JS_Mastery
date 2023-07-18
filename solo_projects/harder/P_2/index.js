const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");
const input = document.getElementById("input");
const validation = document.getElementById("invalid");
const container = document.querySelector("container");
const dismissBtn = document.getElementById("dismiss");
const completeCard = document.getElementById("card");
const emailEl = document.getElementById("email");

completeCard.classList.add("none");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInput(input.value)) {
    // alert("valid");
    container.classList.toggle("none");
    completeCard.classList.toggle("none");
    emailEl.innerText = `${input.value}`;
  } else {
    // alert("invalid");
    // validation.classList.toggle("none");
    validation.style.opacity = 1;
    input.style.backgroundColor = "rgb(251, 244, 235)";
    input.style.color = "hsl(4, 100%, 67%)";
    input.style.borderColor = "hsl(4, 100%, 67%)";
  }
});

dismissBtn.addEventListener("click", () => {
  completeCard.classList.toggle("none");
  container.classList.toggle("none");
  input.value = "";
});

function checkInput(inp) {
  var validation = /^\S+@\S+\.\S+$/;

  return validation.test(inp);
}
