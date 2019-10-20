import React from 'react';
import {View, Text, Image, YellowBox, StyleSheet} from 'react-native';

import {Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

//Componente que muestra un dropdown menu con las preguntas, para acceder directamente a la pregunta elegida. 
export default class Index extends React.Component{
  
  render() {
   /* <div class="dropdown-content" >
      <section class="buttonBox">

      {this.props.questions.map((question, index) =>
          <button class="buttonIndex" onClick={()=> {
          return this.props.onChangeQuestion(index);
        }}>{index+1}</button>
        )}
        </section>
        </div>*/
    return(
      <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
        <Menu onSelect={value => this.props.onSubmit(this.props.questions)}>
          <MenuTrigger  >
            <Text style={styles.headerText}>Questions</Text>
          </MenuTrigger  >

          <MenuOptions>
            <MenuOption value={"Login"}>
              <Text style={styles.menuContent}>1</Text>
            </MenuOption>
            <MenuOption value={"Register"}>
              <Text style={styles.menuContent}>2</Text>
            </MenuOption>
            <MenuOption value={"Download"}>
              <Text style={styles.menuContent}>3</Text>
            </MenuOption>
            <MenuOption value={"Logout"}>
              <Text style={styles.menuContent}>4</Text>
            </MenuOption>
            
          </MenuOptions>

        </Menu>
      </MenuProvider>
      

      );
  }
}
const styles = StyleSheet.create({
    headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20,
    zIndex: 999
  }
});