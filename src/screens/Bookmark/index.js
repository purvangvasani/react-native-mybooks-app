import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Card, CardItem, Grid, Row, Col } from 'native-base';

import {topPickes} from './../../utils/Constants'
import { variable } from '../../Theme/variable';
import theme from '../../Theme/theme';
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';

class BookmarkScreen extends Component {
    renderTopPicks = () => {
        return topPickes.map((item, key) =>
            <Card>
                <CardItem>
                    <Grid>
                        <Row>
                            <Col size={35}>
                                <Animatable.View animation="flipInX" delay={500} key={key} style={variable.marginTop_10}>
                                <View style={{width: 120, height: 180, borderRadius: 20,}}>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('BookDetail', {id: item.id, name: item.name, author: item.author, image: item.image, description: item.description, rating: item.ratings, category: item.category})}
                                        style={{ flex: 1, height: 120, paddingVertical: 20, alignItems: 'center', justifyContent: 'space-around', marginHorizontal: 5,}}>
                                        <ImageComponent imageSource={{uri: item.image}} style={{height: 180, width: 120}} /> 
                                    </TouchableOpacity>
                                </View>
                            </Animatable.View>
                            </Col>
                            <Col size={65}>
                                <TextComponent style={[theme.titleText, {fontSize: variable.h5}]} title={item.name} />
                                <View style={{flexDirection : variable.flexDirection_Row}}>
                                    <TextComponent style={{color: 'grey', marginTop: 5, fontFamily: variable.DefaultFontFamily, fontSize: variable.h6}} title={"By "} />
                                    <TextComponent style={{color: '#555CC4', marginTop: 5, fontFamily: variable.DefaultFontFamily, fontSize: variable.h6}} title={item.author} />
                                </View>
                                <TextComponent style={{color: 'grey', marginTop: 20, fontFamily: variable.DefaultFontFamily, fontSize: variable.h6, fontWeight: variable.fontWeightBold,}} title={"Book Detail:- "} />
                                <TextComponent style={{color: variable.cPrimary, marginTop: variable.marginTop_10-5, fontFamily: variable.DefaultFontFamily, fontSize: variable.h6-1}} title={item.description.substring(0, 80)+' ....'} />

                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('BookDetail', {name: item.name, author: item.author, image: item.image, description: item.description, rating: item.ratings, category: item.category})}>
                                    <TextComponent style={{color: 'grey', textDecorationLine: 'underline', fontFamily: 'monospace', marginTop: 5, fontSize: 13}}
                                        title={"more details"} />
                                    {/* <Text style={{color: 'grey', textDecorationLine: 'underline', fontFamily: 'monospace', marginTop: 5, fontSize: 13}}>more details</Text> */}
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