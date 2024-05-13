const products = [
    {
        id: '1',
        name: 'Logitech G203',
        price: 1000,
        category: 'mauses',
        img: 'https://logitechar.vtexassets.com/arquivos/ids/157536-800-800?v=637345251488670000&width=800&height=800&aspect=true',
        stock: 25,
        description: 'Descripcion de iphone 12'
    },
    { id: '2', name: 'Redragon K599 Deimos', price: 800, category: 'teclados', img:'https://www.venex.com.ar/products_images/1596717311_k530draconic5.png'},
    { id: '3', name: 'Astro A20',  price: 500, category: 'auriculares', img: 'https://logitechar.vtexassets.com/arquivos/ids/157881-800-800?v=637503050431600000&width=800&height=800&aspect=true'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)

        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })


}