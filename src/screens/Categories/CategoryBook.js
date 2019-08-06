import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Row, Grid, Col } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

import { adventureCategory, 
        dramaCategory, 
        fictionCategory, 
        horrorCategory, 
        nonfictionCategory, 
        romanceCategory } from '../../utils/Constants';
import { variable } from '../../Theme/variable';
import theme from '../../Theme/theme';
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';

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
                <Header style={{backgroundColor: variable.cWhite}}>
                    <Grid>
                        <Row>
                            <Col size={10}>
                                <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                                    <Icon name="angle-left" style={{marginTop: variable.marginTop_10+4}} size={variable.h1} color={variable.cPrimary} />
                                </TouchableOpacity>
                            </Col>
                            <Col size={90}>
                                <TextComponent style={theme.text} title={this.state.title} />
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
                                <View style={theme.categoryBookView}>
                                    <View style={theme.categoryBookImage}>
                                        <ImageComponent imageSource={{uri: item.image}} style={theme.categoryBookImage} /> 
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