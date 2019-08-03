import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator } from 'react-native';

import {allBooks} from '../../utils/Constants';
import { Card, CardItem, Grid, Row, Col } from 'native-base';
import {  Image } from 'react-native-elements';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, text: '' };
        this.arrayholder = [];
    }

    componentDidMount() {
        setTimeout( () => {
            this.fetchingData();
         });

        this.setState({
            dataSource: allBooks
        },() => { this.arrayholder = allBooks; })
    }

    fetchingData() {
        this.setState({isLoading: false});
    }
    
    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.arrayholder.filter((item)=> {
            //applying filter for the inserted text in search bar
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            //setting the filtered newData on datasource
            //After setting the data it will automatically re-render the view
            dataSource: newData,
            text: text,
        });
    }

    render() {
        if(this.state.isLoading){
            return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                <ActivityIndicator size="small" color="#0000ff" />
                <Text style={{color: '#0000ff', fontSize: 14, fontFamily: 'monospace',}}>Please wait..</Text>
            </View>
        }
        else return (
            <View style={styles.viewStyle}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                    placeholderTextColor="grey"
                />  
                <FlatList
                    data={this.state.dataSource}
                    renderItem={(data, index)=>{
                        return(
                            <Card key={index}>
                                <CardItem>
                                    <Grid>
                                        <Row>
                                            <Col size={20}>
                                                <Image
                                                     style={{height: 50, width: 40}}
                                                    rounded
                                                    source={{ uri: data.item.image}}
                                                />
                                            </Col>
                                            <Col size={80}>
                                                <Text style={{fontFamily: 'monospace', fontSize: 15, color: '#555CC4', fontWeight: 'bold',}}>{data.item.name}</Text>
                                                <Text style={{fontFamily: 'monospace', fontSize: 13, color: '#555CC4'}}>By {data.item.author}</Text>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </CardItem>
                            </Card>
                        )
                    }}
                    enableEmptySections={true}
                    style={{ marginTop: 10 }}
                    // keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 0,
        padding: 16,
    },
    textStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        color: '#555CC4',
        fontFamily: 'monospace',
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});
    
export default SearchScreen;