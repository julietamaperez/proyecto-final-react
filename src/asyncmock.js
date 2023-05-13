const products = [ 
   {id: "1", nombre: "Castañas de Cajú", precio: 500, stock: 10, img: "../img/castañas.png", idCat:"1"},
    {id: "2", nombre: "Dulce de leche - vegano", precio: 700, stock: 10,  img: "../img/dulce-de-leche-felices-lasvacas.png", idCat:"2"},
    {id: "3", nombre: "Nugget de pollo", precio: 620,stock: 10,  img: "../img/nuggets-pollo-feliceslasvacas.png", idCat:"3"},
   {id: "4", nombre: "Yogurt Quimya", precio: 250,stock:5,  img: "../img/quimya.png", idCat:"2"},
    {id: "5", nombre: "Almedras", precio: 500, stock: 10, img: "../img/almendras-a granel.png", idCat:"1"},
   {id: "6", nombre: "Miel-Beepure", precio: 700, stock:10,  img: "../img/beepure-miel.png", idCat:"3"},
    {id: "7", nombre: "Flakes s/azúcar", precio: 100, stock:10,  img: "../img/flakes sin azucar.png", idCat:"1"},
    {id: "8", nombre: "Kéfir", precio: 420, stock:10, img: "../img/quekefir.png", idCat:"2"},
    {id: "9", nombre: "Quinoa Blanca", precio: 220, stock:10,  img: "../img/quinoa-organica-blanca.png", idCat:"1"},
    {id: "10", nombre: "Mermeladas-Trini", precio: 480, stock:10, img: "../img/trini-mermeladas.png", idCat:"3"},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout ( () => {
            const producto = products.find( prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout ( ()=> {
            const productosCategoria = products.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}