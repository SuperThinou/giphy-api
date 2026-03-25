const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const loader = document.getElementById("loader");
const gif = document.getElementById("gif");
const randomGifBtn = document.getElementById("randomGifBtn");
const modeSelector = document.getElementById("mode");

function loadGif() {
  addLoadingStyle();
  const url = getApiUrl();
  console.log(url);

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      gif.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.error("Erreur :", error);
    })
    .finally(function () {
      removeLoadingStyle();
    });
}

function getApiUrl() {
  const searchValue = searchBar.value.trim();
  const mode = modeSelector.value;

  const query = searchValue !== "" ? searchValue : mode;

  if (query === "random") {
    return `https://api.giphy.com/v1/gifs/random?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY`;
  }

  return `https://api.giphy.com/v1/gifs/translate?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY&s=${query}`;
}

function addLoadingStyle() {
  randomGifBtn.disabled = true;
  randomGifBtn.classList.add("btn-disabled");
  loader.classList.remove("hidden");
  gif.style.opacity = "0.3";
}

function removeLoadingStyle() {
  randomGifBtn.disabled = false;
  randomGifBtn.classList.remove("btn-disabled");
  loader.classList.add("hidden");
  gif.style.opacity = "1";
}

loadGif();

searchBtn.addEventListener("click", () => {
  if (searchBar.value.trim() === "") return;

  loadGif();
});

searchBar.addEventListener("keydown", (e) => {
  if (searchBar.value.trim() === "") return;

  if (e.key === "Enter") {
    loadGif();
  }
});

randomGifBtn.addEventListener("click", loadGif);

modeSelector.addEventListener("change", () => {
  gif.src = "";
  loadGif();
});
