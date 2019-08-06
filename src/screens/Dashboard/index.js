import React, { Component } from 'react'
import { Container, List, ListItem, Content } from 'native-base';
import { View, TouchableOpacity, ScrollView } from 'react-native';
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
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';

export class DashboardScreen extends Component {

    renderTopPicks = () => {
        return topPickes.map((item, key) =>
            <Animatable.View animation="flipInX" delay={500} key={key} style={{marginLeft: variable.marginLeft_10}}>
                <View style={theme.dashboardBookImage}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('BookDetail', {id: item.id, name: item.name, author: item.author, image: item.image, description: item.description, rating: item.ratings, category: item.category, downloadLink: item.downloadLink})}
                        style={[theme.tileDashboard, {borderWidth: 0}]}>
                            <ImageComponent imageSource={{uri: item.image}}
                                style={theme.dashboardBookImage} /> 
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
                            <TextComponent style={theme.dashboardTitle} title={"Categories"} />
                        </ListItem>                    
                        <View style={{flexDirection: variable.flexDirection_Row, paddingHorizontal: 10, marginTop: 10}}>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={300} style={theme.dashboardViewWidth}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Adventure'})}}
                                    style={theme.tileDashboard}>
                                        <TextComponent style={theme.tileText} title={"Adventure"} />
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={200} style={theme.dashboardViewWidth}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Drama'})}}
                                    style={theme.tileDashboard}>
                                        <TextComponent style={theme.tileText} title={"Drama"} />
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={100} style={theme.dashboardViewWidth}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Fiction'})}}
                                    style={theme.tileDashboard}>
                                        <TextComponent style={theme.tileText} title={"Fiction"} />
                                </TouchableOpacity>
                            </Animatable.View>
                        </View> 
                        <View style={{flexDirection: variable.flexDirection_Row, paddingHorizontal: 10, marginTop: 10}}>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={300} style={theme.dashboardViewWidth}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Horror'})}}
                                    style={theme.tileDashboard}>
                                        <TextComponent style={theme.tileText} title={"Horror"} />
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={200} style={theme.dashboardViewWidth}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Non-Fiction'})}}
                                    style={theme.tileDashboard}>
                                        <TextComponent style={theme.tileText} title={"Non-Fiction"} />
                                </TouchableOpacity>
                            </Animatable.View>
                            <Animatable.View animation="fadeInLeftBig" easing="ease-in" delay={100} style={theme.dashboardViewWidth}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CategoryBook', {title: 'Romance'})}}
                                    style={theme.tileDashboard}>
                                        <TextComponent style={theme.tileText} title={"Romance"} />
                                </TouchableOpacity>
                            </Animatable.View>
                        </View> 
                        <ListItem itemDivider>
                            <TextComponent style={theme.dashboardTitle} title={"Top Pickes"} />
                            <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                                <TextComponent style={theme.newBadge} title={"(NEW ARRIVALS)"} />
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
