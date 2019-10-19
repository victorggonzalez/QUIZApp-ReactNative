import React from 'react';

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
      <div className="Question" style={{paddingLeft: '0cm', textAlign: 'left'}}>
        <h2>Question {this.props.currentQuestion+1}</h2>
        <h3>{this.props.question.question}</h3>
        </div>
    );
  }


}
