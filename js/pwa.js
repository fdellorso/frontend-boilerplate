'use strict'

function getPWADisplayMode () {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
  if (document.referrer.startsWith('android-app://')) {
    return 'twa'
  } else if (navigator.standalone || isStandalone) {
    return 'standalone'
  }
  return 'browser'
}

window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
  let displayMode = 'browser'
  if (evt.matches) {
    displayMode = 'standalone'
  }
  // Log display mode change to analytics
  console.log('DISPLAY_MODE_CHANGED', displayMode)
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })

  let deferredPrompt

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()

    // deferredPrompt = event
    // showInstallPromotion()

    console.log('\'beforeinstallprompt\' event was fired.')
  })

  window.addEventListener('appinstalled', () => {
    hideInstallPromotion()

    deferredPrompt = null

    console.log('PWA was installed')
  })

  const showInstallPromotion = async () => {
    hideInstallPromotion()

    deferredPrompt.prompt()

    const { outcome } = await deferredPrompt.userChoice

    console.log(`User response to the install prompt: ${outcome}`)

    deferredPrompt = null
  }

  const hideInstallPromotion = () => {
  }
}
