import React, { Component } from 'react';
import {connect} from 'react-redux';

import {updateLoginDetails, addLoginDetails} from '../../actions/Login/login';
import Loader from '../../components/component/Loader';
import AsyncStorage from '@react-native-community/async-storage';

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

        this.authentication();
    }

    authentication=()=>{
        AsyncStorage.getItem('loginData').then((value) => {
            if(JSON.parse(value).length != 0){
                for(let i = 0; i < JSON.parse(value).length; i++){
                    if(JSON.parse(value)[i].isLogged == true){
                        this.props.update(JSON.parse(value)[i].id, JSON.parse(value)[i].FullName, JSON.parse(value)[i].Email, JSON.parse(value)[i].Password, JSON.parse(value)[i].isLogged)
                    }
                    else{
                        this.props.add(JSON.parse(value)[i].id, JSON.parse(value)[i].FullName, JSON.parse(value)[i].Email, JSON.parse(value)[i].Password, JSON.parse(value)[i].isLogged)
                    }
                }
            }
        })
    }
    

    render() {
        return (
            <Loader title={"Loading.."}/>
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
        },
        add: (id, FullName, Email, Password, isLogged) => {   
            dispatch(addLoginDetails(id, FullName, Email, Password, isLogged))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoaderScreen); 