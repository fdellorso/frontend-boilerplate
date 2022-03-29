export default class {
  constructor (params) {
    this.params = params
  }

  setTitle (title) {
    document.title = title
  }

  async getHtml () {
    return ''
  }

  async getAction () {
    async function action () {
      console.log('action')
    }

    return action
  }
}
