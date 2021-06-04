import React from 'react'
import './Somar.css';

class Somar extends React.Component {

    render() {
        let {number1, number2} = this.props;
        if (number1 !== '' && number2 !== '') {
            let soma = parseInt(number1) + parseInt(number2);
            return (
                <div>
                    <font className="Sucess">{soma}</font>
                </div>
            );
        }
        else if (number1 === '' && number2 === '') {
            return (
                <div>
                    <font className="Erro">Insira os dois valores!</font>
                </div>
            );
        }
        else if (number1 === '') {
            return (
                <div>
                    <font className="Erro">Falta o valor 1!</font>
                </div>
            );
        } else {
            return (
                <div>
                    <font className="Erro">Falta o valor 2!</font>
                </div>
            );
        }
    }
}

export default Somar;