import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class RandomColor extends Component {
	constructor(props) {
	super(props);
	  this.state = {
	    bgColor: [
	      '#1abc9c',
	      '#16a085',
	      '#f1c40f',
	      '#f39c12',
	      '#2ecc71',
	      '#27ae60',
	      '#3498db',
	      '#2980b9',
	      '#e67e22',
	      '#d35400',
	      '#e74c3c',
	      '#c0392b',
	      '#9b59b6',
	      '#8e44ad',
	      '#34495e',
	      '#2c3e50',
	      '#95a5a6',
	      '#7f8c8d',
	      '#ecf0f1',
	      '#bdc3c7',
	    ],
	    selectedColor: '',
	  };
	}


	componentDidMount() {
	  this._getRandomColor()
	}

	_getRandomColor(){
	  var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
	  this.setState({
	    selectedColor: item,
	  })
	}

	render() {
		return(
			<View style={{backgroundColor: this.state.selectedColor}}>
			 	<Text>Test</Text>
			</View>
		);
	}
}