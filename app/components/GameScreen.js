import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Game from './Game.js';
import Navbar from './Navbar.js';
import {connect} from 'react-redux';
import {questionAnswer, changeQuestion, initQuestions, submit, timer} from './../reducers/actions';
//import './App.css';




class GameScreen extends Component{

  constructor(props){
    super(props);
    this.newQuestions=this.newQuestions.bind(this);

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
 /* let game = (this.props.questions.length === 10) ?
  <Game questions={this.props.questions}
      question={this.props.questions[this.props.currentQuestion]}
      currentQuestion={this.props.currentQuestion}
      onQuestionAnswer={(answer) =>{this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
      onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
      onInitQuestions={() => {this.newQuestions()}}
      onResetQuestions={() => {this.newQuestions()}}
      onSubmit={(questions)=>this.props.dispatch(submit(questions))}
      score={this.props.score}
      finished={this.props.finished}
      timer={this.props.timer} /> : <img src="https://www.freeiconspng.com/uploads/spinner-icon-0.gif"  alt="Loading" class="error"/>
*/
     /* <Navbar questions={this.props.questions}
          question={this.props.questions[this.props.currentQuestion]}
          currentQuestion={this.props.currentQuestion}
          onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
          score={this.props.score}
          finished={this.props.finished}
          timer={this.props.timer}
          newQuestions={this.newQuestions}
      />
      {game}*/


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
      <View style={{flex:8, flexDirection: 'column'}} id="game">
        <View id="content" style={{flex:3, flexDirection: 'column'}}/>
        <View id="actionbar" style={{flex:1, flexDirection: 'column', backgroundColor: 'red'}}/>
      </View>

    </View>


  );
}
}



function mapStateToProps(state){
  return{    ...state};
}

export default connect(mapStateToProps)(GameScreen);
