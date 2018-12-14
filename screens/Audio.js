import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import SoundPlayer from 'react-native-sound-player';

export default class MovieList extends Component {

    playSong() {
        try {
          SoundPlayer.playSoundFile('spongelaugh', 'mp3')
        } catch (e) {
          alert('Cannot play the file')
          console.log('cannot play the song file', e)
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.playSong}>
                    <View>
                        <Text>Start</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
