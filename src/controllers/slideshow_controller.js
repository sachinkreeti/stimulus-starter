import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["slide"];
  static values = { index: Number };

  next() {
    this.indexValue += 1;
  }

  previous() {
    this.indexValue -= 1;
  }

  indexValueChanged() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue;
    });
  }
}
