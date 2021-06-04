import React from 'react'
import './App.css';
import Somar from './Somar/Somar'
import ReactDOM from 'react-dom';

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