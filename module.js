// Modules
// Every file in node in a module
// node uses CommonJS library
// Modules - Encapsulated Code(only minimum)

const names = require('./names')
const sayHi = require('./utils')
//console.log(names)
const data = require('./alternative-flavor.js')
require('./mind-grenade.js')
//console.log(data)
//sayHi('susan')
//sayHi(names.john)
//sayHi(names.peter)