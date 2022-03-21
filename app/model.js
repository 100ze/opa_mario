// app/model.js

export default class Model {
  // function to download images and return as a url that can be used on the page
  async getImage(url) {
    return await fetch(url)
      .then(response => {
        return response.ok ? response.blob() : false
      })
      .then(response_blob => {
        return response_blob ? URL.createObjectURL(response_blob) : false
      })
      .catch(error => {
        console.log(error)
        return false
      })
  }
} 
