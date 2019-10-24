import React from 'react';
import {Alert, View, Text, Image, Button, StyleSheet} from 'react-native';
import MyButton from './MyButton';


//Componente que contiene cseis botones: previous y next para cambiar de pregunta, 
//submit para enviar los resultados, y save, load y remove para guardar, cargar y borrarpreguntas respectivamente. 
export default class Actionbar extends React.Component{
    
  render(){

    return(
    <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', margin:20}}>
          
          <MyButton buttonName="Previous" currentQuestion={this.props.currentQuestion}  function={ () => {
            if (this.props.currentQuestion!==0){
              return this.props.onChangeQuestion(this.props.currentQuestion-1);
            }else{
              return;
            }}}/>
          <MyButton buttonName="Submit all" questions={this.props.questions} finished={this.props.finished} function={ () => {
            return this.props.onSubmit(this.props.questions);
            }} color='red' />
          <MyButton buttonName="Next" currentQuestion={this.props.currentQuestion} function={ () => {
            if (this.props.currentQuestion === (this.props.questions.length-1)){
              return;
            }else{
              return this.props.onChangeQuestion(this.props.currentQuestion+1);
            }}}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', margin:20}}>
          <MyButton buttonName="Save" function={ () => {
            return this.props.saveData();
            }}/>
          <MyButton buttonName="Load" function={ () => {
            return this.props.loadData();
            }}/>

          <MyButton buttonName="Remove"  function={ () => {
              return this.props.deleteData();
            }}/>
        </View>
     
    </View>


  			);
  	}
}


