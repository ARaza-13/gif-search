export default class Validate {
  static getInputFromSearch() {
    const searchInput = document.getElementById("input");

    const gifName = searchInput.value;
    return gifName
      .replace(/(\s+$|^\s+)/g, "") //remove whitespace from beginning and end of string
      .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
      .replace(/(\s+,)/g, ",") // remove any white space that proceeds a comma
      .replace(/\s+/g, "_"); // replace any remaining white space with a _, to work with the api cell
  }

  static validateInput(input) {
    const img = document.getElementById("gif");
    const errorMsg = document.getElementById("error");

    if (input === "") {
      errorMsg.textContent = "Please enter a valid GIF search.";
      return false;
    } else if (input === img.getAttribute("data-img")) {
      errorMsg.textContent = "Please enter a new GIF search.";
      return false;
    } else if (input.length > 100) {
      errorMsg.textContent = "Please enter less than 100 characters.";
      return false;
    }

    errorMsg.textContent = "";
    return true;
  }

  static validateAPI(imgData) {
    const errorMsg = document.getElementById("error");

    if (imgData.meta.msg.toLowerCase() === "unauthorized") {
      errorMsg.textContent = "Invalid API key.";
      return false;
    } else if (imgData.meta.status === 200 && imgData.data.length === 0) {
      errorMsg.textContent = "No GIFS found. Please try a different search.";
      return false;
    } else if (
      imgData.meta.status === 429 ||
      imgData.meta.msg.toLowerCase() === "api rate limit exceeded"
    ) {
      errorMsg.textContent =
        "Search limit temporarily exceeded. Try again in at least an hour.";
      return false;
    }

    errorMsg.textContent = "";
    return true;
  }

  static validateNewGif(gifName, imgUrl) {
    const errorMsg = document.getElementById("error");
    if (!gifName) {
      errorMsg.textContent = "Please first search for a GIF.";
      return false;
    } else if (
      imgUrl.includes("localhost") &&
      (imgUrl.includes("error.jpg") || imgUrl.includes("placeholder.png"))
    ) {
      errorMsg.textContent = "Please enter a valid GIF search first.";
      return false;
    }

    errorMsg.textContent = "";
    return true;
  }
}
