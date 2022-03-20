// app/view.js

export default class View {
  constructor() {
    this.input = document.querySelector("#input")
    this.save_button = document.querySelector("#save_button")
    this.msg_panel = document.querySelector("#msg_panel")
  }

  panel(msg, success) {
    // change panel color according to "success"
    if (success) {
      this.msg_panel.classList.remove("w3-red")
      this.msg_panel.classList.add("mario-green")
    } else {
      this.msg_panel.classList.remove("mario-green")
      this.msg_panel.classList.add("w3-red")
    }

    this.msg_panel.textContent = msg
  }

  success() {
    this.panel("Oki-Doki!", true)
  }

  failure() {
    this.panel("Sinto muito, o Bauzer comeu sua imagem. 0_o", false)
  }
}
