import CreateHtml from "./create-html";
import Controller from "./controller";

export default class DOMManager {
  static initialize() {
    CreateHtml.initializeHtml();
    Controller.initGifButton();
  }
}
