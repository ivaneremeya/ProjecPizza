import React from "react"
import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import Categories from "../component/Categories"
import Sort, { arrSort } from "../component/Sort"
import Skeleton from "../component/PizzaBlock/Skeleton"
import PizzaBlock from "../component/PizzaBlock"
import Pagination from "../component/Pagination"
import { SearchContext } from "../App"
import {useDispatch, useSelector} from 'react-redux'
import {setCategoriesState, setPaginationState, setFilters} from '../redux/slice/filterSlice'
import axios from "axios"
 
const Home = () => {
  const Navigate = useNavigate();
  const [loading , setLoading] = React.useState(true)
  const [pizzas, setPizzas] = React.useState([])
  const Despatch = useDispatch();
  const onChangeCtegories = (id) =>{ Despatch(setCategoriesState(id))}
  const setCarentPage = (id) =>{ Despatch(setPaginationState(id))}
  const categoriesState = useSelector((state) => state.filter.categoriesState);
  const sortPizzas = useSelector((state) => state.filter.useSort.sortProperti)
  const carenPage = useSelector((state) => state.filter.paginationState)
  
  const isSearch = React.useRef(false);
  const isMaunt = React.useRef(false);

  const {searchValue} = React.useContext(SearchContext)

  
  
  const fetchPizzas = () => {
    setLoading(true)
    axios.get(`https://651bade2194f77f2a5aeb191.mockapi.io/item?page=${carenPage}&limit=3&${categoriesState > 0? `category=${categoriesState}`: ''}&sortBy=${sortPizzas.sortProperti}&order=desc`)
    .then((arr) => { 
      setTimeout(() => {
      setPizzas(arr.data)
      setLoading(false);
    }, 1000)
  })
  }
  
  const skeletons = [...Array(6)].map((_, i) => <Skeleton key={i}/>)
  const arrPizzas = pizzas.filter(
    (obj) => {
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return true
      }
      else {
        return false
      }
    }
  ).map(
    (value) => <PizzaBlock key={value.id}  sizes = {value.sizes} types = {value.types} imageUrl = {value.imageUrl} price = {value.price} title = {value.title}/>
  )
  
  


  React.useEffect(()=>{
    if(isMaunt) {
      const queryString = qs.stringify({
        categoriesState,
        carenPage,
        sortPizzas,
      })
      console.log(queryString)
      Navigate(`?${queryString}`)
    }
    isMaunt.current = true
  },[categoriesState,sortPizzas, carenPage])

  // React.useEffect(()=>{
  //  if(window.location.search){
  //     const parse = qs.parse(window.location.search.substring(1))
  //     console.log(parse) 
  //     const sort = arrSort.find((obj)=> obj.sortProperti === parse.sortPizzas)
  //     console.log({...parse, sort}) 
  //     Despatch(setFilters({...parse})) 
  //  }
  //  isSearch.current=true
   
  // }, [])
 
  React.useEffect(() => {
    // if(!isSearch) {
     
    // }
    // isSearch.current=false
    fetchPizzas()
  } , [categoriesState,sortPizzas, carenPage]
  )
    return (
      <div className="container">
        <div className="content__top">
          <Categories values = {categoriesState} clickCategories = {(id) => onChangeCtegories(id)}/>
          <Sort />
        </div>

        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            loading ? skeletons : arrPizzas
            
          }
        </div>
          <Pagination value = {carenPage} onChangePage = {setCarentPage}/>
      </div> 
    )
}

export default Home;





// const arrPizzas = pizzas.filter(
  //   (obj) => {
  //     if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true
  //     }
  //     else {
  //       return false
  //     }
  //   }
  // ).map(
  //   (value) => <PizzaBlock key={value.id}  sizes = {value.sizes} types = {value.types} imageUrl = {value.imageUrl} price = {value.price} title = {value.title}/>
  // )