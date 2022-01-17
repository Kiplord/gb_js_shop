import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.mjs';
import ShowcaseModel from './ShowcaseModel.js';
import EventEmitter from './EventEmitter.mjs';

import './assets/scss/main.scss'

const API_URL = '/api/v1'

const api = new ApiHandler(API_URL)
const eventEmmiter = new EventEmitter()

const cart = new CartModel(api, eventEmmiter)
const showcase = new ShowcaseModel(api, eventEmmiter, cart)

eventEmmiter.subscribe('showcaseFeched', (data) => {
  console.log(data)
})

eventEmmiter.subscribe('cartFeched', (data) => {
  console.log(data)
})

showcase.fetch()
cart.fetch()

// eventEmmiter.subscribe('showcaseFeched', () => {
//   showcase.buy(1)
// })


setTimeout(() => {
  showcase.buy(1)
}, 1000)


setTimeout(() => {
  showcase.buy(2)
}, 2000)


setTimeout(() => {
  cart.remove(1)
}, 3000)