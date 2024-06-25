export default class CreateHtml {
  static initializeHtml() {
    this.createPageElements();
    this.createSearchForm();
    this.createImageFrame();
    this.createImage();
    this.createGifButton();
  }

  static createPageElements() {
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");

    header.classList.add("header");
    main.classList.add("main");
    footer.classList.add("footer");

    header.setAttribute("id", "header");
    main.setAttribute("id", "main");
    footer.setAttribute("id", "footer");

    const body = document.querySelector("body");
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
  }

  static createSearchForm() {
    const searchForm = document.createElement("div");
    searchForm.setAttribute("id", "search-form");
    searchForm.setAttribute("action", "#");
    searchForm.setAttribute("method", "post");

    const input = document.createElement("input");
    input.classList.add("search");
    input.setAttribute("id", "search");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search..");
    input.setAttribute("name", "search");

    const button = document.createElement("button");
    button.textContent = "Search";
    button.classList.add("button", "submit");
    button.setAttribute("id", "submit-button");

    searchForm.appendChild(input);
    searchForm.appendChild(button);

    const header = document.getElementById("header");
    header.appendChild(searchForm);
  }

  static createImageFrame() {
    const imageFrame = document.createElement("div");
    imageFrame.classList.add("image-frame");
    imageFrame.setAttribute("id", "image-frame");

    const main = document.getElementById("main");
    main.appendChild(imageFrame);
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
    button.classList.add("button", "gif-button");
    button.setAttribute("id", "gif-button");

    const imageFrame = document.getElementById("image-frame");
    imageFrame.appendChild(button);
  }
}
