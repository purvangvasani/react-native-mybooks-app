/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
// import {SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import { fromRight, zoomIn, flipX, fromLeft, fromTop, fromBottom, fadeIn, zoomOut, flipY } from 'react-navigation-transitions';

import TabNavigator from './src/screens/Dashboard';
import LoginScreen from './src/screens/Login/Login';
import SignupScreen from './src/screens/Login/Signup';
import CategoryBook from './src/screens/Categories/CategoryBook';
import BookDetailScreen from './src/screens/BookDetail';
import ProfileScreen from './src/screens/Profile';
import SearchScreen from './src/screens/Search';
import BookmarkScreen from './src/screens/Bookmark';
import CustomDrawerComponent from './src/components/CustomDrawerComponent';
import CategoriesScreen from './src/screens/Categories';
import LoaderScreen from './src/screens/Loader';
import MyCollectionScreen from './src/screens/Collection';
import RequestBookScreen from './src/screens/RequestBook';
import RequestedBookList from './src/screens/RequestBook/RequestedBookList';

class App extends Component {
  render(){
    return (
      <DrawerNavigator />
    );
  }
};

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: TabNavigator,
  Category: CategoriesScreen
  // RequestBook: RequestBookScreen
  // Login: LoginScreen
}, 
{
  contentComponent : CustomDrawerComponent,
  drawerWidth:300,
  transitionConfig: () => fromLeft(),
  // defaultNavigationOptions : {
  //   drawerIcon: ({ tintColor }) => (
  //     <Icon name="login" style={{fontSize : 24, color:tintColor}} />
  //   )
  // },
  contentOptions:{
    activeTintColor:'#3C53B4',
    fontFamily: 'monospace'
  },
})

const AppContainer = createStackNavigator({
  Loader: {screen: LoaderScreen},
  drawer: { screen: AppDrawerNavigator },
  Dashboard: { screen: TabNavigator },
  CategoryBook: { screen: CategoryBook },
  Signup: { screen: SignupScreen },
  Login: { screen: LoginScreen },
  BookDetail: { screen: BookDetailScreen },
  Search: {screen: SearchScreen},
  Bookmark: {screen: BookmarkScreen},
  Profile: {screen: ProfileScreen},
  MyCollection: {screen: MyCollectionScreen},
  RequestBook: {screen: RequestBookScreen},
  RequestedBookList: {screen: RequestedBookList}
},{
  // initialRouteName: 'drawer',
  headerMode: 'none',
})

export default createAppContainer(AppContainer);
