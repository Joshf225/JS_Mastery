const container = document.getElementById("container");

const img = document.querySelector("img");

container.addEventListener("mousemove", (e) => {
  const x = e.clientx - e.preventDefault.target.offsetTop;
  const y = e.clientx - e.preventDefault.target.offsetLeft;

  img.style.transformOrigin = `${x}px`
});
