import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Container, Header, Grid, Row, Col, Content, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import {connect} from 'react-redux';
import ImageComponent from '../../components/component/Image';
import TextComponent from '../../components/component/Text';
import { variable } from '../../Theme/variable';

class RequestedBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestedBookList: []
        };
    }

    componentDidMount() {
        this.setState({
            requestedBookList: this.props.requestBook
        }) 
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
                                <TextComponent style={{marginTop: 17, color: '#555CC4', fontSize: 17, fontFamily: 'monospace',}}
                                    title={"Requested Book List"} />
                            </Col>
                        </Row>
                    </Grid>
                </Header>
                <Content padder>
                    {this.state.requestedBookList.length == 0 ?
                        <View style={{flex: 1, alignItems: 'center', marginTop: 140}}>
                            <ImageComponent imageSource={require('../../assets/images/emptyCart.png')}
                                style={{width: 150, height: 150}} />
                            <TextComponent style={{marginTop: 10, fontSize: 16, fontFamily: 'monospace', fontWeight: 'bold', color: '#555CC4'}}
                                title={"You have not Requested any Books."} />
                        </View> :
                            <FlatList
                                data={this.state.requestedBookList}
                                style={{marginTop: 15, flex: 1}}
                                renderItem={({ item, index }) => (
                                    <Card> 
                                        <CardItem>
                                            <Grid>
                                                <Row>
                                                    <Col size={20}>
                                                        <View key={index} >
                                                            <View style={{marginTop: 10, }}>
                                                                <View 
                                                                    style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around',}}>
                                                                    <Avatar rounded icon={{ name: 'book' }} size={45} />
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </Col>
                                                    <Col size={85}>
                                                        <Grid>
                                                            <Row>
                                                                <Col size={70}>
                                                                    <TextComponent style={{marginTop: 10, fontSize: 16, fontFamily: 'monospace', fontWeight: 'bold', color: '#555CC4'}}
                                                                        title={item.Bookname} />
                                                                </Col>
                                                                <Col size={30}>
                                                                    <View style={{marginTop: 10, alignItems: 'center', borderColor: '#555CC4', backgroundColor: '#555CC4', borderWidth: 1, borderRadius: 15,}}>
                                                                        <TextComponent style={{ fontSize: 12, fontFamily: 'monospace', fontWeight: 'bold', color: 'white'}}
                                                                            title={item.Category} />
                                                                    </View>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                        <View style={{flexDirection: variable.flexDirection_Row,}}>
                                                            <TextComponent style={{color: 'grey', marginTop: 5, fontFamily: 'monospace', fontSize: 13}}
                                                                title={"By "} />
                                                            <TextComponent style={{color: '#555CC4', marginTop: 5, fontFamily: 'monospace', fontSize: 13}}
                                                                title={item.Authorname} />
                                                        </View>
                                                    </Col>
                                                    {/* <Col size={5} style={{marginTop: 10,}}>
                                                        <TouchableOpacity onPress={this.handleRemoveFromCollection.bind(this, item.id)}>
                                                            <Icon name="trash-o" size={22} color={'#555CC4'} />
                                                        </TouchableOpacity>
                                                    </Col> */}
                                                </Row>
                                            </Grid>
                                        </CardItem>
                                    </Card>
                                )}
                            /> 
                        }
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        requestBook: state.requestBook.requestBooks
    }
}

export default connect(mapStateToProps)(RequestedBookList)