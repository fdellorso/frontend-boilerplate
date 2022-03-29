'use strict'

import '../css/index.css'

import './pwa.js'
import './router.js'

import Hammer from 'hammerjs'
import BSN from 'bootstrap.native/dist/bootstrap-native-v4'

// NOTE force window size in PWA Desktop Mode
// import forceScreenSize from './utility/forceScreenSize.js'
// const rootSize = 70
// forceScreenSize(16 * rootSize, 10 * rootSize)

window.addEventListener('load', function (event) {
  const app = document.getElementById('app')
  const mc = new Hammer(app)
  mc.on('press', (event) => {
    console.log('HammerJs Long press events')
  })

  // const button = document.createElement('button')
  // button.id = 'bsnButton'
  // button.innerHTML = 'button'
  // button.classList.add('btn')
  // button.classList.add('btn-primary')
  // document.body.appendChild(button)
  // const bsnButton = new BSN.Button('#bsnButton')
  // document.body.appendChild(bsnButton)
})
