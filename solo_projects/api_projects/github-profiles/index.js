const APIURL = "https://api.github.com/users/";

const card = document.getElementById("card");

const main = document.querySelector("main");

const form = document.querySelector("form");

const details = document.getElementById("details");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("search");
  main.innerHTML = "";
  getUser(input.value);
});

getUser();

// const response = await fetch(APIURL + username + "/repos");
// const respData = await response.json();
// let count = 0;

async function getUser(username = "coder") {
  const response = await fetch(APIURL + username);
  const respData = await response.json();

  showProfile(respData);

  showRepos(username);
}

async function showRepos(username = "coder") {
  const repos = document.getElementById("repos");
  const response = await fetch(APIURL + username + "/repos");
  const respData = await response.json();

  console.log(respData[20]);

  respData
    .sort(function (a, b) {
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 10)
    .forEach((repo) => {
      const links = document.createElement("a");
      links.classList.add("repos");

      links.href = `${repo.html_url}`;
      links.target = `_blank`;
      links.innerText = `${repo.name}`;

      repos.appendChild(links);
    });
}

function showProfile(username) {
  const user = document.createElement("div");
  user.classList.add("card");
  user.setAttribute("id", "card");

  user.innerHTML = `
      <div class="image">
        <img
          src="${username.avatar_url}"
          alt=""
          class="icon"
        />
      </div>
      <div class="inner-con">
        <h3>${username.name}</h3>
        <p>
        ${username.bio}
        </p>
        <div class="details" id="details">
          <p>Followers: ${username.followers}</p>
          <p>Following: ${username.following}</p>
          <p>Repos: ${username.public_repos}</p>
        </div>
        <div class="repos" id="repos" ></div>
      </div>
`;

  // repoEl.innerHTML = `
  //   <a href="${repos.html_url}">${repos.name}</a>
  // `;

  main.appendChild(user);
  // repos.appendChild(repoEl);
}
