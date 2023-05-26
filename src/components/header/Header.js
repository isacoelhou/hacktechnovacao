import React from 'react'
import "./HeaderCss.css"

function SearchBar()
{
  return (
    <>
      <input placeholder="    Pesquisar" type="text" id="search"></input>
    </>
  )
}

const Header = () => {
  return (
    <div id="headerDiv">
      <SearchBar/>
      <h1 id="knowThePlace">Conheça o parque municipal</h1>
      <button id="knowMore"> <a href="./">Saiba mais</a></button>
    </div>
  )
}

export default Header