const generateBtn = document.getElementById("gen-btn");
const copyLink = document.getElementById("copy-new-url");

linkEl = `  <a href="<%= shortURL.short %>"><%= shortURL.short %></a>`;

generateBtn.addEventListener("click", () => {
  // copyLink.createElent("div");

  // copyLink.appendChild(linkEl);
  alert("hello");
});

El = `
<% shortURLs.forEach(shortURL => { %>

  <a href="<%= shortURL.full %>"><%= shortURL.full %></a>

  <a href="<%= shortURL.short %>"><%= shortURL.short %></a>

  <%= shortURL.clicks %> <% }) %>
`;
console.log("hello!!!!!!!!!");
