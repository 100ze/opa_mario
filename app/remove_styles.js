import Model from "./model.js"

export default function removeStyles() {
  new Model().injectScript(() => {
    // look for the css file that is styling the buttons and colors on the page
    const linkTheme = document.querySelector("head link[href*='theme']")
    // remove it
    linkTheme.remove()
  })
}
