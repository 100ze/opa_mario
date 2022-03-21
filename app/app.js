// app/app.js
import Controller from "./controller.js"

// used a "self-invoking" function because it is not allowed to use "await" in top level scripts
(async function() {
  window.opa = new Controller()
  window.opa.init()
})()
