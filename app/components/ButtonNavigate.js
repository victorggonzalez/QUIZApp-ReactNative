import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
export default class ButtonNavigate extends React.Component {
render() {
return (
<TouchableHighlight onPress={this.props.onPress}>
<Text style={styles.text}>{this.props.text}</Text>
</TouchableHighlight>
)
}
}
const styles = StyleSheet.create({
text: {
padding: 20,
margin: 20,
backgroundColor: 'transparent',
color: '#1376D2',
borderWidth: 3,
borderColor: '#1376D2',
fontSize: 25,
textAlign: 'center'
}
})