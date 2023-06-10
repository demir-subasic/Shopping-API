import React, {useState, useEffect} from 'react'
import './home.css'
import axios from 'axios'
import SingleCard from '../singleCard/singleCard'
import SearchBar from '../search-bar/search-bar'

function Home() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const FetchData = async () => {
        try {
          setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products')
            const data = response.data
            setData(data)
            setLoading(false)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        FetchData()
    }, [])

    const updateData = (e) => {
      setSearch(e)
    }

    const filterData = data.filter((item) => 
      item.title.toLowerCase().includes(search.toLowerCase())
    )
        
  

  return (
    <>
    <SearchBar  handleSearch={updateData}/>
    <div className='home'>
        {loading ? <>Loading ....</> : 
      <>
      {filterData.map((product) => (
            <SingleCard 
            key={product.id}
            image={product.image}
            title = {product.title}
            description = {product.description}
            price = {product.price}
          />
        ))} </>}
    </div>
    </>
  )
}

export default Home
