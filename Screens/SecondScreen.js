import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import sgsImage from "../assets/sgsImage.png";
import chevron from "../assets/chevron-right-white.png";

const SecondScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topText}>
        <Image source={sgsImage} style={styles.customImage} />
        <Text>Playground Inspection System</Text>
      </View>
      <View style={styles.topNav}>
        <TouchableOpacity style={[styles.activeTopNav, styles.topNavItem]}>
          <View>
            <Text style={[styles.topNavText, styles.topNavTextActive]}>
              Project list
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.topNavItem]}>
          <View>
            <Text style={styles.topNavText}>Project list</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.topNavItem]}>
          <View>
            <Text style={styles.topNavText}>Project list</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.descriptionItem}
          onPress={() => navigation.navigate("Third")}
        >
          <View style={styles.descriptionItemTextContainer}>
            <Text style={styles.descriptionItemText}>SD187568</Text>
            <Text style={styles.descriptionItemText}>Sanhe Elementary</Text>
          </View>
          <View>
            <Image source={chevron} style={styles.chevron} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  topText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  customImage: {
    width: 100,
    height: 80,
  },
  topNav: {
    backgroundColor: "#E5E5E6",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "95%",
    alignSelf: "center",
    borderRadius: 5,
  },
  activeTopNav: {
    backgroundColor: "#F58220",
    paddingVertical: 10,
    borderRadius: 5,
  },
  topNavItem: {
    flexBasis: "33%",
  },
  topNavText: {
    textAlign: "center",
  },
  topNavTextActive: {
    color: "white",
  },
  descriptionContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 5,
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
});
