import React from 'react';
import {Alert, View, Text, Image, Button, StyleSheet} from 'react-native';
import MyButton from './MyButton';


//Componente que contiene cuatro botones: previous y next para cambiar de pregunta, 
//submit para enviar los resultados y check score para comprobar la puntuacion
export default class Actionbar extends React.Component{
    
  render(){
    //Si el juego ha finalizado, se podra comprobar la puntuacion mediante el componente score, 
    //si no, el boton estara desactivado.


    return(
    <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
          


          <MyButton buttonName="Previous" currentQuestion={this.props.currentQuestion}  function={ () => {
            if (this.props.currentQuestion!==0){
              return this.props.onChangeQuestion(this.props.currentQuestion-1);
            }else{
              return;
            }}}/>
          <MyButton buttonName="Submit" questions={this.props.questions} finished={this.props.finished} function={ () => {
            return this.props.onSubmit(this.props.questions);
            }} color='red' />
          <MyButton buttonName="Next" currentQuestion={this.props.currentQuestion} function={ () => {
            if (this.props.currentQuestion === (this.props.questions.length-1)){
              return;
            }else{
              return this.props.onChangeQuestion(this.props.currentQuestion+1);
            }}}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
          <MyButton buttonName="Save" function={ () => {
            return this.props.saveData();
            }}/>
          <MyButton buttonName="Load" function={ () => {
            return this.props.loadData();
            }}/>
          <MyButton buttonName="Remove" currentQuestion={this.props.currentQuestion} function={ () => {
            if (this.props.currentQuestion === (this.props.questions.length-1)){
              return;
            }else{
              return this.props.onChangeQuestion(this.props.currentQuestion+1);
            }}}/>

        </View>
     
    </View>


  			);
  	}
}


