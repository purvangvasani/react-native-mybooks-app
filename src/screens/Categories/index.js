import React, { Component } from 'react'
import { View, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content, Header, Grid, Row, Col } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

import { category } from '../../utils/Constants';
import theme from '../../Theme/theme';
import { variable } from '../../Theme/variable';
import TextComponent from '../../components/component/Text';

class CategoriesScreen extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            categoryArray: []
        }
    }

    componentDidMount() {
        this.setState({ categoryArray: category })      
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: variable.cWhite}}>
                    <Grid>
                        <Row>
                            <Col size={10}>
                                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                    <Icon name="angle-left" style={{marginTop: variable.marginTop_10+4}} size={variable.h1} color={variable.cPrimary} />
                                </TouchableOpacity>
                            </Col>
                            <Col size={90} style={{marginTop:-2}}>
                                <TextComponent style={theme.text} title={"Category List"} />
                            </Col>
                        </Row>
                    </Grid>
                </Header>
                <Content>
                    <FlatGrid
                        itemDimension={130} // for Mobile screen
                        // itemDimension={200} // for Tablet screen
                        items={this.state.categoryArray}
                        style={{marginTop: 15, flex: 1}}
                        // staticDimension={300}
                        // fixed
                        // spacing={20}
                        renderItem={({ item, index }) => (
                            <View>
                                <ImageBackground 
                                    source={require('./../../assets/images/bgCategory.jpeg')}
                                    style={[theme.tileDashboard, {borderColor: variable.cPrimary, justifyContent: variable.alignCenter, alignItems: variable.alignCenter, borderRadius: 5, padding: 10, marginTop: 10 }]}>
                                        <Icon name="book-reader" size={variable.h1} color={variable.cWhite} />
                                    <View style={{zIndex: 10, marginTop: 3}}>
                                        <TextComponent style={[theme.tileText, {color: variable.cWhite}]} title={item.name} />
                                    </View>
                                </ImageBackground>
                            </View>
                        )}
                    />
                </Content>
            </Container>
        )
    }
}

export default CategoriesScreen;