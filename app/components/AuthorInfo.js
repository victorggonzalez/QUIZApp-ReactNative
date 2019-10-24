import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';


//Componente para mostrar la información del autor de cada pregunta
export default class AuthorInfo extends React.Component {


	render() {
		 let autorImage = (this.props.question.author.photo.url !== null ) ?

       (<Image  style={{width: '20%', height: '20%', borderRadius:4, margin:10}} source={{uri: this.props.question.author.photo.url}}/>) :
        (<Image style={{width:'20%', height:'20%', borderRadius:4, margin:10}} source={{uri: 'https://www.warnersstellian.com/Content/images/product_image_not_available.png'}}/>)

      return(<View style={{flex: 1, flexDirection:'column', justifyContent:'flex-end', alignItems:'flex-end'}}>
		      	<Text style={{alignSelf: 'flex-start', marginLeft: 20, color:'#1376D2'}}>
		      	Created by: {this.props.question.author.username}
		      	</Text>
      			<Image  style={{width: '20%', height: '20%', borderRadius:4, margin:10}} source={{uri: this.props.question.author.photo.url}}/>
      			
      		</View>
      );

	}
}


