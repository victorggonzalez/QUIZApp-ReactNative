import React from 'react';
import {View, Text, Button, TouchableHighlight, StyleSheet} from 'react-native';
import Index from './Index';

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
      <View id="header" className="header" style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin:10}}>

        
        
        <TouchableHighlight  onPress={ () => {return this.props.newQuestions();}}>
            <View style={{backgroundColor: '#1376D2 '}}>
            <Text style ={styles.reset}>Reset game</Text>
            </View>
        </TouchableHighlight>

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
