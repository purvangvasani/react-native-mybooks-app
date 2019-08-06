import React, { Component } from 'react';
import {connect} from 'react-redux';

import {updateLoginDetails} from '../../actions/Login/login';
import Loader from '../../components/component/Loader';

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
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoaderScreen); 