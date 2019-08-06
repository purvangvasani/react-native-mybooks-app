import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Grid, Row, Col } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { variable } from '../../Theme/variable';
import Form from './Form';
import TextComponent from '../../components/component/Text';

class RequestBookScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

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
                                <TextComponent style={{marginTop: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}
                                    title={"Request Book Form"} />
                            </Col>
                        </Row>
                    </Grid>
                </Header>
                <Content>
                    <View style={{flex: 1}}>
                        <Form />
                    </View>
                </Content>
            </Container>
        );
    }
}

export default  RequestBookScreen