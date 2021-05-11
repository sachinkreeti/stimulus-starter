import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["source"];

  copy(e) {
    e.preventDefault();
    this.sourceTarget.select();
    document.execCommand("copy");
  }
}
