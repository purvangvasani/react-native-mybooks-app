import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Text, Grid, Row, Col, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {updateLoginDetails} from '../../actions/Login/login';

class ProfileScreen extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            logged: false,
            user: [],
        }
    }

    handleMyCollection=()=>{
        this.props.navigation.navigate('MyCollection')
    }

    handleRequestedBook=()=>{
        this.props.navigation.navigate('RequestedBookList')
    }

    handleLogout=()=>{
        for(let i = 0; i< this.props.login.length; i++){
            this.props.update(this.props.login[i].id, this.props.login[i].FullName, this.props.login[i].Email, this.props.login[i].Password, false)
            Toast.showWithGravity('User Logout.', Toast.SHORT, Toast.BOTTOM)        
            this.props.navigation.navigate('Login');
        }
    }

    render() {
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
                        <Image 
                            source={require('../../assets/images/loggedOut.png')}
                            style={{width: 250, height: 250}}
                        />
                        {/* <Text style={{ color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>You're not Logged In..</Text> */}
                        <Button style={{borderRadius: 30}} onPress={()=>this.props.navigation.navigate('Login')}>
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
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: '#555CC4',
                            height: 120,
                            zIndex: 0,
                            alignItems: 'center',
                        }}>

                        </View>
                        <View
                            style={{flex: 1}}>
                            <View style={{
                                height: 150,  //150
                                width: 150,  //150
                                borderRadius: 75,  //75
                                borderColor: 'white',
                                borderWidth: 3,
                                overflow: 'hidden',
                                marginTop: 45,
                                marginLeft: 130
                            }}>
                                <Image source={require('../../assets/images/userIcon.png')} style={{flex: 1, height: null, width: null}}/>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={{fontWeight: 'bold', color: '#555CC4', fontFamily: 'monospace', fontSize: 18, marginLeft: 40}}>
                                    <Icon name="user" size={18} /> {this.state.user[0].FullName}
                                </Text> 
                                <Text style={{fontWeight: 'bold', color: '#555CC4', fontFamily: 'monospace', fontSize: 18, marginLeft: 20}}>|</Text>
                                <Text style={{fontWeight: 'bold', color: '#555CC4', fontFamily: 'monospace', fontSize: 18, marginLeft: 25}}>
                                    <Icon name="envelope" size={18} /> {this.state.user[0].Email}
                                </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', marginTop: 10,}}>
                                <Button block style={{margin: 30, borderRadius: 25}} onPress={this.handleMyCollection}>
                                    <Text>My Collections</Text>
                                </Button>
                                <Button block style={{marginLeft: 30, marginRight: 30, borderRadius: 25}} onPress={this.handleRequestedBook}>
                                    <Text>Requested Book List</Text>
                                </Button>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View>
                                    <Button style={{borderRadius: 30}} onPress={this.handleLogout} bordered>
                                        <Text style={{fontFamily: 'monospace', fontSize: 16}}>Logout</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)