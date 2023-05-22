const fs = require('fs')
require('colors');

const crearArchivo = async(base, listar, hasta) => {

    try{

        let salida ='';
        let consola ='';
        for (let i = 1; i <= hasta; i++) {
            salida +=`${base} ${'x'} ${i} = ${base * i}\n`
            consola += `${base} ${'x'.red} ${i} = ${base * i}\n`
        
            
            
        }

        if (listar) {
            console.log(consola)
        }

        fs.writeFileSync(`./salida/Tabla-del-${base}-hasta-el-${hasta}.txt`, salida )
        return `Tabla-del-${base}-hasta-el-${hasta}.txt`
        

    }catch(err){
        throw err

    }

}

module.exports = {
    crearArchivo
}