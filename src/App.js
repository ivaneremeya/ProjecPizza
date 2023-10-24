import React from "react";
import './scss/app.scss'
import Header from "./component/Header";
import Home from "./pages/home";
import { Card } from "./pages/Card";
import { NotFaund } from "./pages/NotFaund";
import { Routes, Route } from 'react-router-dom';


export const SearchContext = React.createContext()
console.log()


function App() {

const [searchValue, setSearchValue] = React.useState('')
// console.log()
console.log(setSearchValue)
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header /> 
        <div className="content">
          <div className="container"> 
            <Routes>
              <Route path="/" element={<Home  />} />
              <Route path="*" element={<NotFaund />} />
              <Route path="/cart" element={<Card/>}/>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;


