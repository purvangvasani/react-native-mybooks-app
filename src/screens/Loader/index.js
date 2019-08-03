import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';

import {updateLoginDetails} from '../../actions/Login/login';
class LoaderScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('drawer');
        },1000);
    }
    

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                <ActivityIndicator size="small" color="#0000ff" />
                <Text style={{color: '#0000ff', fontSize: 14, fontFamily: 'monospace',}}>Loading..</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.login.users
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        update: (id, FullName, Email, Password, isLogged) => {   
            dispatch(updateLoginDetails(id, FullName, Email, Password, isLogged))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoaderScreen); 