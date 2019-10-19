import React from 'react';


//Componente para mostrar los tips de cada pregunta
export default class Tips extends React.Component {
  //Funcion que muestra los tips de la pregunta si los tiene. Si no, muestra un mensaje. 
	  showTips(question){
    if(question.tips.length !== 0){
      return (
        <div>
          <h1 >Tips:</h1>
          <ul style={{marginBottom: '10px', marginLeft: '60px'}}>
            {this.props.question.tips.map((tip,id)=>{
			           return (<li style={{textAlign: 'left', paddingLeft:'0px'}}>{tip}</li>
                 );})}
          </ul>
        </div>
        );
    } else {return(
			<h1><i>No tips available yet</i></h1>

    );}
	}




	render() {

      return this.showTips(this.props.question);

	}
}
