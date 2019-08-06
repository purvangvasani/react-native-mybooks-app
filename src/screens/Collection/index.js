import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Container, Header, Grid, Row, Col, Content, Card, CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {deleteCollectionDetails} from '../../actions/MyCollection/collection';
import { variable } from '../../Theme/variable';
import theme from '../../Theme/theme';
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';

class MyCollectionScreen extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            myCollection: []
        };
    };
    
    componentDidMount() {
        this.setState({
            myCollection: this.props.collection
        }) 
    }

    handleRemoveFromCollection=(id)=>{
        Alert.alert(
            '',
            'Sure you want to remove the book from your Collections?',
            [
                {text: '', onPress: () => console.log('Ask me later pressed')},
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => {
                    this.props.delete(id)
                    Toast.showWithGravity('Book Removed.', Toast.SHORT, Toast.BOTTOM)
                    this.props.navigation.navigate('Profile')      
                }},
            ],
            {cancelable: false},
          );
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
                                <TextComponent style={theme.text} title={"My Collections"}/>
                            </Col>
                        </Row>
                    </Grid>
                </Header>
                <Content padder>
                    {this.state.myCollection.length == 0 ?
                        <View style={[theme.loaderContainer, {marginTop: 140}]}>
                            <ImageComponent imageSource={require('../../assets/images/emptyCart.png')}
                                style={theme.dashboardBookImage} />
                            <TextComponent style={[theme.titleText, {fontSize: variable.h5}]} title={"Your Collection is Empty."} />
                        </View> :
                        <FlatList
                            data={this.state.myCollection}
                            style={{marginTop: 15, flex: 1}}
                            renderItem={({ item, index }) => (
                                <Card>
                                    <CardItem>
                                        <Grid>
                                            <Row>
                                                <Col size={25}>
                                                    <View key={index} >
                                                        <View style={theme.collectionImage}>
                                                            <View style={theme.collectionImageView}>
                                                                <ImageComponent imageSource={{uri: item.Image}}
                                                                    style={theme.collectionImage} />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </Col>
                                                <Col size={65}>
                                                    <TextComponent style={[theme.titleText, {fontSize: variable.h5}]} title={item.Name} />
                                                    <View style={{flexDirection: variable.flexDirection_Row,}}>
                                                        <TextComponent style={[theme.text, {color: 'grey', marginTop: 5, fontSize: variable.h6-1}]} title={"By "} />
                                                        <TextComponent style={[theme.text, {color: variable.cPrimary, marginTop: 5, fontSize: variable.h6-1}]} title={item.Author} />
                                                    </View>
                                                </Col>
                                                <Col size={5} style={{marginTop: variable.marginTop_10,}}>
                                                    <TouchableOpacity onPress={this.handleRemoveFromCollection.bind(this, item.id)}>
                                                        <Icon name="trash-o" size={variable.h2} color={variable.cDanger} />
                                                    </TouchableOpacity>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </CardItem>
                                </Card>
                            )}
                        />
                    }
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        collection: state.collection.collections
    }
}
const mapDispatchToProps = dispatch => {
    return {
        delete: (id) => {   
            dispatch(deleteCollectionDetails(id))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MyCollectionScreen)