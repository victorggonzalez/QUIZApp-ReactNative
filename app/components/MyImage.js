import React from 'react'
import {View, Text, Image, YellowBox, StyleSheet} from 'react-native';

/*<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                        style={{width: 400, height: 180}} 
                  />*/

export default class MyImage extends React.Component {
    render(){
      let image = (this.props.question.attachment !== null ) ?
       (<Image style={{width:340, height:200,alignSelf:'center'}} source={{uri: this.props.question.attachment.url}}/>) :
        (<Text style={{color: 'red', textAlign: 'center'}}>IMAGE NOT AVAILABLE</Text>)
      
        return(
              <View style={{flex:1,flexDirection:'column'}}>
                
               {image}

                 
              
              </View>

        );
    }
}
