import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Left, Body, Row, Grid, Col } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

import { adventureCategory, 
        dramaCategory, 
        fictionCategory, 
        horrorCategory, 
        nonfictionCategory, 
        romanceCategory } from '../../utils/Constants';
import { Image } from 'react-native-elements';

class CategoryBook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: '',
            categoryArray: []
        }
    }

    componentDidMount() {
        const param = this.props.navigation.getParam('title');
        switch(param){
            case 'Adventure':
                return this.setState({title: param, categoryArray: adventureCategory});
            case 'Drama':
                return this.setState({title: param, categoryArray: dramaCategory});
            case 'Fiction':
                return this.setState({title: param, categoryArray: fictionCategory});
            case 'Horror':
                return this.setState({title: param, categoryArray: horrorCategory});
            case 'Non-Fiction':
                return this.setState({title: param, categoryArray: nonfictionCategory});
            case 'Romance':
                return this.setState({title: param, categoryArray: romanceCategory});
        }
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'white'}}>
                    <Grid>
                        <Row>
                            <Col size={10}>
                                <TouchableOpacity style={{width: 20}} onPress={()=> this.props.navigation.goBack()}>
                                    <Icon name="angle-left" style={{marginTop: 14}} size={26} color={'#555CC4'} />
                                </TouchableOpacity>
                            </Col>
                            <Col size={90}>
                                <Text style={{marginTop: 16, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>
                                    {this.state.title}
                                </Text>
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
                                <View style={{ justifyContent: 'flex-end', alignItems: 'center', borderRadius: 5, padding: 10, marginTop: 10, height: 250, }}>
                                    <View style={{width: 180, height: 250}}>
                                        <Image
                                            // resizeMode="contain"
                                            source={{uri: item.image}}
                                            style={{height: 250, width: 180}} /> 
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </Content>
            </Container>
        )
    }
}

export default CategoryBook;