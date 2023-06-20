import React, {useState, useEffect} from 'react'
import './home.css'
import axios from 'axios'
import SingleCard from '../singleCard/singleCard'
import SearchBar from '../search-bar/search-bar'
import { useQuery } from 'react-query'

const FetchData = async () => {
        
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = response.data
    return data
}
function Home() {

    const [search, setSearch] = useState('')
    const {data, isLoading, isError, error} = useQuery('products', FetchData)    

  

      if(isLoading){
        return <div>Loading ...</div>
      }
      if(isError) {
        return <div>Error : {error.message}</div>
      }



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
        
      {filterData.map((product) => (
            <SingleCard 
            key={product.id}
            image={product.image}
            title = {product.title}
            description = {product.description}
            price = {product.price}
          />
        ))}
    </div>
    </>
  )
}

export default Home
