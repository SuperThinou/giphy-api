const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY&s=vaporwave",
).then(function (response) {
  console.log(response.json());
});
