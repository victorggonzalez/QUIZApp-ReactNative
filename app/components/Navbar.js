import React from 'react';
import {Alert, View, Text, Button, TouchableHighlight, StyleSheet} from 'react-native';
import MyButton from './MyButton';

//Muestra un botón para volver a la pantalla de inicio. 
export default class Navbar extends React.Component{
  render(){

    return(
      <View id="header" className="header" style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin:10}}>

        <MyButton buttonName="< Back" function={ () => {
            Alert.alert(
              "Alert", "You will lose your progress in this quiz",
              [{text: 'Continue', onPress:()=>  this.props.goBack()},
              {text: 'Cancel', onPress:()=> console.log('Cancel')}
              ],{cancelable: false}
              )
            
            }}/>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  header:{
    fontSize: 25, 
    color: 'white'
  },
  reset:{
    fontSize: 20, 
    color: 'white'
  }
})
