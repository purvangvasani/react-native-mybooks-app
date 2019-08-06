import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Grid, Row, Col, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {updateLoginDetails} from '../../actions/Login/login';
import theme from '../../Theme/theme';
import { variable } from '../../Theme/variable';
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';

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
                    <View style={[theme.container, {alignItems: 'center', justifyContent: 'center'}]}>
                        <ImageComponent imageSource={require('../../assets/images/loggedOut.png')}
                            style={{width: 250, height: 250}} />
                        <Button style={{borderRadius: 30}} onPress={()=>this.props.navigation.navigate('Login')}>
                            <TextComponent style={{fontSize: variable.h5, fontFamily: variable.DefaultFontFamily,}} title={"Login"} />
                        </Button>
                    </View>
                </Container>
            )
        }
        else{
            return (
                <Container>
                    <Header style={{backgroundColor: variable.cWhite}}>
                        <Grid>
                            <Row>
                                <Col size={10}>
                                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                        <Icon name="angle-left" style={{marginTop: 14}} size={variable.h1} color={variable.cPrimary} />
                                    </TouchableOpacity>
                                </Col>
                                <Col size={90} style={{marginTop:-2}}>
                                    <TextComponent style={theme.text} title={"Profile"} />
                                </Col>
                            </Row>
                        </Grid>
                    </Header>
                    <View style={{flex: 1}}>
                        <View style={theme.profileBackground}>

                        </View>
                        <View
                            style={{flex: 1}}>
                            <View style={theme.profileUserPhoto}>
                                <ImageComponent imageSource={require('../../assets/images/userIcon.png')}
                                    style={{flex: 1, height: null, width: null}} />
                                <Image source={require('../../assets/images/userIcon.png')} style={{flex: 1, height: null, width: null}}/>
                            </View>
                            <View style={{flexDirection: variable.flexDirection_Row,}}>
                                <View style={{flexDirection: variable.flexDirection_Row}}>
                                    <Icon name="user" size={variable.h4} style={[theme.profileDetailText, {marginTop: 5}]} />
                                    <TextComponent style={theme.profileDetailText} title={this.state.user[0].FullName} />
                                </View>
                                <TextComponent style={[theme.profileDetailText, {marginLeft: 20}]} title={"|"} />
                                <View style={{flexDirection: variable.flexDirection_Row}}>
                                    <Icon name="envelope" size={variable.h4} style={[theme.profileDetailText, {marginTop: 5}]} />
                                    <TextComponent style={[theme.profileDetailText, {marginLeft: 25}]} title={this.state.user[0].Email} />
                                </View>
                            </View>
                            <View style={theme.profileButtonView}>
                                <Button block style={theme.profileButton} onPress={this.handleMyCollection}>
                                    <TextComponent title={"My Collections"} />
                                </Button>
                                <Button block style={[theme.profileButton, {marginTop: 10}]} onPress={this.handleRequestedBook}>
                                    <TextComponent title={"Requested Book List"} />
                                </Button>
                            </View>
                            <View style={{alignItems: variable.alignItems_center}}>
                                <View>
                                    <Button style={theme.buttonRoundRadius} onPress={this.handleLogout} bordered>
                                        <TextComponent style={theme.linkButtonText} title={"Logout"} />
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