require("dotenv").config();

export default class Controller {
  static initButtons() {
    const searchButton = document.getElementById("submit-button");
    const gifButton = document.getElementById("gif-button");

    searchButton.addEventListener("click", Controller.searchGif);
    gifButton.addEventListener("click", Controller.changeGif);
  }

  static async searchGif() {
    const img = document.getElementById("gif");
    const searchInput = document.getElementById("search");
    const gifName = searchInput.value.trim().replace(/ /g, "_");

    if (gifName === "") {
      alert("Please enter a valid GIF search.");
      return;
    } else if (gifName === img.getAttribute("data-img")) {
      alert("Please enter a new GIF search.");
      return;
    }

    img.setAttribute("data-img", `${gifName}`);
    try {
      const gifUrl = await Controller.fetchGif(gifName);
      img.src = gifUrl;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  static async fetchGif(gifName) {
    try {
      const response = await fetch(
        `${process.env.GIPHY_API_URL}?api_key=${process.env.API_KEY}&s=${gifName}`,
        { mode: "cors" },
      );
      const imgData = await response.json();
      return imgData.data.images.original.url;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  static async changeGif() {
    const img = document.getElementById("gif");
    const gifName = img.getAttribute("data-img");
    if (!gifName) {
      alert("Please enter a new GIF search.");
      return;
    }

    try {
      const gifUrl = await Controller.fetchGif(gifName);
      img.src = gifUrl;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
}
