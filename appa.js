const { crearArchivo } = require('./helpers/multiplicar')
const { argv } = require('./config/yargs')




console.clear();


console.log(process.argv)
console.log(argv)
console.log('base: yargs:', argv.base)

// console.log(process.argv)
// const [ , , arg3 = 'base=5'] = process.argv
// const [ , base] = arg3.split('=');

 crearArchivo( argv.b, argv.l, argv.h )
 .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
 .catch(err => console.log(err))
 console.log(argv.l)
console.log(argv.h)