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
     /* <div className="Question" style={{paddingLeft: '0cm', textAlign: 'left'}}>
        <h2>Question {this.props.currentQuestion+1}</h2>
        <h3>{this.props.question.question}</h3>
        </div>*/
        <View style={{flex:1}}>
             <View style={{flex:1,directionFlex:'row',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'#556b2f'}}>
                   Question {this.props.currentQuestion+1}
                </Text> 
            </View>

            <View style={{flex:1,directionFlex:'row',alignItems:'center'}}>
               <Text style={{fontSize:20,color:'black'}}>
                  {this.props.question.question}
               </Text> 
             </View>
          </View> 
              
        
    );
  }


}
