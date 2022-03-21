// app/controller.js
import Model from "./model.js"
import View from "./view.js"

export default class Controller {
  constructor() {
    this.input = document.querySelector("#input")
    this.save_button = document.querySelector("#save_button")
    this.view = new View()
    this.model = new Model()
  }

  async _getImageController() {
    const url = this.input.value

    if (url) {
      const image = await this.model.getImage(url)
      console.log(image)
      console.log()

      if (image) {
        this.view.success()
      } else {
        this.view.failure()
      }
    } else {
      this.view.failure()
    }
  }

  async init() {
    this.save_button.addEventListener("click", this._getImageController.bind(this))
  }
}