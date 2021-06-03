import { Injectable } from "@angular/core";

@Injectable()

export class ProductosService {

    private platos: any[] = [
        {
            nombre: "Anchoa con crema de centollo",
            precio: 12,
            imagen: "assets/img/platos/plato1.jpg"
        },
        {
            nombre: "Carrillera de ternera al vino tinto",
            precio: 15,
            imagen: "assets/img/platos/plato2.jpg"
        },
        {
            nombre: "Pescaíto frito",
            precio: 18,
            imagen: "assets/img/platos/plato3.jpg"
        },
        {
            nombre: "Croquetas",
            precio: 12,
            imagen: "assets/img/platos/plato4.jpg"
        },
        {
            nombre: "Tortilla de patatas",
            precio: 18,
            imagen: "assets/img/platos/plato6.jpg"
        },
        {
            nombre: "Alcachofas fritas",
            precio: 12,
            imagen: "assets/img/platos/plato7.jpg"
        },
        {
            nombre: "Carro de quesos",
            precio: 16,
            imagen: "assets/img/platos/plato8.jpg"
        },
        {
            nombre: "Callos",
            precio: 18,
            imagen: "assets/img/platos/plato9.jpg"
        },
        {
            nombre: "Bravas",
            precio: 10,
            imagen: "assets/img/platos/plato11.jpg"
        },
        {
            nombre: "Guisantes lágrima",
            precio: 12,
            imagen: "assets/img/platos/plato12.jpg"
        },
        {
            nombre: "Tagliatelle con trufa negra",
            precio: 15,
            imagen: "assets/img/platos/plato13.jpg"
        },
        {
            nombre: "Chuleta de Buey a la brasa",
            precio: 13,
            imagen: "assets/img/platos/plato14.jpg"
        },
        {
            nombre: "Ensaladilla rusa",
            precio: 17,
            imagen: "assets/img/platos/plato15.jpg"
        },
        {
            nombre: "Gamba roja",
            precio: 12,
            imagen: "assets/img/platos/plato16.jpg"
        },
        {
            nombre: "Tortillita de camarones",
            precio: 18,
            imagen: "assets/img/platos/plato17.jpg"
        },
        {
            nombre: "Jamón Ibérico de bellota",
            precio: 13,
            imagen: "assets/img/platos/plato18.jpg"
        },
        {
            nombre: "Alcachofas",
            precio: 12,
            imagen: "assets/img/platos/plato19.jpg"
        },
        {
            nombre: "Atún rojo salvaje de Almadraba",
            precio: 18,
            imagen: "assets/img/platos/plato20.jpg"
        },
        {
            nombre: "Ostras a la brasa",
            precio: 19,
            imagen: "assets/img/platos/plato21.jpg"
        },
        {
            nombre: "Viera con setas",
            precio: 12,
            imagen: "assets/img/platos/plato22.jpg"
        },
        {
            nombre: "Caldo especiado con fideos de cerdo",
            precio: 17,
            imagen: "assets/img/platos/plato23.jpg"
        },
        {
            nombre: "Caldereta de langosta",
            precio: 19,
            imagen: "assets/img/platos/plato24.jpg"
        },
        {
            nombre: "Curry de carrillera",
            precio: 12,
            imagen: "assets/img/platos/plato27.jpg"
        }
    ];



    private bebidas: any[] = [
        {
            nombre: "Agua",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida1.jpg"
        },
        {
            nombre: "Agua con gas",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida2.jpg"
        },
        {
            nombre: "Coca Cola",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida3.jpg"
        },
        {
            nombre: "Coca Cola Zero",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida4.jpg"
        },
        {
            nombre: "Fanta de Naranja",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida5.jpg"
        },
        {
            nombre: "Fanta de Limón",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida6.jpg"
        },
        {
            nombre: "Jarra de Cerveza",
            precio: 2.7,
            imagen: "assets/img/bebidas/bebida7.jpg"
        },
        {
            nombre: "Caña",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida8.jpg"
        },
        {
            nombre: "Aquarius",
            precio: 2.0,
            imagen: "assets/img/bebidas/bebida9.jpg"
        },
        {
            nombre: "Nestea",
            precio: 2.0,
            imagen: "assets/img/bebidas/bebida10.jpg"
        },
        {
            nombre: "Copa de vino tinto de la casa",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida11.jpg"
        },
        {
            nombre: "Copa de vino blanco de la casa",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida12.jpg"
        },
        {
            nombre: "Copa de Lambrusco de la casa",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida13.jpg"
        },
        {
            nombre: "Jarra de sangría",
            precio: 7.0,
            imagen: "assets/img/bebidas/bebida14.jpg"
        },
        {
            nombre: "Botella de vino tinto de la casa",
            precio: 6.9,
            imagen: "assets/img/bebidas/bebida15.jpg"
        },
        {
            nombre: "Botella de vino tinto de la casa",
            precio: 6.9,
            imagen: "assets/img/bebidas/bebida16.jpg"
        },
        {
            nombre: "Copa de sangría",
            precio: 2.5,
            imagen: "assets/img/bebidas/bebida17.jpg"
        }

    ]; 

    private postres: any[] = [
        {
            nombre: "Mousse de frutas del bosque",
            precio: 4.5,
            imagen: "assets/img/postres/postre1.jpg"
        },
        {
            nombre: "Soufflé de mango y coco",
            precio: 4.5,
            imagen: "assets/img/postres/postre2.jpg"
        },
        {
            nombre: "Pastel de zanahoria de la casa",
            precio: 6.0,
            imagen: "assets/img/postres/postre3.jpg"
        },
        {
            nombre: "Pastel de matcha",
            precio: 5.0,
            imagen: "assets/img/postres/postre4.jpg"
        },
        {
            nombre: "Pastel vegano de chocolate",
            precio: 4.5,
            imagen: "assets/img/postres/postre5.jpg"
        },
        {
            nombre: "Pastel de praliné y ganache",
            precio: 4.5,
            imagen: "assets/img/postres/postre6.jpg"
        },
        {
            nombre: "Blondie con sorbete de vainilla",
            precio: 4.5,
            imagen: "assets/img/postres/postre7.jpg"
        },
        {
            nombre: "Cheesecake reinventado",
            precio: 6.0,
            imagen: "assets/img/postres/postre8.jpg"
        },
        {
            nombre: "Pie de limón con merengue XL",
            precio: 6.0,
            imagen: "assets/img/postres/postre9.jpg"
        },
        {
            nombre: "Helados de té e infusiones",
            precio: 5.0,
            imagen: "assets/img/postres/postre10.jpg"
        }
    ]; 


    private productos: any[] = [
        {
            nombre: "Anchoa con crema de centollo",
            precio: 12,
            imagen: "assets/img/platos/plato1.jpg"
        },
        {
            nombre: "Carrillera de ternera al vino tinto",
            precio: 15,
            imagen: "assets/img/platos/plato2.jpg"
        },
        {
            nombre: "Pescaíto frito",
            precio: 18,
            imagen: "assets/img/platos/plato3.jpg"
        },
        {
            nombre: "Croquetas",
            precio: 12,
            imagen: "assets/img/platos/plato4.jpg"
        },
        {
            nombre: "Tortilla de patatas",
            precio: 18,
            imagen: "assets/img/platos/plato6.jpg"
        },
        {
            nombre: "Alcachofas fritas",
            precio: 12,
            imagen: "assets/img/platos/plato7.jpg"
        },
        {
            nombre: "Carro de quesos",
            precio: 16,
            imagen: "assets/img/platos/plato8.jpg"
        },
        {
            nombre: "Callos",
            precio: 18,
            imagen: "assets/img/platos/plato9.jpg"
        },
        {
            nombre: "Bravas",
            precio: 10,
            imagen: "assets/img/platos/plato11.jpg"
        },
        {
            nombre: "Guisantes lágrima",
            precio: 12,
            imagen: "assets/img/platos/plato12.jpg"
        },
        {
            nombre: "Tagliatelle con trufa negra",
            precio: 15,
            imagen: "assets/img/platos/plato13.jpg"
        },
        {
            nombre: "Chuleta de Buey a la brasa",
            precio: 13,
            imagen: "assets/img/platos/plato14.jpg"
        },
        {
            nombre: "Ensaladilla rusa",
            precio: 17,
            imagen: "assets/img/platos/plato15.jpg"
        },
        {
            nombre: "Gamba roja",
            precio: 12,
            imagen: "assets/img/platos/plato16.jpg"
        },
        {
            nombre: "Tortillita de camarones",
            precio: 18,
            imagen: "assets/img/platos/plato17.jpg"
        },
        {
            nombre: "Jamón Ibérico de bellota",
            precio: 13,
            imagen: "assets/img/platos/plato18.jpg"
        },
        {
            nombre: "Alcachofas",
            precio: 12,
            imagen: "assets/img/platos/plato19.jpg"
        },
        {
            nombre: "Atún rojo salvaje de Almadraba",
            precio: 18,
            imagen: "assets/img/platos/plato20.jpg"
        },
        {
            nombre: "Ostras a la brasa",
            precio: 19,
            imagen: "assets/img/platos/plato21.jpg"
        },
        {
            nombre: "Viera con setas",
            precio: 12,
            imagen: "assets/img/platos/plato22.jpg"
        },
        {
            nombre: "Caldo especiado con fideos de cerdo",
            precio: 17,
            imagen: "assets/img/platos/plato23.jpg"
        },
        {
            nombre: "Caldereta de langosta",
            precio: 19,
            imagen: "assets/img/platos/plato24.jpg"
        },
        {
            nombre: "Curry de carrillera",
            precio: 12,
            imagen: "assets/img/platos/plato27.jpg"
        },
        {
            nombre: "Mousse de frutas del bosque",
            precio: 4.5,
            imagen: "assets/img/postres/postre1.jpg"
        },
        {
            nombre: "Soufflé de mango y coco",
            precio: 4.5,
            imagen: "assets/img/postres/postre2.jpg"
        },
        {
            nombre: "Pastel de zanahoria de la casa",
            precio: 6.0,
            imagen: "assets/img/postres/postre3.jpg"
        },
        {
            nombre: "Pastel de matcha",
            precio: 5.0,
            imagen: "assets/img/postres/postre4.jpg"
        },
        {
            nombre: "Pastel vegano de chocolate",
            precio: 4.5,
            imagen: "assets/img/postres/postre5.jpg"
        },
        {
            nombre: "Pastel de praliné y ganache",
            precio: 4.5,
            imagen: "assets/img/postres/postre6.jpg"
        },
        {
            nombre: "Blondie con sorbete de vainilla",
            precio: 4.5,
            imagen: "assets/img/postres/postre7.jpg"
        },
        {
            nombre: "Cheesecake reinventado",
            precio: 6.0,
            imagen: "assets/img/postres/postre8.jpg"
        },
        {
            nombre: "Pie de limón con merengue XL",
            precio: 6.0,
            imagen: "assets/img/postres/postre9.jpg"
        },
        {
            nombre: "Helados de té e infusiones",
            precio: 5.0,
            imagen: "assets/img/postres/postre10.jpg"
        },
        {
            nombre: "Agua",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida1.jpg"
        },
        {
            nombre: "Agua con gas",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida2.jpg"
        },
        {
            nombre: "Coca Cola",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida3.jpg"
        },
        {
            nombre: "Coca Cola Zero",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida4.jpg"
        },
        {
            nombre: "Fanta de Naranja",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida5.jpg"
        },
        {
            nombre: "Fanta de Limón",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida6.jpg"
        },
        {
            nombre: "Jarra de Cerveza",
            precio: 2.7,
            imagen: "assets/img/bebidas/bebida7.jpg"
        },
        {
            nombre: "Caña",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida8.jpg"
        },
        {
            nombre: "Aquarius",
            precio: 2.0,
            imagen: "assets/img/bebidas/bebida9.jpg"
        },
        {
            nombre: "Nestea",
            precio: 2.0,
            imagen: "assets/img/bebidas/bebida10.jpg"
        },
        {
            nombre: "Copa de vino tinto de la casa",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida11.jpg"
        },
        {
            nombre: "Copa de vino blanco de la casa",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida12.jpg"
        },
        {
            nombre: "Copa de Lambrusco de la casa",
            precio: 1.5,
            imagen: "assets/img/bebidas/bebida13.jpg"
        },
        {
            nombre: "Jarra de sangría",
            precio: 7.0,
            imagen: "assets/img/bebidas/bebida14.jpg"
        },
        {
            nombre: "Botella de vino tinto de la casa",
            precio: 6.9,
            imagen: "assets/img/bebidas/bebida15.jpg"
        },
        {
            nombre: "Botella de vino tinto de la casa",
            precio: 6.9,
            imagen: "assets/img/bebidas/bebida16.jpg"
        },
        {
            nombre: "Copa de sangría",
            precio: 2.5,
            imagen: "assets/img/bebidas/bebida17.jpg"
        }


    ];


    constructor(){

    }



    getPlatos(){
        return this.platos;
    }

    getBebidas(){
        return this.bebidas;
    }

    getPostres(){
        return this.postres;
    }

    buscarProducto( termino: string):Producto[] {
        let productosArr:Producto[] = [];
        termino = termino.toLowerCase();

        for ( let producto of this.productos ){
            let nombre = producto.nombre.toLowerCase();
            if (nombre.indexOf( termino ) >= 0){
                productosArr.push ( producto )
            }
        }
        return productosArr;
    }
}



export interface Producto{
    nombre: string;
    precio: number;
    imagen: string;
}
