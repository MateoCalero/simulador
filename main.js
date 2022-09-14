const productos=[
    {nombre:"Pijama", precio: 2000 },
    {nombre:"Remera de spum", precio:1600 },
    {nombre:"Taza de ceramica", precio:1200 },
    {nombre:"Remera de algodon", precio:3000 },
    {nombre:"Chopp aluminio", precio:1800 },
];

let carrito=[];



// while(seleccion != "si" && seleccion != "no"){
//     alert("Por favor " + usuario + " ingresa si o no");
//     seleccion= prompt("Hola " + usuario + ", deseas comprar algun producto? Ingrese si o no");
// }

// if(seleccion=="si"){
//     alert("A continuacion nuestra lista de productos");
//     let todosLosProductos= productos.map( (producto)=> producto.nombre + " $" + producto.precio );
//     alert(todosLosProductos.join(" - "));
// }else if(seleccion =="no"){
//     alert("Muchas gracias por venir " + usuario + ", que tenga un buen dia :)");
// }

// while(seleccion !="no"){
//     let producto = prompt("agrega un producto a tu carrito");
//     let precio = 0;

//     if(producto == "pijama" || producto == "remera de spum" || producto == "taza de ceramica" || producto == "remera de algodon" || producto == "chopp de aluminio"){
//         switch (producto){
//             case "pijama":
//                 precio = 2000;
//                 break;
//             case "remera de spum":
//                 precio = 1600;
//                 break;
//             case "taza de ceramica":
//                 precio = 1200;
//                 break;
//             case "remera de algodon":
//                 precio = 3000;
//                 break;
//             case "chopp de aluminio":
//                 precio = 1800;
//                 break;
//             default:
//                 break;
//         }
//     let unidades= prompt("Cuantas unidades quiere llevar?")

//     carrito.push({producto, unidades, precio})
//     console.log(carrito)
//     } else{
//         alert("No tenemos ese producto")
//     }

//     seleccion = prompt("Desea seguir comprando?");

//     while(seleccion == "no"){
//         alert("Gracias por su compra!");
//         carrito.forEach((carritoFinal)=>{
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto:${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//         break;
//     }
// }

// const total = carrito.reduce((acc,el)=> acc + el.precio * el.unidades, 0)
// console.log(`Total a pagar por su compra: ${total}`);


const remeraAlg = document.querySelector(".remeraAlg"),
    remeraSpum = document.querySelector(".remeraSpum"),
    pijama = document.querySelector(".pijama"),
    taza = document.querySelector(".taza"),
    chopp = document.querySelector(".chopp"),
    finalizar= document.querySelector('.btn-finalizar'),
    acumulador= document.querySelector('.acumulador');

    let acumulado=0;
 
    

    remeraAlg.addEventListener('click',()=>{
        carrito.push(productos[3]);
        acumulado= acumulado + 3000;
        acumulador.textContent= acumulado;
        console.log(carrito);

    })
    remeraSpum.addEventListener('click',()=>{
        carrito.push(productos[1]);
        acumulado= acumulado + 1600;
        acumulador.textContent= acumulado;
        console.log(carrito);

    })
    pijama.addEventListener('click',()=>{
        carrito.push(productos[0]);
        acumulado= acumulado + 2000;
        acumulador.textContent= acumulado;
        console.log(carrito);

    })
    chopp.addEventListener('click',()=>{
        carrito.push(productos[4]);
        acumulado= acumulado + 1800;
        acumulador.textContent= acumulado;
        console.log(carrito);

    })
    taza.addEventListener('click',()=>{
        carrito.push(productos[2]);
        acumulado= acumulado + 1200;
        acumulador.textContent= acumulado;
        console.log(carrito);

    })

    // finalizar.addEventListener('sumbit',)