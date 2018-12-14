import React, { Component } from 'react'
import { View, Text, TouchableHighlight, MOdal } from 'react-native'

export default class ModaLog extends Component {

	state = {
	    modalVisible: false,
	  };

	  setModalVisible(visible) {
	    this.setState({modalVisible: visible});
	  }
	
	render() {
		return(
			<View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
		);
	}
}