const img = document.querySelector("img");
const randomGifBtn = document.getElementById("randomGifBtn");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY&s=vaporwave",
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

randomGifBtn.addEventListener("click", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY&s=vaporwave",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
});
