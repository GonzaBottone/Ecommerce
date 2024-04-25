import { useEffect, useState } from 'react'
import '../ItemDetaliContainer/ItemDetaliContainer.css'
import IteamDetali from '../ItemDetali/ItemDetali'
import { getProductById, getProductsById } from '../../asyncMock'
import { useParams } from 'react-router-dom/dist'

const ItemDetaliContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
               .then(response => {
                    setProduct(response)
               })
               .catch(error => {
                    console.error(error)
                })
    }, [itemId])

    return (
        <div className='ItemDetaliContainer'>
            <IteamDetali {...product}/>
        </div>
    )
}

export default ItemDetaliContainer