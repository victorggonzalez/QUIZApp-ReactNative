import React from 'react'
import {View, Text, Image, YellowBox, StyleSheet} from 'react-native';



export default class MyImage extends React.Component {
    render(){
      let image = (this.props.question.attachment !== null ) ?

       (<Image style={{width:350, height:230,alignSelf:'center'}} source={{uri: this.props.question.attachment.url}}/>) :
        (<Image style={{width:350, height:230,alignSelf:'center'}} source={{uri: 'https://www.warnersstellian.com/Content/images/product_image_not_available.png'}}/>)
        return(
              <View style={{flex:1,flexDirection:'column'}}>                
               {image}              
              </View>

        );
    }
}
