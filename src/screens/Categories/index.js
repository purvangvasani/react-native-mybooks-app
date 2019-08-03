import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { Container, Content, Header, Grid, Row, Col } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';
import { Image } from 'react-native-elements';

import { category } from '../../utils/Constants';
import theme from '../../Theme/theme';

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
                <Header style={{backgroundColor: 'white'}}>
                    <Grid>
                        <Row>
                            <Col size={10}>
                                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                    <Icon name="angle-left" style={{marginTop: 14}} size={26} color={'#555CC4'} />
                                </TouchableOpacity>
                            </Col>
                            <Col size={90} style={{marginTop:-2}}>
                                <Text style={{marginTop: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>Category List</Text>
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
                                    style={[theme.tileDashboard, {borderColor: '#555CC4', justifyContent: 'center', alignItems: 'center', borderRadius: 5, padding: 10, marginTop: 10 }]}>
                                        <Icon name="book-reader" size={26} color={'white'} />
                                    <View style={{zIndex: 10, marginTop: 3}}>
                                        <Text style={[theme.tileText, {color: 'white'}]}>{item.name}</Text> 
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