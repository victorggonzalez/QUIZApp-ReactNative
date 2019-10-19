import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';



export default class Game extends React.Component{

  render() {
    //Comprueba que el array de preguntas esta completo, y en caso contrario muestra un gif de carga
    
    return(
      <div id="main" style={{paddingBottom: '0cm'}}>
      <div key="Game" className="Game">
        <section className="Content" class="container">
				    <Content question={this.props.question}
                    questions={this.props.questions}
                    currentQuestion={this.props.currentQuestion}
					          onQuestionAnswer={this.props.onQuestionAnswer}
                    finished={this.props.finished}
                    />
      </section>
      <footer className="Actionbar" class="container small">
				    <Actionbar question={this.props.question}
                      questions={this.props.questions}
                      currentQuestion={this.props.currentQuestion}
                      onChangeQuestion={this.props.onChangeQuestion}
                      onResetQuestion={this.props.onInitQuestion}
                      onSubmit={this.props.onSubmit}
                      score={this.props.score}
                      finished={this.props.finished}

             />
      </footer>

			 </div>
      </div>

      );
  }
}
