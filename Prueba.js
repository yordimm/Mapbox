import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox from "@mapbox/react-native-mapbox-gl";

Mapbox.setAccessToken(
  "sk.eyJ1IjoieW9yZGltbWdjIiwiYSI6ImNqajBqaG5qdzAwZWUzd28zNDV2NHoxdnEifQ.h84TbF-CO3YZPG75WQK2DQ"
);

export default class Prueba extends Component {
  constructor(props) {
    super(props)
  }
  renderAnnotations() {
    const { places } = this.props;

    return places.map((place,index) => (
      <Mapbox.PointAnnotation
        key={index}
        id={place.name}
        coordinate={[place.longitude, place.latitude]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title={place.name} />
      </Mapbox.PointAnnotation>
    
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Dark}
          zoomLevel={15}
          centerCoordinate={[-76.524507, 3.404725]}
          style={styles.container}
          showUserLocation={true}
        >
          {this.renderAnnotations()}
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }]
  }
});

// 3.404725, -76.524507   rgba(42,126,255,255)
