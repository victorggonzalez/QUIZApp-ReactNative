import React from 'react';


//Componente que muestra un dropdown menu con las preguntas, para acceder directamente a la pregunta elegida. 
export default class Index extends React.Component{
  
  render() {
    return(
      <div class="dropdown-content" >
      <section class="buttonBox">

      {this.props.questions.map((question, index) =>
          <button class="buttonIndex" onClick={()=> {
          return this.props.onChangeQuestion(index);
        }}>{index+1}</button>
        )}
        </section>
        </div>

      );
  }
}
