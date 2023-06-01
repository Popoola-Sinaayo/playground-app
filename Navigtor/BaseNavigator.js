import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  WelcomeScreen,
  SecondScreen,
  ThirdScreen,
  Measure,
  Playground,
  Setting,
} from "../Screens";
import {
  Ionicons,
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

import signature from "../assets/signature.png";
import arrowUp from "../assets/arrow.png";
import plusIcon from "../assets/plus.png";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  const navigate = useNavigation();

  const Left = () => (
    <Pressable
      onPress={() => navigate.goBack()}
      style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
    >
      <Ionicons name="chevron-back" size={24} color="#F58220" />
      <Text style={{ color: "#F58220" }}>Back</Text>
    </Pressable>
  );

  const Right = () => (
    <View
      style={{
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        paddingRight: 10,
      }}
    >
      <Image source={signature} style={styles.img} />
      <Image source={arrowUp} style={styles.img} />
    </View>
  );

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#F58220" }}>
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: (props) => <Fontisto name="spinner-cog" {...props} />,
          headerTitleAlign: "center",
          headerLeft: () => <Left />,
          headerRight: () => <Right />,
        }}
      />

      <Tab.Screen
        name="Measure"
        component={Measure}
        options={{
          tabBarIcon: (props) => <Entypo name="ruler" {...props} />,
          headerTitleAlign: "center",
          headerLeft: () => <Left />,
          headerRight: () => <Right />,
        }}
      />

      <Tab.Screen
        name="Playground"
        component={Playground}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <Left />,
          tabBarIcon: (props) => <FontAwesome name="gamepad" {...props} />,
        }}
      />
      <Tab.Screen
        name="Measures"
        component={Measure}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <Left />,

          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="star-circle" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Playgrounds"
        component={Playground}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <Left />,

          tabBarIcon: (props) => <FontAwesome name="puzzle-piece" {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <Left />,

          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="notebook" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const BaseNavigator = () => {
  const Left = () => (
    <Pressable
      onPress={() => navigate.goBack()}
      style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
    >
      <Ionicons name="chevron-back" size={24} color="#F58220" />
      <Text style={{ color: "#F58220" }}>Back</Text>
    </Pressable>
  );
  const Right = () => (
    <View
      style={{
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        paddingRight: 10,
      }}
    >
      <Image source={signature} style={styles.img} />
      <Image source={arrowUp} style={styles.img} />
      <Image source={plusIcon} style={styles.img} />
    </View>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{
            title: "Set Up",
            headerBackTitleStyle: { color: "#F58220" },
            headerLeft: () => <Left />,
            headerRight: () => <Right />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Fourth"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigator;

const styles = StyleSheet.create({
  img: {
    maxHeight: 25,
    resizeMode: "contain",
  },
});
