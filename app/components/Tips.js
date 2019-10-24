import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';


//Componente para mostrar los tips de cada pregunta
export default class Tips extends React.Component {
  //Funcion que muestra los tips de la pregunta si los tiene. Si no, muestra un mensaje. 
	 showTips(question){
    if(question.tips.length !== 0){
      return (
        <View >
          
            {this.props.question.tips.map((tip,id)=>{
			           return (<Text key={id} style={styles.tips} >{tip}</Text>
                 );})}
        </View>
        );
    } else {return(
			<View><Text style={styles.notips} >No tips available yet</Text></View>
    );}
	}

	render() {

      return this.showTips(this.props.question);

	}
}

const styles = StyleSheet.create({
tips: {
padding: 10,
margin: 20,
borderWidth: 2,
borderColor:'white',
backgroundColor: 'transparent',
color: 'white',
fontSize: 20,
textAlign: 'center'
},
notips: {
padding: 20,
margin: 20,
backgroundColor: 'transparent',
color: 'white',
fontSize: 20,
textAlign: 'center',
fontStyle: 'italic'

}
})
