export default class CreateHtml {
  static initializeHtml() {
    this.createImage();
  }

  static createImage() {
    const image = document.createElement("img");
    image.classList.add("gif");
    image.setAttribute("id", "gif");
    image.setAttribute("src", "#");

    const body = document.querySelector("body");
    body.appendChild(image);
  }
}
