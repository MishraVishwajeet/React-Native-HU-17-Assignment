/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createStore,combineReducers} from 'redux';
import verifyReducer from './src/store/reducers/verify';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
// import LoginNavigation from './src/navigation/LoginNavigation';
import {
  Header,
  LearnMoreLinks,  
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
declare var global: {HermesInternal: null | {}};
const stack=createStackNavigator();
const rootReducer = combineReducers({
  verify:verifyReducer
})
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown:false
          }}>
          <stack.Screen name="Login" component={Login}></stack.Screen>
          <stack.Screen name="Home" component={Home}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
};



export default App;
