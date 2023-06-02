import React, {useState, useEffect} from 'react'
import './womenClothes.css'
import axios from 'axios'
import SingleCard from '../singleCard/singleCard'

function WomenClothes(id, image, title, description, price) {
  const [data, setData] = useState([])

    const FetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
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
    <div className='women'>
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

export default WomenClothes
