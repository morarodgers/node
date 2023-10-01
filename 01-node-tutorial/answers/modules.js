// Modules
const names = require('./names.js')
const greeting = require('./utils')

greeting(`Jean`)
greeting(names.john)
greeting(names.pet)

const data = require('./alternative-flavor')
console.log(data)

require('./mind-grenade.js')