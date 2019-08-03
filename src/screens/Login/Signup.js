import React, { Component } from 'react';
import { View , Image, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from "react-native-animatable";
import { Button, Text, Container, Header, Grid, Row, Col } from 'native-base';
import { variable } from '../../Theme/variable';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SignupScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: variable.cWhite}}>
                    <Grid>
                        <Row>
                            <Col size={10}>
                                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                    <Icon name="angle-left" style={{marginTop: 14}} size={26} color={'#555CC4'} />
                                </TouchableOpacity>
                            </Col>
                            <Col size={90} style={{marginTop:-2}}>
                                <Text style={{marginTop: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>Register</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Header>
                <View>
                    <View style={{ alignItems: 'center', marginTop: 10,}}>
                        <Image source={require('../../assets/images/appIcon.png')} style={{width: 200, height: 200,}} />
                    </View>
                    <View style={{alignItems: variable.alignItemsCenter, marginTop: 10 }}>
                        <Animatable.View animation="fadeInDown" delay={200} style={{width: width-50, paddingLeft: variable.paddingLeft_15, paddingRight: variable.paddingRight_15, }}>
                            <TextInput style={{borderBottomWidth: variable.borderBottomWidth_1, borderBottomColor: '#555CC4', color: '#555CC4', fontFamily: 'monospace',}}
                                placeholder="Full Name"
                            />
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={200} style={{width: width-50, paddingLeft: variable.paddingLeft_15, paddingRight: variable.paddingRight_15, paddingTop: variable.paddingTop_15,}}>
                            <TextInput style={{borderBottomWidth: variable.borderBottomWidth_1, fontFamily: 'monospace', borderBottomColor: '#555CC4', color: '#555CC4'}}
                                placeholder="Email"
                            />
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={300} style={{width: width-50, paddingLeft: variable.paddingLeft_15, paddingRight: variable.paddingRight_15, paddingTop: variable.paddingTop_15,}}>
                            <TextInput style={{borderBottomWidth: variable.borderBottomWidth_1, fontFamily: 'monospace', borderBottomColor: '#555CC4', color: '#555CC4'}}
                                placeholder="Password" secureTextEntry={true}
                            />
                        </Animatable.View>
                        <Animatable.View animation="fadeInDown" delay={400} style={{width: width-50, paddingLeft: variable.paddingLeft_15, paddingRight: variable.paddingRight_15, paddingTop: variable.paddingTop_15,}}>
                            <Button block style={{backgroundColor: '#555CC4'}}>
                                <Text style={{color: variable.cWhite, fontFamily: 'monospace'}}>Register</Text>
                            </Button>
                        </Animatable.View>
                    </View>
                    <View style={{alignItems: variable.alignItemsCenter, marginTop: 30, }}>
                        <Animatable.View animation="fadeInDown" delay={700}>                                
                            <Text style={{color: variable.cDark, fontFamily: 'monospace'}}>Already have an account? </Text>
                                <Button transparent block onPress={()=>this.props.navigation.goBack()}><Text style={{color: variable.cPrimary, fontFamily: 'monospace'}} >Log In</Text></Button>
                        </Animatable.View>
                    </View>
                </View>
            </Container>
        )
    }
}