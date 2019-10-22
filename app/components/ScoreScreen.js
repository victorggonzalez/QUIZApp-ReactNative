
import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import ButtonNavigate from './ButtonNavigate.js';

export default class IndexScreen extends React.Component {
render() {
return (
    <View style={{ flex:1, flexDirection:'column'}}>
    <ImageBackground source={{uri: "https://fsb.zobj.net/crop.php?r=LuBOBwgmNp41v4868uXfH0ekybj8g5NELLGqbzICDc4K1YDwSbhLQ61O7HR3RSmx3W3g-VioujmVs2xhwUCOoQHkkcvaVWotVd4D8b-rhozvk5Aph51BztNlNvKwTatGmNdbeopREqQGz71I9FjPZ9S1SYhcUaTAKbeUqSWEK5Oqiupg-kNo9oOUuBOgZGe-E5BFa0FWJV26mrKE"}}
   style={{width:'100%', height: '100%'}}>
        <View style={{ flex:2, flexDirection:'row', justifyContent: 'center', alignItems: 'flex-end', backgroundColor: ""}}>

        <Text style={styles.header}>Your final score is: {this.props.navigation.state.params.score}</Text>
        </View>
        <View style={{ flex:2, flexDirection:'column', alignItems:'center', justifyContent:'flex-end'}}>

        <ButtonNavigate onPress={() => this.props.navigation.navigate('GameScreen')}
        text={"Back"} style={{ alignSelf: 'flex-end'}}/>

        </View>

        </ImageBackground>
    </View>
    )
    }
    }

const styles = StyleSheet.create({
  header:{
    fontSize: 40, 
    color: 'white',
  }
})
