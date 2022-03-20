// app/app.js
import Model from "./model.js"

// used a "self-invoking" function because it is not allowed to use "await" in top level scripts
(async function() {
  window.opa = new Model()
  var x = await window.opa.getImage("https://100ze.github.io/lydia/img/lydiaaaaa.jpg")
  console.log(x)
  document.querySelector("img").src = x
  console.log("it's me mario!")
})()
