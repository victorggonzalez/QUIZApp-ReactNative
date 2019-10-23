import React from 'react';
import {Alert, View, Text, Button, TouchableHighlight, StyleSheet} from 'react-native';
import Index from './Index';
import MyButton from './MyButton';

export default class Navbar extends React.Component{
  render(){
    /* PASAR ESTO A REACT NATIVE 
    <nav id="nav" style={{paddingRight: '1cm'}}>
        <ul>
        <li><button class="button alt small" style={{ marginRight: '1cm', border: '0px', borderRadius: '50%'}} onClick={ () => {
            return this.props.newQuestions();}}>Reset game</button>
        </li>
        <li><div class="dropdown">
          <span style={{color: 'white'}}>See all the questions</span>
              <Index
                  questions={this.props.questions}
                  question={this.props.questions[this.props.currentQuestion]}
                  currentQuestion={this.props.currentQuestion}
                  onChangeQuestion={this.props.onChangeQuestion}
                  score={this.props.score}
                  finished={this.props.finished}
                  timer={this.props.timer}/>
        </div></li>
        </ul>


          </nav>*/
    return(
      <View id="header" className="header" style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin:10}}>

        <MyButton buttonName="< Back" function={ () => {
            Alert.alert(
              "Alert", "You will lose your progress in this quiz",
              [{text: 'Continue', onPress:()=>  this.props.goBack()},
              {text: 'Cancel', onPress:()=> console.log('Cancel')}
              ],{cancelable: false}
              )
            
            }}/>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  header:{
    fontSize: 25, 
    color: 'white'
  },
  reset:{
    fontSize: 20, 
    color: 'white'
  }
})
