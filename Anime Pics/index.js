const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function() {
  try {
    // Fetch random anime image from Waifu.pics
    const response = await fetch("https://api.waifu.pics/sfw/waifu");
    const data = await response.json();

    animeContainerEl.style.display = "block";
    animeImgEl.src = data.url;
    animeNameEl.innerText = "Random Anime"; // this API doesn't return artist
  } catch (error) {
    console.log("Error fetching anime:", error);
    animeNameEl.innerText = "Failed to load image 😢";
  }
});
