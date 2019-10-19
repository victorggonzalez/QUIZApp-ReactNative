import React from 'react';
import MyButton from './MyButton';
import Score from './Score';


//Componente que contiene cuatro botones: previous y next para cambiar de pregunta, 
//submit para enviar los resultados y check score para comprobar la puntuacion
export default class Actionbar extends React.Component{

  render(){
    //Si el juego ha finalizado, se podra comprobar la puntuacion mediante el componente score, 
    //si no, el boton estara desactivado.
    let score = (this.props.finished) ?
    <Score score={this.props.score}/> : <button class="button fit disabled">Check score</button>

    return(
      <div class="box" style={{padding: '30px'}}>
      <div key="Actionbar" className="Actionbar" class="row">
        <div class="col-4">
            <MyButton buttonName="Previous" currentQuestion={this.props.currentQuestion} function={ () => {
						if (this.props.currentQuestion!==0){
							return this.props.onChangeQuestion(this.props.currentQuestion-1);
						}else{
							return;
						}}}/>
        </div>
        <div class="col-4">
			     <MyButton buttonName="Submit" questions={this.props.questions} style={{backgroundColor: 'red'}} finished={this.props.finished} function={ () => {
            return this.props.onSubmit(this.props.questions);
            }}/>
            <p></p>
            {score}
        </div>
        <div class="col-4">
          <MyButton buttonName="Next" currentQuestion={this.props.currentQuestion}   function={ () => {
						if (this.props.currentQuestion === (this.props.questions.length-1)){
							return;
						}else{
							return this.props.onChangeQuestion(this.props.currentQuestion+1);
						}}}/>
        </div>
      </div>

      </div>



  			);
  	}
  }
