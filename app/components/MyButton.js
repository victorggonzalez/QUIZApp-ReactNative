import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';


export default class MyButton extends React.Component {
	
	constructor(props){
		super(props);
		this.disableButton=this.disableButton.bind(this);
	}

//Funcion para deshabilitar los botones previous y next cuando se muestra la 
//pregunta 1 y 10 respectivamente
  disableButton(index){
		switch (this.props.buttonName) {
			case "Previous":
				if(index===0){
					return true;
				}else {
					return false;
				}
			case "Next":
				if(index === 9){
					return true;
				}else {
					return false;
				}
			default:
				return false;
		}
	}

//Funcion para desactivar el boton submit cuando el juego ha finalizado
	disableAll(finished){
		if(finished === true){
			return true;
		}
	}

	render() {
		return(
      <Button title={this.props.buttonName} style={this.props.style} disabled={this.disableButton(this.props.currentQuestion) || this.disableAll(this.props.finished)}  onPress={this.props.function}/>
		);
	}
}

