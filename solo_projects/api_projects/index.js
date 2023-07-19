const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector("main");

addToSite();

async function logMovies() {
  const response = await fetch(APIURL);
  const respData = await response.json();

  // console.log(respData["results"]);
  return respData;
}

async function addToSite() {
  const list = await logMovies();

  console.log(list["results"]);

  list["results"].forEach((movie) => {
    const exit = document.getElementById("exit");
    const movIMG = IMGPATH + movie.poster_path;
    const movies = document.createElement("div");
    movies.classList.add("movie");
    movies.innerHTML = `
        <img
          src="${movIMG}"
          alt="${movie.title}"
        />
        <div class="movie-info">
          <h3 class="title">${movie.title}</h3>
        </div>
    `;
    main.appendChild(movies);
    movies.addEventListener("click", () => {
      // movies.classList.toggle("none");
      // exit.addEventListener("click", () => {
      //   movies.innerHTML = `
      //   <img
      //   src="${movIMG}"
      //   alt="${movie.title}"
      // />
      // <div class="movie-info">
      //   <h3 class="title">${movie.title}</h3>
      // </div>
      // `;
      // });
    });
  });
}

function movieInfo() {}
