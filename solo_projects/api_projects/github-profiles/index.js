const APIURL = "https://api.github.com/users/";

const card = document.getElementById("card");

const main = document.querySelector("main");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("search");
  main.innerHTML = "";
  getUser(input.value);
});

getUser();

async function getUser(username = "coder") {
  const response = await fetch(APIURL + username);
  const respData = await response.json();

  showProfile(respData);
}

async function searchUser() {
  const response = await fetch(APIURL + username);
  const respData = await response.json();

  showProfile(respData);
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
        <div class="details">
          <p>Followers: ${username.followers}</p>
          <p>Following: ${username.following}</p>
          <p>Repos: ${username.public_repos}</p>
        </div>
      </div>
`;

  main.appendChild(user);
}
