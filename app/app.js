// app/app.js
import Controller from "./controller.js"

// used a "self-invoking" function because it is not allowed to use "await" in top level scripts
(async function() {
  function oi(fates, argument) {
    console.log(fates + argument)
  }
  window.opa = new Controller()
  await window.opa.injectScript(oi, ["Stone Sour", "Slipknot"])
})()
