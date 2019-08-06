import React, { Component } from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';

import {allBooks} from '../../utils/Constants';
import { Card, CardItem, Grid, Row, Col, Container, Content } from 'native-base';
import theme from '../../Theme/theme';
import { variable } from '../../Theme/variable';
import Loader from '../../components/component/Loader';
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';

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
            return <Loader title={"Please Wait.."} />
        }
        else return (
            <Container>
                <Content padder>
                    <View style={styles.textInput}>
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
                                                        <ImageComponent imageSource={{uri: data.item.image}} style={theme.notificationIcon} />
                                                    </Col>
                                                    <Col size={80}>
                                                        <TextComponent style={[theme.titleText, {fontSize: variable.h5}]}
                                                            title={data.item.name} />
                                                        
                                                        <View style={{flexDirection: variable.flexDirection_Row}}>
                                                            <TextComponent style={[theme.text, {marginTop: 0, fontSize: variable.h6-1}]}
                                                                title={"By "+data.item.author} />
                                                        </View>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </CardItem>
                                    </Card>
                                )
                            }}
                            enableEmptySections={true}
                            style={{ marginTop: variable.marginTop_10 }}
                        />
                    </View>
                </Content>
            </Container>
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