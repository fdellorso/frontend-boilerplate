import AbstractView from './AbstractView.js'

export default class extends AbstractView {
  constructor (params) {
    super(params)
    this.setTitle('Camera')
  }

  async getHtml () {
    return `
            <video id="video">Video stream not available.</video>
        `
  }

  async getAction () {
    async function action () {
      const width = 480
      let height = 0
      let streaming = false
      let video = null

      video = document.getElementById('video')

      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          video.srcObject = stream
          video.play()
        })
        .catch(function (err) {
          console.log('An error occurred: ' + err)
        })

      video.addEventListener('canplay', function (ev) {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width)

          if (isNaN(height)) {
            height = width / (3 / 4)
          }

          video.setAttribute('width', width)
          video.setAttribute('height', height)
          streaming = true
        }
      }, false)
    }

    return action
  }
}
