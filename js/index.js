'use strict'

import './pwa.js'
import './router.js'

import HammerJs from 'hammerjs'

// NOTE force window size in PWA Desktop Mode
// import forceScreenSize from './utility/forceScreenSize.js'
// const rootSize = 70
// forceScreenSize(16 * rootSize, 10 * rootSize)

const app = document.getElementById('app')
const mc = new HammerJs(app)
mc.on('press', (event) => {
  console.log('HamerrJs Long press events')
})
