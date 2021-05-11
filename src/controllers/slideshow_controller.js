import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["slide"];
  static values = { index: Number };

  initialize() {
    console.log(this.indexValue);
    console.log(typeof this.indexValue);
    this.showCurrentSlide();
  }

  next() {
    this.indexValue += 1;
    this.showCurrentSlide();
  }

  previous() {
    this.indexValue -= 1;
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue;
    });
  }
}
