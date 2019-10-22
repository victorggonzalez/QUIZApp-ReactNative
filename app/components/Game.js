import React from 'react';
import {View, Text, Image} from 'react-native';

import Content from './Content';
import Actionbar from './Actionbar';



export default class Game extends React.Component{

  render() {
    return(
      
      <View style={{flex:10, flexDirection: 'column'}} >
            <View id="content" style={{flex:3, flexDirection: 'column'}}>
                <Content question={this.props.question}
                        questions={this.props.questions}
                        currentQuestion={this.props.currentQuestion}
                        onQuestionAnswer={this.props.onQuestionAnswer}
                        finished={this.props.finished}
                        />
            </View>
            <View id="actionbar" style={{flex:1, flexDirection: 'column'}}>
                <Actionbar question={this.props.question}
                          questions={this.props.questions}
                          currentQuestion={this.props.currentQuestion}
                          onChangeQuestion={this.props.onChangeQuestion}
                          onResetQuestion={this.props.onInitQuestion}
                          onSubmit={this.props.onSubmit}
                          score={this.props.score}
                          finished={this.props.finished}
                          goBack={this.props.goBack}
                />
            </View>
      </View>

      );
  }
}
