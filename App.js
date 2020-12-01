import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'JUST TRAVEL',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require("./images/1.png")
  },
  {
    key: 'two',
    title: 'TAKE A BREAK',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require("./images/2.png")
  },
  {
    key: 'three',
    title: 'ENJOY YOUR JOURNEY',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require("./images/3.png")
  }
]

export default class App extends Component {

  state = { showHomePage: false }

  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%'
          }}
        />
      </View>
    )
  }

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
