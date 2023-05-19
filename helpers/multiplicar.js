const fs = require('fs')

const crearArchivo = async(base) => {

    try{

        let salida ='';
        for (let i = 1; i <= 10; i++) {
            salida +=`${base} x ${i} = ${base * i}\n`
        
            
            
        }
        
        console.log(salida)
        fs.writeFileSync(`Tabla-del-${base}.txt`, salida )
        return `Tabla-del-${base}.txt`

    }catch(err){
        throw err

    }

}

module.exports = {
    crearArchivo
}