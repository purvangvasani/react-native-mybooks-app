import React, { Component } from 'react'
import { Container, List, ListItem, Text, Content, Grid, Row, Col } from 'native-base';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DrawerHeader from '../../components/Headers/DrawerHeader';
import {topPickes} from './../../utils/Constants'
import theme from '../../Theme/theme';
import { variable } from '../../Theme/variable';
import SearchScreen from '../Search';
import BookmarkScreen from '../Bookmark';
import ProfileScreen from '../Profile';
import MyCollectionScreen from '../Collection';

export class DashboardScreen extends Component {

    renderTopPicks = () => {
        return topPickes.map((item, key) =>
            <Animatable.View animation="flipInX" delay={500} key={key} style={{marginLeft: variable.marginLeft_10}}>
                <View style={{width: 120, height: 180,}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('BookDetail', {id: item.id, name: item.name, author: item.author, image: item.image, description: item.description, rating: item.ratings, category: item.category})}
                        style={[theme.tileDashboard, {borderWidth: 0}]}>
                        <Image
                            // resizeMode="contain"
                            source={{uri: item.image}}
                            style={{height: 180, width: 120}} /> 
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        )
    }

    render() {
        return (
            <Container>
                <DrawerHeader title={'Dashboard'} />
                <Content>
                    <List>
                        <ListItem itemDivider>
                          <Text style={{fontFamily: 'monospace', fontSize: 14}}>Categories</Text>
                        </ListItem>                    
                        <View style={{flexDirection: variable.flexDirection_Row, paddingHorizontal: 10, marginTop: 10}}>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={300} style={{width: 131}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Adventure'})}}
                                    style={[theme.tileDashboard ,{borderColor: '#829BF8'}]}>
                                    <Text style={theme.tileText}>Adventure</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={200} style={{width: 131}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Drama'})}}
                                    style={[theme.tileDashboard ,{borderColor: '#829BF8'}]}>
                                    <Text style={theme.tileText}>Drama</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={100} style={{width: 131}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Fiction'})}}
                                    style={[theme.tileDashboard ,{borderColor: '#829BF8'}]}>
                                    <Text style={theme.tileText}>Fiction</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </View> 
                        <View style={{flexDirection: variable.flexDirection_Row, paddingHorizontal: 10, marginTop: 10}}>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={300} style={{width: 131}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Horror'})}}
                                    style={[theme.tileDashboard ,{borderColor: '#829BF8'}]}>
                                    <Text style={theme.tileText}>Horror</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={200} style={{width: 131}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Non-Fiction'})}}
                                    style={[theme.tileDashboard ,{borderColor: '#829BF8'}]}>
                                    <Text style={theme.tileText}>Non-Fiction</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={100} style={{width: 131}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Romance'})}}
                                    style={[theme.tileDashboard ,{borderColor: '#829BF8'}]}>
                                    <Text style={theme.tileText}>Romance</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </View> 
                        <ListItem itemDivider>
                            <Text style={{fontFamily: 'monospace', fontSize: 14}}>Top Pickes</Text>
                            <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                                <Text style={{fontFamily: 'monospace', fontSize: 14, color: 'green', marginLeft: 10}}>(NEW ARRIVALS)</Text>
                            </Animatable.View>
                        </ListItem>  
                        <View style={{ flexDirection: variable.flexDirection_Row }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                {this.renderTopPicks()}                                
                            </ScrollView> 
                        </View>
                    </List>
                </Content>
            </Container>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
    Dashboard: DashboardScreen,
    Search: SearchScreen,
    Bookmark: BookmarkScreen,
    // Collection: MyCollectionScreen
    Profile: ProfileScreen
},{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Bookmark') {
                iconName = `ios-bookmark`;
            } else if (routeName === 'Dashboard') {
                iconName = 'ios-home';
            } else if (routeName === 'Search') {
                iconName = 'ios-search';
            } else if (routeName === 'Profile') {
                iconName = 'ios-person';
            }
            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#555CC4',
        inactiveTintColor: 'grey',
        labelStyle :{
            fontSize: 13,
            fontFamily: 'monospace',
        }
    },
});

export default createAppContainer(TabNavigator);
