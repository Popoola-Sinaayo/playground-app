import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import backgroundImage from "../assets/background-image.png";
import sgsImage from "../assets/sgsImage.png";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.textContainer}>
          <Image source={sgsImage} style={styles.customImage} />
          <Text style={styles.text}>Playground Inspection System</Text>
          <TextInput placeholder="Login account" style={styles.textInput} />
          <TextInput
            placeholder="Password (a mixture of English and numbers with more than 8 digits)"
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Second")}
          >
            <View>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  textContainer: {
    width: "80%",
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },
  textInput: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  customImage: {
    width: 100,
    height: 80,
    alignSelf: "center",
  },
  buttonContainer: {
    backgroundColor: "#CDCFD4",
    paddingVertical: 15,
    marginVertical: 30,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
