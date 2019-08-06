import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Header, Grid, Row, Col } from 'native-base';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather'
import TextComponent from '../component/Text';
import { variable } from '../../Theme/variable';
import theme from '../../Theme/theme';

export class DrawerHeader extends Component {
    render() {
        return (
            <Header style={{backgroundColor: 'white'}}>
                <Grid>
                    <Row>
                        <Col size={10}>
                            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                                <Icon name="menu" style={{marginTop: variable.marginTop_10+4}} size={variable.h1} color={variable.cPrimary} />
                            </TouchableOpacity>
                        </Col>
                        <Col size={90}>
                            <TextComponent style={theme.text}
                                title={this.props.title} />
                        </Col>
                    </Row>
                </Grid>
            </Header>
        )
    }
}

export default withNavigation(DrawerHeader);
