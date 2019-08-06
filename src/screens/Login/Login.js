import React, { Component } from 'react';
import { View , BackHandler, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import * as Animatable from "react-native-animatable";
import { Button } from 'native-base';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

import {updateLoginDetails} from '../../actions/Login/login';
import { validateEmail, validatePassword } from '../../validate';
import { variable } from '../../Theme/variable';
import theme from '../../Theme/theme';
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';

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
            <View style={theme.container}>
                <View>
                    <View style={theme.loginContent}>
                        <ImageComponent imageSource={require('../../assets/images/appIcon.png')}
                            style={{width: 200, height: 200,}} />
                    </View>
                    <View style={theme.loginContent}>
                        <Animatable.View animation="fadeInDown" delay={200} style={theme.loginView}>
                            <TextInput style={theme.textInput}
                                onChangeText={(text) => {this.onChange(text, 'email')}}
                                ref={input => { this.emailInput = input }}
                                onBlur={() => {this.onChange(this.state.Email, 'email')}}
                                placeholder="Email"
                            />
                            { this.state.isEmail &&
                                <TextComponent style={theme.errorText} title={this.state.email_err_msg} />  
                            }
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={300} style={[theme.loginView, {paddingTop: variable.paddingTop_15,}]}>
                            <TextInput style={theme.textInput}
                                placeholder="Password" secureTextEntry={true}
                                ref={input => { this.passwordInput = input }}
                                onChangeText={(text) => {this.onChange(text, 'password')}}
                                onBlur={() => {this.onChange(this.state.Password, 'password')}}
                            />
                            { this.state.isPass &&
                                <TextComponent style={theme.errorText} title={this.state.password_err_msg} />  
                            }
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={400} style={[theme.loginView, {paddingTop: variable.paddingTop_15,}]}>
                            <Button block style={{backgroundColor: variable.cPrimary}} onPress={this.handleUserLogin}>
                                <TextComponent style={theme.buttonText} title={"Sign In"} />
                            </Button>
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={500} style={[theme.loginView, {paddingTop: variable.paddingTop_15,}]}>
                            <TouchableOpacity>
                                <TextComponent style={theme.linkButtonText} title={"Forget Password?"} />
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                    <Animatable.View animation="fadeInDown" delay={600} style={[theme.loginContent, {marginTop: 30}]}>
                        <Button bordered>
                            <Icon name="google" size={variable.h1} style={theme.iconButtonIconStyle}/> 
                            <TextComponent style={theme.iconButtonText} title={"Sign In with Google"} />
                        </Button>
                    </Animatable.View>
                    <View style={[theme.loginContent, {marginTop: 30}]}>
                        <Animatable.View animation="fadeInDown" delay={700} style={{flexDirection: variable.flexDirection_Row}}>                                
                            <TextComponent style={{color: variable.cDark, fontFamily: variable.DefaultFontFamily}} title={"Don't have an account? "} />
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}>
                                    <TextComponent style={theme.linkButtonText} title={"Register"} />
                                </TouchableOpacity>
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