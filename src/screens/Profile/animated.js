import React, { Component } from 'react';
import { View, Animated, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Text, Grid, Row, Col, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {updateLoginDetails} from '../../actions/Login/login';

HEADER_MAX_HEIGHT = 220
HEADER_MIN_HEIGHT = 180
PROFILE_IMAGE_MAX_HEIGHT = 150
PROFILE_IMAGE_MIN_HEIGHT = 150

const SCREEN_HEIGHT = Dimensions.get('window').height;  //683.4285714285714
const SCREEN_WIDTH = Dimensions.get('window').width;  //411.42857142857144

class animated extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            logged: false,
            user: [],
            scrollY : new Animated.Value(0)
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
        console.log('====================================');
        console.log('SCREEN_HEIGHT:-', SCREEN_HEIGHT,'SCREEN_WIDTH:-', SCREEN_WIDTH);
        console.log('====================================');
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],  //40
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],  //220,180
            extrapolate: 'clamp'
        })

        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],  //40
            outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT], //150,150
            extrapolate: 'clamp'
        })

        const profileImageMarginTop = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],  //40
            outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/2), HEADER_MAX_HEIGHT ],  //145,220 
            extrapolate: 'clamp'
        })

        const headerZIndex = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT], //40
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        const headerTitleBottom = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26],
            outputRange: [-20, -20, -20, 0],
            extrapolate: 'clamp'
        })

        const animatedTitleHeight = this.state.scrollY.interpolate({
            inputRange: [0, SCREEN_HEIGHT-600],
            outputRange: [0,1],
            extrapolate: "clamp"
        })

        const animatedButtonTitleHeight = this.state.scrollY.interpolate({
            inputRange: [0, SCREEN_HEIGHT-600],
            outputRange: [0,1],
            extrapolate: "clamp"
        })
        for(let i=0; i<this.props.login.length; i++){
            if(!this.props.login[i].isLogged){
                this.state.logged = false;
            }else{
                this.state.logged = true;
                this.state.user = [this.props.login[i]]
            }
        }
        if(!this.state.logged){
            return (
                <Container>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{marginTop: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>You're not Logged In..</Text>
                        <Button style={{borderRadius: 30, marginTop: 15}} onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={{fontSize: 17, fontFamily: 'monospace',}}>Login</Text>
                        </Button>
                    </View>
                </Container>
            )
        }
        else{
            return (
                <Container>
                    <Header style={{backgroundColor: 'white'}}>
                        <Grid>
                            <Row>
                                <Col size={10}>
                                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                        <Icon name="angle-left" style={{marginTop: 14}} size={26} color={'#555CC4'} />
                                    </TouchableOpacity>
                                </Col>
                                <Col size={90} style={{marginTop:-2}}>
                                    <Text style={{marginTop: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>Profile</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Header>
                    <View style={{flex: 1}}>
                        <Animated.View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: '#555CC4',
                            height: headerHeight,
                            zIndex: headerZIndex,
                            alignItems: 'center',
                        }}>

                            <Animated.View style={{position: 'absolute', bottom: headerTitleBottom}}>
                                <Animated.Text style={{opacity: animatedTitleHeight, fontFamily: 'monospace', color: 'white', fontSize: 20, fontWeight: 'bold'}}>{this.state.user[0].FullName}</Animated.Text>
                            </Animated.View>
                        </Animated.View>
                        <ScrollView
                            style={{flex: 1}}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {y: this.state.scrollY} } }]
                            )}
                        >
                            <Animated.View style={{
                                height: profileImageHeight,  //150
                                width: profileImageHeight,  //150
                                borderRadius: PROFILE_IMAGE_MAX_HEIGHT/2,  //75
                                borderColor: 'white',
                                borderWidth: 3,
                                overflow: 'hidden',
                                marginTop: profileImageMarginTop,
                                marginLeft: SCREEN_WIDTH/3-5
                            }}>
                                <Image source={require('../../assets/images/userIcon.png')} style={{flex: 1, height: null, width: null}}/>
                            </Animated.View>
                            <View>
                                <Text style={{fontWeight: 'bold', color: '#555CC4', fontFamily: 'monospace', fontSize: 22, marginLeft: SCREEN_WIDTH/3-20}}>
                                    {this.state.user[0].FullName}
                                </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', marginTop: 30,}}>
                                <Button block style={{margin: 30, borderRadius: 25}}>
                                    <Text>My Collections</Text>
                                </Button>
                            </View>
                            <View style={{height:400}}>
                                <View style={{alignItems: 'center', marginTop: 250}}>
                                    
                                    <Animated.View style={{opacity: animatedButtonTitleHeight, }}>
                                        <Button style={{borderRadius: 30}} onPress={this.handleLogout}>
                                            <Text style={{fontFamily: 'monospace', fontSize: 16}}>Logout</Text>
                                        </Button>
                                    </Animated.View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Container>
            );
        }
    }
}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(animated)