import './ItemDetali.css'
import { useState } from 'react'
import ItemCount from  '../NavBar/ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantit) => {
        setQuantityAdded(quantity)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='Itemheader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ?(
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial= {1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail