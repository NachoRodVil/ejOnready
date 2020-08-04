class Auto {
    constructor(marca, modelo, puertas, precio){
        this.Marca = marca
        this.Modelo = modelo
        this.Puertas = puertas
        this.Precio = precio
        
    }
}

class Moto {
    constructor(marca, modelo, cilindrada, precio){
        this.Marca = marca
        this.Modelo = modelo
        this.Cilindrada = cilindrada
        this.Precio = precio
        
    }
}

class Vehiculos {
    constructor(...vehiculos){
        this.vehiculos = [...vehiculos]

        /**
         * Devuelve los keys y los valores de cada vehiculo
         * @returns {void} Hace console.log de cada key con su valor de cada vehiculo
         */
        this.mostrarVehiculos= ()=> {
            for(var i = 0; i<this.vehiculos.length; i++){
                let model = ""
                Object.keys(this.vehiculos[i]).forEach(key => {
                    if(model.length === 0){
                        model = key + ": " + this.vehiculos[i][key]
                    }
                    else {
                    model = model + " // " + key + ": " + this.vehiculos[i][key] 
                    }
                  });
                console.log(model)
            }
        }

         /**
         * Recorre el arreglo de vehiculos y busca el más caro
         * @returns {void} Hace console.log del vehiculo más caro
         */
        this.mostrarMasCaro = ()=> {
            let caro
            let precioCaro = Number.NEGATIVE_INFINITY
            for(var i = 0; i<this.vehiculos.length; i++){
                let precio = Number(this.vehiculos[i].Precio.replace(".", "").replace(",", ".").replace("$", ""))
                if(precio>precioCaro){
                    precioCaro = precio
                    caro = this.vehiculos[i]
                }
            }
            console.log("Vehiculo más caro: " + caro.Marca + " " + caro.Modelo)
        }

        /**
         * Recorre el arreglo de vehiculos y busca el más barato
         * @returns {void} Hace console.log del vehiculo más barato
         */
        this.mostrarMasBarato = ()=> {
            let barato
            let precioBarato = Number.POSITIVE_INFINITY
            for(var i = 0; i<this.vehiculos.length; i++){
                let precio = Number(this.vehiculos[i].Precio.replace(".", "").replace(",", ".").replace("$", ""))
                if(precio<precioBarato){
                    precioBarato = precio
                    barato = this.vehiculos[i]
                }
            }
            console.log("Vehiculo más barato: " + barato.Marca + " " + barato.Modelo)
        }

        /**
         * Recorre el arreglo de vehiculos y busca aquellos que contengan un letra
         * @param {string} letra La función se ejecuta con un un string/letra
         * @returns {void} Hace console.log del vehiculo o vehiculos que contengan la letra en el modelo
         */
        this.contieneLetra = (letra) =>{
            let modelosConLetra = []
            for(var i = 0; i<this.vehiculos.length; i++){
                if(this.vehiculos[i].Modelo.toLowerCase().includes(letra.toLowerCase())){
                    modelosConLetra.push(this.vehiculos[i])
                }
            }
            if(modelosConLetra.length > 1){
                let modelTexto = ""
                for(var i = 0; i<modelosConLetra.length; i++){
                    modelTexto = modelTexto + modelosConLetra[i].Marca + " " + modelosConLetra[0].Modelo + " " + modelosConLetra[0].Precio + " // "
                }
                console.log("Vehiculos que contiene la letra '" + letra + "': " + modelTexto)
            } else {
                console.log("Vehiculo que contiene la letra '" + letra + "': " + modelosConLetra[0].Marca + " " + modelosConLetra[0].Modelo + " " + modelosConLetra[0].Precio)
            }
        }
        /**
         * Recorre el arreglo de vehiculos y los ordena de mayor a menor precio
         * @returns {void} Hace console.log de todos los vehiculos, ordenandolos de menor a mayor
         */
        this.ordenarVehiculos = ()=>{
            let sorted = this.vehiculos.sort((a,b)=> {
                let precioA = Number(a.Precio.replace(".", "").replace(",", ".").replace("$", ""))
                let precioB = Number(b.Precio.replace(".", "").replace(",", ".").replace("$", ""))
                return precioB-precioA
            })
            console.log("Vehículos ordenados por precio de mayor a menor:")
            for(var i = 0; i<sorted.length; i ++){
                console.log(sorted[i].Marca + " " + sorted[i].Modelo)
            }
        }
    }
}

let moto1 = new Moto ("Honda","Titan","125c","$60.000,00")
let moto2 = new Moto ("Yamaha","YBR","160c","$80.500,00")
let auto1 = new Auto ("Peugeot","206","4","$200.000,00")
let auto2 = new Auto ("Peugeot","208","5","$250.000,00")
let vehiculos = new Vehiculos(auto1, moto1, auto2, moto2)

vehiculos.mostrarVehiculos()
console.log("=============================")
vehiculos.mostrarMasCaro()
vehiculos.mostrarMasBarato()
vehiculos.contieneLetra("Y")
console.log("=============================")
vehiculos.ordenarVehiculos()
