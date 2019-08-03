import React, {Component} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
// import { DrawerItems } from 'react-navigation';
import { DrawerItems} from 'react-navigation';
import Toast from 'react-native-simple-toast';

import {updateLoginDetails} from '../actions/Login/login';


class CustomDrawerComponent extends Component {
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
            <Image source={require('../assets/images/appIcon.png')} style={{width: 100, height: 100,}} />
            {flag 
            ? <Text style={{fontWeight:'bold', color: '#555CC4', fontSize: 16}}>Welcome, {name}</Text>
            : null
          }
        </View>
        <ScrollView>
          <DrawerItems {...this.props} />
          {flag 
            ? <TouchableOpacity style={{margin: 15}} onPress={()=>this.props.navigation.push('RequestBook')}>
                <Text style={{fontWeight:'bold'}}>Request Book</Text>
              </TouchableOpacity>
            : null
          }
        </ScrollView>
        {flag 
            ? <TouchableOpacity style={{margin: 15}} onPress={this.handleLogout}>
                <Text style={{fontWeight:'bold'}}>Logout</Text>
              </TouchableOpacity>
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