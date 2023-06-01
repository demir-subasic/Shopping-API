import React, {useState, useEffect} from 'react'
import './home.css'
import axios from 'axios'
import SingleCard from '../singleCard/singleCard'

function Home() {

    const [data, setData] = useState([])

    const FetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
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
    <div className='home'>
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

export default Home
