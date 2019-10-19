import React from 'react';

//Componente que muestra un input para introducir una respuesta, o la respuesta introducida por el usuario
export default class Answer extends React.Component{

//Funcion que impide escribir en el input una vez que ha finalizado el juego
  disableAnswer(finished){
    if(finished === true){
      return true;
    }
  }
  
  render(){

    return(
      <div style={{paddingLeft: '0cm'}}>
        <input type="text" placeholder="Type your answer here"  disabled={this.disableAnswer(this.props.finished)} value={this.props.question.userAnswer || ''}
          onChange={(e)=>{
            this.props.onQuestionAnswer(e.target.value);}}/>

      </div>
    );
  }
}
