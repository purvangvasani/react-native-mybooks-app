import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Header, Grid, Row, Col } from 'native-base';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather'

export class DrawerHeader extends Component {
    render() {
        return (
            <Header style={{backgroundColor: 'white'}}>
                <Grid>
                    <Row>
                        <Col size={10}>
                            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                                <Icon name="menu" style={{top: 14}} size={26} color={'#555CC4'} />
                            </TouchableOpacity>
                        </Col>
                        <Col size={90}>
                            <Text style={{top: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>
                                {this.props.title}
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </Header>
        )
    }
}

export default withNavigation(DrawerHeader);
