import React from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet} from 'react-native';
import MyImage from './MyImage';
import Question from './Question';
import Answer from './Answer';
import Check from './Check';
import MyButton from './MyButton';


export default class Content extends React.Component{
  //Funcion que comprueba que la pregunta tiene tips disponibles y los muestra. 
  showTips(question){
    if(question.tips.length !== 0){
      return (
        <View>
          <Text style={{fontSize:20}}>Tips: Created by: {this.props.question.author.username}</Text>
          <View style={{marginBottom: '10px', marginLeft: '60px'}}>
            {this.props.question.tips.map((tip,id)=>{
                 return (<Text style={{textAlign: 'left', paddingLeft:'0px'}}>{tip}</Text>
                 );})}
          </View>
        </View>
        );
    } else {return(
      <Text>No tips available yet</Text>

    );
  }
  }
  render(){
    return(

      <View style={{flex:1,flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
         
         <View id="question attachment" style={{flex:7,alignSelf:'stretch'}}>
           <MyImage question={this.props.question}
           />
         </View>
        <View id="tips button" style={{flex:1}}>

             <TouchableHighlight activeOpacity={1} underlayColor='#A5BDD5' onPress={() => {this.props.setModalVisible(true)}}>
                       <Text style={styles.text}>Show tips</Text>
              </TouchableHighlight>
        </View>
        
         <View id="question" style={{flex:3,flexDirection:'column',justifyContent:'flex-start'}}>

           <Question question={this.props.question}
                      currentQuestion={this.props.currentQuestion}
                      questions={this.props.questions}
            />  
            
        </View>
        
         <View id="answer" style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
           <Answer question={this.props.question}
                    currentQuestion={this.props.currentQuestion}
                    onQuestionAnswer={this.props.onQuestionAnswer}
                    finished={this.props.finished}
            /> 

         </View>

         <View id="check" style={{flex:1}}>
           <Check question={this.props.question}
                  currentQuestion={this.props.currentQuestion}
            finished={this.props.finished}/>
         </View>

      </View>

    );
  }

}

const styles = StyleSheet.create({
text: {
backgroundColor: 'transparent',
color: 'white',
borderWidth: 1,
padding: 5,
borderRadius: 50,
borderColor: 'white',
fontSize: 15,
textAlign: 'center'
}
})
