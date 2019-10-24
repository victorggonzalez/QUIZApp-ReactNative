import React from 'react';
import {View, Text, TextInput, Image , Button, DrawerLayoutAndroid} from 'react-native';

import MyImage from './MyImage';
import Question from './Question';
import Answer from './Answer';
import Check from './Check';
import MyButton from './MyButton';


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

  jjj() {
  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I m in the Drawer!</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>
  );
}
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
         
         <View id="question attachment" style={{flex:10,alignSelf:'stretch'}}>

           <MyImage question={this.props.question}
           />
         </View>

        
         <View id="question" style={{flex:4,flexDirection:'column',justifyContent:'flex-start'}}>

           <Question question={this.props.question}
                      currentQuestion={this.props.currentQuestion}
                      questions={this.props.questions}
            />  
         </View>

         <View id="espacio en blanco" style={{flex:1}}>
         </View>


         <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
             <View id="answer" style={{flex:4,flexDirection:'column',justifyContent:'center'}}>
                  <Answer question={this.props.question}
                      currentQuestion={this.props.currentQuestion}
                      onQuestionAnswer={this.props.onQuestionAnswer}
                      finished={this.props.finished}
                  /> 
             </View>

             <View id="tips" style={{flex:1,marginLeft:10,marginRight:10}}>
            
               <Button title='?' onPress={() => this.jjj()
               
               }

               />
                 
             </View>

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
