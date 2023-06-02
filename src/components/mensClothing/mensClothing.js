import React, {useState, useEffect} from 'react'
import './mensClothing.css'
import axios from 'axios'
import SingleCard from '../singleCard/singleCard'

function MensClothing() {
  const [data, setData] = useState([])

    const FetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
            setData(response.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        FetchData()
    }, [])

  return (
    <div className='men'>
        {data.map((product) => (
           <SingleCard 
           key={product.id}
           image={product.image}
           title = {product.title}
           description = {product.description}
           price = {product.price}
         />
        ))}
    </div>
  )
}

export default MensClothing
