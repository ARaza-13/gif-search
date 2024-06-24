export default class CreateHtml {
  static initializeHtml() {
    this.createImage();
    this.createGifButton();
  }

  static createImage() {
    const image = document.createElement("img");
    image.classList.add("gif");
    image.setAttribute("id", "gif");
    image.setAttribute("src", "#");

    const body = document.querySelector("body");
    body.appendChild(image);
  }

  static createGifButton() {
    const button = document.createElement("button");
    button.textContent = "New GIF";
    button.classList.add("gif-button");
    button.setAttribute("id", "gif-button");

    const body = document.querySelector("body");
    body.appendChild(button);
  }
}
