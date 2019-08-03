import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Header, Grid, Row, Col } from 'native-base';
import Toast from 'react-native-simple-toast';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import Carousel from 'react-native-banner-carousel';

import {addCollectionDetails, deleteCollectionDetails} from '../../actions/MyCollection/collection';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "https://www.nic.lat/wp-content/uploads/2019/01/bigstock-Stack-Of-Books-70033240.jpg",
    "data:image/jpeg;base64,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",
    "https://www.mountaineers.org/books/images/f19-stack-hompage.png/@@images/92876cfb-5eba-425f-8f90-8bc6e735f640.png"
];

class BookDetailScreen extends Component {
    constructor(props) {
      super(props)
    
      
        this.state = {
            id: this.props.navigation.getParam('id'),
            name: this.props.navigation.getParam('name'),
            author: this.props.navigation.getParam('author'),
            image: this.props.navigation.getParam('image'),
            description: this.props.navigation.getParam('description'),
            ratings: this.props.navigation.getParam('rating'),
            category: this.props.navigation.getParam('category'),
            isBookMarked: false
        };
    };
    
    renderPage(image, index) {
        return (
            <Animatable.View key={index} animation="zoomIn" delay={200} style={{flex:1, alignItems: 'center',}}>
                <Image style={{ width: 250, height: 220 }} source={{ uri: image }} />
            </Animatable.View>
        );
    }

    handleBookmark=()=>{
        this.setState({isBookMarked: !this.state.isBookMarked})
        if(this.state.isBookMarked){
            this.props.delete(this.state.id);
        }
        else{
            this.props.add(this.state.id, this.state.name, this.state.author, this.state.description, this.state.ratings, this.state.category, this.state.image);
        }
        this.handleToast();
    }

    handleToast=()=>{
        if(!this.state.isBookMarked){
            Toast.showWithGravity('Added to Bookmark.', Toast.SHORT, Toast.BOTTOM)        
        }else if(this.state.isBookMarked){
            Toast.showWithGravity('Removed from Bookmark.', Toast.SHORT, Toast.BOTTOM)        
        }
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
                                <Text style={{marginTop: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}>Book Detail</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Header>
                <Content padder>
                    <Grid>
                        <Row>
                            <Col size={70}>
                                <Animatable.View animation="zoomIn" delay={200}>
                                    <Text style={{marginTop: 4, fontFamily: 'monospace', fontSize: 22, fontWeight: 'bold', color: '#555CC4'}}>{this.state.name}</Text>
                                </Animatable.View>
                            </Col>
                            <Col size={30}>
                                <Animatable.View animation="zoomIn" delay={200}>
                                    <Text style={{marginTop: 8, fontFamily: 'monospace', fontSize: 14, borderRadius: 10, color: '#555CC4', textAlign :'center', borderColor: '#555CC4', borderWidth: 1}}>{this.state.category}</Text>
                                </Animatable.View>
                            </Col>
                        </Row>
                    </Grid>
                    <View>
                        <Grid style={{marginTop: 5}}>
                            <Row>
                                <Col size={95}>
                                    <Animatable.View animation="zoomIn" delay={200}>
                                        <Text style={{fontFamily: 'monospace', fontSize: 14, textAlign: 'left'}}>By <Text style={{fontWeight: 'bold', color: '#555CC4'}}>{this.state.author}</Text></Text>
                                    </Animatable.View>
                                </Col>
                                <Col size={5}>
                                        <TouchableOpacity onPress={this.handleBookmark}>
                                            {this.state.isBookMarked ? 
                                                <Animatable.View animation="zoomIn">
                                                    <Icon name="bookmark" size={22} color={'#555CC4'} />
                                                </Animatable.View>
                                            :   <Icon name="bookmark-o" size={22} color={'#555CC4'} />}
                                        </TouchableOpacity>
                                </Col>
                            </Row>
                        </Grid>
                    </View>
                    {/* <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginTop: 5}}></View> */}
                    <Carousel
                        autoplay
                        autoplayTimeout={2000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                    >
                        {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                    {/* <Animatable.View  animation="zoomIn" delay={500} style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                        <Image
                            source={{ uri: this.state.image }}
                            style={{ width: 150, height: 220 }}
                        />
                    </Animatable.View> */}
                    <Animatable.View animation="zoomIn" delay={200}>
                        <Text style={{marginTop: 4, color: '#555CC4', fontFamily: 'monospace', fontSize: 18, fontWeight: 'bold'}}>
                            {this.state.ratings}
                            <Image source={require('../../assets/images/ratings.png')} style={{width: 100, height: 20}}/>
                        </Text>
                        <Text style={{marginTop: 4, fontFamily: 'monospace', fontSize: 14, color: '#555CC4'}}>895 Ratings on Google Play</Text>
                    </Animatable.View>
                    <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginTop: 5}}></View>
                    <Animatable.View animation="zoomIn" delay={200}>
                        <Text style={{marginTop: 4, fontSize: 16, fontFamily: 'monospace', textAlign: 'justify', color: '#555CC4'}}>{this.state.description}</Text>
                    </Animatable.View>
                    <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginTop: 5}}></View>
                    <Animatable.View animation="zoomIn" delay={200} style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20}}>
                        <Text style={{marginTop: 10, fontSize: 16, fontFamily: 'monospace', textAlign: 'justify', color: '#555CC4'}}>Available on: </Text>
                        <Image source={require('../../assets/images/amazon.jpg')} style={{marginTop: 10, width: 30, height: 30}} />
                        <Image source={require('../../assets/images/flipkart.png')} style={{marginTop: 10, marginLeft: 5, width: 30, height: 30}} />
                    </Animatable.View>
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
        add: (id, Name, Author, Description, Rating, Category, Image) => {   
            dispatch(addCollectionDetails(id, Name, Author, Description, Rating, Category, Image))
        },
        delete: (id) => {   
            dispatch(deleteCollectionDetails(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailScreen);