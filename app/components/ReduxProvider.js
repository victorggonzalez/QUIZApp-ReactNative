import React from 'react';
import {View} from 'react-native';
import { createStore }from 'redux';
import { Provider } from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import GlobalState from './../reducers/reducers';
import GameScreen from './GameScreen';
import IndexScreen from './IndexScreen';
import ScoreScreen from './ScoreScreen';

const AppNavigator = createStackNavigator({
  IndexScreen: {screen: IndexScreen},
  GameScreen: {screen: GameScreen, 
    navigationOptions:  {
      gesturesEnabled: false}}, 
  ScoreScreen: {screen: ScoreScreen}
},{
  initialRouteName: "IndexScreen",
  headerMode: 'none'
})

const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {
  constructor(props){
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: [  ]
    };
    this.store = this.configureStore();
  }


  render(){

    return(
      <Provider store={this.store}>
            <AppContainer/>
        </Provider>
    );
  }

  configureStore(){
    return createStore(GlobalState, this.initialState);
  }

}
