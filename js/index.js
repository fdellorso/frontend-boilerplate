'use strict'

import '../css/index.css'

import './pwa.js'
import './router.js'

import Hammer from 'hammerjs'

// NOTE force window size in PWA Desktop Mode
// import forceScreenSize from './utility/forceScreenSize.js'
// const rootSize = 70
// forceScreenSize(16 * rootSize, 10 * rootSize)

window.addEventListener('load', function (event) {
  const app = document.getElementById('app')
  const mc = new Hammer(app)
  mc.on('press', (event) => {
    console.log('HamerrJs Long press events')
  })
})
