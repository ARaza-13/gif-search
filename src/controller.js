require("dotenv").config();

export default class Controller {
  static async fetchGif() {
    const image = document.getElementById("gif");
    try {
      const response = await fetch(
        `${process.env.GIPHY_API_URL}?api_key=${process.env.API_KEY}&s=Cloud_and_Tifa`,
        { mode: "cors" },
      );
      const imgData = await response.json();
      image.src = imgData.data.images.original.url;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
}
