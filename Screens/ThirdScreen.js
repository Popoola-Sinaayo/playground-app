import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import chevron from "../assets/chevron-right.png";
import signature from "../assets/signature.png";
import arrowUp from "../assets/arrow.png";
import plusIcon from "../assets/plus.png";
import icon2 from "../assets/icon2.png";
import Checkbox from "expo-checkbox";

const ThirdScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>
        <TouchableOpacity>
          <View style={styles.leftIconContainer}>
            <Image source={chevron} />
            <Text>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.mainText}>
          <Text>Set Up</Text>
        </View>
        <View style={styles.leftIconContainer}>
          <Image source={signature} style={styles.leftIconItem} />
          <Image source={arrowUp} style={styles.leftIconItem} />
          <Image source={plusIcon} style={styles.leftIconItem} />
        </View>
      </View>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.topText}>
            <Text>Added FP20230417 division</Text>
            <Text style={styles.modalLeftText}>Finish</Text>
          </View>
          <View style={styles.description}>
            <TouchableOpacity style={styles.descriptionItem}>
              <View style={styles.descriptionItemTextContainer}>
                <Text style={styles.descriptionItemText}>Division number</Text>
              </View>
              <View>
                <Image source={icon2} style={styles.chevron} />
              </View>
            </TouchableOpacity>
            <View style={styles.descriptionItem}>
              <View style={styles.descriptionItemTextContainer}>
                <Checkbox style={styles.checkbox} />
                <Text style={styles.descriptionItemText}>Division number</Text>
              </View>
            </View>
            <View style={styles.descriptionItem}>
              <View style={styles.descriptionItemTextContainer}>
                <Checkbox style={styles.checkbox} />
                <Text style={styles.descriptionItemText}>Division number</Text>
              </View>
            </View>
            <View style={styles.descriptionItem}>
              <View style={styles.descriptionItemTextContainer}>
                <Checkbox style={styles.checkbox} />
                <Text style={styles.descriptionItemText}>Division number</Text>
              </View>
            </View>
            <View style={styles.descriptionItem}>
              <View style={styles.descriptionItemTextContainer}>
                <Checkbox style={styles.checkbox} />
                <Text style={styles.descriptionItemText}>Division number</Text>
              </View>
            </View>
            <View style={styles.descriptionItem}>
              <View style={styles.descriptionItemTextContainer}>
                <Checkbox style={styles.checkbox} />
                <Text style={styles.descriptionItemText}>Division number</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainText: {
    // flex: 1,
    // flexBasis: "60%",
  },
  leftIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  leftIconItem: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  modalContainer: {
    position: "absolute",
    backgroundColor: "#00000066",
    width: "100%",
    height: "120%",
    borderRadius: 5,
    flex: 1,
  },
  modal: {
    backgroundColor: "#F2F2F7",
    // justifyContent: "center",
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: "50%",
  },
  topText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  modalLeftText: {
    color: "#007AFF",
  },
  description: {
    marginTop: 20,
    width: "90%",
  },
  descriptionItem: {
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionItemTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionItemText: {
    marginHorizontal: 4,
  },
  chevron: {
    width: 15,
    marginRight: 10,
    height: 15,
  },
  checkbox: {
    alignSelf: "center",
    marginLeft: 5,
  },
});
