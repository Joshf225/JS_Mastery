const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");
const input = document.getElementById("input").value;

submitBtn.addEventListener("click", (e) => {
  form.preventDefault();
  console.log(input);
});
