import React from 'react';
import {View, TextInput, Text, Image} from 'react-native';

//Componente que muestra un input para introducir una respuesta, o la respuesta introducida por el usuario
export default class Answer extends React.Component{

//Funcion que impide escribir en el input una vez que ha finalizado el juego
  disableAnswer(finished){
    if(finished === true){
      return true;
    }
  }
  
  render(){

    return(
     /* <div style={{paddingLeft: '0cm'}}>
        <input type="text" placeholder="Type your answer here"  disabled={this.disableAnswer(this.props.finished)} value={this.props.question.userAnswer || ''}
          onChange={(e)=>{
            this.props.onQuestionAnswer(e.target.value);}}/>
      </div>*/
      <View style={{width:240,height:35,flexDirection:'row',alignItems:'center',borderRdius:4,borderColor:'black',borderWidth:2,alignSelf:'flex-end'}}> 
            <TextInput style={{marginLeft:15,fontSize:20}}
            placeholder="Type your answer here"  disabled={this.disableAnswer(this.props.finished)} value={this.props.question.userAnswer || ''}
                onChangeText={(text)=>{
                this.props.onQuestionAnswer(text);}}
            />
          
      </View> 
    );
  }
}
