/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project 
import { StyleSheet, View, Text } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it

import SoundPlayer from 'react-native-sound-player';

export default class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('Home')
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },
});
 
const slides = [
  {
    key: 's1',
    text: 'Have Fun TapTap! Not FapFap',
    text: 'Click the TapTap whatever you want',
    title: 'Fun Tap Tap',
    titleStyle: styles.title,
    image: {
      uri: 'http://www.pngnames.com/files/3/SpongeBob-PNG-Pics.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Fun TapTap',
    titleStyle: styles.title,
    text: 'Get Free Cryptocurrency',
    image: {
      uri:
        'https://www.clipartmax.com/png/full/140-1409227_%C2%A0-money-bag.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
];