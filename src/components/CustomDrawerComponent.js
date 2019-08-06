import React, {Component} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, FlatList, View} from 'react-native';
import {connect} from 'react-redux';
// import { DrawerItems } from 'react-navigation';
import { DrawerItems} from 'react-navigation';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {variable} from './../Theme/variable'
import { topPickes } from '../utils/Constants';
import {updateLoginDetails} from '../actions/Login/login';
import ImageComponent from './component/Image';
import TextComponent from './component/Text';


class CustomDrawerComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      category: topPickes
    }
  }
  
  handleLogout=()=>{
    for(let i = 0; i< this.props.login.length; i++){
        this.props.update(this.props.login[i].id, this.props.login[i].FullName, this.props.login[i].Email, this.props.login[i].Password, false)
        Toast.showWithGravity('User Logout.', Toast.SHORT, Toast.BOTTOM)        
        this.props.navigation.navigate('Login');
    }
  }
  render() {
    for (let i = 0; i < this.props.login.length; i++) {
      var flag = false
      var name = ''
      if(this.props.login[i].isLogged){
        flag=true
        name=this.props.login[i].FullName
      }
    }
    return (
      <SafeAreaView style={{flex : 1}}>
        <View style={{backgrounColor: '#555CC4', height: 150, alignItems: 'center', justifyContent: 'center'}}>
            <ImageComponent style={{width: 100, height: 100}} imageSource={require('../assets/images/appIcon.png')}/>
            {flag 
            ? <TextComponent style={{fontWeight:'bold', color: '#555CC4', fontSize: 16}} title={"Welcome, "+name} /> 
            : null
          }
        </View>
        <ScrollView>
          <DrawerItems {...this.props} />
          {flag 
            ? <TouchableOpacity style={{margin: 15}} onPress={()=>this.props.navigation.push('RequestBook')}>
                <TextComponent style={{fontWeight:'bold', fontSize: 14}} title={"Request Book"} />
              </TouchableOpacity>
            : null
          }
          <FlatList
          data={this.state.category}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              <TextComponent style={{margin: 15, fontWeight:'bold', fontSize: 14}} title={item.category} />
            </TouchableOpacity>
          )}
        />
        </ScrollView>
        
        {flag 
            ? <View style={{backgroundColor: 'lightgrey',}}>
                <TouchableOpacity style={{margin: 15, justifyContent: 'center', flexDirection: variable.flexDirection_Row}} onPress={this.handleLogout}>
                  <Icon name="logout" size={24} />
                  <TextComponent style={{fontWeight:'bold', fontSize: 14}} title={"Logout"} />
                </TouchableOpacity>
              </View>
            : null
          }
      </SafeAreaView>
    )
  }
}


const mapStateToProps = state => {
  return {
      login: state.login.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      update: (id, Email, Password, isLogged) => {
          dispatch(updateLoginDetails(id, Email, Password, isLogged))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerComponent);