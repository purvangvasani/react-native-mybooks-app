import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Card, CardItem, Grid, Row, Col } from 'native-base';

import {topPickes} from './../../utils/Constants'

class BookmarkScreen extends Component {
    renderTopPicks = () => {
        return topPickes.map((item, key) =>
        <Card>
            <CardItem>
                <Grid>
                    <Row>
                        <Col size={35}>
                            <Animatable.View animation="flipInX" delay={500} key={key} style={{marginTop: 10}}>
                                <View style={{width: 120, height: 180, borderRadius: 20,}}>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('BookDetail', {id: item.id, name: item.name, author: item.author, image: item.image, description: item.description, rating: item.ratings, category: item.category})}
                                        style={{ flex: 1, height: 120, paddingVertical: 20, alignItems: 'center', justifyContent: 'space-around', marginHorizontal: 5,}}>
                                        <Image
                                            // resizeMode="contain"
                                            source={{uri: item.image}}
                                            style={{height: 180, width: 120}} /> 
                                    </TouchableOpacity>
                                </View>
                            </Animatable.View>
                        </Col>
                        <Col size={65}>
                            <Text style={{marginTop: 10, fontSize: 16, fontFamily: 'monospace', fontWeight: 'bold', color: '#555CC4'}}>{item.name}</Text>
                            <Text style={{color: 'grey', marginTop: 5, fontFamily: 'monospace', fontSize: 13}}>By <Text style={{color: '#555CC4'}}>{item.author}</Text></Text>
                            <Text style={{color: 'grey', marginTop: 20, fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold',}}>Book Detail:- </Text>
                            <Text style={{color: '#555CC4', marginTop: 5, fontFamily: 'monospace', fontSize: 13}}>{item.description.substring(0, 80)+' ....'}</Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('BookDetail', {name: item.name, author: item.author, image: item.image, description: item.description, rating: item.ratings, category: item.category})}>
                                <Text style={{color: 'grey', textDecorationLine: 'underline', fontFamily: 'monospace', marginTop: 5, fontSize: 13}}>more details</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </CardItem>
        </Card>
        )
    }
    render() {
        return (
            <ScrollView>
                {this.renderTopPicks()}                                
            </ScrollView> 
        )
    }
}

export default BookmarkScreen;