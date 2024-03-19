const products = [
    {
        id: '1',
        name: 'Teclado Logitech',
        price: 1000,
        category: 'celular',
        category: 'computadora',
        category: 'periferico',
        img: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/g213-finch/g213-gallery-1-nb.png?v=1',
        stock: 25,
        description: 'Descripcion de iphone 12'
    },
    { id: '2', name: 'Mause inalambrico G502', price: 800, category: 'computadora', img:'https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png'},
    { id: '3', name: 'Auricular Gamer Logitech G335',  price: 500, category: 'periferico', img: 'https://www.infinitonline.com.ar/images/000000000000108723590g733-blue-gallery-1.png'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)

        }, 300)
    })
}