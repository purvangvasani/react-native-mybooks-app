import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Header, Grid, Row, Col, Button } from 'native-base';
import Toast from 'react-native-simple-toast';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import Carousel from 'react-native-banner-carousel';
import RNFetchBlob from 'rn-fetch-blob'

import {addCollectionDetails, deleteCollectionDetails} from '../../actions/MyCollection/collection';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "https://www.nic.lat/wp-content/uploads/2019/01/bigstock-Stack-Of-Books-70033240.jpg",
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
            downloadLink: this.props.navigation.getParam('downloadLink'),
            isFavourite: false
        };
    };
    
    renderPage(image, index) {
        return (
            <Animatable.View key={index} animation="zoomIn" delay={200} style={{flex:1, alignItems: 'center',}}>
                <Image style={{ width: 250, height: 220 }} source={{ uri: image }} />
            </Animatable.View>
        );
    }

    componentDidMount() {
        if(this.props.collection.length == 0){
            this.setState({isFavourite: false})
        }
        else if(this.props.collection.length != 0){
            for(let i=0; i<this.props.collection.length; i++){
                if(this.state.id === this.props.collection[i].id){
                    if(this.props.collection[i].isFavourite){
                        this.setState({isFavourite: this.props.collection[i].isFavourite})
                    }
                    else{
                        this.setState({isFavourite: this.props.collection[i].isFavourite})
                    }
                }
            }
        }
    }

    handleBookmark=()=>{
        this.setState({isFavourite: !this.state.isFavourite})
        if(this.state.isFavourite){
            this.props.delete(this.state.id);
        }
        else{
            this.props.add(this.state.id, this.state.name, this.state.author, this.state.description, this.state.ratings, this.state.category, this.state.image, !this.state.isFavourite);
        }
        this.handleToast();
    }

    handleToast=()=>{
        if(!this.state.isFavourite){
            Toast.showWithGravity('Added to Bookmark.', Toast.SHORT, Toast.BOTTOM)        
        }else if(this.state.isFavourite){
            Toast.showWithGravity('Removed from Bookmark.', Toast.SHORT, Toast.BOTTOM)        
        }
    }

    handleDownloadFile=()=>{
        let downloadLink = this.state.downloadLink
        let name = this.state.name
        Toast.showWithGravity('Downloading .....', Toast.Long, Toast.BOTTOM)        
        RNFetchBlob
        .config({
            addAndroidDownloads : {
                useDownloadManager : true, // <-- this is the only thing required
                // Optional, override notification setting (default to true)
                notification : true,
                title : name,
                description : 'An APK that will be installed',
                // mime : 'application/vnd.android.package-archive',
                // mediaScannable : true,
                // Optional, but recommended since android DownloadManager will fail when
                // the url does not contains a file extension, by default the mime type will be text/plain
                // mime : 'text/plain',
                description : ''
            }
        })
        .fetch('GET', downloadLink)
        .then((resp) => {
          // the path of downloaded file
          resp.path()
        })
        .catch(err => {
            console.log("Download failed!--", err);
        });
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
                                <Col size={90}>
                                    <Animatable.View animation="zoomIn" delay={200}>
                                        <Text style={{fontFamily: 'monospace', fontSize: 14, textAlign: 'left'}}>By <Text style={{fontWeight: 'bold', color: '#555CC4'}}>{this.state.author}</Text></Text>
                                    </Animatable.View>
                                </Col>
                                <Col size={10}>
                                        <TouchableOpacity onPress={this.handleBookmark}>
                                            {this.state.isFavourite ? 
                                                <Animatable.View animation="zoomIn">
                                                    <Icon name="heart" size={22} color={'red'} />
                                                </Animatable.View>
                                            :   <Icon name="heart-o" size={22} color={'#555CC4'} />}
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
                    <Grid>
                        <Row>
                            <Col size={30}>
                                <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={{flexDirection: 'row', marginTop: 10, justifyContent: 'flex-start'}}>
                                    <Button bordered style={{flexDirection: 'row'}} onPress={this.handleDownloadFile}>
                                        <Text style={{fontSize: 16, margin: 10, fontFamily: 'monospace', textAlign: 'justify', color: '#555CC4'}}>Download</Text>
                                        <Image source={require('../../assets/images/download.png')} style={{width: 40, height: 40, margin: 10,}} />                        
                                    </Button>
                                </Animatable.View>
                            </Col>
                            <Col size={20}></Col>
                            <Col size={50}>
                                <Animatable.View animation="zoomIn" delay={200} style={{flexDirection: 'row', marginTop: 20, justifyContent: 'flex-end', marginRight: 20}}>
                                    <Text style={{fontSize: 16, fontFamily: 'monospace', textAlign: 'justify', color: '#555CC4'}}>Available on: </Text>
                                    <Image source={require('../../assets/images/amazon.jpg')} style={{width: 30, height: 30}} />
                                    <Image source={require('../../assets/images/flipkart.png')} style={{marginLeft: 5, width: 30, height: 30}} />
                                </Animatable.View>
                            </Col>
                        </Row>
                    </Grid>
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
        add: (id, Name, Author, Description, Rating, Category, Image, isFavourite) => {   
            dispatch(addCollectionDetails(id, Name, Author, Description, Rating, Category, Image, isFavourite))
        },
        delete: (id) => {   
            dispatch(deleteCollectionDetails(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailScreen);