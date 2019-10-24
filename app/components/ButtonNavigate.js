import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

//Componente con los botones encargados de la navegación
export default class ButtonNavigate extends React.Component {
render() {
return (
<TouchableHighlight activeOpacity={1} underlayColor='#D0EAFF' onPress={this.props.onPress}>
			<Text style={styles.text}>{this.props.text}</Text>
</TouchableHighlight>
)
}
}
const styles = StyleSheet.create({
text: {
padding: 20,
margin: 20,
color: '#1376D2',
borderWidth: 3,
borderColor: '#1376D2',
fontSize: 25,
textAlign: 'center'
}
})