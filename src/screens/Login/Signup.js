import React, { Component } from 'react';
import { View , TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from "react-native-animatable";
import { Button, Container, Header, Grid, Row, Col } from 'native-base';
import { variable } from '../../Theme/variable';
import theme from '../../Theme/theme';
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';

export default class SignupScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: variable.cWhite}}>
                    <Grid>
                        <Row>
                            <Col size={10}>
                                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                    <Icon name="angle-left" style={{marginTop: variable.h6}} size={variable.h1} color={variable.cPrimary} />
                                </TouchableOpacity>
                            </Col>
                            <Col size={90} style={{marginTop:-2}}>
                                <TextComponent style={[theme.titleText, {fontSize: variable.h4, fontWeight: 'normal', marginTop: 17}]} title={"Register"} />
                            </Col>
                        </Row>
                    </Grid>
                </Header>
                <View style={theme.container}>
                    <View style={theme.loginContent}>
                        <ImageComponent imageSource={require('../../assets/images/appIcon.png')}
                            style={{width: 200, height: 200,}} />
                    </View>
                    <View style={theme.loginContent}>
                        <Animatable.View animation="fadeInDown" delay={200} style={theme.loginView}>
                            <TextInput style={theme.textInput}
                                placeholder="Full Name"
                            />
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={200} style={[theme.loginView, {paddingTop: variable.paddingTop_15,}]}>
                            <TextInput style={theme.textInput}
                                placeholder="Email"
                            />
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={300} style={[theme.loginView, {paddingTop: variable.paddingTop_15,}]}>
                            <TextInput style={theme.textInput}
                                placeholder="Password" secureTextEntry={true}
                            />
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={400} style={[theme.loginView, {paddingTop: variable.paddingTop_15,}]}>
                            <Button block style={{backgroundColor: variable.cPrimary}}>
                                <TextComponent style={theme.buttonText} title={"Register"} />
                            </Button>
                        </Animatable.View>
                    </View>
                    <View style={[theme.loginContent, {marginTop: 20}]}>
                        <Animatable.View animation="fadeInDown" delay={700} style={{flexDirection: variable.flexDirection_Row}}>                     
                            <View style={{flexDirection: variable.flexDirection_Row}}>
                                <TextComponent  style={{color: variable.cDark, fontFamily: variable.DefaultFontFamily}} title={"Already have an account? "} />
                                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                    <TextComponent style={theme.linkButtonText} title={"Log In"} />
                                </TouchableOpacity>
                            </View>           
                        </Animatable.View>
                    </View>
                </View>
            </Container>
        )
    }
}