import React, { Component } from 'react'
import { View, TextInput, Picker } from 'react-native'
import { Content, Grid, Row, Col, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {addBookRequestDetails} from '../../actions/RequestBook/requestBook';
import theme from '../../Theme/theme';
import { variable } from '../../Theme/variable';
import TextComponent from '../../components/component/Text';

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: '',
            bookName: '',
            authorName: '',
            description: '',
            category: '',
            rating: '',
        };
    };
    
    onChange = (value, target) => {
        if (target === 'BookName') {
            this.setState({ bookName: value })
        }
        else if (target === 'AuthorName') {
            this.setState({ authorName: value })
        }
        else if (target === 'Description') {
            this.setState({ description: value })
        }
        else if (target === 'Category') {
            this.setState({ category: value })
        }
    }

    handleClear=()=>{
        this.BookInput.clear()
        this.AuthorInput.clear()
        this.DescriptionInput.clear()
        this.CategoryInput.clear()
    }

    handleAddRequestBook=()=>{
        let id = Math.random().toString(36).substr(2, 9);
        this.props.add(id, this.state.bookName, this.state.authorName, this.state.description, this.state.category, this.state.rating)
        Toast.showWithGravity('Request Submitted.', Toast.SHORT, Toast.BOTTOM)        
        this.handleClear()
    }

    render() {
        return (
            <Content padder>
                <View>
                    <Grid>
                        <Row>
                            <Col size={10} style={{marginTop: variable.marginTop_10+15,}}>
                                <Icon name="book" size={variable.h2} color={variable.cPrimary} />
                            </Col>
                            <Col size={90} style={{margin: variable.margin_10,}}>
                                <TextInput style={theme.textInput}
                                    placeholder="Book Name" onChangeText={(text) => {this.onChange(text, 'BookName')}}
                                    ref={input => { this.BookInput = input }} 
                                />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View>
                    <Grid>
                        <Row>
                            <Col size={10} style={{marginTop: variable.marginTop_10+15,}}>
                                <Icon name="user" size={variable.h2} color={variable.cPrimary} />
                            </Col>
                            <Col size={90} style={{margin: variable.margin_10,}}>
                                <TextInput style={theme.textInput}
                                    placeholder="Author Name" ref={input => { this.AuthorInput = input }} 
                                    onChangeText={(text) => {this.onChange(text, 'AuthorName')}}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View>
                    <Grid>
                        <Row>
                            <Col size={10} style={{marginTop: variable.marginTop_10+15,}}>
                                <Icon name="indent" size={variable.h2} color={variable.cPrimary} />
                            </Col>
                            <Col size={90} style={{margin: variable.margin_10,}}>
                                <TextInput style={theme.textInput}
                                    placeholder="Description" ref={input => { this.DescriptionInput = input }} 
                                    onChangeText={(text) => {this.onChange(text, 'Description')}} 
                                    multiline = {true} numberOfLines = {4}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View>
                    <Grid>
                        <Row>
                            <Col size={10} style={{marginTop: variable.marginTop_10+15,}}>
                                <Icon name="th" size={variable.h2} color={variable.cPrimary} />
                            </Col>
                            <Col size={90} style={{margin: variable.margin_10,}}>
                                <TextInput style={theme.textInput}
                                    placeholder="Category" ref={input => { this.CategoryInput = input }} 
                                    onChangeText={(text) => {this.onChange(text, 'Category')}}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View>
                    <Grid>
                        <Row>
                            <Col size={10} style={{marginTop: 15}}>
                                <Icon name="star-half" size={22} color={'#555CC4'} />
                            </Col>
                            <Col size={30}>
                                <TextComponent style={{marginTop: 15, color: '#555CC4', fontFamily: 'monospace',}}
                                    title={"Rating"} />
                            </Col>
                            <Col size={60}>
                                <Picker
                                    selectedValue={this.state.rating}
                                    style={{height: 50, width: 100, color: '#555CC4', fontFamily: 'monospace',}}
                                    onValueChange={(itemValue, itemIndex) => this.setState({rating: itemValue}) }>
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                </Picker>
                            </Col>
                        </Row>
                    </Grid>                    
                </View>
                <View style={{margin: variable.margin_10}}>
                    <Button style={{borderRadius: 30}} block onPress={this.handleAddRequestBook}>
                        <TextComponent style={{fontFamily: variable.DefaultFontFamily, fontSize: 15}}
                            title={"Submit"} />
                    </Button>
                </View>
            </Content>
        )
    }
}

const mapStateToProps = state => {
    return {
        requestBook: state.requestBook.requestBooks
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        add: (id, Bookname, Authorname, Description, Category, Rating) => {   
            dispatch(addBookRequestDetails(id, Bookname, Authorname, Description, Category, Rating))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)