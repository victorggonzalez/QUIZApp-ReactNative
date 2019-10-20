import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

//Clase creada para comprobar si las respuestas son correctas o erroneas y sacar un mensaje por pantalla
//mediante un popup
export default class Score extends React.Component{

  /*
<div>
      <a class="button fit small" style={{backgroundColor:'grey'}} href="#popup1">Check score</a>
      <div id="popup1" class="overlay">
         <div class="popup"><h3>Your final score is {this.props.score}/10</h3>
         <a class="close" href="#">&times;</a>
           <div class="content">{content}</div>
         </div>
     </div>
     </div>
  */
  _onPressButton(){
    alert("Your final score is")
  }

  render(){

    let content = (this.props.score < 5) ?
    (<Text>Try again</Text>) : (<Text>Congratulations! </Text>)

    return(
      <View>
          <Button title="Check score"onPress={this._onPressButton}/>
      </View>
    );
  }
}
