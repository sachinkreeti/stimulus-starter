import { Controller } from "stimulus";

export default class extends Controller {
  static values = { url: String, refreshInterval: Number };

  connect() {
    this.load();

    if (this.refreshIntervalValue) {
      this.startRefreshing();
    }
  }

  disconnect() {
    this.stopRefreshing();
  }

  startRefreshing() {
    this.refreshTimer = setInterval(
      () => this.load(),
      this.refreshIntervalValue
    );
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  load() {
    fetch(this.urlValue)
      .then((response) => response.text())
      .then((html) => (this.element.innerHTML = html));
  }
}
