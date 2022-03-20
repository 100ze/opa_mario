// app/app.js
import Model from "./model.js"
import View from "./view.js"

// used a "self-invoking" function because it is not allowed to use "await" in top level scripts
(async function() {
  window.opa = new View()
  window.opa.success()
  window.opa.failure()
})()
