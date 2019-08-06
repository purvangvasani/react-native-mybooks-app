import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import theme from '../../Theme/theme';

export default class Loader extends Component {
    render() {
        return (
            <View style={theme.loaderContainer}>
                <ActivityIndicator size="small" color="#0000ff" />
                <Text style={theme.loaderText}>{this.props.title}</Text>
            </View>
        )
    }
}
