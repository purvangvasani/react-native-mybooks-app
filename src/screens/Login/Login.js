import React, { Component } from 'react';
import { View , BackHandler, Image, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import * as Animatable from "react-native-animatable";
import { Button, Text } from 'native-base';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

import {updateLoginDetails} from '../../actions/Login/login';
import { validateEmail, validatePassword } from '../../validate';
import { variable } from '../../Theme/variable';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state={
            isLogged: false,
            isEmail: false,
            isPass: false,
            FullName: '',
            Email: '',
            Password: ''
        }

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    handleUserLogin = () => {
        if(this.state.Email == '' || this.state.Password == ''){
            alert('Fill all information.')
        }
        else if (this.state.isPass) {
            if (this.state.isEmail) {
                alert('Provide valid Email or Password.')
            }
        }
        else{
            for(let i = 0; i< this.props.login.length; i++){
                if(this.state.Email === this.props.login[i].Email){
                    if(this.state.Password === this.props.login[i].Password){
                        this.props.update(this.props.login[i].id, this.props.login[i].FullName, this.props.login[i].Email, this.props.login[i].Password, true)
                        Toast.showWithGravity('Success.', Toast.SHORT, Toast.BOTTOM)        
                        this.handleClear()
                        this.props.navigation.navigate('Dashboard');
                    }
                    else{
                        Toast.showWithGravity('Invalid Password.', Toast.SHORT, Toast.BOTTOM)                                
                    }
                }
                else{
                    Toast.showWithGravity('Email does not exist.', Toast.SHORT, Toast.BOTTOM)        
                }
            }
        }
    }

    handleClear=()=>{
        this.emailInput.clear()
        this.passwordInput.clear()
      }

    onChange = (value, target) => {
        if (target === 'email') {
            let msg = validateEmail(value)
            this.setState({ Email: value })
            if (msg != true) {
                this.setState({ email_err_msg: msg, isEmail: true });
            }
            else {
                this.setState({ isEmail: false, email_err_msg: '' })
            }
        }
        else if (target === 'password') {
            let msg = validatePassword(value)
            this.setState({ Password: value })
            if (msg != true) {
                this.setState({ password_err_msg: msg, isPass: true });
            }
            else {
                this.setState({ isPass: false, password_err_msg: '' })
            }
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View>
                    <View style={{ alignItems: 'center', marginTop: 10,}}>
                        <Image source={require('../../assets/images/appIcon.png')} style={{width: 200, height: 200,}} />
                    </View>
                    <View style={{alignItems: variable.alignItemsCenter, marginTop: variable.marginTop_10 }}>
                        <Animatable.View animation="fadeInDown" delay={200} style={{width: width-50, paddingLeft: variable.paddingLeft_15, paddingRight: variable.paddingRight_15,}}>
                            <TextInput style={{color: '#555CC4', borderBottomWidth: variable.borderBottomWidth_1, borderBottomColor: '#555CC4', fontFamily: 'monospace',}}
                                onChangeText={(text) => {this.onChange(text, 'email')}}
                                ref={input => { this.emailInput = input }}
                                onBlur={() => {this.onChange(this.state.Email, 'email')}}
                                placeholder="Email"
                            />
                            { this.state.isEmail &&
                                <Text style={{ color: variable.cDanger, fontFamily: 'monospace', fontSize: 14 }}>{this.state.email_err_msg}</Text>
                            }
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={300} style={{width: width-50, paddingLeft: variable.paddingLeft_15, paddingRight: variable.paddingRight_15, paddingTop: variable.paddingTop_15,}}>
                            <TextInput style={{borderBottomWidth: variable.borderBottomWidth_1, borderBottomColor: '#555CC4', color: '#555CC4', fontFamily: 'monospace'}}
                                placeholder="Password" secureTextEntry={true}
                                ref={input => { this.passwordInput = input }}
                                onChangeText={(text) => {this.onChange(text, 'password')}}
                                onBlur={() => {this.onChange(this.state.Password, 'password')}}
                            />
                            { this.state.isPass &&
                                <Text style={{ color: variable.cDanger, fontFamily: 'monospace', fontSize: 14 }}>{this.state.password_err_msg}</Text>
                            }
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={400} style={{width: width-50, paddingLeft: variable.paddingLeft_15, paddingRight: variable.paddingRight_15, paddingTop: variable.paddingTop_15,}}>
                            <Button block style={{backgroundColor: '#555CC4'}} onPress={this.handleUserLogin}>
                                <Text style={{color: variable.cWhite, fontFamily: 'monospace'}}>Sign In</Text>
                            </Button>
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={500} style={{width: width-50, paddingLeft: variable.paddingLeft_15, paddingRight: variable.paddingRight_15, paddingTop: variable.paddingTop_15,}}>
                            <TouchableOpacity>
                                <Text style={{fontSize: variable.fontMedium, textAlign: variable.alignRight, color: '#555CC4', fontFamily: 'monospace'}}>Forget Password?</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                    <Animatable.View animation="fadeInDown" delay={600} style={{alignItems: variable.alignItemsCenter, marginTop: 40 }}>
                        <Button bordered style={{marginTop: 3, borderColor: '#555CC4'}}>
                            <Icon name="google" size={24} style={{color: '#555CC4', left: 5,}}/> 
                            <Text style={{color: '#555CC4', fontFamily: 'monospace'}}>Sign In with Google</Text>
                        </Button>
                    </Animatable.View>
                    <View style={{alignItems: variable.alignItemsCenter, marginTop: 40, }}>
                        <Animatable.View animation="fadeInDown" delay={700}>                                
                            <Text style={{color: variable.cDark, fontFamily: 'monospace'}}>Don't have an account? </Text>
                                <Button transparent block onPress={()=>this.props.navigation.navigate('Signup')}>
                                    <Text style={{color: variable.cPrimary, fontFamily: 'monospace'}}>Register</Text>
                                </Button>
                        </Animatable.View>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    AsyncStorage.setItem('login', JSON.stringify(state.login.users))
    return {
        login: state.login.users
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        update: (id, FullName, Email, Password, isLogged) => {   
            dispatch(updateLoginDetails(id, FullName, Email, Password, isLogged))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen); 