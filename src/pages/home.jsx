import React from "react"
import Categories from "../component/Categories"
import Sort from "../component/Sort"
import Skeleton from "../component/PizzaBlock/Skeleton"
import PizzaBlock from "../component/PizzaBlock"
import Pagination from "../component/Pagination"
import { SearchContext } from "../App"
import {useDispatch, useSelector} from 'react-redux'
import {setCategoriesState} from '../redux/slice/filterSlice'
import axios from "axios"
 
const Home = () => {
  const [loading , setLoading] = React.useState(true)
  const [pizzas, setPizzas] = React.useState([])
  const Despatch = useDispatch();
  const categoriesState = useSelector((state) => state.filter.categoriesState);
  const sortPizzas = useSelector((state) => state.filter.useSort.sortProperti)
  
  
  const  [paginationState, setPaginationState ] = React.useState(1)
  const {searchValue} = React.useContext(SearchContext)
  console.log(categoriesState)
  const onChangeCtegories = (id) =>{ Despatch(setCategoriesState(id))}




  const skeletons = [...Array(6)].map((_, i) => <Skeleton key={i}/>)
  
  const arrPizzas = pizzas.filter(
    (obj) => {
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      }
      else {
        return false
      }
    }
  ).map(
    (value) => <PizzaBlock key={value.id}  sizes = {value.sizes} types = {value.types} imageUrl = {value.imageUrl} price = {value.price} title = {value.title}/>
  )

  React.useEffect(() => {
    setLoading(true)
    axios.get(`https://651bade2194f77f2a5aeb191.mockapi.io/item?page=${paginationState}&limit=3&${categoriesState > 0? `category=${categoriesState}`: ''}&sortBy=${sortPizzas.sortProperti}&order=desc`)
    .then((arr) =>
    { 
      setTimeout(() => {
      setPizzas(arr.data)
      setLoading(false);
      window.scrollTo(0, 0)
    }, 1000)
  })
} , [categoriesState,sortPizzas, paginationState])
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
          <Pagination onChangePage = {(e) => setPaginationState(e)}/>
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