import React from 'react'
import './App.css';
import Somar from './Somar/Somar'
import ReactDOM from 'react-dom';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <font className="Titulo">{process.env.REACT_APP_TITLE}</font>
        <div className="row">
          <input id="number1" className="Number" type="number"></input>
          <input id="number2" className="Number" type="number"></input>
        </div>
        <div className="teste"></div>
        <input className="Button" type="button" value="+" onClick={somar}></input>
        <div id="root1"></div>
      </header>
    </div>
  );
}

function somar() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  var element;
  if (number1 !== '' && number2 !== '') {
    let soma = parseInt(number1) + parseInt(number2);
    element = (
      <div>
        <font className="Sucess">{soma}</font>
      </div>
    );
  }
  else if (number1 === '' && number2 === ''){
    element = (
      <div>
        <font className="Erro">Insira os dois valores!</font>
      </div>
    );
  }
  else if (number1 === ''){
    element = (
      <div>
        <font className="Erro">Falta o valor 1!</font>
      </div>
    );
  }else{
    element = (
      <div>
        <font className="Erro">Falta o valor 2!</font>
      </div>
    );
  }
    ReactDOM.render(element, document.getElementById('root1'));
}*/

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      titulo : props.titulo,
      number1 : "",
      number2 : "",
    }
    this.somar = this.somar.bind(this);
  }

  somar(){
    ReactDOM.render(
      <Somar
        number1={this.state.number1}
        number2={this.state.number2}
      />,
      document.getElementById('soma')
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <font className="Titulo">{this.state.titulo}</font>
          <div className="row">
            <input onChange={(event) => {this.setState({number1: event.target.value})}} className="Number" type="number"></input>
            <input onChange={(event) => {this.setState({number2: event.target.value})}} className="Number" type="number"></input>
          </div>
          <input className="Button" type="button" value="+" onClick={this.somar}></input>
          <div id="soma"></div>
        </header>
      </div>
    );
  }
}

export default App;