const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla de muñtiplicar'
}).check( ( argv, options) => {
    if( isNaN (argv.b)){
        throw 'La base tiene que ser un numero'
    }
    return true;
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra tabla en consola'

})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Hasta que numero se crea la tabla'
})
.argv;

module.exports = {
    argv
}