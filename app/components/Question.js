import React from 'react';
import {View, Text, Image, YellowBox, StyleSheet} from 'react-native';

export default class Question extends React.Component{

emptyQuestions(questions){
  if(questions.length()===0){
    return true;
  }else{
    return false;
  }
}

  render(){
    return(

        <View style={{flex:1,flexDirection:'column',justifyContent:'space-around', alignItems:'center'}}> 
          <View style={styles.view}>
                <Text style={{fontSize:20,color:'white', textAlign: 'center'}}>
                   Question {this.props.currentQuestion+1}
                </Text> 
          </View>

            <View style={styles.view}>
               <Text style={{fontSize:20,color:'white'}}>
                  {this.props.question.question}
               </Text> 
             </View>
          </View> 
              
        
    );
  }
}

const styles = StyleSheet.create({
view: {
flex:1, flexDirection:'row',justifyContent:'center', alignItems:'center', margin:10
}
})
