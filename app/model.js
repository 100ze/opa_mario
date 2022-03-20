// app/model.js

export default class Model {
  // function to download images and return as a url that can be used on the page
  async getImage(url) {
    return await fetch(url)
      .then(response => response.blob())
      .then(response_blob => {
        return URL.createObjectURL(response_blob)
      })
  }
} 
