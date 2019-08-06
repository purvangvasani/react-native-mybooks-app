import React, { Component } from 'react'
import {Text} from 'native-base'

export default class TextComponent extends Component {
    render() {
        return (
            <Text style={this.props.style}>
                {this.props.title}
            </Text>
        )
    }
}
