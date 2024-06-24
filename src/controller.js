require("dotenv").config();

export default class Controller {
  static initGifButton() {
    const gifButton = document.getElementById("gif-button");
    gifButton.addEventListener("click", Controller.changeGif);
  }

  static async fetchGif() {
    try {
      const response = await fetch(
        `${process.env.GIPHY_API_URL}?api_key=${process.env.API_KEY}&s=Cloud_and_Tifa`,
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
    try {
      const gifUrl = await Controller.fetchGif();
      img.src = gifUrl;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
}
