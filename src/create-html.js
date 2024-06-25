export default class CreateHtml {
  static initializeHtml() {
    this.createImageFrame();
    this.createImage();
    this.createGifButton();
  }

  static createImageFrame() {
    const imageFrame = document.createElement("div");
    imageFrame.classList.add("image-frame");
    imageFrame.setAttribute("id", "image-frame");

    const body = document.querySelector("body");
    body.appendChild(imageFrame);
  }

  static createImage() {
    const image = document.createElement("img");
    image.classList.add("gif");
    image.setAttribute("id", "gif");
    image.setAttribute("src", "#");

    const imageFrame = document.getElementById("image-frame");
    imageFrame.appendChild(image);
  }

  static createGifButton() {
    const button = document.createElement("button");
    button.textContent = "New GIF";
    button.classList.add("gif-button");
    button.setAttribute("id", "gif-button");

    const imageFrame = document.getElementById("image-frame");
    imageFrame.appendChild(button);
  }
}
