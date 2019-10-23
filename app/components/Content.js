import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

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
/*Cambiar antes del return
    let authorPhoto = (this.props.question.author.photo !== null) ?
    <img src={this.props.question.author.photo.url} width="100" height="100"  alt="Imagen"/> : 
    <h1 style={{color: 'red', textAlign: 'center'}}>IMAGE NOT AVAILABLE</h1>
    */

    return(

      <View style={{flex:1,flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
         
         <View id="question attachment" style={{flex:5,alignSelf:'stretch'}}>
           <MyImage question={this.props.question}
           />
         </View>
        
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
