// forceScreenSize.js
import insideInstalledApp from './insideInstalledApp'

export default (width, height) => {
  if (insideInstalledApp()) {
    console.log(width, height)

    window.resizeTo(width, height)

    window.addEventListener('resize', () => {
      window.resizeTo(width, height)
    })
  }
}
