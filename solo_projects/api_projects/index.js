const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector("main");

const movie = document.getElementsByClassName("movie");

const clickOverview = document.getElementsByClassName("click-overview");

addToSite();
// async function showAPI() {
//   const data = await logMovies();
//   const movieEl = document.createElement("div");
//   movieEl.classList.add("overview");
//   movieEl.innerHTML = `
//           <h3 class=""><b>Title:</b> ${data["results"][0].title}</h3>
//           <p class="popularity"><b>Popularity:</b> ${data["results"][0].popularity}</p>
//           <p class="release_date"><b>Release date:</b> ${data["results"][0].release_date}</p>
//           <p class="overview-p"><b>Overview:</b> ${data["results"][0].overview}</p>
//     `;
//   main.appendChild(movieEl);
// }

// showAPI();

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
          <div class = "click-overview none">
            <h3 class=""><b>Title:</b> ${movie.title}</h3>
            <p class="popularity"><b>Popularity:</b> ${movie.popularity}</p>
            <p class="release_date"><b>Release date:</b> ${movie.release_date}</p>
            <p class="overview-p"><b>Overview:</b> ${movie.overview}</p>
          </div>
        </div>
    `;
    main.appendChild(movies);
    movies.addEventListener("click", () => {
      // alert();
      main.style.filter = "brightness(0.5)";
      main.style.transition = "0.4s";
      clickOverview.classList.toggle("none");
      // const data = await logMovies();
      // const movieEl = document.createElement("div");
      // movieEl.classList.add("overview");
      // movieEl.innerHTML = `
      //         <h3 class=""><b>Title:</b> ${data["results"][0].title}</h3>
      //         <p class="popularity"><b>Popularity:</b> ${data["results"][0].popularity}</p>
      //         <p class="release_date"><b>Release date:</b> ${data["results"][0].release_date}</p>
      //         <p class="overview-p"><b>Overview:</b> ${data["results"][0].overview}</p>
      //   `;
      // main.appendChild(movieEl);
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
