import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Text, Container, Header, Grid, Row, Col, Content, Card, CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {deleteCollectionDetails} from '../../actions/MyCollection/collection';
import { Image } from 'react-native-elements';

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
                <Header style={{backgroundColor: 'white'}}>
                    <Grid>
                        <Row>
                            <Col size={10}>
                                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                    <Icon name="angle-left" style={{marginTop: 14}} size={26} color={'#555CC4'} />
                                </TouchableOpacity>
                            </Col>
                            <Col size={90} style={{marginTop:-2}}>
                                <Text style={{marginTop: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>My Collections</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Header>
                <Content padder>
                    {this.state.myCollection.length == 0 ?
                        <View style={{flex: 1, alignItems: 'center', marginTop: 140}}>
                            <Image 
                                source={require('../../assets/images/emptyCart.png')}
                                style={{width: 150, height: 150}}
                                />
                            <Text style={{marginTop: 10, fontSize: 16, fontFamily: 'monospace', fontWeight: 'bold', color: '#555CC4'}}>Your Collection is Empty.</Text></View> :
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
                                                        <View style={{width: 80, height: 120}}>
                                                            <View 
                                                                style={{ flex: 1, height: 120, alignItems: 'center', justifyContent: 'space-around',}}>
                                                                <Image
                                                                    // resizeMode="contain"
                                                                    source={{uri: item.Image}}
                                                                    style={{height: 120, width: 80}} /> 
                                                            </View>
                                                        </View>
                                                    </View>
                                                </Col>
                                                <Col size={65}>
                                                    <Text style={{marginTop: 10, fontSize: 16, fontFamily: 'monospace', fontWeight: 'bold', color: '#555CC4'}}>{item.Name}</Text>
                                                    <Text style={{color: 'grey', marginTop: 5, fontFamily: 'monospace', fontSize: 13}}>By <Text style={{color: '#555CC4'}}>{item.Author}</Text></Text>
                                                    {/* <Text style={{color: '#555CC4', marginTop: 5, fontFamily: 'monospace', fontSize: 13}}>{item.description.substring(0, 80)+' ....'}</Text>  */}
                                                </Col>
                                                <Col size={5} style={{marginTop: 10,}}>
                                                    <TouchableOpacity onPress={this.handleRemoveFromCollection.bind(this, item.id)}>
                                                        <Icon name="trash-o" size={22} color={'#555CC4'} />
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
    // console.log('====================================');
    // console.log(state.collection.collections);
    // console.log('====================================');
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