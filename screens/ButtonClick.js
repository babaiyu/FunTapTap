import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class ButtonClick extends Component {

	constructor(props) {
		super(props)
		this.state= {
			countScore: 0
		}
	}

	update=()=> {
		this.setState({countScore: this.state.countScore + 1})
	}

	render() {
		return(
			<View>
				<TouchableOpacity onPress={this.update}><Text>Click to Count number</Text></TouchableOpacity>
				<Text>{this.state.countScore}</Text>
			</View>
		);
	}
}