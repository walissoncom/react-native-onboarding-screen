import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: 'bold',
            color: '#21465B',
            alignSelf: 'center'
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#b5b5b5',
            fontSize: 15,
            paddingHorizontal: 30
          }}>
          {item.text}
        </Text>
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
