// app/model.js

export default class Model {
  async isImageAvailable(url) {
    return await fetch(url)
      .then(response => {
        return response.ok
      })
      .catch(error => {
        console.log(error)
        return false
      })
  }

  async _getCurrentTab() {
    const queryOptions = { active: true, currentWindow: true }
    const [tab] = await chrome.tabs.query(queryOptions)
    return tab
  }

  async injectScript(script, args) {
    const tab = await this._getCurrentTab()
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: args,
      func: script
    })
  }
} 
