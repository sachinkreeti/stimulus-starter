import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["slide"];

  initialize() {
    this.index = 0;
    this.showCurrentSlide();
  }

  next() {
    this.index += 1;
    this.showCurrentSlide();
  }

  previous() {
    this.index -= 1;
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.index;
    });
  }
}
