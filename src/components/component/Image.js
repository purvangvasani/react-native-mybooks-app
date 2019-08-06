import React, { Component } from 'react'
import { Image } from 'react-native-elements';

export default class ImageComponent extends Component {
    render() {
        return (
            <Image
                style={this.props.style}
                rounded
                source={this.props.imageSource}
            />
        )
    }
}
