import React from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet} from 'react-native';

import MyImage from './MyImage';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips';
import Check from './Check';


export default class Content extends React.Component{

  /* codigo a cambiar dentro del return
  <section class="box" style={{paddingTop: '40px'}}>
        <div class="row" style={{height: '40vh'}}>
          <div class="col-4">
            <div class="row">
            <Question question={this.props.question}
                      currentQuestion={this.props.currentQuestion}
                      questions={this.props.questions}/>
            </div>
            <div class="row">
            <Answer question={this.props.question}
                    currentQuestion={this.props.currentQuestion}
                    onQuestionAnswer={this.props.onQuestionAnswer}
                    finished={this.props.finished}
            />
            </div>
            <div class="row" style={{paddingTop: '10px'}}>
            <Check question={this.props.question}
                  currentQuestion={this.props.currentQuestion}
            finished={this.props.finished}/>
            </div>
          </div>
          <div class="col-4" >
            <Image question={this.props.question}/>
          </div>

          <div class="col-4">
              <ul>
                <Tips question={this.props.question}/>
                <h1>Created by: {this.props.question.author.username}</h1>
                    <span class="image">
                      {authorPhoto}
                      </span>
                      
                </ul>
        </div>
        </div>
        </section>
  */
  render(){


    return(

      <View style={{flex:1,flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
         
         <View id="question attachment" style={{flex:4,alignSelf:'stretch'}}>
           <MyImage question={this.props.question}
           />
         </View>
         <TouchableHighlight onPress={() => {this.props.setModalVisible(true)}}>
              <View style={{backgroundColor: '#82A4C7'}}>
                   <Text style={styles.text}>Show tips</Text>
              </View>
          </TouchableHighlight>
        
         <View id="question" style={{flex:2}}>
           <Question question={this.props.question}
                      currentQuestion={this.props.currentQuestion}
                      questions={this.props.questions}
            />  
            
        </View>
        
         <View id="answer" style={{flex:1,backgroundColor:'',flexDirection:'column',justifyContent:'flex-start'}}>
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
