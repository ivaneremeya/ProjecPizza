import React from 'react'
import style from './search.module.scss'
import { SearchContext } from '../../../App'
import { useRef } from 'react';
import debounce from 'lodash.debounce';


const Search = () => {
  const { setSearchValue} = React.useContext(SearchContext)
  const [Value, setValue] = React.useState('')
  const InputRef = useRef(null)
  const CliarOnClick = () => {
    setSearchValue('')
    setValue('')
    InputRef.current.focus()
  }
  const onClickUpdate = React.useCallback(
     debounce ((event) => {
      setSearchValue(event)},1000
    ), [setSearchValue]
  )

  const onChangeInput = (e) =>{
    setValue(e.target.value)
    onClickUpdate(e.target.value)
  }

  

  console.log(InputRef)
  return (
    <div className= {style.root} >
        <svg  className = {style.icon}width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input ref={InputRef} value={Value} onChange={(e) => {onChangeInput(e)}} className= {style.input}  placeholder='поиск пиццы'></input>
        { Value &&
         ( <svg onClick={()=>CliarOnClick()}  className= {style.delit} width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21.32L21 3.32001" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 3.32001L21 21.32" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)}
    </div>
  )
}

export default Search