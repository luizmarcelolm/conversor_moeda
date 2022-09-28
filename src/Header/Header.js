import React, {Fragment} from 'react';
import '../Header/Header';


function Header() {

 const cartas = [
    {id: 1, coluna1:"1", coluna2:"6", coluna3:"11"},
    {id: 2, coluna1:"2", coluna2:"7", coluna3:"12"},
    {id: 3, coluna1:"3", coluna2:"8", coluna3:"13"},
    {id: 4, coluna1:"4", coluna2:"9", coluna3:"14"},
    {id: 5, coluna1:"5", coluna2:"10", coluna3:"15"},

 ];

 const ids = cartas.map(cartas => cartas.id);
 const colunas = cartas.map(cartas => cartas.coluna1)
 console.log(colunas);

  return (
    <Fragment>
     teste

    </Fragment>

  

  )
}

export default Header;

