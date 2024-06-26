import Validate from "./validation";
import errorImg from "./assets/imgs/error.jpg";
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
    const gifName = Validate.getInputFromSearch();

    if (!Validate.validateInput(gifName)) {
      return;
    }

    try {
      const gifUrl = await Controller.fetchGif(gifName);
      img.src = gifUrl;
      img.setAttribute("data-img", `${gifName}`);
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
      if (!Validate.validateAPI(imgData)) {
        return errorImg;
      }

      const img = document.getElementById("gif");
      return imgData.data.images.original.url;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  static async changeGif() {
    const img = document.getElementById("gif");
    const gifName = img.getAttribute("data-img");
    const imgUrl = img.src;

    if (!Validate.validateNewGif(gifName, imgUrl)) {
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
