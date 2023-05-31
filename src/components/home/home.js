import React, {useState, useEffect} from 'react'
import './home.css'
import axios from 'axios'

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
            <div className='single-item'>
                <div key={product.id}>
                    <img style={{width: '150px'}} src={product.image} alt="image" />
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Home