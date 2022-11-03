import React, {Component} from 'react'


export default class Conversor extends Component{

  constructor (props){
    super(props);
    this.state = {
      moedaA_valor:"",
    }

    this.converter = this.converter.bind(this);
  }

  converter(){
   
    let url = ` https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`;
     
  
    fetch(url)
    .then(res =>{
      return res.json()
    })

    .then(json=>{
      let cotacao = json[de_para].val;
      let moedaB_valor =(parseFloat (this.state.moedaA_valor * cotacao).toFixed(2))
      this.setState({moedaB_valor})
    })
  }

   render(){
      return (
        <div className="conversor">
          <h2>{this.props.moedaA}</h2>
             
        </div>

      )
  }  
}
