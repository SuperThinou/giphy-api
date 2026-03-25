const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const loader = document.getElementById("loader");
const gif = document.getElementById("gif");
const randomGifBtn = document.getElementById("randomGifBtn");
const modeSelector = document.getElementById("mode");

async function loadGif() {
  addLoadingStyle();
  const url = getApiUrl();

  try {
    const response = await fetch(url);
    const data = await response.json();
    gif.src = data.data.images.original.url;
  } catch (error) {
    console.error("Erreur :", error);
  } finally {
    removeLoadingStyle();
  }
}

function getApiUrl() {
  const searchValue = searchBar.value.trim();
  const mode = modeSelector.value;

  const query = searchValue !== "" ? searchValue : mode;

  if (query === "random") {
    return `https://api.giphy.com/v1/gifs/random?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY`;
  }

  return `https://api.giphy.com/v1/gifs/random?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY&tag=${query}`;
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
  searchBar.value = "";

  loadGif();
});

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (searchBar.value.trim() === "") return;

    loadGif();
    searchBar.value = "";
  }
});

randomGifBtn.addEventListener("click", loadGif);

modeSelector.addEventListener("change", () => {
  gif.src = "";
  loadGif();
});

gif.addEventListener("click", () => {
  if (gif.requestFullscreen) {
    gif.requestFullscreen();
  }
});
