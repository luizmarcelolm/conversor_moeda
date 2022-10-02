import React, {Component} from 'react';
import Conversor from "./Components/Conversor";


class App extends Component{
  render(){
        return (
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        );
    }    
}

export default App;