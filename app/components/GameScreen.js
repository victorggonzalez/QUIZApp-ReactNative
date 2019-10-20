import React, {Component} from 'react';
import {View, Text, Image, YellowBox, StyleSheet} from 'react-native';
import {Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import Game from './Game.js';
import Navbar from './Navbar.js';
import {connect} from 'react-redux';
import {questionAnswer, changeQuestion, initQuestions, submit, timer} from './../reducers/actions';
//import './App.css';




class GameScreen extends Component{

  constructor(props){
    super(props);
    this.newQuestions=this.newQuestions.bind(this);
    YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ])

  }
  componentDidMount(props) {
    let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=b61cccee4c3c81170f14";

    fetch(url)
        .then(res => res.json())
        .then(json => {
          this.props.dispatch(initQuestions(json))})
        .catch(error => {
          console.log(error);
        });

        var interval = setInterval(() =>{
          if (this.props.timer === 0){
            this.props.dispatch(submit(this.props.questions));
            return 0;
          }
          this.props.dispatch(timer(this.props.timer-1));
          },1000);

  }

  newQuestions(){
    let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=b61cccee4c3c81170f14"

    fetch(url)
        .then(res => res.json())
        .then(json => {
          this.props.dispatch(initQuestions(json))})
        .catch(error => {
          console.log(error);
        });
  }

  render(){
  console.log(this.props);

  //Comprueba que el array de preguntas esta completo, y en caso contrario muestra un gif de carga
 let game = (this.props.questions.length === 10) ?
  (<Game questions={this.props.questions}
      question={this.props.questions[this.props.currentQuestion]}
      currentQuestion={this.props.currentQuestion}
      onQuestionAnswer={(answer) =>{this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
      onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
      onInitQuestions={() => {this.newQuestions()}}
      onResetQuestions={() => {this.newQuestions()}}
      onSubmit={(questions)=>this.props.dispatch(submit(questions))}
      score={this.props.score}
      finished={this.props.finished}
      timer={this.props.timer} />) : (<Image source={{uri: 'https://www.freeiconspng.com/uploads/spinner-icon-0.gif'}}/>)

  return (
    <View id="app" style={{flex:1, margin:0, flexDirection: 'column', justifyContent:'center'}}>
          <View id="navbar" style={{flex:1, backgroundColor: '#6495ed'}} >
            <Navbar questions={this.props.questions}
              question={this.props.questions[this.props.currentQuestion]}
              currentQuestion={this.props.currentQuestion}
              onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
              score={this.props.score}
              finished={this.props.finished}
              timer={this.props.timer}
              newQuestions={this.newQuestions}
             />
        
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
 
            <View id="time" style={{flex:2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                 <Text style={{color: '#6495ed'}}>Time remaining: {this.props.timer} s</Text>
            </View>
          </View>

          <View id="game" style={{flex:10, flexDirection: 'column'}}>
          {game}
          </View>

    </View>


  );
}
}



function mapStateToProps(state){
  return{    ...state};
}

export default connect(mapStateToProps)(GameScreen);
