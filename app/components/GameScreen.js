import React, {Component} from 'react';
import {Alert, AsyncStorage, View, Text, Image, YellowBox, StyleSheet, Button, ImageBackground} from 'react-native';
import {Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import Game from './Game.js';
import Navbar from './Navbar.js';
import {connect} from 'react-redux';
import {questionAnswer, changeQuestion, initQuestions, submit} from './../reducers/actions';

/*
<ButtonPrueba
onPress={() => this.props.navigation.goBack()} text={"Go back"}/>
*/


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
  }

  async _saveData(){
      try{
            var currentQuestions = JSON.stringify(this.props.questions);
            await AsyncStorage.setItem('@P2_2019_IWEB:quiz', currentQuestions)
                
            .then(Alert.alert(
                "Success","Your questions have been saved.",
                [{text:'OK',onPress:() => console.log('OK save')}
                ],{ cancelable: false}
            ));
        }catch (error) {
            console.log(error);
            Alert.alert(
                "Alert",
                "There has been a problem while saving your questions.",
                [{text:'OK',onPress:() => console.log('OK error save')}
                ],{cancelable: false}
            );
        }
}
  async _loadData(){
     try{
            var stored = await AsyncStorage.getItem('@P2_2019_IWEB:quiz');
            if (stored !== null){
                var loaded = JSON.parse(stored);
                this.props.dispatch(initQuestions(loaded));
                Alert.alert(
                    "Success","Your questions have been loaded successfully.",
                    [{text:'Continue',onPress:() => console.log('OK load')}
                    ],{ cancelable: false});
            }
            if (stored === null){
                Alert.alert(
                    "Alert", "There are no questions saved.",
                    [{text:'OK',onPress:() => console.log('OK no load')}
                    ],{ cancelable: false});
            }
        }catch (error) {
            console.log(error);
            Alert.alert(
                "Alert","There has been a problem while loading your questions.",
                [{text:'OK',onPress:() => console.log('OK error load')}
                ],{ cancelable: false});
        }
}


   async _deleteData(){
        try{
            await AsyncStorage.removeItem('@P2_2019_IWEB:quiz')
                .then(
            Alert.alert(
                "Alert",
                "Your saved questions have been deleted.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            ));
        }catch (e) {
            console.log(e);
            Alert.alert(
                "Alert",
                "Your saved questions couldn't be deleted.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            );
        }
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
      goBack={this.props.navigation.goBack}
      saveData={this._saveData.bind(this)}
      loadData = {this._loadData.bind(this)}
      deleteData ={this._deleteData.bind(this)}


       />) : (<Image source={{uri: 'https://www.freeiconspng.com/uploads/spinner-icon-0.gif'}}/>)
      

  let score = (this.props.finished)?
    <Button onPress={() => this.props.navigation.navigate('ScoreScreen',{score: this.props.score})} 
    title="Check score"/>:<Button disabled={true}  title="Check score"/>

  return (
    <View id="app" style={{flex:1, margin:0, flexDirection: 'column', justifyContent:'center'}}>
    <ImageBackground source={{uri: "https://fsb.zobj.net/crop.php?r=LuBOBwgmNp41v4868uXfH0ekybj8g5NELLGqbzICDc4K1YDwSbhLQ61O7HR3RSmx3W3g-VioujmVs2xhwUCOoQHkkcvaVWotVd4D8b-rhozvk5Aph51BztNlNvKwTatGmNdbeopREqQGz71I9FjPZ9S1SYhcUaTAKbeUqSWEK5Oqiupg-kNo9oOUuBOgZGe-E5BFa0FWJV26mrKE"}}
   style={{width:'100%', height: '100%'}}>
          <View id="navbar" style={{flex:1, backgroundColor: 'transparent'}} >
            <Navbar questions={this.props.questions}
              question={this.props.questions[this.props.currentQuestion]}
              currentQuestion={this.props.currentQuestion}
              onChangeQuestion={(nextQuestion)=>{this.props.dispatch(changeQuestion(nextQuestion))}}
              score={this.props.score}
              finished={this.props.finished}
              timer={this.props.timer}
              newQuestions={this.newQuestions}
              goBack={this.props.navigation.goBack}

             />
          </View>
          <View id="game" style={{flex:10, flexDirection: 'column'}}>
          {game}
          
          </View>
          {score}
        </ImageBackground>
      </View>


  );
}
}



function mapStateToProps(state){
  return{    ...state};
}

export default connect(mapStateToProps)(GameScreen);
